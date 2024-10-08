import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const courseData = [
  {
    id: 20,
    title: "Engineering Mathematics-I",
    imageUrl: "../public/images-core/EM1.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PLU6SqdYcYsfINU_Y9CMp1pZ827ZB1U-Xn&feature=shared"
    ]
  },
  {
    id: 19,
    title: "Engineering Mathematics-II",
    imageUrl: "../public/images-core/EM2.png",
    enrollUrl: ["https://youtube.com/playlist?list=PLU6SqdYcYsfKqa52m3wyMZb1KVWuZsA2T&feature=shared"
    ]
  },
  {
    id: 19,
    title: "Descrete Mathematics",
    imageUrl: "../public/images-core/DM.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PLBlnK6fEyqRhqJPDXcvYlLfXPh37L89g3&feature=shared",
      "https://youtube.com/playlist?list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&feature=shared"
    ]
  },

  {
    
    id: 1,
    title: "C Programming",
    imageUrl: "../public/images-core/CP.jpeg",
    enrollUrl: ["https://youtu.be/irqbmMNs2Bo?feature=shared"]
  },
  {
    id: 2,
    title: "Data Structure using C (DSUC)",
    imageUrl: "../public/images-core/DSUC.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU&feature=shared",
      "https://youtube.com/playlist?list=PLDV1Zeh2NRsB6SWUrDFW2RmDotAfPbeHu&feature=shared"
    ]
  },
  {
    id: 3,
    title: "Computer Network and Data Communication (CNDC)",
    imageUrl: "../public/images-core/CNDC.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_&feature=shared",
      "https://youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&feature=shared"
    ]
  },
  {
    id: 4,
    title: "DataBase Management System (DBMS)",
    imageUrl: "../public/images-core/DBMS.png",
    enrollUrl: ["https://youtube.com/playlist?list=PLrjkTql3jnm-CLxHftqLgkrZbM8fUt0vn&feature=shared",
      "https://youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&feature=shared"]
  },
  {
    id: 5,
    title: "Digital Logic Circuit (DLD)",
    imageUrl: "../public/images-core/DLD.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm&feature=shared"]
  },
  {
    id: 6,
    title: "Computer Organisition and architecture (COA)",
    imageUrl: "../public/images-core/COA.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q&feature=shared",
      "https://youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX&feature=shared"
    ]
  },
  {
    id: 7,
    title: "Design alalysis and algorithm (DAA)",
    imageUrl: "../public/images-core/DAA.png",
    enrollUrl: ["https://youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&feature=shared"]
  },
  {
    id: 8,
    title: "OOPs Java",
    imageUrl: "../public/images-core/java.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PLqleLpAMfxGAdqZeY_4uVQOPCnAjhH-eT&feature=shared"]
  },
  {
    id: 9,
    title: "Formal Language and Autometa Theory (FLAT)",
    imageUrl: "../public/images-core/FLAT.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PLmXKhU9FNesSdCsn6YQqu9DmXRMsYdZ2T&feature=shared",
      "https://youtube.com/playlist?list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev&feature=shared"
    ]
  },
  {
    id: 10,
    title: "Operating System (OS)",
    imageUrl: "../public/images-core/Os.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&feature=shared",
      "https://youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&feature=shared"
    ]
  },
  {
    id: 11,
    title: "Python ",
    imageUrl: "../public/images-core/python.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PLdo5W4Nhv31bZSiqiOL5ta39vSnBxpOPT&feature=shared",
      "https://youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0&feature=shared"
    ]
  },
  {
    id: 12,
    title: "Artifical Intelligence (AI) ",
    imageUrl: "../public/images-core/AI.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PLV8vIYTIdSnYsdt0Dh9KkD9WFEi7nVgbe&feature=shared"]
  },

  {
    id: 13,
    title: "Internet of Things (IOT)",
    imageUrl: "../public/images-core/IOT.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PLgwJf8NK-2e6FvFUItZbGYnKiqjrlLpCb&feature=shared"]
  },
  {
    id: 14,
    title: "Machine Learning (ML)",
    imageUrl: "../public/images-core/ML.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PLmAmHQ-_5ySyQeEryrlomrEvOGNYN3TAL&feature=shared",
      "https://youtube.com/playlist?list=PLxCzCOWd7aiEXg5BV10k9THtjnS48yI-T&feature=shared"
    ]
  },
  {
    id: 15,
    title: "Software Engineer (SE)",
    imageUrl: "../public/images-core/SE.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2&feature=shared"]
  },
  {
    id: 16,
    title: "BlockChain and Crypto Currency(BCC)",
    imageUrl: "../public/images-core/BCC.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PLPIwNooIb9vgfXs-QkRYqqZbDXX-yLf59&feature=shared"]
  },
  {
    id: 17,
    title: "Compiler Design (CD)",
    imageUrl: "../public/images-core/CD.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PL1QH9gyQXfguPNDTsnG90W2kBDQpYLDQr&feature=shared",
      "https://youtube.com/playlist?list=PLBlnK6fEyqRjT3oJxFXRgjPNzeS-LFY-q&feature=shared"
    ]
  }, 
  {
    id: 18,
    title: "Web Technologie (WT)",
    imageUrl: "../public/images-core/WT.png",
    enrollUrl: ["https://youtube.com/playlist?list=PLV8vIYTIdSnbwIFENjqBK7yyAkSVSoLBC&feature=shared",
      "https://youtube.com/playlist?list=PLrjkTql3jnm8d1ddpVKifXO_fPjSKATCp&feature=shared"
    ]
  },
 
  //HCI PMC BDA
];

//DSUC
const EnrollButton = ({ url, index }) => (
  <a
    href={url}
    target="_blank"
    className="flex-1 text-center bg-[#00abf0]  text-white font-bold py-2 px-4 rounded transition duration-300"
  >
    Link {index > 0 ? '': ''}
  </a>
);

const CourseCard = ({ title, imageUrl, enrollUrl }) => (
  <div className="bg-[#E9E581] border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 flex flex-col justify-between">
    <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
    <div className="p-4 text-center flex-grow">
      <h5 className="text-xl font-semibold mb-2">{title}</h5>
    </div>
    <div className="px-4 pb-4 flex space-x-3">``
      {enrollUrl.map((url, index) => (
        <EnrollButton key={index} url={url} index={index} />
      ))}
    </div>
  </div>
);

const Btech = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchTerm]); // This will trigger the scroll to top when the component mounts or when searchTerm changes

  const filteredAndSortedCourses = courseData
    .filter(course => course.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (searchTerm === '') return 0;
      const aIndex = a.title.toLowerCase().indexOf(searchTerm.toLowerCase());
      const bIndex = b.title.toLowerCase().indexOf(searchTerm.toLowerCase());
      return aIndex - bIndex;
    });

  return (
    <section className="bg-[#112e42] py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#00abf0] mt-24 mb-12">B.Tech(CS/IT/CST)</h2>
        <p className="mb-6 text-lg text-[#ededed]">
          It provides a comprehensive platform covering all core subjects of B.Tech CSE/IT/CST, offering the best curated playlists from
          YouTube. With multiple options for each subject, students can easily search, 
          choose their topic, and get started with learning. It's designed to simplify study and enhance academic success effectively.
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