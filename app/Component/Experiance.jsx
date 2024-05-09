import { Button } from '@/components/ui/button';
import React from 'react';
import '../style.css'
const Experiance = () => {
    return (
        <center>
            <section className="w-full text-center  dark pattern geeks">
                <div className="container space-y-8 px-4 md:px-6 pb-10 justify-center text-center">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl pb-2">My Experiance</h2>
                        <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Check out some of the projects I&apos;ve worked on.
                        </p>
                    </div>
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
            </section>
        </center>
    );
}

export default Experiance;
