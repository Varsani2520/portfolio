import { Button } from '@/components/ui/button';
import React from 'react';
import '../style.css'
const Portfolio = () => {
    return (
        <center>
            <section className="w-full py-12 md:py-24 lg:py-32 dark">
                <div className="container space-y-8 px-4 md:px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Portfolio</h2>
                        <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Check out some of the projects I&apos;ve worked on.
                        </p>
                    </div>
                    <div>
                        <div className="dot">
                            <div className="experience-1">
                                <p className="mx-auto text-green-600">2022-2023</p>
                                <h2>Infinitie Technology</h2>
                                <h3>Front End Developer</h3>
                                <pre className="mx-auto ">
                                I completed an internship <br/>
                                as a front end web developer  <br/>
                                at Infinitie Technology Pvt. Ltd.
                                </pre>
                            </div>

                        </div>
                        <div className="line"></div>
                        <div className="dot"></div>
                        <div className="line">
                        <div className="experience-2">
                                <p className="mx-auto text-green-600">2022-2023</p>
                                <h2>Infinitie Technology</h2>
                                <h3>Front End Developer</h3>
                                <pre className="mx-auto ">
                                I completed an internship  <br/>
                                as a front end web-<br/> developer at Infinitie <br/>Technology Pvt. Ltd.
                                </pre>
                            </div>
                        </div>
                        <div className="dot"></div>
                    </div>

                </div>
            </section>
        </center>
    );
}

export default Portfolio;
