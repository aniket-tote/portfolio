import type { FC } from "react";
import Image from "next/image";

interface Skill {
  name: string;
  logo: string;
}

const skills: Record<string, Skill[]> = {
  Backend: [
    { name: "Java", logo: "assets/java-icon.svg" },
    { name: "Spring", logo: "assets/springio-icon.svg" },
    { name: "Spring Boot", logo: "assets/spring-boot.svg" },
    { name: "Spring Security", logo: "assets/spring-security.svg" },
    { name: "Microservices", logo: "assets/microservice-icon.svg" },
    { name: "Hibernate", logo: "assets/hibernate-icon.svg" },
    { name: "PostgreSQL", logo: "assets/postgresql-icon.svg" },
    { name: "MySQL", logo: "assets/mysql-icon.svg" },
    { name: "GraphQL", logo: "assets/graphql-icon.svg" },
    { name: "NodeJs", logo: "assets/nodejs-icon.svg" },
    { name: "MongoDB", logo: "assets/mongodb-icon.svg" },
  ],
  Frontend: [
    { name: "HTML", logo: "assets/w3_html5-icon.svg" },
    { name: "CSS", logo: "assets/css-icon.svg" },
    { name: "JavaScript", logo: "assets/javascript-icon.svg" },
    { name: "TypeScript", logo: "assets/typescriptlang-icon.svg" },
    { name: "React", logo: "assets/reactjs-icon.svg" },
    { name: "Next.js", logo: "assets/nextjs-icon.svg" },
    { name: "Angular", logo: "assets/angular-icon.svg" },
    { name: "Tailwind CSS", logo: "assets/tailwindcss-icon.svg" },
    { name: "shadcn/ui", logo: "assets/shadcn-ui-seeklogo.svg" },
    { name: "Redux", logo: "assets/js_redux-icon.svg" },
    { name: "Webpack", logo: "assets/js_webpack-icon.svg" },
  ],
  DevOps: [
    { name: "Docker", logo: "assets/docker-icon.svg" },
    { name: "AWS", logo: "assets/AWS-Logo.svg" },
    { name: "Linux", logo: "assets/linux-icon.svg" },
    { name: "Git", logo: "assets/git-scm-icon.svg" },
    { name: "Jenkins", logo: "assets/jenkins-icon.svg" },
    { name: "Kubernetes", logo: "assets/kubernetes-icon.svg" },
  ],
  Additional: [
    // { name: "Microservices", logo: Server },
    { name: "JUnit", logo: "assets/JUnit.svg" },
    { name: "Mockito", logo: "/assets/mockito.png" },
    { name: "Maven", logo: "assets/apache_maven-icon.svg" },
    { name: "Gradle", logo: "assets/gradle-icon.svg" },
    // { name: "Agile/Scrum", logo: Globe },
  ],
};

const SkillCard: FC<Skill> = ({ name, logo }) => {
  return (
    <div className="flex flex-col items-center p-4 gap-3">
      <Image
        src={logo}
        alt={name}
        height={20}
        width={20}
        className="w-12 h-12 mb-2"
      />
      <span className="text-sm font-medium text-blue-100">{name}</span>
    </div>
  );
};

export default function Skills() {
  return (
    <div className="min-h-screen bg-[#193549] text-white p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Skills</h1>
      {Object.entries(skills).map(([category, categorySkills]) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{category}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categorySkills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
