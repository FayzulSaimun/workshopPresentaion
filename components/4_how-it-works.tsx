import React, { useState } from 'react';
import { 
  Brain, 
  Car,
  Droplet,
  Sun,
  Lightbulb,
  Thermometer,
  Activity,
  Cloud,
  ArrowRight,
  Smartphone
} from 'lucide-react';

const HowItWorks = () => {
  const [activeDevice, setActiveDevice] = useState(null);

  const systemFeatures = [
    {
      title: "Cloud Computing",
      description: "Like Netflix, but for your home - processes data and makes decisions",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Artificial Intelligence",
      description: "Learns your preferences and optimizes energy usage",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Automatic Updates",
      description: "System improves over time with regular updates",
      icon: <Activity className="w-6 h-6" />
    }
  ];

  const connectedDevices = [
    {
      id: 'ev',
      title: "Smart EV Charger",
      icon: <Car className="w-8 h-8" />,
      features: [
        "Charges when electricity is cheapest",
        "Ensures car is ready when needed",
        "Tracks charging costs and savings",
        "Adapts to your schedule"
      ],
      color: "blue"
    },
    {
      id: 'water',
      title: "Intelligent Water Heater",
      icon: <Droplet className="w-8 h-8" />,
      features: [
        "Heats water when energy is cheaper",
        "Ensures hot water availability",
        "Reduces waste and costs",
        "Learns usage patterns"
      ],
      color: "cyan"
    },
    {
      id: 'solar',
      title: "Solar Integration",
      icon: <Sun className="w-8 h-8" />,
      features: [
        "Optimizes solar energy usage",
        "Balances grid and solar power",
        "Tracks energy production",
        "Maximizes renewable usage"
      ],
      color: "yellow"
    }
  ];

  const otherDevices = [
    {
      title: "Smart Lighting",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Temperature Control",
      icon: <Thermometer className="w-6 h-6" />
    },
    {
      title: "Energy Monitoring",
      icon: <Activity className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        How It Works: A Closer Look
      </h2>

      {/* System Brain Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
          <Brain className="w-6 h-6 mr-2 text-purple-500" />
          The System's Brain
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {systemFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <div className="flex items-center mb-3">
                <div className="p-2 bg-white rounded-lg mr-3">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-gray-800">{feature.title}</h4>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Connected Devices Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          The Connected Devices
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {connectedDevices.map((device) => (
            <div
              key={device.id}
              className={`bg-gray-50 p-6 rounded-xl cursor-pointer transition-all ${
                activeDevice?.id === device.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
              }`}
              onClick={() => setActiveDevice(activeDevice?.id === device.id ? null : device)}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-50 rounded-lg mr-3">
                  {device.icon}
                </div>
                <h4 className="font-semibold text-gray-800">{device.title}</h4>
              </div>

              {activeDevice?.id === device.id && (
                <div className="mt-4 space-y-2">
                  {device.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Other Smart Devices */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h4 className="font-semibold text-gray-800 mb-4">Other Smart Devices</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {otherDevices.map((device, index) => (
              <div 
                key={index}
                className="flex items-center p-3 bg-white rounded-lg"
              >
                <div className="p-2 bg-gray-50 rounded-lg mr-3">
                  {device.icon}
                </div>
                <span className="text-gray-600">{device.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Control Hint */}
      <div className="flex items-center justify-center p-4 bg-blue-50 rounded-xl">
        <Smartphone className="w-6 h-6 mr-2 text-blue-500" />
        <span className="text-blue-700">
          Control and monitor all devices from your smartphone
        </span>
      </div>
    </div>
  );
};

export default HowItWorks;