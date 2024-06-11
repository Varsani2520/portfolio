import '../style.css';

export default function About() {
  return (
    <center>
      <section className="w-full py-12 md:py-24 lg:py-32 wavy-background">
          {/* Image displayed at the top on mobile */}
      <div className="md:hidden mb-8">
      <img src="/Images/me1.jpeg" alt="Paris" className="aspect-square rounded-full object-cover" width={300} height={300} />
      </div>
        <div className="container grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6">
         

          {/* Content displayed below the image */}
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
            <p className="text-white dark:text-white">
              Welcome to my website! I&apos;m Ranjani  Varsani, a Computer Science and Engineering undergraduate student with a passion for developing innovative software solutions. I specialize in Android App Development and Full Stack Web Development, and have experience working with technologies such as Kotlin, Node.js, Python, HTML, CSS, JavaScript, and Firebase.
            </p>
          </div>

          {/* Image displayed on the right on larger screens */}
          <div className="hidden md:flex justify-center">
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img src="/Images/me1.jpeg" alt="Paris" className="aspect-square rounded-full object-cover" width={300} height={300} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </center>
  );
}
