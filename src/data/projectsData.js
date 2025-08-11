
const projects = [
  {
    id: 1,
    title: "Aaponaloi",
    subtitle: "Rental Management System - Full-stack platform",
    overview:
      "Aaponaloi is a full-stack, role-based Building Management System that simplifies apartment listings, user agreements, payments, and community communication. Built for residents, building managers, and administrators to collaboratively manage residential operations in a modern and secure way.",
    technologies: ["react", "javascript", "firebase", "mongodb", "node-js", "firebase-auth", "express-js", "tailwindcss", "daisyUI", "framer-motion"],
    features: [
      "Browse available apartments with images, rent info, and search/ pagination",
      "Apply for rental agreements(1 user = 1 apartment policy)",
      "Make payments with coupon support",
      "View payment history",
      "See latest building announcements",
      "Update personal profile"
    ],
    challenges: [
      "Implementing role-based authentication and access control",
      "Preventing multiple pending apartment requests by a single user",
      "Managing pagination and rent range search together",
      "Validating and applying coupon discounts securely",
      "Keeping UI consistent with animations and responsive design",
    ],
    solutions: [
      "Used Firebase Auth with custom role checks for routing",
      "Added backend validation to restrict one active agreement per user",
      "Combined MongoDB queries with pagination and dynamic search filters",
      "Implemented backend coupon verification with expiry and usage checks",
      "Used Tailwind CSS with Framer Motion for a consistent, responsive UI",
    ],
    improvements: [
      "Add real-time notifications for agreement status updates",
      "Integrate secure online payment gateway",
      "Enable apartment availability tracking in real time",
      "Implement dark mode for better user experience",
      "Add admin analytics dashboard with charts and reports",
    ],

    link: "https://aaponaloi.web.app/",
    code: {
      client: "https://github.com/Alireja-khan/aaponaloi-clint",
      server: "https://github.com/Alireja-khan/Aaponaloi-Server"
    },
    screenshots: [
      "https://i.ibb.co.com/Txz1HcbS/Screenshot-2025-08-12-022643.png",
      "https://i.ibb.co.com/S4Xj915P/Screenshot-2025-08-12-022407.png",
      "https://i.ibb.co.com/B2W7P84n/Screenshot-2025-08-12-022543.png",
      "https://i.ibb.co.com/zT417x20/Screenshot-2025-08-12-022521.png",
      "https://i.ibb.co.com/TxPN7Bgk/Screenshot-2025-08-12-022429.png",
      "https://i.ibb.co.com/d0C2HCCh/Screenshot-2025-08-12-022459.png",
      "https://i.ibb.co.com/YFKdBTyy/Screenshot-2025-08-12-022658.png",
      "https://i.ibb.co.com/fGttn14y/Screenshot-2025-08-12-023138.png",
      "https://i.ibb.co.com/Q7K8FgR1/Screenshot-2025-08-12-023316.png",
      "https://i.ibb.co.com/Gv4M3CMr/Screenshot-2025-08-12-023946.png"

    ]
  },
  {
    id: 2,
    title: "Food-Circle",
    subtitle: "Full-Stack Food Sharing Web App",
    overview:
      "FoodCircle is a community-driven platform designed to help users share their surplus food with others nearby. By connecting donors with people in need, it aims to reduce food waste while supporting those facing food insecurity. The platform offers easy-to-use features for adding, managing, and requesting food donations, creating a positive impact within local neighborhoods.",
    technologies: ["react", "javascript", "firebase", "mongodb", "node-js", "firebase-auth", "express-js", "tailwindcss", "daisyUI", "framer-motion"],
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
    link: "https://utter-waste.surge.sh/",
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
    id: 3,
    title: "Hobby-Hub",
    subtitle: "Group-Based Hobby Management App",
    overview:
      "HobbyHub is an interactive social web application that allows users to create, manage, and join various hobby-based groups. It provides a platform where people with shared interests can collaborate, exchange ideas, organize events, and build communities around their favorite activities. Whether you’re into arts, sports, gaming, or any other hobby, HobbyHub makes it easy to connect and engage with like-minded individuals.",
    technologies: ["react", "javascript", "firebase", "mongodb", "node-js", "firebase-auth", "express-js", "tailwindcss", "daisyUI", "framer-motion"],
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
    id: 4,
    title: "Pay-Tracker",
    subtitle: "Bill Payment Tracking Application",
    overview:
      "Pay-Tracker is a tool that helps individuals manage bill payments, monitor recurring expenses, and stay financially organized.",
    technologies: ["react", "javascript", "firebase", "node-js", "firebase-auth", "tailwindcss", "daisyUI", "Context API"],
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
