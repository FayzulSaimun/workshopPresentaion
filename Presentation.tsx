import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BuildingEnergyChallenge from './components/1_energy-challenge-visual';
import BuildingManagementEvolution from './components/2_building-management-evolution';
import SmartHomeEnergy from './components/3_smart-home-solution';
import HowItWorks from './components/4_how-it-works';
import NorwegianStudy from './components/5_norwegian-study';
import FutureVision from './components/6_future-vision';
import KeyTakeaways from './components/7_key-takeaways';
import { MainSlide } from './components/header_slide';
import {AboutMeSlide} from './components/header_slide';
import EnergyComparison from './components/energy_comparison';
import CostComparison from './components/cost_comparison';
import GoogleCaseStudy from './components/google_caseStudy';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { Component: MainSlide, title: "Intro" },
    { Component: AboutMeSlide, title: "About Me" },
    { Component: BuildingEnergyChallenge, title: "Building Energy Challenge" },
    { Component: BuildingManagementEvolution, title: "Building Management Evolution" },
    { Component: SmartHomeEnergy, title: "Smart Home Energy Solution" },
    { Component: HowItWorks, title: "How It Works" },
    { Component: NorwegianStudy, title: "Norwegian Study" },
    { Component: EnergyComparison, title: "Energy Comparison" },
    { Component: CostComparison, title: "Cost Comparison" },
    { Component: GoogleCaseStudy, title: "Google Case Study" },
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
    <div className="min-h-screen w-full bg-gray-100">
      <div className="max-w-[1500px] mx-auto px-8 py-4 h-screen">
        {/* Navigation Header */}
        <div className="bg-white rounded-t-xl p-8 border-b flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <span className="text-2xl text-gray-500">
              {currentSlide + 1} / {slides.length}
            </span>
            <h1 className="text-3xl font-semibold text-gray-800">
              {slides[currentSlide].title}
            </h1>
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-3 rounded-lg bg-gray-100 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="p-3 rounded-lg bg-gray-100 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-gray-50 p-8 rounded-b-xl h-[calc(100vh-140px)] overflow-y-auto">
          <div className="transition-opacity duration-300 h-full max-w-[1600px] mx-auto">
            <CurrentSlide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
