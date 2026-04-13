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
    title: "Dzhohan Knives",
    category: "Інтернет магазин",
    image: "/project-1.jpg",
    tags: ["Laravel", "Tailwind", "Filament"],
    year: "2026",
    link: "dzhohanknives",
  },
  {
    title: "Slavena Hair",
    category: "Інтернет каталог",
    image: "/project-2.jpg",
    tags: ["Laravel", "GSAP"],
    year: "2025",
    link: "slavenahair",
  },
  {
    title: "TryIt Clining",
    category: "Сайт візитка",
    image: "/project-3.jpg",
    tags: ["React", "Node.js", "AWS"],
    year: "2025",
    link: "tryit",
  },
];
