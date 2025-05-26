import React from 'react';

const ActivityFeed = () => {

  const weekDays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  
  const activityData = [
    [25, 40, 10],
    [15, 30, 45],
    [25, 10, 35],
    [50, 20, 10],
    [30, 15, 40],
    [45, 25, 15],
    [20, 35, 30]
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Activity</h3>
        <p className="text-sm text-gray-500">3 appointments on this week</p>
      </div>
      
      <div className="flex h-48 items-end justify-between">
        {weekDays.map((day, idx) => (
          <div key={day} className="flex flex-col items-center space-y-2">
            <div className="flex space-x-1">
              {activityData[idx].map((height, i) => (
                <div 
                  key={`${day}-${i}`} 
                  style={{ height: `${height}px` }}
                  className={`w-2 rounded-t-md ${
                    i === 0 ? 'bg-cyan-400' : 
                    i === 1 ? 'bg-blue-600' : 
                    'bg-indigo-400'
                  }`}
                ></div>
              ))}
            </div>
            <span className="text-xs text-gray-500">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;