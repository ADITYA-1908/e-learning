import { Search } from 'lucide-react';
import React, { useState } from 'react';

// Updated courseData with local PDF paths
const courseData = [
  {
    id: 1,
    title: "DSA",
    pdfPaths: ["https://whimsical.com/complete-dsa-roadmap-A7HgN4QaX1r4xDxRgwXrH"]
  },
  {
    id: 2,
    title: "Java Developer",
    pdfPaths: ["https://drive.google.com/file/d/1hyGey2vgO-eWieR7HE0upg6woIKzKSzx/view?usp=drive_link"]
  },
  {
    id: 3,
    title: "Javascript",
    pdfPaths: ["https://drive.google.com/file/d/1LgvLWOZxWMcRTHjW_wGMTSbfB62X0AP6/view?usp=drive_link"]
  },
  {
    id: 4,
    title: "React.js",
    pdfPaths: ["https://drive.google.com/file/d/1SuNRmQWRD6EZV1WQAGeMmmze1y17xrKG/view?usp=drive_link"]
  },

  {
    id: 5,
    title: "Node.js",
    pdfPaths: ["https://drive.google.com/file/d/1ts_iGrbbVnUQ5iR82inUO8JE_CzbC9lA/view?usp=drive_link"]
  },
  {
    id: 6,
    title: "MongoDB",
    pdfPaths: ["https://drive.google.com/file/d/1OibJSH3dZt7yMrWz94qI2IfFu_C-0JVM/view?usp=drive_link"]
  },
  {
    id: 7,
    title: "Frontend Developer",
    pdfPaths: ["https://drive.google.com/file/d/129OF2xe2T2yDzaO0wyBS6WfNFKW0d6P5/view?usp=drive_link"]
  },
  {
    id: 8,
    title: "Backend Developer",
    pdfPaths: ["https://drive.google.com/file/d/1NvTfCPInj8OTXZOQ5SrDOUmxGqeJHs25/view?usp=drive_link"]
  },

  {
    id: 9,
    title: "Full Stack Developer",
    pdfPaths: ["https://drive.google.com/file/d/1UgdNXAoN5QD-gLUZgSLEnQJqwPmHkCDG/view?usp=drive_link"]
  },

  {
    id: 10,
    title: "Cyber Security",
    pdfPaths: ["https://drive.google.com/file/d/1QtclVYAb0mTVXfDBuuGBDf2lAC8sOpIU/view?usp=drive_link"]
  },
  {
    id: 11,
    title: "Data Analyst",
    pdfPaths: ["https://drive.google.com/file/d/12EDAkJnZUhbjm0g6i-UewvkGQwMXq6Le/view?usp=drive_link"]
  },
  {
    id: 12,
    title: "Blockchain Developer",
    pdfPaths: ["https://drive.google.com/file/d/1WSmIArnMWno_4cU9LrM9--QH-E5RAGt1/view?usp=drive_link"]
  },

  {
    id: 13,
    title: "Game Development",
    pdfPaths: ["https://drive.google.com/file/d/1mKglbXUT2lqY6oAwchc90ARFeK5HqgYM/view?usp=drive_link"]
  },
  {
    id: 14,
    title: "UI-UXs Developert",
    pdfPaths: ["https://drive.google.com/file/d/1T9zKNZL0uVtEV8J8KA7lyjOwfbuvyOeC/view?usp=drive_link"]
  },
  
  {
    id: 15,
    title: "Python Developer",
    pdfPaths: ["https://drive.google.com/file/d/1vkUBor_DroKWzPVjnwNDaVp-6LZs0yt7/view?usp=drive_link"]
  },
  {
    id: 16,
    title: "C++",
    pdfPaths: ["https://drive.google.com/file/d/1ordd-bdsdqfNzkdcqeJziEEj_Z73BgLD/view?usp=drive_link"]
  },
  {
    id: 17,
    title: "AWS",
    pdfPaths: ["https://drive.google.com/file/d/1mSsyp_7NRvZJRjo5sz40Aho-AjhiFKBk/view?usp=drive_link"]
  },
  {
    id: 18,
    title: "SQL",
    pdfPaths: ["https://drive.google.com/file/d/1ksrqCgfBiqguoFIbXJnffGbshiCpWwFP/view?usp=drive_link"]
  },


];

// Update EnrollButton to handle local PDFs
const EnrollButton = ({ pdfPath, index }) => (
  <a
    href={pdfPath}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 text-center bg-[#00abf0]  text-white font-bold py-2 px-4 rounded transition duration-300"
  >
    Explore {index > 0 ? ` ${index + 1}` : ''}
  </a>
);

// CourseCard to display PDFs instead of URLs
const CourseCard = ({ title, pdfPaths }) => (
  <div className="bg-[#E9E581] border  rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 flex flex-col justify-between">
    <div className="p-4 text-center flex-grow">
      <h5 className="text-xl font-semibold mb-2">{title}</h5>
    </div>
    <div className="px-4 pb-4 flex space-x-3">
      {pdfPaths.map((pdfPath, index) => (
        <EnrollButton key={index} pdfPath={pdfPath} index={index} />
      ))}
    </div>
  </div>
);

// Main component with search functionality
const Btech = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAndSortedCourses = courseData
    .filter(course => course.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (searchTerm === '') return 0;
      const aIndex = a.title.toLowerCase().indexOf(searchTerm.toLowerCase());
      const bIndex = b.title.toLowerCase().indexOf(searchTerm.toLowerCase());
      return aIndex - bIndex;
    });

  return (
    <section className="bg-[#112e42] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#00abf0] mt-24  mb-12">Roadmaps</h2>
        <p className="mb-6 text-[#ededed]">
        It is a structured roadmaps across all domains, guiding students through the best learning paths for various subjects and 
        technologies. Each roadmap is designed to provide a clear, step-by-step progression, helping learners master core 
        subjects and programming languages efficiently. With well-organized content,
         students can confidently navigate their educational journey and achieve their academic and professional goals.
        </p>
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <div className="pt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Btech;
