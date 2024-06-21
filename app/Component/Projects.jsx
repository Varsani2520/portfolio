"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "../style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Pagination, Navigation, Autoplay]);

const projects = [
  {
    id: 1,
    title: "eShop",
    imageSrc: "/Images/eshop.png",
    summary: "A brief summary of Project 1.",
  },
  {
    id: 2,
    title: "eNews",
    imageSrc: "/Images/news.png",
    summary: "A brief summary of Project 2.",
  },
  {
    id: 3,
    title: "spotify",
    imageSrc: "/Images/spotify.png",
    summary: "A brief summary of Project 3.",
  },
  {
    id: 4,
    title: "spotify",
    imageSrc: "/Images/spotify.png",
    summary: "A brief summary of Project 3.",
  },
  {
    id: 5,
    title: "spotify",
    imageSrc: "/Images/spotify.png",
    summary: "A brief summary of Project 3.",
  },
  // Add more projects as needed
];

const Projects = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Example threshold for small screens
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isSmallScreen) {
    return (
      <center>
        <section className="w-full py-12 md:py-24 lg:py-32 dark">
          <div className="container space-y-8 px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Projects
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of the projects I&apos;ve worked on.
              </p>
            </div>
          </div>

          <div className="container">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              className="mySwiper"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="card my-10">
                    <div className="image">
                      <img
                        src={project.imageSrc}
                        alt={project.title}
                        className="object-cover w-full h-64"
                      />
                    </div>
                    <div className="content p-4">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-700">{project.summary}</p>
                      <Link href="#" className="text-blue-500 mt-2">
                        View Project
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </center>
    );
  } else {
    return (
      <center>
        <section className="w-full py-12 md:py-24 lg:py-32 dark">
          <div className="container space-y-8 px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Projects
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of the projects I&apos;ve worked on.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container">
            {projects.map((project) => (
              <div key={project.id} className="card my-10">
                <div className="image">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="object-cover w-full h-64"
                  />
                </div>
                <div className="content p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700">{project.summary}</p>
                  <Link href="#" className="text-blue-500 mt-2">
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </center>
    );
  }
};

export default Projects;
