import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import { Zap, TrendingDown, PiggyBank } from 'lucide-react';

const EnergyComparison = () => {
  // Sample data extracted from the graph
  const data = [
    { date: '03-22', original: 1.5, optimized: 1.2 },
    { date: '03-25', original: 2.3, optimized: 1.8 },
    { date: '04-01', original: 11.0, optimized: 6.8 },
    { date: '04-08', original: 9.8, optimized: 7.0 },
    { date: '04-15', original: 5.2, optimized: 4.0 },
    { date: '04-22', original: 6.8, optimized: 4.2 },
    { date: '05-01', original: 9.0, optimized: 5.5 },
    { date: '05-08', original: 7.5, optimized: 5.0 },
    { date: '05-15', original: 15.0, optimized: 7.2 },
    { date: '05-22', original: 8.2, optimized: 4.8 }
  ];

  const originalAvg = 5.66;
  const optimizedAvg = 4.28;
  const savingsPercent = ((originalAvg - optimizedAvg) / originalAvg * 100).toFixed(1);

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Energy Consumption Optimization Results (Water Heater)
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 p-6 rounded-xl">
          <div className="flex items-center mb-2">
            <Zap className="w-6 h-6 text-blue-500 mr-2" />
            <h3 className="font-semibold text-gray-800">Original Average</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600">{originalAvg} kWh</p>
          <p className="text-sm text-gray-600 mt-1">Daily consumption</p>
        </div>

        <div className="bg-green-50 p-6 rounded-xl">
          <div className="flex items-center mb-2">
            <TrendingDown className="w-6 h-6 text-green-500 mr-2" />
            <h3 className="font-semibold text-gray-800">Optimized Average</h3>
          </div>
          <p className="text-3xl font-bold text-green-600">{optimizedAvg} kWh</p>
          <p className="text-sm text-gray-600 mt-1">Daily consumption</p>
        </div>

        <div className="bg-purple-50 p-6 rounded-xl">
          <div className="flex items-center mb-2">
            <PiggyBank className="w-6 h-6 text-purple-500 mr-2" />
            <h3 className="font-semibold text-gray-800">Total Savings</h3>
          </div>
          <p className="text-3xl font-bold text-purple-600">{savingsPercent}%</p>
          <p className="text-sm text-gray-600 mt-1">Energy reduction</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-gray-50 p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Daily Consumption Comparison</h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <ReferenceLine y={originalAvg} stroke="#3b82f6" strokeDasharray="3 3" />
              <ReferenceLine y={optimizedAvg} stroke="#22c55e" strokeDasharray="3 3" />
              <Line 
                type="monotone" 
                dataKey="original" 
                stroke="#3b82f6" 
                name="Original Usage"
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="optimized" 
                stroke="#22c55e" 
                name="Optimized Usage"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Key Insights */}
      <div className="mt-8 bg-blue-50 p-6 rounded-xl">
        <h3 className="font-semibold text-gray-800 mb-3">Key Insights</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Consistent reduction in daily energy consumption</li>
          <li>• Peak usage effectively managed and reduced</li>
          <li>• Maintained comfort while optimizing efficiency</li>
          <li>• Clear trend of sustainable energy savings</li>
        </ul>
      </div>
    </div>
  );
};

export default EnergyComparison;