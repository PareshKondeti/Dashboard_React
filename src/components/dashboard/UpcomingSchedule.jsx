import React from 'react';
import { upcomingSchedule } from '../../data/mockData';
import { 
  Stethoscope, 
  Eye,
  Heart,
  Brain
} from 'lucide-react';

const UpcomingSchedule = () => {
  const getAppointmentIcon = (type) => {
    switch (type) {
      case 'checkup':
        return <Stethoscope size={16} />;
      case 'ophthalmologist':
        return <Eye size={16} />;
      case 'cardiologist':
        return <Heart size={16} />;
      case 'neurologist':
        return <Brain size={16} />;
      default:
        return <Stethoscope size={16} />;
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">The Upcoming Schedule</h3>
      
      {Object.entries(upcomingSchedule).map(([day, appointments]) => (
        <div key={day} className="mb-4">
          <h4 className="font-medium text-sm text-gray-500 mb-2">{day}</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {appointments.map((appointment) => (
              <div 
                key={appointment.id} 
                className="bg-blue-50 bg-opacity-70 rounded-lg p-4 flex items-center"
              >
                <div className="mr-4 text-blue-500">
                  {getAppointmentIcon(appointment.type)}
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-sm">{appointment.title}</h5>
                  <p className="text-xs text-gray-600">{appointment.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;