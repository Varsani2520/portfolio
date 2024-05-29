import Link from "next/link";
import '../style.css'
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of the projects I&apos;ve worked on.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 container sm:flex-none ">
          {projects.map((project) => (
            <div key={project.id} >
            
                <div className="container">
                  <div className="card">
                    <div className="image">
                      <img href="#" src={project.imageSrc} />
                    </div>
                    <div className="content">
                      <h3>This is content</h3>
                      <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
        {/* for mobile device swiper type  */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 container sm:block ">
          {projects.map((project) => (
            <div key={project.id} >
            
                <div className="container">
                  <div className="card">
                    <div className="image">
                      <img href="#" src={project.imageSrc} />
                    </div>
                    <div className="content">
                      <h3>This is content</h3>
                      <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </section>
    </center>
  );
}
