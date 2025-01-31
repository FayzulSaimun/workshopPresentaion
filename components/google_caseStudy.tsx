import React from 'react';
import { 
  Server, 
  Cpu, 
  Thermometer, 
  TrendingDown,
  ArrowRight,
  Brain,
  Info
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceArea 
} from 'recharts';

const GoogleCaseStudy = () => {
  // Recreating the ML control data shown in the image
  const mlControlData = [
    { time: 0, pue: 1.12, state: 'before' },
    { time: 1, pue: 1.11, state: 'before' },
    { time: 2, pue: 1.12, state: 'before' },
    { time: 3, pue: 1.11, state: 'before' },
    { time: 4, pue: 1.08, state: 'ml-on' },
    { time: 5, pue: 1.06, state: 'ml-on' },
    { time: 6, pue: 1.07, state: 'ml-on' },
    { time: 7, pue: 1.06, state: 'ml-on' },
    { time: 8, pue: 1.07, state: 'ml-on' },
    { time: 9, pue: 1.06, state: 'ml-on' },
    { time: 10, pue: 1.11, state: 'after' },
    { time: 11, pue: 1.12, state: 'after' },
    { time: 12, pue: 1.11, state: 'after' }
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <Server className="w-8 h-8 mr-3 text-blue-600" />
          Case Study: Google & DeepMind
        </h2>
        <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
          <Brain className="w-6 h-6 text-blue-500 mr-2" />
          <span className="font-semibold text-blue-700">AI-Powered Optimization</span>
        </div>
      </div>

      {/* PUE Explanation Box */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <div className="flex items-start">
          <Info className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">What is PUE?</h3>
            <p className="text-gray-600">
              Power Usage Effectiveness (PUE) is a key metric for data center efficiency. It's calculated as:
            </p>
            <div className="bg-white p-4 my-2 rounded-lg inline-block">
              <p className="font-mono">PUE = Total Facility Power / IT Equipment Power</p>
            </div>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>• Perfect PUE = 1.0 (100% efficient)</li>
              <li>• Average data center PUE ≈ 1.67</li>
              <li>• Google's AI-optimized PUE &lt; 1.1 (industry-leading)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Achievement Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 p-6 rounded-xl">
          <div className="flex items-center mb-2">
            <Thermometer className="w-6 h-6 text-blue-500 mr-2" />
            <h3 className="font-semibold text-gray-800">Cooling Energy</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600">40%</p>
          <p className="text-sm text-gray-600 mt-1">Reduction in cooling energy</p>
        </div>

        <div className="bg-green-50 p-6 rounded-xl">
          <div className="flex items-center mb-2">
            <TrendingDown className="w-6 h-6 text-green-500 mr-2" />
            <h3 className="font-semibold text-gray-800">Overall PUE</h3>
          </div>
          <p className="text-3xl font-bold text-green-600">15%</p>
          <p className="text-sm text-gray-600 mt-1">Reduction in PUE overhead</p>
        </div>

        <div className="bg-purple-50 p-6 rounded-xl">
          <div className="flex items-center mb-2">
            <Cpu className="w-6 h-6 text-purple-500 mr-2" />
            <h3 className="font-semibold text-gray-800">Computing Power</h3>
          </div>
          <p className="text-3xl font-bold text-purple-600">3.5x</p>
          <p className="text-sm text-gray-600 mt-1">More power per energy unit</p>
        </div>
      </div>

      {/* ML Control Impact Graph */}
      <div className="bg-gray-50 p-6 rounded-xl mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">ML Control Impact on PUE</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mlControlData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="time" 
                label={{ value: 'Time Period', position: 'bottom' }} 
              />
              <YAxis 
                domain={[1.05, 1.15]} 
                label={{ 
                  value: 'PUE', 
                  angle: -90, 
                  position: 'insideLeft' 
                }} 
              />
              <Tooltip />
              <ReferenceArea 
                x1={0} 
                x2={4} 
                fill="#fee2e2" 
                fillOpacity={0.2} 
                label={{ value: 'ML Control OFF', position: 'center' }} 
              />
              <ReferenceArea 
                x1={9} 
                x2={12} 
                fill="#fee2e2" 
                fillOpacity={0.2} 
                label={{ value: 'ML Control OFF', position: 'center' }} 
              />
              <ReferenceArea 
                x1={4} 
                x2={9} 
                fill="#dcfce7" 
                fillOpacity={0.2} 
                label={{ value: 'ML Control ON', position: 'center' }} 
              />
              <Line 
                type="monotone" 
                dataKey="pue" 
                stroke="#2563eb" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Implementation Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Implementation Approach</h3>
          <ul className="space-y-3">
            {[
              "Deep neural networks trained on historical sensor data",
              "Predictive models for temperature and pressure",
              "Real-time optimization of cooling systems",
              "Adaptive framework for different scenarios"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <ArrowRight className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Benefits</h3>
          <ul className="space-y-3">
            {[
              "Record-low PUE levels achieved",
              "Improved energy efficiency across facilities",
              "Reduced environmental impact",
              "Scalable solution for other applications"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <ArrowRight className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GoogleCaseStudy;