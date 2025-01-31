import React, { useState } from 'react';
import { 
  Monitor, 
  Cpu, 
  Wifi, 
  Smartphone, 
  Brain,
  Building2,
  AlertCircle
} from 'lucide-react';

const BuildingManagementEvolution = () => {
  const [selectedEra, setSelectedEra] = useState(null);

  const timeline = [
    {
      era: "1970s",
      title: "First Computer Control",
      icon: <Monitor className="w-8 h-8" />,
      description: "Introduction of first computer-controlled building systems",
      details: "Basic automation and monitoring capabilities were introduced, marking the beginning of modern building management.",
      color: "blue"
    },
    {
      era: "1980s-1990s",
      title: "Digital Controls",
      icon: <Cpu className="w-8 h-8" />,
      description: "Digital controls and scheduling systems emerge",
      details: "Advanced digital control systems enabled scheduled operations and better monitoring of building systems.",
      color: "purple"
    },
    {
      era: "2000s",
      title: "Wireless Revolution",
      icon: <Wifi className="w-8 h-8" />,
      description: "Introduction of wireless technologies",
      details: "Wireless sensors and controls made installation easier and enabled more flexible building management solutions.",
      color: "green"
    },
    {
      era: "2010s",
      title: "Smart Devices",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Smart devices begin to appear",
      details: "Mobile apps and smart devices brought building controls to users' fingertips, enabling remote management.",
      color: "orange"
    },
    {
      era: "Today",
      title: "Intelligent Systems",
      icon: <Brain className="w-8 h-8" />,
      description: "Fully connected, intelligent systems",
      details: "AI-powered systems that learn from usage patterns and automatically optimize building performance.",
      color: "red"
    }
  ];

  const problems = [
    {
      icon: <AlertCircle className="w-6 h-6 text-red-500" />,
      title: "Inflexible Adjustment",
      description: "Can't adjust automatically to changing conditions"
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-orange-500" />,
      title: "Limited Integration",
      description: "Don't work well with renewable energy"
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-yellow-500" />,
      title: "Difficult Updates",
      description: "Hard to expand or upgrade"
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-blue-500" />,
      title: "No Learning Capability",
      description: "Don't learn from how people use their homes"
    }
  ];

  const getColorClass = (color) => {
    const colorMap = {
      blue: 'bg-blue-500 hover:bg-blue-600',
      purple: 'bg-purple-500 hover:bg-purple-600',
      green: 'bg-green-500 hover:bg-green-600',
      orange: 'bg-orange-500 hover:bg-orange-600',
      red: 'bg-red-500 hover:bg-red-600'
    };
    return colorMap[color] || 'bg-gray-500 hover:bg-gray-600';
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
        <Building2 className="w-8 h-8 mr-3 text-blue-600" />
        The Evolution of Building Management
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Timeline Column */}
        <div className="md:col-span-2">
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-start cursor-pointer transition-all ${
                  selectedEra === index ? 'scale-105' : ''
                }`}
                onClick={() => setSelectedEra(index)}
              >
                {/* Timeline line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200" />
                )}
                
                {/* Era content */}
                <div className={`
                  flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center
                  text-white transition-colors ${getColorClass(item.color)}
                `}>
                  {item.icon}
                </div>
                
                <div className="ml-4 flex-grow">
                  <div className="flex items-baseline">
                    <h3 className="text-lg font-semibold text-gray-800">{item.era}</h3>
                    <span className="ml-2 text-lg text-gray-500">• {item.title}</span>
                  </div>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                  {selectedEra === index && (
                    <p className="mt-2 text-xl text-gray-500 bg-gray-50 p-3 rounded-lg">
                      {item.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Problems with Traditional Systems Column */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Problems with Traditional Systems
          </h3>
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm flex items-start"
              >
                <div className="flex-shrink-0 mr-3">
                  {problem.icon}
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{problem.title}</h4>
                  <p className="text-lg text-gray-600">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingManagementEvolution;