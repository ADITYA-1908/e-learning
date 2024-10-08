import React from 'react';
import pic from '../Image/header-image.png';
import Contact from '../Pages/Contact/Contact';
import Courses from '../Pages/Courses/Courses';
import CardsSection from './CardsSection';

export default function Home() {
    return (
        <div className="overflow-x-hidden">
            {/* First Section - Full Screen */}
            <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between p-4 sm:p-8 bg-[#081b29]">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <h1 className="text-4xl sm:text-5xl mt-16 md:text-6xl lg:text-6xl font-bold mb-6 text-[#00abf0]">Eduverse</h1>
                    <p className="text-lg sm:text-xl md:text-xl lg:text-xl text-[#ededed]">
                        It is a platform designed to provide college students with curated playlists for
                        studying and learning, as well as comprehensive roadmaps for mastering programming
                        languages and a wide range of technologies. It aims to be the best
                        resource for students looking to excel in their core subjects and technical skills.
                    </p>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src={pic}
                        alt="Description of the image"
                        className="w-full sm:w-3/4 md:w-2/3 lg:w-5/6 xl:w-10/12 object-cover"
                    />
                </div>
            </section>
            <h1 className="text-4xl font-bold text-center bg-[#112e42] text-[#00abf0]">Content</h1>
            <CardsSection />
            <Courses />
            <Contact />
        </div>
    );
}