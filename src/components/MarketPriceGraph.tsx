import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, MapPin, Calendar } from 'lucide-react';

const dailyPriceData = [
  { day: 'Mon', Cucumber: 22, Mushroom: 180, Microgreens: 250 },
  { day: 'Tue', Cucumber: 24, Mushroom: 185, Microgreens: 245 },
  { day: 'Wed', Cucumber: 21, Mushroom: 175, Microgreens: 260 },
  { day: 'Thu', Cucumber: 25, Mushroom: 190, Microgreens: 255 },
  { day: 'Fri', Cucumber: 23, Mushroom: 182, Microgreens: 265 },
  { day: 'Sat', Cucumber: 26, Mushroom: 188, Microgreens: 270 },
  { day: 'Sun', Cucumber: 24, Mushroom: 184, Microgreens: 268 },
];

const locationPriceData = [
  { location: 'Chennai', Cucumber: 28, Mushroom: 195, Microgreens: 280 },
  { location: 'Coimbatore', Cucumber: 24, Mushroom: 180, Microgreens: 260 },
  { location: 'Madurai', Cucumber: 22, Mushroom: 175, Microgreens: 250 },
  { location: 'Trichy', Cucumber: 23, Mushroom: 182, Microgreens: 255 },
];

export const MarketPriceGraph = () => {
  const [view, setView] = useState<'trend' | 'location'>('trend');

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="text-agri-green-600" />
          <h3 className="text-xl font-bold">Live Market Insights</h3>
        </div>
        <div className="flex bg-agri-earth-200 p-1 rounded-lg">
          <button
            onClick={() => setView('trend')}
            className={`px-4 py-2 rounded-md transition-all ${view === 'trend' ? 'bg-white shadow-sm text-agri-green-700 font-bold' : 'text-agri-earth-800'}`}
          >
            Daily Trend
          </button>
          <button
            onClick={() => setView('location')}
            className={`px-4 py-2 rounded-md transition-all ${view === 'location' ? 'bg-white shadow-sm text-agri-green-700 font-bold' : 'text-agri-earth-800'}`}
          >
            Location Comparison
          </button>
        </div>
      </div>

      <div className="h-[400px] w-full bg-white p-6 rounded-2xl shadow-inner border border-agri-earth-200">
        <ResponsiveContainer width="100%" height="100%">
          {view === 'trend' ? (
            <LineChart data={dailyPriceData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Legend verticalAlign="top" height={36}/>
              <Line type="monotone" dataKey="Cucumber" stroke="#16a34a" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              <Line type="monotone" dataKey="Mushroom" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              <Line type="monotone" dataKey="Microgreens" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          ) : (
            <BarChart data={locationPriceData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="location" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Legend verticalAlign="top" height={36}/>
              <Bar dataKey="Cucumber" fill="#16a34a" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Mushroom" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Microgreens" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-center gap-6 text-sm text-agri-earth-800 opacity-70">
        <span className="flex items-center gap-1"><Calendar size={14}/> Updated: Today, 8:00 AM</span>
        <span className="flex items-center gap-1"><MapPin size={14}/> Region: Tamil Nadu</span>
      </div>
    </div>
  );
};
