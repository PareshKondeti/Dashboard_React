import React from 'react';
import { 
  LayoutDashboard, 
  History, 
  Calendar, 
  ClipboardList, 
  BarChart2, 
  Beaker, 
  MessageSquare,
  LifeBuoy,
  Settings
} from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="bg-white w-56 flex flex-col shadow-sm">
      <div className="p-5">
        <h1 className="text-xl font-semibold">
          <span className="text-cyan-500">Health</span>
          <span>care.</span>
        </h1>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="px-4 py-2">
          <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">General</p>
        </div>

        <nav className="flex-1 space-y-1">
          {[
            { name: 'Dashboard', icon: <LayoutDashboard size={18} />, active: true },
            { name: 'History', icon: <History size={18} /> },
            { name: 'Calendar', icon: <Calendar size={18} /> },
            { name: 'Appointments', icon: <ClipboardList size={18} /> },
            { name: 'Statistics', icon: <BarChart2 size={18} /> },
            { name: 'Tests', icon: <Beaker size={18} /> },
          ].map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center px-4 py-2 text-sm font-medium ${
                item.active 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className={`mr-3 ${item.active ? 'text-blue-600' : 'text-gray-500'}`}>
                {item.icon}
              </span>
              {item.name}
            </a>
          ))}
        </nav>

        <div className="px-4 py-2 mt-4">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Help</p>
        </div>

        <nav className="space-y-1">
          {[
            { name: 'Chat', icon: <MessageSquare size={18} /> },
            { name: 'Support', icon: <LifeBuoy size={18} /> },
            { name: 'Setting', icon: <Settings size={18} /> },
          ].map((item) => (
            <a
              key={item.name}
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              <span className="mr-3 text-gray-500">{item.icon}</span>
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;