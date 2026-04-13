export interface Link {
  name: string
  to: string
}

export const links: Link[] = [
  { name: "Головна", to: "/" },
  { name: "Про мене", to: "/about" },
  { name: "Мої роботи", to: "/projects" },
];