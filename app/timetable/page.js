const timeSlots = [
  "8:30-9:30",
  "9:30-10:30",
  "10:45-11:45",
  "11:45-12:45",
  "01:00-02:30",
  "02:30-03:30",
  "03:30-04:30",
  "04:30-05:30",
];

const timetable = {
  MON: [
    { code: "BCS104T1", label: "(CHM)", bg: "bg-[#8ad3ff]" },
    { code: "BCS302G1", label: "(SB)", bg: "bg-[#30a0ff]" },
    { code: "OOP (D1/D2)", label: "(SB/VM/KH/CHM)", bg: "bg-[#45d17a]" },
    { code: "BMA301TC1", label: "(MJ)", bg: "bg-[#ff70d4]" },
    { code: "BCS307A1", label: "(PB)", bg: "bg-[#f3b69d]" },
    null,
    null,
    null,
  ],
  TUE: [
    { code: "BCS308S1", label: "(SB)", bg: "bg-[#ff9f43]" },
    { code: "BCS301G1", label: "(VM)", bg: "bg-[#46c2cf]" },
    { code: "BCS305T1", label: "(PBV)", bg: "bg-[#4ddf7a]" },
    { code: "BMA301TC1", label: "(MJ)", bg: "bg-[#ff70d4]" },
    { code: "BCS302G1", label: "(SB)", bg: "bg-[#30a0ff]" },
    { code: "BCS309P1", label: "", bg: "bg-[#1ac08d]" },
    null,
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
    { code: "OOP (D2/D3)", label: "(SB/VM/CHM)", bg: "bg-[#45d17a]" },
    { code: "BCS304T1", label: "(CHM)", bg: "bg-[#b3a0ff]" },
    { code: "BCS305T1", label: "(PBV)", bg: "bg-[#4ddf7a]" },
    { code: "BMA301TC1", label: "(MJ)", bg: "bg-[#ff70d4]" },
    { code: "Additional Mathematics-I", label: "", bg: "bg-[#c0e1a2]" },
  ],
  FRI: [
    { code: "OOP (D3/D0)", label: "(SB/VM/CHM)", bg: "bg-[#45d17a]" },
    { code: "BCS304T1", label: "(CHM)", bg: "bg-[#b3a0ff]" },
    { code: "BCS305T1", label: "(PBV)", bg: "bg-[#4ddf7a]" },
    { code: "BMA301TC1", label: "(MJ)", bg: "bg-[#ff70d4]" },
    { code: "BCS302G1", label: "(SB)", bg: "bg-[#30a0ff]" },
    { code: "Remedial Class", label: "", bg: "bg-[#d7d7d7]" },
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

const courseTable = [
  { code: "BMA301TC1", name: "Computational Mathematics and Optimization", faculty: "Mrs. Mary Jeney (MJ)" },
  { code: "BCS302G1", name: "Object Oriented Programming with Java", faculty: "Mrs. Srividya Bhat (SB)" },
  { code: "BCS303G1", name: "Digital Design and Computer Organization", faculty: "Mrs. Varsha M (VM) / Mrs. Srinivas P (SP)" },
  { code: "BCS304T1", name: "Operating Systems", faculty: "Mrs. Chaitra Shree (CHM)" },
  { code: "BCS305T1", name: "Data Structures & Algorithms", faculty: "Dr. Poornima B (PBV)" },
  { code: "BCS306L1", name: "Data Structures & Algorithms Laboratory", faculty: "Mrs. Aparna Krishna (AK), Mrs. Chaitra Shree (CHM), Mr. Mahesh M (HK)" },
  { code: "BCS307A1", name: "Competitive Programming - I", faculty: "Ms. Pooja Bhandary (PB)" },
  { code: "BCS308S1", name: "Skill Enhancement Course - I", faculty: "Mrs. Srividya Bhat (SB)" },
  { code: "BCS309P1", name: "Community Project", faculty: "" },
];

const labTable = [
  { course: "Object Oriented Programming with Java", room: "Lab 5 (Ground Floor)" },
  { course: "Digital Design and Computer Organization", room: "ADE Lab (Second Floor)" },
  { course: "Data Structures & Algorithms Laboratory", room: "Lab 8 (Second Floor)" },
];

export default function TimetablePage() {
  return (
    <main className="min-h-screen bg-[#f3f3f3] px-4 py-6 text-[#0f172a]">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-md border-[2px] border-[#1d1d1d] bg-white shadow-sm">
        <div className="border-b-[2px] border-[#1d1d1d] bg-[#f0f6ff] px-4 py-3 text-center">
          <div className="flex items-center justify-center gap-3 pb-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#1c3f6d] bg-[#f5f3d1] text-2xl font-black text-[#0c4b7d]">
              S
            </div>
            <div className="text-center leading-tight">
              <div className="text-[15px] font-bold tracking-[0.12em] text-[#0a345e]">
                SAHYADRI
              </div>
              <div className="text-[10px] font-semibold uppercase text-[#384a72]">
                College of Engineering & Management
              </div>
              <div className="text-[9px] font-medium text-[#384a72]">
                An Autonomous Institution
              </div>
            </div>
          </div>

          <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0f172a]">
            Department of Computer Science & Engineering
          </div>

          <div className="mt-2 border-t border-[#1d1d1d] pt-2 text-[13px] font-semibold text-[#0f172a]">
            Tentative Time Table Effective from 31.08.2026
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[980px] border-collapse border border-[#1d1d1d] text-center text-[11px] font-medium">
            <thead>
              <tr>
                <th className="border border-[#1d1d1d] bg-[#dfe7f5] px-2 py-3 font-bold text-[#0f172a]">
                  SEM: 3D SECTION
                </th>
                <th className="border border-[#1d1d1d] bg-[#dfe7f5] px-2 py-3 font-bold text-[#0f172a]">
                  Class Room: 402A
                </th>
                <th className="border border-[#1d1d1d] bg-[#dfe7f5] px-2 py-3 font-bold text-[#0f172a]">
                  DAY/TIME
                </th>
                {timeSlots.map((slot) => (
                  <th key={slot} className="border border-[#1d1d1d] bg-[#dfe7f5] px-2 py-3 font-bold text-[#0f172a]">
                    {slot}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {Object.entries(timetable).map(([day, slots]) => (
                <tr key={day}>
                  <td className="border border-[#1d1d1d] bg-[#dfe7f5] px-2 py-3 font-bold text-[#0f172a]">
                    {day}
                  </td>
                  <td className="border border-[#1d1d1d] bg-[#dfe7f5] px-2 py-3 font-bold text-[#0f172a]">
                    {day}
                  </td>
                  <td className="border border-[#1d1d1d] bg-[#dfe7f5] px-2 py-3 font-bold text-[#0f172a]">
                    {day}
                  </td>
                  {slots.map((slot, index) => (
                    <td
                      key={`${day}-${index}`}
                      className={`border border-[#1d1d1d] p-1 ${slot ? slot.bg : "bg-[#ebebeb]"}`}
                    >
                      {slot ? (
                        <div className="flex h-[72px] flex-col items-center justify-center rounded-sm px-1 text-center text-[10px] font-bold text-[#0f172a]">
                          <span>{slot.code}</span>
                          {slot.label ? <span className="mt-1">{slot.label}</span> : null}
                        </div>
                      ) : (
                        <div className="flex h-[72px] items-center justify-center text-[10px] text-slate-500">-</div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-t-[2px] border-[#1d1d1d] bg-white px-4 py-3 text-[11px]">
          <div className="mb-2 text-[11px] font-bold uppercase text-[#0f172a]">
            Faculty Class Coordinator: Mrs. Srividya Bhat (SB)
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            <table className="w-full border-collapse border border-[#1d1d1d] text-left text-[11px]">
              <thead>
                <tr>
                  <th className="border border-[#1d1d1d] bg-[#dfe7f5] px-2 py-2 font-bold text-[#0f172a]">Course Code</th>
                  <th className="border border-[#1d1d1d] bg-[#dfe7f5] px-2 py-2 font-bold text-[#0f172a]">Course Name</th>
                  <th className="border border-[#1d1d1d] bg-[#dfe7f5] px-2 py-2 font-bold text-[#0f172a]">Faculty Name</th>
                </tr>
              </thead>
              <tbody>
                {courseTable.map((course) => (
                  <tr key={course.code}>
                    <td className="border border-[#1d1d1d] px-2 py-2 font-semibold text-[#0f172a]">{course.code}</td>
                    <td className="border border-[#1d1d1d] px-2 py-2 text-[#0f172a]">{course.name}</td>
                    <td className="border border-[#1d1d1d] px-2 py-2 text-[#0f172a]">{course.faculty}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="w-full border-collapse border border-[#1d1d1d] text-left text-[11px]">
              <thead>
                <tr>
                  <th className="border border-[#1d1d1d] bg-[#dfe7f5] px-2 py-2 font-bold text-[#0f172a]">Course Name</th>
                  <th className="border border-[#1d1d1d] bg-[#dfe7f5] px-2 py-2 font-bold text-[#0f172a]">Room</th>
                </tr>
              </thead>
              <tbody>
                {labTable.map((lab) => (
                  <tr key={lab.course}>
                    <td className="border border-[#1d1d1d] px-2 py-2 text-[#0f172a]">{lab.course}</td>
                    <td className="border border-[#1d1d1d] px-2 py-2 text-[#0f172a]">{lab.room}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 grid grid-cols-4 gap-6 text-center text-[11px] font-bold text-[#0f172a]">
            <div>Incharge (T)</div>
            <div>HOD</div>
            <div>Dean Academics</div>
            <div>Principal</div>
          </div>
        </div>
      </div>
    </main>
  );
}
