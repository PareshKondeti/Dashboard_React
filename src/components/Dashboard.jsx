import React from 'react';
import AnatomySection from './dashboard/AnatomySection';
import CalendarView from './dashboard/CalendarView';
import UpcomingSchedule from './dashboard/UpcomingSchedule';
import ActivityFeed from './dashboard/ActivityFeed';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-2">
      <div className="lg:col-span-1">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <AnatomySection />
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <ActivityFeed />
        </div>
      </div>
      
      <div className="lg:col-span-2">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <button className="px-3 py-1 text-sm border border-gray-200 rounded-md flex items-center">
              This Week
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold">October 2021</h3>
          </div>
          
          <div className="flex space-x-2">
            <button className="h-8 w-8 flex items-center justify-center rounded-md border border-gray-200">
              <ChevronLeft size={16} />
            </button>
            <button className="h-8 w-8 flex items-center justify-center rounded-md border border-gray-200">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <CalendarView />
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

const ChevronDown = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default Dashboard;