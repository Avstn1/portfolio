import Navbar from './components/Navbar/Navbar';
import ProjectCard from './components/Card/Card';
import './globals.css';

export default function Home() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A sleek and responsive developer portfolio built with Next.js and Tailwind CSS.",
      link: "https://yourportfolio.com",
      tags: ["nextjs", "tailwind", "design"],
      emoji: "💻",
    },
    {
      title: "Calypso",
      description: "Calypso is a platform connecting artists and enthusiasts with diverse art, commissions, and analytics to grow creative communities.",
      link: "https://github.com/CSCC012023/final-project-s23-calypso",
      tags: ["react", "api", "typescript"],
      emoji: "⛅",
    },
    {
      title: "Personal Resume Tailor Automation",
      description: "A Python tool that uses OpenAI’s GPT-3.5 Turbo API to intelligently customize your resume based on any job description, with a simple tkinter GUI and Word/PDF export.",
      link: "https://github.com/Avstn1/sp1py",
      tags: ["python", "openai", "tkinter", "resume", "automation", "docx"],
      emoji: "📄",
    },
    {
      title: "FEIN",
      description: "A real-time functional stock paper trading application with an appealing user interface.",
      link: "https://github.com/UTSCC09/project-fein",
      tags: ["react", "api", "typescript"],
      emoji: "📈",
    },
  ];

  return (
    <div className="bg-midnight text-sand scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex items-center justify-center px-8 md:px-20 relative"
      >
        {/* >>>> HUGE > SYMBOL ADDED HERE <<<< */}
        <div className="absolute left-0 md:left-12 top-1/2 transform -translate-y-80 text-cyan-500 text-[400px] font-bold select-none opacity-10 pointer-events-none z-0">
          &gt;
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl z-10 ml-36 mt-10">
          {/* Left Text Section */}
          <div className="flex-1 md:pr-12 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-widest text-neutral-100 drop-shadow-lg">
              Austin Bartolome
            </h1>
            <p className="mt-4 text-md md:text-lg text-gray-400 font-mono uppercase tracking-wide">
              Software Engineer, Front End & App Developer.
            </p>
            <p className="mt-6 text-sm md:text-base text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0">
              I'm a Software Engineering graduate from the University of Toronto with hands-on experience in full-stack development, React, and backend tools like Express. I’ve built real-time apps, smart UI features, and internal tools through co-ops and academic projects. Passionate about clean design, strong code, and always learning something new.
            </p>

            {/* Download CV Button */}
            <div className="mt-8">
              <a
                href="/Austin Bartolome Resume.pdf"
                download
                className="inline-flex items-center gap-2 text-cyan-400 border border-cyan-400 hover:bg-cyan-500 hover:text-black font-semibold px-6 py-3 rounded-xl transition-all shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                  />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative w-[32rem] h-[36rem] flex items-center justify-center">
            {/* Top-left blue corner */}
            <div className="absolute top-[-14px] left-[-14px] w-14 h-14 border-t-4 border-l-4 border-cyan-400 rounded-tl-[1.5rem] z-0" />

            {/* Bottom-right blue corner */}
            <div className="absolute bottom-[-14px] right-[-14px] w-14 h-14 border-b-4 border-r-4 border-cyan-400 rounded-br-[1.5rem] z-0" />

            {/* Rounded image */}
            <div className="relative w-[27rem] h-[31rem] border-4 border-gray-400 shadow-lg z-10 rounded-2xl overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover object-[center_80%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="h-screen flex flex-col justify-center items-center px-4 max-w-5xl mx-auto"
      >
        <h2 className="text-5xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 w-full">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="h-screen flex flex-col justify-center items-center px-4 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-5xl font-bold mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
          {[
            { icon: "🐍", name: "Python" },
            { icon: "☕", name: "Java" },
            { icon: "💾", name: "C" },
            { icon: "⚛️", name: "React" },
            { icon: "🌐", name: "HTML" },
            { icon: "🎨", name: "CSS" },
            { icon: "🧠", name: "SDLC" },
            { icon: "🧪", name: "Testing" },
            { icon: "🤖", name: "Automation" },
          ].map((skill, i) => (
            <div
              key={i}
              className="bg-espresso rounded-xl p-6 border border-bronze shadow hover:shadow-lg transition"
            >
              <span className="text-3xl">{skill.icon}</span>
              <h3 className="mt-2 text-lg font-semibold text-amber">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen flex flex-col justify-center items-center text-center px-4 max-w-2xl mx-auto"
      >
        <h2 className="text-5xl font-bold mb-10 text-center">Contact</h2>
        <div className="space-y-6 text-lg">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:austinkbartolome@gmail.com"
              className="text-amber hover:underline"
            >
              austinkbartolome@gmail.com
            </a>
          </p>
          <p>
            📱 Phone:{" "}
            <a href="tel:+1234567890" className="text-amber hover:underline">
              (123) 456-7890
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/austin-bartolome-a406061ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber hover:underline"
            >
              💼 LinkedIn
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
