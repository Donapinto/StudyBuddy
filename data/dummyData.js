export const studyStats = [
  { label: 'Study hours', value: '18.5h', change: '+2.4h', tone: 'blue' },
  { label: 'Completion', value: '84%', change: '+8%', tone: 'purple' },
  { label: 'Current streak', value: '12 days', change: 'On track', tone: 'emerald' },
];

export const subjects = [
  {
    subject: 'Computational Mathematics',
    code: 'BMA301TC1',
    progress: 92,
    hours: '4.5h',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    subject: 'Object Oriented Programming',
    code: 'BCS302G1',
    progress: 86,
    hours: '3.8h',
    color: 'from-violet-500 to-indigo-500',
  },
  {
    subject: 'Digital Design & Computer Organization',
    code: 'BCS303G1',
    progress: 78,
    hours: '3.2h',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    subject: 'Operating Systems',
    code: 'BCS304T1',
    progress: 81,
    hours: '2.6h',
    color: 'from-amber-500 to-orange-500',
  },
  {
    subject: 'Data Structures & Algorithms',
    code: 'BCS305T1',
    progress: 88,
    hours: '4.1h',
    color: 'from-pink-500 to-rose-500',
  },
];

export const tasks = [
  { id: 1, title: 'Review calculus problem set', subject: 'BMA301TC1', due: 'Today', status: 'In progress' },
  { id: 2, title: 'Complete Java lab exercise', subject: 'BCS302G1', due: 'Tomorrow', status: 'Planned' },
  { id: 3, title: 'Prepare OS revision notes', subject: 'BCS304T1', due: 'Wed', status: 'Completed' },
  { id: 4, title: 'Solve algorithm practice questions', subject: 'BCS305T1', due: 'Thu', status: 'In progress' },
];

export const weeklySchedule = [
  { day: 'Mon', sessions: ['Math revision', 'Java lab', 'Reading time'] },
  { day: 'Tue', sessions: ['Data structures', 'OS recap', 'Practice quiz'] },
  { day: 'Wed', sessions: ['Group project', 'Math drills', 'Break'] },
  { day: 'Thu', sessions: ['OS reading', 'Algorithms', 'Revision block'] },
  { day: 'Fri', sessions: ['Java practice', 'Math review', 'Planning'] },
];
export const timetable = {
  MON: [
    { code: "BCS104T1", label: "(CHM)", bg: "bg-[#8ad3ff]" },
    { code: "BCS302G1", label: "(SB)", bg: "bg-[#30a0ff]" },
    { code: "OOP (D1/D2)", label: "(SB/VM/KH/CHM)", bg: "bg-[#45d17a]" },
    { code: "OOP (D1/D2)", label: "(SB/VM/KH/CHM)", bg: "bg-[#45d17a]" },
    { code: "BMA301TC1", label: "(MJ)", bg: "bg-[#ff70d4]" },
    { code: "BCS307A1", label: "(PB)", bg: "bg-[#f3b69d]" },
    null,
    null,
  ],
  TUE: [
    { code: "BCS308S1", label: "(SB)", bg: "bg-[#ff9f43]" },
    { code: "BCS308S1", label: "(SB)", bg: "bg-[#ff9f43]" },
    { code: "BCS301G1", label: "(VM)", bg: "bg-[#46c2cf]" },
    { code: "BCS305T1", label: "(PBV)", bg: "bg-[#4ddf7a]" },
    { code: "BMA301TC1", label: "(MJ)", bg: "bg-[#ff70d4]" },
    { code: "BCS302G1", label: "(SB)", bg: "bg-[#30a0ff]" },
    { code: "BCS309P1", label: "", bg: "bg-[#1ac08d]" },
    null,
  ],
  WED: [
    { code: "BCS302G1", label: "(SB)", bg: "bg-[#30a0ff]" },
    { code: "BCS303G1", label: "(VM)", bg: "bg-[#37d7d5]" },
    { code: "BCS305T1", label: "(PBV)", bg: "bg-[#4ddf7a]" },
    { code: "BMA301TC1", label: "(MJ)", bg: "bg-[#ff70d4]" },
    { code: "BCS309P1", label: "", bg: "bg-[#1ac08d]" },
    { code: "Remedial Class", label: "", bg: "bg-[#d7d7d7]" },
    null,
    null,
  ],
  THU: [
    { code: "BCS303G1", label: "(VM)", bg: "bg-[#37d7d5]" },
    { code: "BCS304T1", label: "(CHM)", bg: "bg-[#b3a0ff]" },
    { code: "10 SEC", label: "", bg: "bg-[#d6f0b0]" },
    { code: "10 SEC", label: "", bg: "bg-[#d6f0b0]" },
    { code: "OOP (D2/D3)", label: "(SB/VM/CHM)", bg: "bg-[#45d17a]" },
    { code: "OOP (D2/D3)", label: "(SB/VM/CHM)", bg: "bg-[#45d17a]" },
    null,
    null,
  ],
  FRI: [
    { code: "OOP (D3/D0)", label: "(SB/VM/CHM)", bg: "bg-[#45d17a]" },
    { code: "OOP (D3/D0)", label: "(SB/VM/CHM)", bg: "bg-[#45d17a]" },
    { code: "BCS304T1", label: "(CHM)", bg: "bg-[#b3a0ff]" },
    { code: "BCS305T1", label: "(PBV)", bg: "bg-[#4ddf7a]" },
    { code: "BMA301TC1", label: "(MJ)", bg: "bg-[#ff70d4]" },
    null,
    null,
    null,
    null,
  ],
  SAT: [
    { code: "BCS304T1", label: "(CHM)", bg: "bg-[#b3a0ff]" },
    { code: "BCS303G1", label: "(VM)", bg: "bg-[#37d7d5]" },
    { code: "BMA301TC1", label: "(MJ)", bg: "bg-[#ff70d4]" },
    { code: "BCS305T1", label: "(PBV)", bg: "bg-[#4ddf7a]" },
    { code: "BCS302G1", label: "(SB)", bg: "bg-[#30a0ff]" },
    { code: "BMA301TC1", label: "(MJ)", bg: "bg-[#ff70d4]" },
    { code: "BCS309P1", label: "", bg: "bg-[#1ac08d]" },
    null,
  ],
};
