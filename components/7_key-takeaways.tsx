import React, { useState } from 'react';
import { 
  Building2,
  Lightbulb,
  Rocket,
  PieChart,
  ChevronRight,
  Check,
  Star,
  TrendingUp
} from 'lucide-react';

const KeyTakeaways = () => {
  const [selectedTakeaway, setSelectedTakeaway] = useState(null);

  const takeaways = [
    {
      id: 'buildings',
      icon: <Building2 className="w-8 h-8 text-blue-500" />,
      title: "Buildings Matter",
      mainPoint: "Buildings are key to fighting climate change",
      stats: [
        { number: "40%", label: "of European energy consumed" },
        { number: "35%", label: "of carbon emissions" },
        { number: "5%", label: "efficiency improvement could significantly reduce emissions" }
      ],
      details: [
        "Major energy users in Europe",
        "Huge potential for improvement",
        "Critical for climate goals"
      ]
    },
    {
      id: 'technology',
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "Smart Technology Works",
      mainPoint: "Real savings with maintained comfort",
      stats: [
        { number: "31%", label: "charging cost reduction" },
        { number: "24%", label: "water heating savings" },
        { number: "25-30%", label: "average monthly savings" }
      ],
      details: [
        "Proven cost savings",
        "Maintains user comfort",
        "Simple to implement"
      ]
    },
    {
      id: 'future',
      icon: <Rocket className="w-8 h-8 text-purple-500" />,
      title: "Future Ready",
      mainPoint: "Prepared for emerging technologies",
      stats: [
        { number: "100%", label: "renewable energy compatible" },
        { number: "∞", label: "expandability" },
        { number: "24/7", label: "automated optimization" }
      ],
      details: [
        "Adaptable to new technologies",
        "Scalable to more homes",
        "Supports renewable energy"
      ]
    },
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
        <Star className="w-8 h-8 mr-3 text-blue-600" />
        Key Takeaways
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {takeaways.map((takeaway) => (
          <div
            key={takeaway.id}
            className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
              selectedTakeaway?.id === takeaway.id
                ? 'border-blue-500 shadow-lg scale-105'
                : 'border-gray-100 hover:border-gray-200'
            }`}
            onClick={() => setSelectedTakeaway(
              selectedTakeaway?.id === takeaway.id ? null : takeaway
            )}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                {takeaway.icon}
              </div>
              <div className="ml-4 flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">
                  {takeaway.title}
                </h3>
                <p className="text-gray-600 mt-1">{takeaway.mainPoint}</p>

                {selectedTakeaway?.id === takeaway.id && (
                  <div className="mt-4 space-y-4">
                    {/* Key Statistics */}
                    <div className="grid grid-cols-3 gap-4">
                      {takeaway.stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-xl font-bold text-blue-600">
                            {stat.number}
                          </div>
                          <div className="text-sm text-gray-600">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Additional Details */}
                    <div className="pt-4 border-t border-gray-100">
                      {takeaway.details.map((detail, index) => (
                        <div 
                          key={index}
                          className="flex items-center text-gray-600 mb-2"
                        >
                          <Check className="w-4 h-4 mr-2 text-green-500" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <ChevronRight 
                className={`w-5 h-5 text-gray-400 transition-transform ${
                  selectedTakeaway?.id === takeaway.id ? 'rotate-90' : ''
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Final Call to Action */}
      <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
        <p className="text-blue-800 font-medium">
          Smart home energy management is not just about technology—it's about 
          creating a sustainable future while saving costs today.
        </p>
      </div>
    </div>
  );
};

export default KeyTakeaways;