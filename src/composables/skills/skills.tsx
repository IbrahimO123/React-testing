import React from "react";
import { SkillProps } from "./skill-types";

export const skills = (props: SkillProps) => {
  const { skills } = props;
  return (
    <div>
      {skills.map((skill, index) => (
        <div key={index}>{skill}</div>
      ))}
    </div>
  );
};
