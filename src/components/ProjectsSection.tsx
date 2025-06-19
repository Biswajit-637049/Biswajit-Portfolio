import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Todo App",
    description: "A full-stack to-do application with authentication, CRUD operations, and responsive UI.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind","materialUi"],
    image: "todo.jpg",
    github: "https://github.com/Biswajit-637049/ToDo-App",
    demo: "https://biswajit-todo-app.netlify.app/",
  },
  {
    title: "Portfolio Site",
    description: "My personal developer portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "portfolioo.jpg",
    github: "https://github.com/Biswajit-637049/Biswajit-Protfolio.git",
    demo: "https://biswajittt09-portfoli.netlify.app/",
  },
  {
    title: "BookSpace",
    description: "BookSpace is a full-stack web application that provides a seamless online book shopping experience with secure authentication and role-based features.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind css"],
    image: "course.avif",
    github: "https://github.com/Biswajit-637049/BookSpace",
    demo: "https://biswajits-bookspace.netlify.app/",
  },
  {
    title: "Video-Tutorial",
    description: "Video-Tutorial is a full-stack web application that provides two role one is user can watch video search by category and add in watchlatter(using redux).Admin role add video.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind css","Material Ui"],
    image: "video-tutorial.jpg",
    github: "https://github.com/Biswajit-637049/Video-Tutorial.git",
    demo: "",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h2>
        <p className="text-center text-gray-400 mb-16 text-sm md:text-base">
          A showcase of some projects I've built with passion, precision, and caffeine ☕
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
