import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const courseData = [
  {
    id: 1,
    title: "C Programming",
    imageUrl: "../public/images-PL/CP.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR&feature=shared"]
  },
  {
    id: 2,
    title: "c++ with DSA",
    imageUrl: "../public/images-PL/c++.png",
    enrollUrl: ["https://youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&feature=shared"]
  },
  {
    id: 3,
    title: "JAVA with DSA",
    imageUrl: "../public/images-PL/java.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&feature=shared"]
  },
  {
    id: 4,
    title: "Python",
    imageUrl: "../public/images-PL/python.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0&feature=shared",
      "https://youtube.com/playlist?list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12&feature=shared"]
  },
  {
    id: 5,
    title: "Django",
    imageUrl: "../public/images-PL/Django.png",
    enrollUrl: ["https://youtube.com/playlist?list=PLu71SKxNbfoDOf-6vAcKmazT92uLnWAgy&feature=shared"]
  },
  {
    id: 6,
    title: "HTML",
    imageUrl: "../public/images-PL/HTML.png",
    enrollUrl: ["https://youtu.be/k7ELO356Npo?feature=shared",
      "https://youtube.com/playlist?list=PLu71SKxNbfoDBNF5s-WH6aLbthSEIMhMI&feature=shared"
    ]
  },
  {
    id: 7,
    title: "CSS",
    imageUrl: "../public/images-PL/CSS.png",
    enrollUrl: ["https://youtu.be/ESnrn1kAD4E?feature=shared",
      "https://youtube.com/playlist?list=PLhzIaPMgkbxBk9-drEC0MBPqEOXpVlwY4&feature=shared"
    ]
  },
  {
    id: 8,
    title: "Tailwild CSS",
    imageUrl: "../public/images-PL/tailwind.png",
    enrollUrl: ["https://youtube.com/playlist?list=PLUcsbZa0qzu0OrMJWIuhvibOPZm_IHGTl&feature=shared"]
  },
  {
    id: 9,
    title: "Botstrap",
    imageUrl: "../public/images-PL/Bootstrap.png",
    enrollUrl: ["https://youtu.be/vpAJ0s5S2t0?feature=shared",
      "https://youtube.com/playlist?list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev&feature=shared"
    ]
  },
  {
    id: 18,
    title: "javascript",
    imageUrl: "../public/images-PL/javascript.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&feature=shared",
      "https://youtube.com/playlist?list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW&feature=shared"
    ]
  },
  {
    id: 10,
    title: "React.js",
    imageUrl: "../public/images-PL/reactjs.png",
    enrollUrl: ["https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&feature=shared"
    ]
  },
  {
    id: 11,
    title: "Redux.js",
    imageUrl: "../public/images-PL/redux.jpeg",
    enrollUrl: ["https://youtu.be/1i04-A7kfFI?feature=shared"
    ]
  },
  {
    id: 12,
    title: "React Native",
    imageUrl: "../public/images-PL/react native.png",
    enrollUrl: ["https://youtube.com/playlist?list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&feature=shared"]
  },

  {
    id: 19,
    title: "Angular.js",
    imageUrl: "../public/images-PL/Angular.png",
    enrollUrl: ["https://youtube.com/playlist?list=PLC3y8-rFHvwjfc2yJlldxjodwpUhVvDPg&feature=shared"]
  },
  {
    id: 18,
    title: "Next.js",
    imageUrl: "../public/images-PL/nextjs.png",
    enrollUrl: ["https://youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&feature=shared",
      "https://youtube.com/playlist?list=PLu0W_9lII9agtWvR_TZdb_r0dNI8-lDwG&feature=shared"
    ]
  },
  {
    id: 14,
    title: "Express.js",
    imageUrl: "../public/images-PL/express.png",
    enrollUrl: ["https://youtu.be/7H_QH9nipNs?feature=shared",
      "https://youtu.be/WXI27H8oPUM?feature=shared"
    ]
  },
  {
    id: 15,
    title: "Node.js",
    imageUrl: "../public/images-PL/nodejs.png",
    enrollUrl: ["https://youtu.be/LAUi8pPlcUM?feature=shared"]
  },
  {
    id: 16,
    title: "MongoDB",
    imageUrl: "../public/images-PL/mongo.png",
    enrollUrl: ["https://youtu.be/J6mDkcqU_ZE?feature=shared",
      "https://youtube.com/playlist?list=PLRAV69dS1uWQ6CZCehxKy0rjkqhQ2Z88t&feature=shared"
    ]
  },
  {
    id: 17,
    title: "FireBase",
    imageUrl: "../public/images-PL/firebase.png",
    enrollUrl: ["https://youtube.com/playlist?list=PLinedj3B30sCw8Qjrct1DRglx4hWQx83C&feature=shared"
    ]
  }, 
  {
    id: 20,
    title: "SQL",
    imageUrl: "../public/images-PL/sql.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PLGf6Ram2AQh2GpckMjstVH6AaTm0kPfgI&feature=shared"
    ]
  },
  {
    id: 21,
    title: "PHP",
    imageUrl: "../public/images-PL/php.jpeg",
    enrollUrl: ["https://youtu.be/1SnPKhCdlsU?feature=shared"
    ]
  },
  
  {
    id: 22,
    title: "Cyber security",
    imageUrl: "../public/images-PL/cybersecurity.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PLEiEAq2VkUUJfPOj5nRounXvf3n17PCft&feature=shared",

    ]
  },
  {
    id: 23,
    title: "Solidity",
    imageUrl: "../public/images-PL/solidity.png",
    enrollUrl: ["https://youtube.com/playlist?list=PLWUCKsxdKl0oksYr6IG_wRsaSUySQC0ck&feature=shared"
    ]
  },
  {
    id: 24,
    title: "Ruby",
    imageUrl: "../public/images-PL/ruby.png",
    enrollUrl: ["https://youtube.com/playlist?list=PLgPJX9sVy92yefe1xmyxgcyXjxmLHsSEV&feature=shared",

    ]
  },
  {
    id: 25,
    title: "Go",
    imageUrl: "../public/images-PL/go.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PLRAV69dS1uWQGDQoBYMZWKjzuhCaOnBpa&feature=shared"
    ]
  },
  {
    id: 26,
    title: "Kotlin",
    imageUrl: "../public/images-PL/kotline.jpeg",
    enrollUrl: ["https://youtube.com/playlist?list=PLsyeobzWxl7rooJFZhc3qPLwVROovGCfh&feature=shared"
    ]
  },
//----------------------------------------------------------------
  {
    id: 27,
    title: "kubernetes",
    imageUrl: "../public/images-PL/kubernetes.jpeg",
    enrollUrl: ["https://www.youtube.com/live/YXfLAWGTI38?feature=shared"
    ]
  },
  {
    id: 28,
    title: "Devops",
    imageUrl: "../public/images-PL/devops.png",
    enrollUrl: ["https://youtube.com/playlist?list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak&feature=shared",
    ]
  },

  {
    id: 29,
    title: "Flutter",
    imageUrl: "../public/images-PL/flutter.png",
    enrollUrl: ["https://youtu.be/j-LOab_PzzU?feature=shared",
    ]
  },
  {
    id: 30,
    title: "Machine Learning",
    imageUrl: "../public/images-PL/machin-learning.jpeg",
    enrollUrl: ["https://youtu.be/JxgmHe2NyeY?feature=shared",
    ]
  },


  //HCI PMC BDA
];


const EnrollButton = ({ url, index }) => (
  <a
    href={url}
     target="_blank"
    className="flex-1 text-center bg-[#00abf0]  text-white font-bold py-2 px-4 rounded transition duration-300"
  >
    Let's Start {index > 0 ? '': ''}
  </a>
);

const CourseCard = ({ title, imageUrl, enrollUrl }) => (
  <div className="bg-[#E9E581] border rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 flex flex-col justify-between">
    <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
    <div className="p-4 text-center flex-grow">
      <h5 className="text-xl font-semibold mb-2">{title}</h5>
    </div>
    <div className="px-4 pb-4 flex space-x-3">
      {enrollUrl.map((url, index) => (
        <EnrollButton key={index} url={url} index={index} />
      ))}
    </div>
  </div>
);

const PL = () => {
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
          It provides a comprehensive platform covering all core subjects of B.Tech CSE/IT/CST, offering the best curated 
          playlists from
          YouTube. With multiple options for each subject, students can easily search, 
          choose their topic, and get started with learning. It's designed to simplify study and
           enhance academic success effectively.
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

export default PL;