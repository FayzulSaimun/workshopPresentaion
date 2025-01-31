import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BuildingEnergyChallenge from './1_energy-challenge-visual';
import BuildingManagementEvolution from './2_building-management-evolution';
import SmartHomeEnergy from './3_smart-home-solution';
import HowItWorks from './4_how-it-works';
import NorwegianStudy from './5_norwegian-study';
import FutureVision from './6_future-vision';
import KeyTakeaways from './7_key-takeaways';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { Component: BuildingEnergyChallenge, title: "Building Energy Challenge" },
    { Component: BuildingManagementEvolution, title: "Building Management Evolution" },
    { Component: SmartHomeEnergy, title: "Smart Home Energy Solution" },
    { Component: HowItWorks, title: "How It Works" },
    { Component: NorwegianStudy, title: "Norwegian Study" },
    { Component: FutureVision, title: "Future Vision" },
    { Component: KeyTakeaways, title: "Key Takeaways" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev < slides.length - 1 ? prev + 1 : prev
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev > 0 ? prev - 1 : prev
    );
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const CurrentSlide = slides[currentSlide].Component;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Header */}
        <div className="bg-white rounded-t-xl p-4 border-b flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">
              {currentSlide + 1} / {slides.length}
            </span>
            <h1 className="text-xl font-semibold text-gray-800">
              {slides[currentSlide].title}
            </h1>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2 rounded-lg bg-gray-100 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="p-2 rounded-lg bg-gray-100 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-gray-50 p-4 rounded-b-xl min-h-[calc(100vh-6rem)] overflow-y-auto">
          <div className="transition-opacity duration-300">
            <CurrentSlide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
