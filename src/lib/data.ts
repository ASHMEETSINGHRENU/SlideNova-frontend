export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  gradient: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "Business" | "E-commerce" | "SaaS" | "Portfolio";
  categoryLabel: string;
  tagline: string;
  description: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  highlight: string;
  image?: string;
  demoUrl?: string;
}

export interface WhyChoosePillar {
  id: string;
  title: string;
  description: string;
  metric: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  timeline: string;
  iconName: string;
}

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Why Us", href: "#why-choose" },
  { name: "Process", href: "#process" },
  { name: "Vision", href: "#vision" },
  { name: "Contact", href: "#contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Website Development",
    shortDesc: "We build responsive, fast, and scalable websites tailored to your business goals and customer needs.",
    fullDesc: "Engineered from the ground up with modern frameworks like Next.js, React, and Node.js. Our code is modular, type-safe, and optimized for ultra-fast load times and seamless cross-device performance.",
    iconName: "Code2",
    features: [
      "High-speed SSR & Static Site Generation",
      "Mobile-first responsive architecture",
      "Headless CMS integration & SEO optimization",
      "Enterprise-grade security and clean codebase"
    ],
    deliverables: ["Full-stack codebase", "Performance audit score > 95", "Deployment automation"],
    gradient: "from-[#7655F6]/20 via-[#B5A1FF]/10 to-transparent",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    shortDesc: "We create intuitive, visually engaging user experiences that make your website easy to navigate and enjoyable to use.",
    fullDesc: "We bridge user behavior with aesthetic brilliance. From wireframes to high-fidelity living design systems, every micro-interaction and visual state is crafted to delight visitors and convert them into loyal clients.",
    iconName: "Layout",
    features: [
      "User journey mapping & high-fidelity wireframing",
      "Interactive Figma prototypes & micro-interactions",
      "Comprehensive design systems & brand guidelines",
      "Accessibility (WCAG 2.1 AA) compliance"
    ],
    deliverables: ["Interactive design system", "Figma prototype files", "Component library"],
    gradient: "from-[#B5A1FF]/20 via-[#7655F6]/10 to-transparent",
  },
  {
    id: "ecommerce",
    title: "E-commerce Development",
    shortDesc: "We develop online stores that help businesses showcase products, reach more customers, and sell with confidence.",
    fullDesc: "Scalable, high-conversion online stores with frictionless checkout, inventory syncing, multiple payment gateways, and custom shopping cart experiences built for maximum revenue generation.",
    iconName: "ShoppingBag",
    features: [
      "Secure 1-click checkout & multiple payment gateways",
      "Real-time inventory and catalog management",
      "Conversion rate optimization (CRO) architecture",
      "Order tracking and customer self-service portals"
    ],
    deliverables: ["Full E-commerce platform", "Payment gateway integration", "Analytics dashboard"],
    gradient: "from-[#7655F6]/20 via-surface to-transparent",
  },
  {
    id: "business-websites",
    title: "Business Websites",
    shortDesc: "We create professional websites that communicate your brand's value, build trust, and turn visitors into potential customers.",
    fullDesc: "A digital flagship for your enterprise that commands authority. We position your unique value proposition with compelling typography, crystal-clear messaging, and proven lead generation funnels.",
    iconName: "Building2",
    features: [
      "Executive brand positioning & storytelling",
      "Lead generation funnels with CRM integration",
      "Trust-building social proof & case study layouts",
      "Multi-language & global localization ready"
    ],
    deliverables: ["Corporate web portal", "Lead capture funnel", "SEO & analytics setup"],
    gradient: "from-[#B5A1FF]/15 via-[#181820] to-transparent",
  },
  {
    id: "redesign",
    title: "Website Redesign",
    shortDesc: "We transform outdated websites into modern, attractive, and user-friendly digital experiences.",
    fullDesc: "Revitalize your online presence without losing established SEO rankings or domain authority. We diagnose friction points, modernize your UI stack, and dramatically accelerate site speed.",
    iconName: "Sparkles",
    features: [
      "Full UI/UX audit & performance diagnostics",
      "Seamless 301 redirect mapping & SEO preservation",
      "Modern brand refresh and component upgrade",
      "Mobile speed boost and Core Web Vitals optimization"
    ],
    deliverables: ["Before/After benchmarking report", "Modernized web application", "SEO migration checklist"],
    gradient: "from-[#7655F6]/25 via-surface to-transparent",
  },
  {
    id: "custom-solutions",
    title: "Custom Web Solutions",
    shortDesc: "From unique business requirements to advanced web applications, we develop solutions designed around your specific needs.",
    fullDesc: "When off-the-shelf templates fall short, Nova delivers bespoke web architectures, interactive 3D WebGL scenes, custom internal dashboards, real-time data pipelines, and third-party API integrations.",
    iconName: "Cpu",
    features: [
      "Custom RESTful & GraphQL API architecture",
      "Interactive 3D Three.js/WebGL experiences",
      "Real-time sockets & cloud data synchronization",
      "Automated business workflows & bespoke tooling"
    ],
    deliverables: ["Custom cloud infrastructure", "API documentation", "Dedicated maintenance plan"],
    gradient: "from-[#B5A1FF]/25 via-[#7655F6]/10 to-transparent",
  },
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: "business-website",
    title: "Modern Enterprise Hub",
    category: "Business",
    categoryLabel: "Business Website",
    tagline: "A modern digital presence for a growing company.",
    description: "Architected a high-converting digital portal for a forward-thinking global consultancy. Features dynamic case studies, executive thought leadership articles, and seamless meeting scheduling.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Headless CMS"],
    metrics: [
      { label: "Organic Traffic", value: "+180%" },
      { label: "Page Load Time", value: "0.8s" },
      { label: "Lead Conversion", value: "3.4x" },
    ],
    highlight: "Enterprise-grade performance with sub-second page loads across 40+ countries.",
  },
  {
    id: "ecommerce-platform",
    title: "Aura Luxury Commerce",
    category: "E-commerce",
    categoryLabel: "E-commerce Platform",
    tagline: "A seamless shopping experience built for online sales.",
    description: "Engineered a flagship online shopping experience for a luxury apparel brand. Includes real-time 3D product previews, instant faceted filtering, and zero-latency cart checkouts.",
    technologies: ["Next.js", "Shopify Storefront API", "Three.js", "Stripe", "Tailwind CSS"],
    metrics: [
      { label: "Checkout Completion", value: "92%" },
      { label: "Cart Abandonment", value: "-34%" },
      { label: "Average Order Value", value: "+45%" },
    ],
    highlight: "Immersive 3D product configurator drove a 45% uplift in average customer basket size.",
  },
  {
    id: "saas-dashboard",
    title: "Nexus Intelligence Cloud",
    category: "SaaS",
    categoryLabel: "SaaS Dashboard",
    tagline: "A clean, intuitive interface for a digital product.",
    description: "Designed and built an end-to-end cloud telemetry dashboard featuring real-time time-series telemetry, interactive canvas charts, permission hierarchies, and dark cybernetic aesthetics.",
    technologies: ["React 19", "Node.js", "WebSocket", "Tailwind CSS", "Chart.js"],
    metrics: [
      { label: "Daily Active Users", value: "120k+" },
      { label: "Data Refresh Rate", value: "60 FPS" },
      { label: "User Task Speed", value: "-62%" },
    ],
    highlight: "Processed 10M+ daily events with 60FPS fluid canvas chart rendering and zero UI lag.",
  },
  {
    id: "creative-portfolio",
    title: "Vanguard Studio Lab",
    category: "Portfolio",
    categoryLabel: "Creative Portfolio",
    tagline: "A distinctive website designed to showcase talent and expertise.",
    description: "An award-winning interactive portfolio for a multidisciplinary creative director. Built with custom WebGL shader transitions, magnetic cursor interactions, and responsive sound design.",
    technologies: ["Three.js", "GLSL Shaders", "Next.js", "Web Audio API", "Tailwind CSS"],
    metrics: [
      { label: "Awwwards Rating", value: "9.2/10" },
      { label: "Avg Session Duration", value: "4m 20s" },
      { label: "Inquiry Rate", value: "18.5%" },
    ],
    highlight: "Featured as Site of the Day, driving over 250,000 unique international creative views.",
  },
];

export const WHY_CHOOSE_PILLARS: WhyChoosePillar[] = [
  {
    id: "purpose-driven",
    title: "Purpose-Driven Design",
    description: "Every website is designed with your business goals and audience in mind. We don't just make things look sleek; every layout and interaction is structured to achieve real business outcomes.",
    metric: "100% Custom Tailored",
    iconName: "Compass",
  },
  {
    id: "modern-tech",
    title: "Modern Technology",
    description: "We use modern development practices to create reliable and scalable digital solutions. With Next.js, TypeScript, and modern edge runtimes, your website stays years ahead of competition.",
    metric: "Cutting-Edge Stack",
    iconName: "Zap",
  },
  {
    id: "responsive",
    title: "Responsive Experiences",
    description: "Your website will be designed to work smoothly across desktops, tablets, and mobile devices. Flawless layout adaptation, touch-optimized gestures, and crisp retina rendering.",
    metric: "All Viewports Covered",
    iconName: "Smartphone",
  },
  {
    id: "performance",
    title: "Performance-Focused Development",
    description: "We prioritize speed, usability, and a seamless browsing experience. Sub-second loads, perfect Core Web Vitals, and lightweight asset pipelines ensure visitors never bounce.",
    metric: "95+ Lighthouse Score",
    iconName: "Gauge",
  },
  {
    id: "collaborative",
    title: "Collaborative Approach",
    description: "We work closely with you to understand your vision and bring it to life. Transparent communication, sprint demos, and iterative feedback make your voice central to our execution.",
    metric: "Direct Founder Access",
    iconName: "Users",
  },
  {
    id: "growth",
    title: "Built for Growth",
    description: "We create flexible solutions that can evolve as your business grows. Modular codebases, scalable database connectors, and cloud-ready infrastructure ready for future scale.",
    metric: "Zero Tech Debt",
    iconName: "TrendingUp",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    number: "01",
    title: "Discover",
    description: "We learn about your business, audience, goals, and project requirements through in-depth strategic research.",
    deliverables: ["Project Roadmap", "Audience Persona Study", "Technical Specification", "Competitive Analysis"],
    timeline: "Week 1",
    iconName: "Search",
  },
  {
    step: "02",
    number: "02",
    title: "Design",
    description: "We plan the user experience and create a visual direction that aligns with your brand, from wireframes to final design.",
    deliverables: ["UX Wireframes", "Interactive Figma Prototype", "Design System & Tokens", "Component Specs"],
    timeline: "Week 2 - 3",
    iconName: "PenTool",
  },
  {
    step: "03",
    number: "03",
    title: "Develop",
    description: "We transform the approved design into a functional, responsive, and reliable website with modern Next.js code.",
    deliverables: ["Full-Stack Next.js Code", "Tailwind Styling System", "API & Database Hooks", "Interactive 3D / Animations"],
    timeline: "Week 3 - 5",
    iconName: "Code",
  },
  {
    step: "04",
    number: "04",
    title: "Test & Refine",
    description: "We review the website, test its functionality across devices and browsers, and refine the experience before launch.",
    deliverables: ["Cross-Browser Validation", "Core Web Vitals Audit", "Security Penetration Check", "Client Review & Feedback"],
    timeline: "Week 5 - 6",
    iconName: "ShieldCheck",
  },
  {
    step: "05",
    number: "05",
    title: "Launch & Grow",
    description: "We help bring your website online, ready to support your business's next stage of growth with monitoring and ongoing support.",
    deliverables: ["DNS & CDN Setup", "Analytics & Search Console Setup", "Post-Launch Monitoring", "Handover & Documentation"],
    timeline: "Launch Day & Beyond",
    iconName: "Rocket",
  },
];

export const STATS = [
  { label: "Client Satisfaction", value: "100%" },
  { label: "Average Speed Score", value: "98/100" },
  { label: "Conversion Lift", value: "2.8x" },
  { label: "Digital Experiences Delivered", value: "60+" },
];
