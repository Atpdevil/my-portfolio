import React from "react";
import { skills, experiences } from "../constants";
import { Timeline, Text } from "@mantine/core";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container h-full">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Gokul
        </span>{" "}

      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Pursuing Software Engineering in CSE at AMC Engineering College, with a
          strong focus on practical learning and building real-world applications.
        </p>
      </div>

      {/* SKILLS */}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked with various teams, building strong technical skills and
            contributing to meaningful projects. Here's the quick overview:
          </p>
        </div>

        <div className="mt-3 w-full">
          <Timeline active={experiences.length} bulletSize={30} lineWidth={2}>
            {experiences.map((exp) => (
              <Timeline.Item
                key={exp.company_name}
                title={
                  <span className="text-xl font-semibold text-black">
                    {exp.title}
                  </span>
                }
              >
                <Text size="sm" c="dimmed">
                  {exp.company_name}
                </Text>
                <Text size="xs" mt={4}>
                  {exp.date}
                </Text>

                <ul className="list-disc ml-5 mt-3 space-y-1">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-slate-600 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
