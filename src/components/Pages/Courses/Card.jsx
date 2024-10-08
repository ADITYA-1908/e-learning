import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, to }) => (
    <Link to={to} className="flex justify-center">
        <div className="w-[190px] h-[90px] p-6 text-center bg-[#E9E581] rounded-lg transition-all duration-400 hover:bg-[#ededed] hover:shadow-lg">
            <h6 className="text-xl text-center font-medium text-[#413960]  overflow-hidden text-ellipsis">
                {title}
            </h6>
        </div>
    </Link>
);

const CardsSection = () => {
    return (
        <section className="flex-1  py-16 bg-[#112e42]">
            <div className="mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 custom-min-width lg:grid-cols-4 xl:grid-cols-4 gap-6 justify-items-center">
                    <Card title="B.Tech" to="/btech" />
                    <Card title="BCA" to="/bca" />
                    <Card title="MCA" to="/mca" />
                    <Card title="Programming Language" to="/programming-language" />

                </div>
            </div>
        </section>
    );
};

export default CardsSection;