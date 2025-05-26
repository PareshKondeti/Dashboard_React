 import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white py-4 px-6 flex items-center justify-between shadow-sm">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search size={18} className="text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-full rounded-md bg-gray-50 border-none  text-md"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-blue-600 rounded-full"></span>
        </button>
        
        <div className="h-9 w-9 rounded-md bg-cyan-400 flex items-center justify-center">
          <span className="font-medium text-white">🧑</span>
        </div>
        
        <button className="h-9 w-9 rounded-md bg-indigo-600 flex items-center justify-center text-white">
          <Plus size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;