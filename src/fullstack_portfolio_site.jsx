import { motion } from "framer-motion";
import { Github, Mail, MapPin } from "lucide-react";

// Animated variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const cardHover = { scale: 1.03, y: -6, boxShadow: "0 20px 40px rgba(15,23,42,0.12)" };

export default function FullstackPortfolioSite() {
  // simplified skills (no levels)
  const skills = [
    "React.js",
    "JavaScript (add ES6+)",
    "HTML5, CSS3, Bootstrap",
    "Python",
    "PostgreSQL & MySQL",
    "Git & GitHub",
    "Power BI",
    "Zoho Desk",
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-amber-800 via-amber-700 to-amber-900 text-amber-50"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div variants={item}>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Umar Ahmed K M
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-amber-600 font-semibold mb-6"
          >
            React / Full Stack Developer
          </motion.h2>

          <motion.p
            variants={item}
            className="text-yellow-600 leading-relaxed mb-6"
          >
            React & Full Stack Developer with hands-on experience in building responsive web applications using React.js, JavaScript, HTML, and CSS. Worked on healthcare, HR, and business applications, including both frontend and backend development using Python and PostgreSQL.
          </motion.p>

          <motion.div className="flex gap-4 flex-wrap" variants={item}>
            <a
              href="https://github.com/Umar4567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-amber-500 text-white rounded-2xl shadow hover:bg-amber-600 cursor-pointer"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="tel:7892407046"
              className="flex items-center gap-2 px-5 py-3 border border-amber-500 text-amber-600 rounded-2xl hover:bg-amber-50 cursor-pointer"
            >
              <Mail size={18} /> Call: 7892407046
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl shadow-xl p-10"
        >
          <h3 className="text-2xl text-black font-semibold mb-6">Quick Info</h3>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> India
            </li>
            <li>Experience: 1.5+ Years (Development)</li>
            <li>Specialization: React.js, JavaScript, Full Stack Development</li>
          </ul>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2 variants={item} className="text-3xl font-bold mb-10">
          Skills
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              className="bg-white rounded-2xl p-6 shadow transition-transform duration-300 ease-out cursor-pointer"
              variants={item}
              whileHover={{
                scale: 1.04,
                y: -8,
                boxShadow: "0 20px 40px rgba(15,23,42,0.12)",
              //  backgroundColor: "rgba(250, 204, 21, 0.06)" // subtle amber tint on hover
              }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <p className="font-semibold text-gray-700">{skill}</p>
              {/* skill level / percent removed */}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Experience Section */}
      <motion.section
        variants={item}
        className="bg-white/70 backdrop-blur"
      >
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
          <motion.div
            className="bg-white rounded-3xl p-8 shadow"
            whileHover={cardHover}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-black">Full Stack Developer – Summit Solutions</h3>
            <p className="text-gray-500 mb-4">April 2022 – March 2023</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Developed responsive UI using HTML, CSS, Bootstrap, and React.js</li>
              <li>Built and maintained backend logic using Python and PostgreSQL</li>
              <li>Created RESTful APIs and database functions</li>
              <li>Followed MVC architecture and performed manual testing</li>
              <li>Fixed bugs and optimized application performance</li>
              <li>Worked on projects: Psysoft and Camsoft</li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">Project details are confidential and cannot be shared publicly.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section (updated: added OPslavvy & HR-company-projects; GitHub links shown on cards) */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2 variants={item} className="text-3xl font-bold mb-10">
          Projects
        </motion.h2>

        <motion.div
          className="grid gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {[
            {
              id: "psysoft",
              title: "Psysoft",
              desc: "Healthcare platform for patient records, appointments and dashboards.",
              tech: ["React", "Python", "PostgreSQL"],
             
            },
            {
              id: "camsoft",
              title: "Camsoft",
              desc: "HR & attendance management system with admin workflows and reporting.",
              tech: ["React", "JavaScript", "PostgreSQL"],
              
            },
            {
              id: "hrms",
              title: "Human Resource Management System (HRMS)",
              desc: "Complete HR management system with employee modules and admin workflows.",
              tech: ["JavaScript", "React", "PostgreSQL"],
              url: "https://github.com/Umar4567/HR-company-projects"
            },
            {
              id: "opslavvy",
              title: "OPslavvy Solutions Website",
              desc: "Modern business website showcasing company services and branding.",
              tech: ["HTML", "CSS", "JavaScript"],
              url: "https://github.com/Umar4567/OPslavvy-Solutions.io"
            },
          ].map((p) => (
            <motion.div
              key={p.id}
              variants={item}
              whileHover={{ translateY: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="group flex items-center justify-between gap-6 rounded-3xl px-6 py-5 bg-white/6 border border-white/10 backdrop-blur-sm hover:shadow-lg transition"
            >
              <div>
                <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-white group-hover:from-white">
                  {p.title}
                </h3>
                <p className="text-sm text-amber-100/80 mt-1 max-w-xl">{p.desc}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-white/10 text-amber-50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* show GitHub link icon when url provided */}
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/8 hover:bg-white/20 transition no-underline"
                  aria-label={`Open ${p.title} on GitHub`}
                >
                  <Github size={18} className="text-amber-50" />
                </a>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer variants={item} className="bg-amber-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Umar Ahmed</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://github.com/Umar4567" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">GitHub</a>
            <a href="mailto:umarahmed4567@gmail.com" className="hover:underline">Email</a>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
}