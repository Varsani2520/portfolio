import '../style.css'

export default function About() {
  return (
    <center>
      <section className="w-full py-12 md:py-24 lg:py-32 wavy-background">
        <div className="container grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="text-white dark:text-white">
              Hi, I&apos;m Ranjani Varsani, a passionate web developer with a keen eye for design. I&apos;ve been creating beautiful and
              functional websites for the past 5 years, always striving to push the boundaries of what&apos;s possible on the
              web.
            </p>
            <p className="text-white dark:text-white">
              In my free time, you can find me exploring the latest web technologies, experimenting with new design
              trends, or hiking in the great outdoors. I&apos;m a lifelong learner, constantly seeking to expand my skills and
              knowledge to deliver the best possible experience for my clients.
            </p>
            <p className="text-white dark:text-white"> Welcome to my website! I'm Arwaz Khan, a Computer Science and Engineering undergraduate student with a passion for developing innovative software solutions. I specialize in Android App Development and Full Stack Web Development, and have experience working with technologies such as Kotlin, nodejs, Python, HTML, CSS, JavaScript, and Firebase.

              I have developed various projects such as HealthIQ, Resume2Hire, EdRoom, HostelMate, and a Space Invaders game using my skills and knowledge. As a Lead/Web Developer at Alumni Of GEC Bilaspur (ABGEC), I have been involved in creating a website (www.abgec.in) for the alumni organization of our college. I am also a Gate qualified candidate.

              Apart from my technical expertise, I possess soft skills such as problem-solving, teamwork, leadership, and analytical thinking. I have also been actively involved in technical clubs and organizations, such as the Developer's Club and GDSC GECB, where I have taken up leadership roles and responsibilities.

              Thank you for visiting my website. Feel free to explore my portfolio, projects, and blog section to know more about me and my work. </p>
          </div>
          <div className="flex justify-center">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src="/Images/me1.jpeg" alt="Paris" className="aspect-square rounded-full object-cover" height={300} width={300} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </center>

  )
}