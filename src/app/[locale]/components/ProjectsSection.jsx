"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const ProjectsSection = (props) => {

  const projectsData = [
    {
      id: 1,
      title: props.web1,
      description: props.web1discription,
      image: "/images/projects/portfolioMO.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: props.web2,
      description: props.web2discription,
      image: "/images/projects/StorylifestoneIndex.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Mosquito5142/Storylifestone-E-commerce-PHP",
      previewUrl: "http://obgiftshop.onlinewebshop.net/",
    },
    {
      id: 3,
      title: props.web3,
      description: props.web3discription,
      image: "/images/projects/VachiravitBlog.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Mosquito5142/Blogreact",
      previewUrl: "https://vachiravitblog-iota.vercel.app/",
    },
    {
      id: 4,
      title: props.web4,
      description: props.web4discription,
      image: "/images/projects/coffeeAPP.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Mosquito5142/Blogreact",
      previewUrl: "https://vachiravitblog-iota.vercel.app/",
    }
  ];

  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        {props.myprojects}
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name={'All'}
          namemenu={props.all}
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={'Web'}
          namemenu={props.web}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={'Mobile'}
          namemenu={props.mobile}
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
