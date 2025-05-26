// Health status data
export const healthData = [
  {
    id: 1,
    name: 'Lungs',
    percentage: 75,
    status: 'critical',
    date: '20 Oct 2021',
    icon: 'https://img.icons8.com/?size=100&id=9568&format=png&color=000000'
  },
  {
    id: 2,
    name: 'Teeth',
    percentage: 90,
    status: 'good',
    date: '26 Oct 2021',
    icon: 'https://img.icons8.com/?size=100&id=9557&format=png&color=000000'
  },
  {
    id: 3,
    name: 'Bone',
    percentage: 60,
    status: 'warning',
    date: '26 Oct 2021',
    icon: 'https://img.icons8.com/?size=100&id=9217&format=png&color=000000'
  }
];

// Calendar data for October 2021
export const calendarData = [
  { date: 25, isCurrentMonth: true, appointments: ['10:00', '11:00', '12:00'] },
  { date: 26, isCurrentMonth: true, appointments: ['08:00', '09:00', '10:00'] },
  { date: 27, isCurrentMonth: true, appointments: ['12:00', '13:00'] },
  { date: 28, isCurrentMonth: true, appointments: ['10:00', '11:00'] },
  { date: 29, isCurrentMonth: true, appointments: ['14:00', '16:00'] },
  { date: 30, isCurrentMonth: true, appointments: ['12:00', '15:00'] },
  { date: 31, isCurrentMonth: true, appointments: ['09:00', '10:00', '11:00'] }
];

// Appointment card data
export const appointmentData = [
  {
    id: 1,
    title: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Cameron Williamson',
    icon: '🦷',
    bgColor: 'bg-indigo-600'
  },
  {
    id: 2,
    title: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Kevin Dymes',
    icon: '💆🏻‍♂️',
    bgColor: 'bg-blue-500'
  }
];

// Upcoming schedule data
export const upcomingSchedule = {
  'On Thursday': [
    {
      id: 1,
      title: 'Health checkup complete',
      time: '11:00 AM',
      type: 'checkup'
    },
    {
      id: 2,
      title: 'Ophthalmologist',
      time: '14:00 PM',
      type: 'ophthalmologist'
    }
  ],
  'On Saturday': [
    {
      id: 3,
      title: 'Cardiologist',
      time: '12:00 AM',
      type: 'cardiologist'
    },
    {
      id: 4,
      title: 'Neurologist',
      time: '16:00 PM',
      type: 'neurologist'
    }
  ]
};