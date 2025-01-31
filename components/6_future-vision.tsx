import React, { useState } from 'react';
import { 
  Rocket,
  HomeIcon,
  Building,
  Sun,
  BatteryCharging,
  Tv,
  Users,
  Zap,
  Globe,
  ArrowRight,
  Network
} from 'lucide-react';

const FutureVision = () => {
  const [activeSection, setActiveSection] = useState('expansion');

  const futurePlans = {
    expansion: {
      title: "System Expansion",
      icon: <Building className="w-8 h-8 text-purple-500" />,
      areas: [
        {
          title: "More Home Types",
          icon: <HomeIcon className="w-6 h-6" />,
          details: [
            "Testing in different types of houses",
            "Adapting to various family sizes",
            "Solutions for different climate zones",
            "Custom configurations per home"
          ]
        },
        {
          title: "More Devices",
          icon: <Tv className="w-6 h-6" />,
          details: [
            "Solar panel integration",
            "Battery storage systems",
            "Smart appliances",
            "Advanced sensors"
          ]
        },
        {
          title: "Enhanced Features",
          icon: <Zap className="w-6 h-6" />,
          details: [
            "Better prediction of energy use",
            "More automation options",
            "Improved user controls",
            "Advanced analytics"
          ]
        }
      ]
    },
    community: {
      title: "Community Impact",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      areas: [
        {
          title: "Energy Sharing",
          icon: <Network className="w-6 h-6" />,
          details: [
            "Neighborhood energy sharing",
            "Group buying power",
            "Shared renewable resources",
            "Community microgrids"
          ]
        },
        {
          title: "Solar Integration",
          icon: <Sun className="w-6 h-6" />,
          details: [
            "Community solar projects",
            "Shared solar storage",
            "Optimized distribution",
            "Peak sharing"
          ]
        },
        {
          title: "Group Benefits",
          icon: <Users className="w-6 h-6" />,
          details: [
            "Collective cost savings",
            "Shared maintenance",
            "Group learning",
            "Community support"
          ]
        }
      ]
    },
    grid: {
      title: "Grid Level Impact",
      icon: <Globe className="w-8 h-8 text-green-500" />,
      areas: [
        {
          title: "Distribution",
          icon: <Network className="w-6 h-6" />,
          details: [
            "Better energy distribution",
            "Reduced transmission losses",
            "Smart grid integration",
            "Load balancing"
          ]
        },
        {
          title: "Peak Management",
          icon: <BatteryCharging className="w-6 h-6" />,
          details: [
            "Reduced peak demands",
            "Dynamic load shifting",
            "Demand response",
            "Grid stability"
          ]
        },
        {
          title: "System Benefits",
          icon: <Zap className="w-6 h-6" />,
          details: [
            "More stable power supply",
            "Improved grid resilience",
            "Better renewable integration",
            "Reduced infrastructure costs"
          ]
        }
      ]
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
        <Rocket className="w-8 h-8 mr-3 text-blue-600" />
        Looking to the Future
      </h2>

      {/* Navigation */}
      <div className="flex flex-wrap gap-4 mb-8">
        {Object.entries(futurePlans).map(([key, section]) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
              activeSection === key
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {section.icon}
            <span className="ml-2">{section.title}</span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="space-y-8">
        {/* Section Title */}
        <div className="flex items-center">
          {futurePlans[activeSection].icon}
          <h3 className="text-2xl font-semibold text-gray-800 ml-3">
            {futurePlans[activeSection].title}
          </h3>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {futurePlans[activeSection].areas.map((area, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-white rounded-lg mr-3">
                  {area.icon}
                </div>
                <h4 className="font-semibold text-gray-800">{area.title}</h4>
              </div>
              
              <ul className="space-y-3">
                {area.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <ArrowRight className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Vision Statement */}
      <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
        <p className="text-blue-800 font-medium">
          Building a future where energy is smarter, cleaner, and more connected
        </p>
      </div>
    </div>
  );
};

export default FutureVision;