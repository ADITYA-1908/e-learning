import React from 'react';
import Card from './Card';

export default function Courses() {
    return (
        <div>
            <section className='bg-[#112e42]'>
                <div className="md:w-100 mx-auto">
                    <h1 className="text-4xl font-bold mb-4 text-center text-[#00abf0]">Courses</h1>
                    <p className="text-lg leading-relaxed text-center ml-12 mr-12 text-[#ededed]">
                    There are three comprehensive courses covering all core Computer Science subjects, along with in-depth
                     training in programming languages, frameworks, and essential tools. Perfect for mastering both 
                     theoretical and practical skills.
                    </p>
                    <p className="text-lg leading-relaxed font-bold text-center ml-12 mr-12 text-[#00abf0]">
                        Tap the courses and Explore
                    </p>
                </div>
            </section>
            <Card/>
        </div>
    );
}