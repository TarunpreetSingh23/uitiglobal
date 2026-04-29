'use client';

import { useState } from 'react';

export default function CourseSyllabus({ modules }) {
  const [openModule, setOpenModule] = useState(null);

  if (!modules || modules.length === 0) {
    return <p className="text-slate-500 italic">No syllabus available yet.</p>;
  }

  const toggleModule = (index) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {modules.map((mod, index) => {
        const isOpen = openModule === index;
        
        return (
          <div
            key={mod.number || index}
            className={`bg-white border rounded-lg group transition-all duration-300 overflow-hidden ${
              isOpen ? 'border-cyan-600 shadow-md ring-1 ring-cyan-600/20' : 'border-slate-200 hover:border-cyan-300'
            }`}
          >
            <div 
              className="flex justify-between items-center p-6 cursor-pointer bg-white select-none"
              onClick={() => toggleModule(index)}
            >
              <div className="flex-1 pr-4">
                <span className="text-cyan-600 font-bold text-xs uppercase mb-1 block tracking-wider">Module {mod.number || index + 1}</span>
                <h3 className={`text-lg md:text-xl font-semibold transition-colors ${isOpen ? 'text-cyan-900' : 'text-slate-900'}`}>
                  {mod.title}
                </h3>
              </div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-cyan-50 text-cyan-600' : 'bg-slate-50 text-slate-400 group-hover:bg-cyan-50 group-hover:text-cyan-500'}`}>
                <span className="material-symbols-outlined" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
                  expand_more
                </span>
              </div>
            </div>
            
            <div 
              className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50">
                <p className="text-[#505f76] text-sm leading-relaxed max-w-3xl">
                  {mod.description || 'No detailed description provided for this module.'}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
