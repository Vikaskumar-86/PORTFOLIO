import React, { useState } from 'react';
import { Users, Search, Plus, Trash2, Edit3, Check, Award, BookOpen } from 'lucide-react';

interface StudentRecord {
  id: string;
  name: string;
  rollNo: string;
  course: string;
  gpa: number;
  attendance: number;
  status: 'Active' | 'Graduated' | 'On Leave';
}

export const InteractiveStudentDemo: React.FC = () => {
  const [students, setStudents] = useState<StudentRecord[]>([
    { id: '1', name: 'Vikas Kumar', rollNo: 'CS2022-042', course: 'Computer Science & Eng', gpa: 8.8, attendance: 94, status: 'Active' },
    { id: '2', name: 'Aarav Sharma', rollNo: 'CS2022-015', course: 'Computer Science & Eng', gpa: 9.1, attendance: 96, status: 'Active' },
    { id: '3', name: 'Priya Patel', rollNo: 'AI2022-088', course: 'Artificial Intelligence', gpa: 8.5, attendance: 90, status: 'Active' },
    { id: '4', name: 'Rohan Verma', rollNo: 'EC2022-009', course: 'Electronics Eng', gpa: 7.9, attendance: 88, status: 'On Leave' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: '',
    rollNo: '',
    course: 'Computer Science & Eng',
    gpa: 8.0,
    attendance: 90
  });

  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.rollNo) return;

    const created: StudentRecord = {
      id: Date.now().toString(),
      name: newStudent.name,
      rollNo: newStudent.rollNo,
      course: newStudent.course,
      gpa: Number(newStudent.gpa),
      attendance: Number(newStudent.attendance),
      status: 'Active'
    };

    setStudents([created, ...students]);
    setNewStudent({ name: '', rollNo: '', course: 'Computer Science & Eng', gpa: 8.0, attendance: 90 });
    setIsAdding(false);
  };

  const handleDelete = (id: string) => {
    setStudents(students.filter(s => s.id !== id));
  };

  const avgGpa = (students.reduce((acc, curr) => acc + curr.gpa, 0) / (students.length || 1)).toFixed(2);
  const avgAttendance = Math.round(students.reduce((acc, curr) => acc + curr.attendance, 0) / (students.length || 1));

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl text-xs space-y-3 p-4">
      {/* Overview Metric Bar */}
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
          <span className="text-[10px] text-slate-400 block font-medium">Total Students</span>
          <span className="text-base font-extrabold text-blue-400">{students.length}</span>
        </div>
        <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
          <span className="text-[10px] text-slate-400 block font-medium">Batch Avg GPA</span>
          <span className="text-base font-extrabold text-emerald-400">{avgGpa} / 10.0</span>
        </div>
        <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
          <span className="text-[10px] text-slate-400 block font-medium">Avg Attendance</span>
          <span className="text-base font-extrabold text-indigo-400">{avgAttendance}%</span>
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex flex-wrap justify-between items-center gap-2">
        <div className="relative flex-1 min-w-[180px]">
          <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search student, roll number, or course..."
            className="w-full bg-slate-950 text-slate-200 placeholder-slate-500 pl-8 pr-3 py-2 rounded-xl border border-slate-800 focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          onClick={() => setIsAdding(!isAdding)}
          className="px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center gap-1.5 transition shadow-md shadow-blue-600/20"
        >
          <Plus className="w-3.5 h-3.5" /> {isAdding ? 'Cancel' : 'Add Student'}
        </button>
      </div>

      {/* Add Student Inline Form */}
      {isAdding && (
        <form onSubmit={handleAddStudent} className="p-3 bg-slate-950 rounded-xl border border-blue-900/50 space-y-2">
          <h5 className="font-bold text-blue-300 text-[11px]">Register New Student Record</h5>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <input
              type="text"
              placeholder="Student Name"
              required
              value={newStudent.name}
              onChange={e => setNewStudent({ ...newStudent, name: e.target.value })}
              className="bg-slate-900 border border-slate-800 px-2.5 py-1.5 rounded-lg text-white"
            />
            <input
              type="text"
              placeholder="Roll No (e.g. CS2022-099)"
              required
              value={newStudent.rollNo}
              onChange={e => setNewStudent({ ...newStudent, rollNo: e.target.value })}
              className="bg-slate-900 border border-slate-800 px-2.5 py-1.5 rounded-lg text-white"
            />
            <input
              type="number"
              step="0.1"
              min="0"
              max="10"
              placeholder="GPA"
              value={newStudent.gpa}
              onChange={e => setNewStudent({ ...newStudent, gpa: Number(e.target.value) })}
              className="bg-slate-900 border border-slate-800 px-2.5 py-1.5 rounded-lg text-white"
            />
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg px-3 py-1.5 transition flex items-center justify-center gap-1"
            >
              <Check className="w-3.5 h-3.5" /> Save Record
            </button>
          </div>
        </form>
      )}

      {/* Student Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/80 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
              <th className="p-2.5">Roll No</th>
              <th className="p-2.5">Name</th>
              <th className="p-2.5">Course</th>
              <th className="p-2.5 text-center">GPA</th>
              <th className="p-2.5 text-center">Attendance</th>
              <th className="p-2.5 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-[11px]">
            {filteredStudents.length > 0 ? (
              filteredStudents.map(s => (
                <tr key={s.id} className="hover:bg-slate-900/60 transition">
                  <td className="p-2.5 font-mono text-blue-400">{s.rollNo}</td>
                  <td className="p-2.5 font-bold text-slate-200">{s.name}</td>
                  <td className="p-2.5 text-slate-400">{s.course}</td>
                  <td className="p-2.5 text-center">
                    <span className="font-bold text-emerald-400 font-mono">{s.gpa.toFixed(1)}</span>
                  </td>
                  <td className="p-2.5 text-center">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${s.attendance >= 90 ? 'bg-emerald-950 text-emerald-300' : 'bg-amber-950 text-amber-300'}`}>
                      {s.attendance}%
                    </span>
                  </td>
                  <td className="p-2.5 text-right">
                    <button
                      onClick={() => handleDelete(s.id)}
                      className="p-1 rounded text-slate-500 hover:text-red-400 hover:bg-red-950/50 transition"
                      title="Delete record"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="p-6 text-center text-slate-500">
                  No student records match your query.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
