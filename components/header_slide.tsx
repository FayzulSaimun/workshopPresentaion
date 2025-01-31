import React, { useState } from 'react';
import { 
  Brain, 
  Building2, 
  Cpu, 
  LineChart, 
  Leaf,
  Users,
  Mail,
  Globe,
  Github,
  Linkedin,
  MessageCircle
} from 'lucide-react';

// Main Title Slide Component
const MainSlide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl text-center">
        {/* Visual Elements */}
        <div className="flex justify-center space-x-8 mb-8">
          <div className="p-4 bg-blue-100 rounded-full">
            <Brain className="w-16 h-16 text-blue-600" />
          </div>
          <div className="p-4 bg-green-100 rounded-full">
            <Building2 className="w-16 h-16 text-green-600" />
          </div>
          <div className="p-4 bg-purple-100 rounded-full">
            <Cpu className="w-16 h-16 text-purple-600" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          AI and IoT in Building Energy Management Systems
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-8">
          Reducing costs, improving comfort, and helping reduce carbon emissions
        </p>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <LineChart className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Cost Reduction</h3>
            <p className="text-gray-600">Smart optimization of energy usage for maximum savings</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Users className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Enhanced Comfort</h3>
            <p className="text-gray-600">Personalized environment control and automation</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Leaf className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Sustainability</h3>
            <p className="text-gray-600">Reduced carbon footprint through intelligent management</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// About Me Slide Component
const AboutMeSlide = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="md:col-span-1">
            <div className="bg-gray-100 p-6 rounded-xl">
              <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-blue-600" />
              </div>
              
              {/* Contact Information */}
              <div className="space-y-3 mt-6">
                <div className="flex items-center text-gray-600">
                  <span className="text-xl font-bold">Fayzul Islam</span>
                </div>
              </div>
              {/* Social Links */}
            </div>
          </div>

          {/* Bio Section */}
          <div className="md:col-span-2">
            <div className="space-y-6">
              {/* Experience Cards */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Background</h3>
                <div className="prose text-gray-600">
                  {/* Add your background here */}
                  <p>Masters in Green Energy Technology</p>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Current Work</h3>
                <div className="prose text-gray-600">
                  {/* Add your current work here */}
                  <p>Researcher</p>
                  <p>Østfold University College</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Research Interests</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">AI in Energy</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">IoT Systems</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">Smart Buildings</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">Sustainability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MainSlide, AboutMeSlide };