export interface Project {
  title: string
  category: string
  image: string
  tags: string[]
  year: string
  link: string
}

export const projects: Project[] = [
  {
    title: "Dzhohan<br>Knives",
    category: "Інтернет<br>магазин",
    image: "/project-1.jpg",
    tags: ["Laravel", "Tailwind", "Filament"],
    year: "2026",
    link: "dzhohanknives",
  },
  {
    title: "Slavena<br>Hair",
    category: "Інтернет<br>каталог",
    image: "/project-2.jpg",
    tags: ["Laravel", "GSAP"],
    year: "2025",
    link: "slavenahair",
  },
  {
    title: "TryIt<br>Clining",
    category: "Сайт<br>візитка",
    image: "/project-3.jpg",
    tags: ["React", "Node.js", "AWS"],
    year: "2025",
    link: "tryit",
  },
];
