import React, { useState } from 'react';
import { 
  Home,
  Users,
  Calendar,
  Map,
  BarChart,
  Car,
  Droplet,
  Battery,
  Clock,
  PiggyBank,
  ThumbsUp
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const NorwegianStudy = () => {
  const [activeTab, setActiveTab] = useState('setup');

  // Sample energy usage data
  const energyData = [
    { time: 'Week 1', traditional: 100, smart: 95 },
    { time: 'Week 2', traditional: 100, smart: 85 },
    { time: 'Week 3', traditional: 100, smart: 78 },
    { time: 'Week 4', traditional: 100, smart: 76 },
    { time: 'Week 5', traditional: 100, smart: 75 },
    { time: 'Week 6', traditional: 100, smart: 74 },
    { time: 'Week 7', traditional: 100, smart: 72 },
    { time: 'Week 8', traditional: 100, smart: 70 }
  ];

  const testSetup = [
    {
      icon: <Map className="w-6 h-6" />,
      title: "Location",
      detail: "Residential house in Vestfold, Norway"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Time Period",
      detail: "March to May 2024"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Participants",
      detail: "Family of two, one working full-time"
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Equipment",
      detail: "Smart EV charger and water heater"
    }
  ];

  const monitoringAreas = [
    {
      title: "Energy Use Patterns",
      metrics: [
        "Peak usage times",
        "Daily consumption trends",
        "Weekly patterns",
        "Monthly comparisons"
      ]
    },
    {
      title: "Cost Impact Analysis",
      metrics: [
        "Energy price variations",
        "Total cost comparison",
        "Savings calculation",
        "ROI assessment"
      ]
    },
    {
      title: "User Experience",
      metrics: [
        "Hot water availability",
        "Vehicle charging satisfaction",
        "System usability",
        "Comfort levels"
      ]
    }
  ];

  const results = [
    {
      icon: <Car className="w-8 h-8 text-blue-500" />,
      title: "EV Charging",
      reduction: "30%",
      detail: "reduction in charging costs",
      benefits: [
        "Night-time charging optimization",
        "Consistent vehicle readiness",
        "Automatic price adaptation"
      ]
    },
    {
      icon: <Droplet className="w-8 h-8 text-cyan-500" />,
      title: "Water Heating",
      reduction: "24%",
      detail: "reduction in energy use",
      benefits: [
        "Smart heating scheduling",
        "Maintained comfort levels",
        "Usage pattern learning"
      ]
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-green-500" />,
      title: "Overall Savings",
      reduction: "25-30%",
      detail: "average monthly savings",
      benefits: [
        "Reduced peak consumption",
        "Better energy utilization",
        "Quick system payback"
      ]
    }
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
        <Home className="w-8 h-8 mr-3 text-blue-600" />
        Real-World Testing: Norwegian Home Study
      </h2>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-8">
        {['setup', 'monitoring', 'results'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === tab
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Test Setup Section */}
      {activeTab === 'setup' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testSetup.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-white rounded-lg mr-3 text-blue-500">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                </div>
                <p className="text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Monitoring Section */}
      {activeTab === 'monitoring' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {monitoringAreas.map((area, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{area.title}</h3>
              <ul className="space-y-3">
                {area.metrics.map((metric, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-blue-500" />
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Results Section */}
      {activeTab === 'results' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  {result.icon}
                  <h3 className="text-xl font-semibold text-gray-800 ml-3">{result.title}</h3>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {result.reduction}
                </div>
                <p className="text-gray-600 mb-4">{result.detail}</p>
                <ul className="space-y-2">
                  {result.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <ThumbsUp className="w-4 h-4 mr-2 text-green-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  );
};

export default NorwegianStudy;