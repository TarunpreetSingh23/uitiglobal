'use client';

import { useState } from 'react';
import CourseApplyModal from './CourseApplyModal';

export default function ApplyButton({ courseId, courseName, className, children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)} 
        className={className || "w-full bg-cyan-600 text-white py-4 rounded-lg font-bold text-base hover:bg-cyan-700 transition-colors shadow-sm"}
      >
        {children || 'Apply Now'}
      </button>
      <CourseApplyModal 
        courseId={courseId} 
        courseName={courseName} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
