import React from 'react';
import { Building2, Battery, Factory, Car, Home, Thermometer, PiggyBank, LineChart } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const BuildingEnergyChallenge = () => {
  // Data for the energy consumption pie chart
  const energyData = [
    { name: 'Buildings', value: 3, color: '#2563eb' },
    { name: 'Transportation', value: 7.98, color: '#7c3aed' },
    { name: 'Industry', value: 9.15, color: '#9333ea' },
    { name: 'Power', value: 14.65, color: '#f59e0b' },
  ];

  // Data for building age visualization
  const buildingAgeData = [
    { age: '50+ years', percentage: 33, color: '#dc2626' },
    { age: '25-50 years', percentage: 40, color: '#ea580c' },
    { age: '<25 years', percentage: 27, color: '#65a30d' },
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
        <Building2 className="w-8 h-8 mr-3 text-blue-600" />
        Why This Matters: The Building Energy Challenge
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - The Big Picture */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">The Big Picture</h3>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={energyData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {energyData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {energyData.map((item, index) => (
              <div 
                key={index} 
                className="text-center p-3 rounded-lg bg-gray-50"
              >
                <div className="font-bold text-2xl" style={{ color: item.color }}>
                  {item.value} Gt CO2
                </div>
                <div className="text-sm text-gray-600">{item.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Building Age & Challenges */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Current Challenges</h3>
          
          {/* Building Age Stats */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-700 mb-3">Building Age Distribution</h4>
            <div className="space-y-3">
              {buildingAgeData.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>{item.age}</span>
                    <span>{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${item.percentage}`,
                        backgroundColor: item.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Challenges */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg flex items-start">
              <PiggyBank className="w-6 h-6 text-orange-500 mt-1 mr-2" />
              <div>
                <h4 className="font-medium text-gray-700">Rising Costs</h4>
                <p className="text-sm text-gray-600">Increasing energy bills</p>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg flex items-start">
              <Thermometer className="w-6 h-6 text-red-500 mt-1 mr-2" />
              <div>
                <h4 className="font-medium text-gray-700">Poor Insulation</h4>
                <p className="text-sm text-gray-600">Energy waste</p>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg flex items-start">
              <LineChart className="w-6 h-6 text-blue-500 mt-1 mr-2" />
              <div>
                <h4 className="font-medium text-gray-700">Price Fluctuation</h4>
                <p className="text-sm text-gray-600">Variable energy costs</p>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg flex items-start">
              <Battery className="w-6 h-6 text-green-500 mt-1 mr-2" />
              <div>
                <h4 className="font-medium text-gray-700">Outdated Systems</h4>
                <p className="text-sm text-gray-600">Inefficient controls</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Impact Statement */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <p className="text-blue-800 text-center">
          Even a small 5% improvement in efficiency could significantly reduce emissions and costs
        </p>
      </div>
    </div>
  );
};

export default BuildingEnergyChallenge;