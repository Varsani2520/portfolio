"use client";

import Link from "next/link";
import "../style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

export default function Projects() {
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
           slidesPerView={4}
           loop={true}
           autoplay={{
             delay: 2500,
             disableOnInteraction: false,
           }}
           pagination={{
             clickable: true,
           }}
           navigation={true}
           modules={[Autoplay, Pagination, Navigation]}
           className="mySwiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="card my-10">
                  <div className="image">
                    <img src={project.imageSrc} alt={project.title} />
                  </div>
                  <div className="content">
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <Link href="#">View Project</Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </center>
  );
}
