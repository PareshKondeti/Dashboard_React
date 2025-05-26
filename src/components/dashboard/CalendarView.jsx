import React from 'react';
import { calendarData, appointmentData } from '../../data/mockData';

const CalendarView = () => {
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  return (
    <div>

      <div className="grid grid-cols-7 gap-1">

        {weekdays.map(day => (
          <div key={day} className="text-center font-medium text-sm py-2">{day}</div>
        ))}
        
        {calendarData.map((day) => (
          <div 
            key={day.date} 
            className={`border rounded-md p-2 min-h-[110px] ${
              day.isCurrentMonth 
                ? 'bg-white' 
                : 'bg-gray-50 opacity-50'
            }`}
          >
            <div className="text-center mb-1">
              <span className="text-sm font-medium">{day.date}</span>
            </div>
            
            {day.appointments.map((appt, idx) => (
              <div 
                key={idx} 
                className={`text-xs rounded px-2 py-1 mb-1 text-center ${
                  idx % 2 === 0 ? 'bg-blue-100 text-blue-700' : 'bg-indigo-100 text-indigo-700'
                }`}
              >
                {appt}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-6">
        {appointmentData.map((appt) => (
          <div 
            key={appt.id} 
            className={`p-4 rounded-lg ${appt.bgColor} text-white`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold mb-1">{appt.title}</h4>
                <p className="text-sm">{appt.time}</p>
                <p className="text-sm mt-1">Dr. {appt.doctor}</p>
              </div>
              <div className="text-3xl">{appt.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;