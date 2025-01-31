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
  Area,
  AreaChart
} from 'recharts';
import { 
  Car, 
  PiggyBank, 
  TrendingDown, 
  Clock 
} from 'lucide-react';

const CostComparison = () => {
  // Data extracted from the graph
  const data = [
    { date: '02-27', original: 12, ppo: 9 },
    { date: '03-01', original: 17, ppo: 11 },
    { date: '03-08', original: 13, ppo: 10 },
    { date: '03-18', original: 22, ppo: 15 },
    { date: '04-01', original: 14, ppo: 10 },
    { date: '04-07', original: 6, ppo: 2 },
    { date: '04-15', original: 32, ppo: 27 },
    { date: '04-27', original: 5, ppo: 3 },
    { date: '05-17', original: 12, ppo: 7 }
  ];

  // Calculate average savings
  const calculateSavings = () => {
    let totalOriginal = 0;
    let totalPPO = 0;
    data.forEach(day => {
      totalOriginal += day.original;
      totalPPO += day.ppo;
    });
    const avgOriginal = totalOriginal / data.length;
    const avgPPO = totalPPO / data.length;
    const savingsPercent = ((avgOriginal - avgPPO) / avgOriginal * 100).toFixed(1);
    return {
      avgOriginal: avgOriginal.toFixed(2),
      avgPPO: avgPPO.toFixed(2),
      savingsPercent
    };
  };

  const savings = calculateSavings();

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <Car className="w-8 h-8 mr-3 text-blue-600" />
        EV Charging Cost Optimization
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-red-50 p-6 rounded-xl">
          <div className="flex items-center mb-2">
            <Clock className="w-6 h-6 text-red-500 mr-2" />
            <h3 className="font-semibold text-gray-800">Original Average Cost</h3>
          </div>
          <p className="text-3xl font-bold text-red-600">{savings.avgOriginal} NOK</p>
          <p className="text-sm text-gray-600 mt-1">Per charging session</p>
        </div>

        <div className="bg-green-50 p-6 rounded-xl">
          <div className="flex items-center mb-2">
            <TrendingDown className="w-6 h-6 text-green-500 mr-2" />
            <h3 className="font-semibold text-gray-800">Saving Average</h3>
          </div>
          <p className="text-3xl font-bold text-green-600">{savings.avgPPO} NOK</p>
          <p className="text-sm text-gray-600 mt-1">With optimization</p>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl">
          <div className="flex items-center mb-2">
            <PiggyBank className="w-6 h-6 text-blue-500 mr-2" />
            <h3 className="font-semibold text-gray-800">Cost Reduction</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600">{savings.savingsPercent}%</p>
          <p className="text-sm text-gray-600 mt-1">Average savings</p>
        </div>
      </div>

      {/* Main Chart */}
      <div className="bg-gray-50 p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Cost Comparison Over Time</h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tick={{ transform: 'rotate(-45)', textAnchor: 'end' }} 
                height={60}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="original" 
                name="Original Cost" 
                stroke="#ef4444" 
                fill="#fee2e2" 
                strokeWidth={2}
              />
              <Area 
                type="monotone" 
                dataKey="ppo" 
                name="PPO Cost" 
                stroke="#22c55e" 
                fill="#dcfce7" 
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-xl">
          <h3 className="font-semibold text-gray-800 mb-3">Optimization Benefits</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Significant cost reduction during peak price periods</li>
            <li>• Automatic charging scheduling during lower-cost hours</li>
            <li>• Maintained charging reliability and availability</li>
            <li>• Smart adaptation to price fluctuations</li>
          </ul>
        </div>
        
        <div className="bg-green-50 p-6 rounded-xl">
          <h3 className="font-semibold text-gray-800 mb-3">Implementation Results</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Consistent cost savings across different time periods</li>
            <li>• Enhanced price prediction accuracy</li>
            <li>• Zero impact on vehicle readiness</li>
            <li>• Seamless integration with existing charging patterns</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CostComparison;