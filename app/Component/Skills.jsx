'use client';
import React, { useState, useEffect } from 'react';
import './Skills.css'; // Ensure you have the appropriate CSS file

const Skills = () => {
    const skills = [
        { name: 'HTML', image: 'https://usefulangle.com/img/thumb/html.png' },
        { name: 'CSS', image: 'https://dkl2gez3gijkp.cloudfront.net/lib/uploads/2012/12/css-3-help1.jpg' },
        { name: 'JavaScript', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFZ0Gy068hsbTG6MVcSBE11zBx4gRtcPgk3p5kdZnrbg&s' },
        { name: 'React', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqcEbibDHXMHh8Xaco3lc8KKOuiO8A9jAkE46dh_5EOQ&s' },
        { name: 'Next.Js', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTno-qi9D-vYWi7qcxO8ZdGhoGPuYDD3nRvqaxDcqxJOg&s' },
        { name: 'Node.js', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2Ft7qEVQjmr6ac6q50OZJ61N3n1eG8SeN_g2RfjmbdDHAeQ4XuhcHh5_hiyksoS7d5w&usqp=CAU' },
        { name: 'Firebase', image: 'https://yt3.googleusercontent.com/GsP5Yvc5jOSop4SJf_75wdOYaEbO-7ZyYhnARodAGRnEMh-OQjGPGzUz2ZtzsHPtqFyHGvmbEtI=s900-c-k-c0x00ffffff-no-rj' },
        { name: 'MongoDB', image: 'https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png' },
        { name: 'ExpressJs', image: 'https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setSlidesToShow(3);
            } else {
                setSlidesToShow(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? skills.length - slidesToShow : prevIndex - slidesToShow));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex >= skills.length - slidesToShow ? 0 : prevIndex + slidesToShow));
    };

    return (
        <center>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6">
                    <div className="space-y-4 text-center md:text-left">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Technical Strength</h2>
                    </div>
                </div>

                <div className="container relative">
                    <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded z-10">Prev</button>
                    <div className="slider-container overflow-hidden flex justify-center">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}>
                            {skills.map((skill, index) => (
                                <div key={index} className="slide flex-none w-full" style={{ flex: `0 0 ${100 / slidesToShow}%` }}>
                                    <img
                                        src={skill.image}
                                        alt={skill.name}
                                        className="w-full h-48 object-cover border border-green-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded z-10">Next</button>
                </div>
            </section>
        </center>
    );
};

export default Skills;
