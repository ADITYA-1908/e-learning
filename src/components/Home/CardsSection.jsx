import React from 'react';
import book from '../Image/book.png';
import Coding from '../Image/coding.png';
import Lecture from '../Image/lecture.png';
import Rodemap from '../Image/road-map.png';


const CardItem = ({icon,title }) => (
    <div className="p-4 flex justify-center "> {/* Center the card within its parent */}
        {/* Fixed width and height for the cards */}
        <div className="w-[250px] h-[220px] p-14 text-center text-black font-bold bg-[#E9E581] rounded-lg transition-all duration-400 hover:bg-[#ededed] hover:shadow-lg pt-22">
            <img src={icon} alt="" className="w-12 h-14 mx-auto " />
            {/* Ensure title appears in a single line */}
            <h6 className="mt-5 mb-0 text-xl text-center font-medium text-[#413960]  overflow-hidden text-ellipsis">
                {title}
            </h6>
        </div>
    </div>
);

const CardsSection = () => {
    return (
        <section className="mt-0 py-8 bg-[#112e42]">
            <div className=" mx-auto px-4">
                {/* Responsive grid layout with manual column settings */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 custom-min-width lg:grid-cols-4 xl:grid-cols-4 gap-6 justify-items-center">
                    <CardItem icon={book} title="3 Courses" />
                    <CardItem icon={Lecture} title="40+ Lectures" />
                    <CardItem icon={Rodemap} title="15+ Roadmaps" />
                    <CardItem icon={Coding} title="25+ Language " />
                </div>
            </div>
        </section>
    );
};

export default CardsSection;
