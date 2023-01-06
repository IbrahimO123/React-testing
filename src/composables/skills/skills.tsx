import { SkillProps } from "./skill-types";

export const Skills = (props: SkillProps) => {
  const { skills } = props;
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
};
