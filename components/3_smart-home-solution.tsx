import React, { useState } from 'react';
// Using BarChart icon for monitoring visualization
import { 
  BarChart,
  Zap, 
  Brain, 
  Smartphone, 
  Rocket,
  Car,
  Sun,
  Home,
  CircleDot,
  Battery,
  ChevronRight,
  Info
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SmartHomeEnergy = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  
  // Sample data for the energy usage chart
  const energyData = [
    { hour: '00:00', traditional: 4, smart: 2 },
    { hour: '04:00', traditional: 3, smart: 1 },
    { hour: '08:00', traditional: 7, smart: 4 },
    { hour: '12:00', traditional: 6, smart: 3 },
    { hour: '16:00', traditional: 8, smart: 5 },
    { hour: '20:00', traditional: 9, smart: 6 },
    { hour: '23:59', traditional: 5, smart: 3 }
  ];

  const mainFeatures = [
    {
      id: 'monitoring',
      title: 'Real-Time Monitoring',
      icon: <BarChart className="w-8 h-8 text-blue-500" />,
      description: 'Tracks energy use as it happens and spots waste immediately',
      benefits: [
        'Instant energy usage tracking',
        'Waste detection algorithms',
        'Cost analysis in real-time',
        'Usage pattern identification'
      ],
      color: 'blue'
    },
    {
      id: 'control',
      title: 'Intelligent Control',
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      description: 'Automatically adjusts to energy prices and learns from patterns',
      benefits: [
        'Price-based optimization',
        'Learning from usage patterns',
        'Automated adjustments',
        'Comfort maintenance'
      ],
      color: 'purple'
    },
    {
      id: 'interface',
      title: 'User-Friendly Interface',
      icon: <Smartphone className="w-8 h-8 text-green-500" />,
      description: 'Easy-to-use smartphone app with clear energy displays',
      benefits: [
        'Intuitive mobile app',
        'Simple controls',
        'Visual data displays',
        'Remote access'
      ],
      color: 'green'
    },
    {
      id: 'future',
      title: 'Future-Ready Design',
      icon: <Rocket className="w-8 h-8 text-orange-500" />,
      description: 'Compatible with emerging technologies and renewable energy',
      benefits: [
        'Solar panel integration',
        'EV charging support',
        'Battery storage ready',
        'Expandable system'
      ],
      color: 'orange'
    }
  ];

  const connectedDevices = [
    {
      icon: <Car className="w-6 h-6" />,
      title: 'EV Charger',
      description: 'Smart charging based on electricity prices'
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: 'Water Heater',
      description: 'Intelligent heating scheduling'
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: 'Solar Panels',
      description: 'Renewable energy integration'
    },
    {
      icon: <CircleDot className="w-6 h-6" />,
      title: 'Other Devices',
      description: 'Expandable to more smart devices'
    }
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
        <Home className="w-8 h-8 mr-3 text-blue-600" />
        Smart Home Energy Management
      </h2>

      {/* Main Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {mainFeatures.map((feature) => (
          <div
            key={feature.id}
            className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
              selectedFeature?.id === feature.id 
              ? `border-${feature.color}-500 shadow-lg scale-105` 
              : 'border-gray-100 hover:border-gray-200'
            }`}
            onClick={() => setSelectedFeature(feature)}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">{feature.icon}</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 mt-1">{feature.description}</p>
                
                {selectedFeature?.id === feature.id && (
                  <div className="mt-4 grid grid-cols-1 gap-2">
                    {feature.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Energy Usage Comparison */}
      <div className="mb-8 p-6 bg-gray-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Energy Usage Comparison</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={energyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="traditional" 
                stroke="#ef4444" 
                name="Traditional Usage"
              />
              <Line 
                type="monotone" 
                dataKey="smart" 
                stroke="#22c55e" 
                name="Smart System"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Connected Devices */}
      <div className="bg-gray-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Connected Devices</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {connectedDevices.map((device, index) => (
            <div 
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm flex items-start"
            >
              <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg mr-3">
                {device.icon}
              </div>
              <div>
                <h4 className="font-medium text-gray-800">{device.title}</h4>
                <p className="text-sm text-gray-600">{device.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Tip */}
      <div className="mt-6 flex items-center text-sm text-gray-600">
        <Info className="w-4 h-4 mr-2 text-blue-500" />
        Click on any feature card to see detailed benefits
      </div>
    </div>
  );
};

export default SmartHomeEnergy;