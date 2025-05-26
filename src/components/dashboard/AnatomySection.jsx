import React from 'react';
import { healthData } from '../../data/mockData';

const AnatomySection = () => {
  return (
    <div className="space-y-8">
      {/* Anatomy Image */}
      <div className="relative">
        <div className="relative flex justify-center">
          <img 
            src="https://i.ibb.co/BV1k8CL8/human-body-frontal.jpg" 
            alt="Human Anatomy" 
            className="h-[400px] object-contain"
          />
          
          {/* Healthy Heart Indicator */}
          <div className="absolute left-1/2 top-28">
            <div className="flex items-center">
              <div className="bg-[#4338ca] text-white text-xs px-3 py-1.5 rounded-md shadow-lg flex items-center gap-2">
                <span>❤️</span>
                <span className="font-medium">Healthy Heart</span>
              </div>
            </div>
          </div>

          {/* Healthy Leg Indicator */}
          <div className="absolute right-4 bottom-32">
            <div className="flex items-center">
              <div className="bg-[#06b6d4] text-white text-xs px-6 py-1.5 rounded-md shadow-lg flex items-center gap-2">
                <span>🦿</span>
                <span className="font-medium">Healthy Leg</span>
              </div>
            </div>
          </div>

          {/* Zoom Controls */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
            <button className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-gray-400">-</span>
            </button>
            <div className="w-24 h-1 bg-gray-200 rounded-full">
              <div className="w-1/2 h-full bg-gray-400 rounded-full"></div>
            </div>
            <button className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
              <span className="text-gray-400">+</span>
            </button>
          </div>
        </div>
      </div>

      {/* Health Status Cards */}
      <div className="space-y-6">
        {healthData.map((item) => (
          <div key={item.id}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-6 h-6" />
                <h4 className="font-medium text-gray-700">{item.name}</h4>
              </div>
              <span className="text-sm text-gray-400">Date: {item.date}</span>
            </div>
            
            <div className="w-full bg-gray-100 rounded-full h-2.5">
              <div 
                className={`h-full rounded-full ${
                  item.status === 'critical' 
                    ? 'bg-red-500' 
                    : item.status === 'good' 
                      ? 'bg-green-500' 
                      : 'bg-blue-500'
                }`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}

        <div className="flex justify-end pt-4">
          <button className="text-blue-600 text-sm font-medium flex items-center gap-2 hover:text-blue-700">
            Details
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;