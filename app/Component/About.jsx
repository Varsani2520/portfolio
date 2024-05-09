import '../style.css'

export default function About() {
  return (
    <center>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Hi, I&apos;m Ranjani Varsani, a passionate web developer with a keen eye for design. I&apos;ve been creating beautiful and
              functional websites for the past 5 years, always striving to push the boundaries of what&apos;s possible on the
              web.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              In my free time, you can find me exploring the latest web technologies, experimenting with new design
              trends, or hiking in the great outdoors. I&apos;m a lifelong learner, constantly seeking to expand my skills and
              knowledge to deliver the best possible experience for my clients.
            </p>
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