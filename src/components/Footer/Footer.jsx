import { Instagram, Linkedin } from 'lucide-react';
import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#112e42]  w-full h-full m-0 p-0 bottom-0">
            <div className="mx-auto w-full max-w-screen-xl px-4">
                <div className="flex flex-row items-center justify-center gap-2 h-full">
                    <span className="text-lg text-[#ededed] text-center pt-5  hover:text-[#00abf0]">
                        Design and Crafted by adi_subham
                    </span>
                    <div className="flex items-center gap-1 pt-5">
                        <a href="https://www.linkedin.com/in/aditya-basantia-a45b20227" target="_blank" rel="noopener noreferrer" className="text-[#ededed] hover:text-[#00abf0] mx-1">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://www.instagram.com/adi_subham?igsh=ZWFtdno4eXIzd3hi" target="_blank" rel="noopener noreferrer" className="text-[#ededed] hover:text-[#00abf0] mx-1">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}