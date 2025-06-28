// src/data/projects.js
const projects = [
  {
    id: 1,
    title: "Food-Circle",
    description: "A React Food Share and Donating web app...",
    image: "https://i.ibb.co/PvN6CBYh/Cream-Neutral-Minimalist-New-Business-Pitch-Deck-Presentation.png",
    link: "https://food-circle-a4f01.web.app/",
    code: "https://github.com/Alireja-khan/Food-Circle-Client",
    technologies: ["React", "Firebase", "MongoDB", "CRUD"],
    challenges: "Handling async data updates and ensuring secure access.",
    improvements: "Add real-time chat, mobile-first UI enhancements."
  },
  {
    id: 2,
    title: "Hobby-Hub",
    description: "A social web app built with React, Firebase & MongoDB...",
    image: "https://i.ibb.co/8LPmh9Vm/Cream-Neutral-Minimalist-New-Business-Pitch-Deck-Presentation.png",
    link: "https://hobbyhub-app.web.app/",
    code: "https://github.com/Alireja-khan/Hobby-Hub-Clint",
    technologies: ["React", "Firebase", "MongoDB", "Auth", "RBAC"],
    challenges: "Managing role-based routes and group permissions.",
    improvements: "Add notifications and group chat features."
  },
  {
    id: 3,
    title: "Pay-Tracker",
    description: "A React bill pay manager web app...",
    image: "https://i.ibb.co/Rpb5xBDz/pay-tracker.png",
    link: "http://expensive-peace.surge.sh/",
    code: "https://github.com/Alireja-khan/Pay-Tracker",
    technologies: ["React", "Firebase"],
    challenges: "Designing efficient data handling for recurring bills.",
    improvements: "Support multi-user tracking and analytics dashboard."
  }
];

export default projects;
