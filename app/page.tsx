"use client";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AnimatedText } from "./components/animatedtext";
import { experience, projects } from "./constants";
import Card from "./components/card";

export default function Home() {
  const intro = "Hi! I'm Michael Wu";
  const aboutme = "I'm a developer from New York with interests in Robotics, Machine Learning, Software Engineering, and Game Development. Outside of work I love playing Roblox and TFT";
  const sections = ["Experience", "Projects"];
  const [selectedTab, setSelectedTab] = useState(sections[0]);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center text-center">
        <motion.div className="w-48 h-48 relative my-6">
          <Image
            className="object-cover rounded"
            id="carouselImage"
            src={'/michaelwu.jpg'}
            alt="progress image"
            fill={true}
          />
        </motion.div>
        <AnimatedText text={intro} />
        <motion.div
          className="font-mono text-white text-2xl my-5"

        >
          {aboutme}
        </motion.div>

        <div className="window">
          <div className="flex flex-row tabs">
            {sections.map((section, idx) => {
              return (
                <div
                  key={idx}
                  className={`font-mono relative flex-grow px-8 ${section === selectedTab ? 'selected' : ''}`}
                  onClick={() => {
                    console.log(section)
                    setSelectedTab(section)
                  }}
                >
                  {section}
                  {section === selectedTab ? (
                    <motion.div className="underline " layoutId="underline" />
                  ) : null}
                </div>
              )
            })}
          </div>
          <div className="no-scrollbar h-64 items-center justify-center text-center overflow-auto p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className=""
              >
                {selectedTab === "Experience"
                  ? experience.map((exp, idx) => (
                    <Card
                      key={idx}
                      title={exp.title}
                      desc={exp.desc}
                      date={exp.date}
                      stack={exp.stack}
                    />
                  ))
                  : null}
                {selectedTab == "Projects" ?
                  projects.map((project, idx) => (
                    <Card
                      key={idx}
                      title={project.title}
                      desc={project.desc}
                      date={project.date}
                      stack={project.stack}
                      link={project.link}
                    />
                  ))

                  : null}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
