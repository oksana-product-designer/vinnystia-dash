import { useState } from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { translations, Language } from '../translations';

interface BarChartProps {
  data: Array<{
    name: string;
    value: number;
    budget: number;
    projects: number;
  }>;
  viewMode: "budget" | "projects";
  language: Language;
}

const CustomTooltip = ({ active, payload, viewMode, coordinate, language }: any) => {
  if (active && payload && payload.length && coordinate) {
    const data = payload[0].payload;
    const t = translations[language];
    return (
      <div 
        className="bg-[#343a40] rounded-[8px] px-[12px] py-[8px] shadow-[0px_4px_12px_rgba(0,0,0,0.15)]"
        style={{
          transform: 'translate(-50%, -100%)',
          marginTop: '-8px'
        }}
      >
        <div className="flex flex-col gap-[4px]">
          <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-white text-[12px] leading-[16px] whitespace-nowrap">
            {data.budget} {t.millionUAH}
          </p>
          <p className="font-['VinnytsiaSansReg:Book',sans-serif] text-white text-[12px] leading-[16px] whitespace-nowrap">
            {data.projects} {t.projectsLabel}
          </p>
        </div>
      </div>
    );
  }
  return null;
};

const CustomXAxisTick = ({ x, y, payload }: any) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={8}
        textAnchor="end"
        fill="#3c4d5d"
        fontSize="12px"
        fontFamily="VinnytsiaSansReg:Book,sans-serif"
        transform="rotate(-45)"
      >
        {payload.value}
      </text>
    </g>
  );
};

export function BarChartComponent({ data, viewMode, language }: BarChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const t = translations[language];
  
  // Sort data by value from highest to lowest
  const sortedData = [...data].sort((a, b) => b.value - a.value);

  return (
    <div className="w-full h-full min-h-[400px]">
      <ResponsiveContainer width="100%" aspect={2}>
        <RechartsBarChart
          data={sortedData}
          margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E3E3E3" vertical={false} />
          <XAxis
            dataKey="name"
            tick={<CustomXAxisTick />}
            interval={0}
            height={100}
            axisLine={{ stroke: '#E3E3E3' }}
            tickLine={false}
            label={{
              value: t.districtLabel,
              position: 'insideBottom',
              offset: -35,
              style: {
                fontSize: '12px',
                fontFamily: 'VinnytsiaSansReg:Book,sans-serif',
                fill: '#3c4d5d'
              }
            }}
          />
          <YAxis
            label={{
              value: viewMode === "budget" ? t.budgetScaleChart : t.projectsCountChart,
              angle: -90,
              position: 'center',
              style: {
                fontSize: '12px',
                fontFamily: 'VinnytsiaSansReg:Book,sans-serif',
                fill: '#3c4d5d',
                textAnchor: 'middle'
              }
            }}
            axisLine={{ stroke: '#E3E3E3' }}
            tickLine={false}
            tick={{
              fontSize: '12px',
              fontFamily: 'VinnytsiaSansReg:Book,sans-serif',
              fill: '#3c4d5d'
            }}
          />
          <Tooltip 
            content={<CustomTooltip viewMode={viewMode} language={language} />} 
            cursor={{ fill: 'rgba(201, 85, 85, 0.1)' }}
            position={{ y: 0 }}
            allowEscapeViewBox={{ x: false, y: true }}
          />
          <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={32}>
            {sortedData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill="#C95555"
                fillOpacity={hoveredIndex !== null && hoveredIndex !== index ? 0.3 : 1}
                onMouseEnter={() => setHoveredIndex(index)}
              />
            ))}
          </Bar>
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}