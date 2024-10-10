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
    id: 7,
    title: "Java Developer",
    pdfPaths: ["https://www.google.com/imgres?q=engineering%20%2Cmathmatisc%20image&imgurl=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2Fv2%2FD5612AQGHN9di0DR55w%2Farticle-cover_image-shrink_600_2000%2Farticle-cover_image-shrink_600_2000%2F0%2F1702110049795%3Fe%3D2147483647%26v%3Dbeta%26t%3DFpqTyExtYSp44R_AarbFqZHs7Tk-Mj-_B2JBINDMChI&imgrefurl=https%3A%2F%2Fwww.linkedin.com%2Fpulse%2Funveiling-power-engineering-mathematics-key-unlocking-mythli-nmzrc&docid=9hmSJkVVo1eDPM&tbnid=MiBcIMmgVe7zTM&vet=12ahUKEwjs8_-ShYOJAxVhfGwGHRBTDk8QM3oECEUQAA..i&w=450&h=234&hcb=2&ved=2ahUKEwjs8_-ShYOJAxVhfGwGHRBTDk8QM3oECEUQAA"]
  },
  {
    id: 10,
    title: "Javascript",
    pdfPaths: ["../public/PDF/javascript.pdf"]
  },
  {
    id: 13,
    title: "React.js",
    pdfPaths: ["../public/PDF/react.pdf"]
  },

  {
    id: 12,
    title: "Node.js",
    pdfPaths: ["../public/PDF/nodejs.pdf"]
  },
  {
    id: 16,
    title: "MongoDB",
    pdfPaths: ["../public/PDF/mongodb.pdf"]
  },
  {
    id: 2,
    title: "Frontend Developer",
    pdfPaths: ["../public/PDF/frontend.pdf"]
  },
  {
    id: 3,
    title: "Backend Developer",
    pdfPaths: ["../public/PDF/backend.pdf"]
  },

  {
    id: 4,
    title: "Full Stack Developer",
    pdfPaths: ["../public/PDF/full-stack.pdf"]
  },

  {
    id: 5,
    title: "Cyber Security",
    pdfPaths: ["../public/PDF/cyber-security.pdf"]
  },
  {
    id: 6,
    title: "Data Analyst",
    pdfPaths: ["../public/PDF/data-analyst.pdf"]
  },
  {
    id: 12,
    title: "Blockchain Developer",
    pdfPaths: ["../public/PDF/blockchain.pdf"]
  },

  {
    id: 8,
    title: "Game Development",
    pdfPaths: ["../public/PDF/game-developer.pdf"]
  },
  {
    id: 9,
    title: "UI-UXs Developert",
    pdfPaths: ["../public/PDF/ux-design.pdf"]
  },
  
  {
    id: 11,
    title: "Python Developer",
    pdfPaths: ["../public/PDF/python.pdf"]
  },
  {
    id: 14,
    title: "C++",
    pdfPaths: ["../public/PDF/cpp.pdf"]
  },
  {
    id: 15,
    title: "AWS",
    pdfPaths: ["../public/PDF/aws.pdf"]
  },
  {
    id: 16,
    title: "SQL",
    pdfPaths: ["../public/PDF/sql.pdf"]
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
