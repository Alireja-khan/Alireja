
const projects = [
  {
    id: 1,
    title: "Food-Circle",
    subtitle: "Full-Stack Food Sharing Web App",
    overview:
      "FoodCircle is a platform that helps users share surplus food within their community to reduce waste and support those in need.",
    technologies: ["React", "Firebase", "MongoDB", "Tailwind", "JWT", "Express"],
    features: [
      "User Authentication",
      "Food Add/Delete/Request System",
      "Role-based dashboard",
      "Secure API integration",
      "Responsive UI",
    ],
    challenges: [
      "Handling async data updates",
      "Secure authentication with Firebase",
      "Managing conditional UI rendering",
    ],
    solutions: [
      "Used Firebase Auth with JWT",
      "Applied React context for global auth state",
      "Built RESTful APIs with Express and MongoDB",
    ],
    improvements: [
      "Add real-time chat",
      "Implement dark mode",
      "Improve analytics dashboard",
    ],
    link: "https://food-circle-a4f01.web.app/",
    code: {
      client: "https://github.com/Alireja-khan/Food-Circle-Client",
      server: "https://github.com/Alireja-khan/Food-Circle-Server"
    },
    screenshots: [
      "https://i.ibb.co/tTXW25HC/Screenshot-2025-06-28-232042.png",
      "https://i.ibb.co/pBDFWmVz/Screenshot-2025-06-28-232100.png",
      "https://i.ibb.co/fz8KvRbJ/Screenshot-2025-06-28-232112.png",
      "https://i.ibb.co/kgV3kdjc/Screenshot-2025-06-28-232127.png",
      "https://i.ibb.co/rGTMR7dF/Screenshot-2025-06-28-232145.png",
      "https://i.ibb.co/1Y5tKNnr/Screenshot-2025-06-28-232239.png",
      "https://i.ibb.co/KjS6fHG6/Screenshot-2025-06-28-232258.png",
      "https://i.ibb.co/bMjd0BmL/Screenshot-2025-06-28-232327.png",
      "https://i.ibb.co/RkKysk29/Screenshot-2025-06-28-232341.png",
      "https://i.ibb.co/sXYyGD8/Screenshot-2025-06-28-232356.png"
    ]
  },
  {
    id: 2,
    title: "Hobby-Hub",
    subtitle: "Group-Based Hobby Management App",
    overview:
      "HobbyHub is a social web app that lets users create, manage, and join hobby-based groups to collaborate and share their interests.",
    technologies: ["React", "Firebase", "MongoDB", "Tailwind", "Express", "RBAC"],
    features: [
      "User login with role management",
      "Create/join hobby groups",
      "Update group information",
      "Responsive UI",
      "Dashboard for different roles",
    ],
    challenges: [
      "Managing user roles and permissions",
      "Validating group join requests securely",
      "Maintaining scalable data structures",
    ],
    solutions: [
      "Used Firebase Auth with custom claims",
      "Built conditional UI based on roles",
      "Normalized MongoDB schemas",
    ],
    improvements: [
      "Add notification system",
      "Group chat integration",
      "Admin moderation tools",
    ],
    link: "https://hobbyhub-app.web.app/",
    code: {
      client: "https://github.com/Alireja-khan/Hobby-Hub-Clint",
      server: "https://github.com/Alireja-khan/Hobby-Hub-Server"
    },
    screenshots: [
      "https://i.ibb.co/Y7PCFj5c/Screenshot-2025-06-28-235213.png",
      "https://i.ibb.co/5bhXSgX/Screenshot-2025-06-28-235244.png",
      "https://i.ibb.co/kV8RRPC0/Screenshot-2025-06-28-235304.png",
      "https://i.ibb.co/hRvt0qKV/Screenshot-2025-06-28-235932.png",
      "https://i.ibb.co/JFdhP7fh/Screenshot-2025-06-28-235949.png",
      "https://i.ibb.co/fYPws85P/Screenshot-2025-06-28-235312.png",
      "https://i.ibb.co/Xkv0ZZPM/Screenshot-2025-06-28-235337.png",
      "https://i.ibb.co/whpNRyTP/Screenshot-2025-06-28-235401.png",
      "https://i.ibb.co/Zz7ks1bp/Screenshot-2025-06-28-235409.png",
      "https://i.ibb.co/jkpnFY4v/Screenshot-2025-06-28-235436.png",
      "https://i.ibb.co/gMMJSB51/Screenshot-2025-06-28-235456.png",
      "https://i.ibb.co/C58ZVxj6/Screenshot-2025-06-28-235521.png",
    ]
  },
  {
    id: 3,
    title: "Pay-Tracker",
    subtitle: "Bill Payment Tracking Application",
    overview:
      "Pay-Tracker is a tool that helps individuals manage bill payments, monitor recurring expenses, and stay financially organized.",
    technologies: ["React", "Firebase", "Tailwind", "Context API"],
    features: [
      "Add/Edit/Delete bills",
      "Track recurring payments",
      "Filter & search bills",
      "Authentication with Firebase",
      "Responsive UI",
    ],
    challenges: [
      "Designing intuitive UX for form-heavy features",
      "Managing state for dynamic lists",
      "Persisting user-specific data securely",
    ],
    solutions: [
      "Used Context API and custom hooks",
      "Integrated Firebase for data persistence",
      "Built reusable form components",
    ],
    improvements: [
      "Enable multi-user sharing",
      "Add dark/light theme toggle",
      "Mobile PWA support",
    ],
    link: "http://expensive-peace.surge.sh/",
    code: {
      client: "https://github.com/Alireja-khan/Pay-Tracker"
    },
    screenshots: [
      "https://i.ibb.co/yxKDwLQ/Screenshot-2025-06-29-002109.png",
      "https://i.ibb.co/mCPKKjZf/Screenshot-2025-06-29-002123.png",
      "https://i.ibb.co/Pvkd0nBH/Screenshot-2025-06-29-002148.png",
      "https://i.ibb.co/qLXp1t4Y/Screenshot-2025-06-29-002211.png",
      "https://i.ibb.co/rGs6msf2/Screenshot-2025-06-29-002221.png",
    ]
  }
];

export default projects;
