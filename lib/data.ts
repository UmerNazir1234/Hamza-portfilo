import type {
  SkillGroup,
  HighlightItem,
  ExperienceItem,
  ProjectItem,
  ServiceItem,
  TestimonialItem,
} from "@/types";

export const site = {
  name: "Hamza",
  title: "AutoCAD Designer & Interior Planning Specialist",
  tagline:
    "I create precise AutoCAD drawings, functional interior layouts, lighting plans, and professional design documentation that combine technical accuracy with modern aesthetics.",
  email: "hamza@example.com",
  whatsapp: "923425159773",
  location: "Pakistan",
  availability: "Available for freelance and remote projects",
};

export const rotatingTitles = [
  "AutoCAD Designer",
  "Interior Planner",
  "Lighting Layout Specialist",
  "SketchUp Designer",
  "Shopify Store Assistant",
];

export const about = {
  paragraphs: [
    "I am an AutoCAD Designer specializing in interior and architectural drafting. I have hands-on experience creating detailed 2D drawings, ceiling plans, lighting layouts, bathroom and electrical layouts, and furniture planning for residential and commercial projects.",
    "I also work with SketchUp for 3D visualization and assist with Shopify product management and store customization.",
  ],
};

export const highlights: HighlightItem[] = [
  { label: "2+ Years AutoCAD Practice" },
  { label: "Interior & Exterior Planning" },
  { label: "Ceiling & Lighting Design" },
  { label: "SketchUp (70% Proficiency)" },
  { label: "Shopify Store Customization" },
  { label: "Technical Drawing Documentation" },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "cad",
    label: "AutoCAD & Drafting",
    items: [
      { name: "AutoCAD 2D Drafting", percent: 99 },
      { name: "Working Drawings", percent: 95 },
      { name: "Floor Plans", percent: 95 },
      { name: "Interior Layout Planning", percent: 95 },
      { name: "Furniture Layouts", percent: 98 },
    ],
  },
  {
    id: "interior",
    label: "Interior Design",
    items: [
      { name: "Ceiling Design", percent: 95 },
      { name: "Lighting Layout Planning", percent: 96 },
      { name: "Bathroom Layout Design", percent: 92 },
      { name: "Electrical Layout Planning", percent: 95 },
      { name: "Space Planning", percent: 87 },
    ],
  },
  {
    id: "viz",
    label: "Visualization",
    items: [
      { name: "SketchUp", percent: 70 },
      { name: "Basic 3D Visualization", percent: 68 },
      { name: "Material & Finish Presentation", percent: 65 },
    ],
  },
  {
    id: "ecom",
    label: "E-Commerce & Other",
    items: [
      { name: "Shopify Product Uploading", percent: 80 },
      { name: "Shopify Store Customization", percent: 75 },
      { name: "Product Image Preparation", percent: 78 },
      { name: "Technical Documentation", percent: 90 },
      { name: "Client Communication", percent: 85 },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "AutoCAD Designer & Interior Planning Specialist",
    period: "Present",
    responsibilities: [
      "Creating detailed 2D AutoCAD drawings",
      "Preparing ceiling and lighting layouts",
      "Designing bathroom and electrical plans",
      "Developing furniture and interior space layouts",
      "Coordinating drawing revisions with clients",
      "Producing professional technical documentation",
      "Supporting Shopify product uploading and store customization tasks",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Residential Interior Layout",
    description:
      "Full interior layout for a residential unit, covering ceiling plan, lighting, and furniture planning.",
    tags: ["AutoCAD", "Ceiling Plan", "Lighting Layout", "Furniture Planning"],
  },
  {
    title: "Modern Ceiling & Lighting Design",
    description:
      "Profile lighting and chandelier layout with laser blade marking for a contemporary living space.",
    tags: ["AutoCAD", "Profile Lights", "Laser Blade Marking", "Chandelier Layout"],
  },
  {
    title: "Bathroom & Electrical Planning",
    description:
      "Complete fixture and electrical point layout, including exhaust and vanity planning.",
    tags: ["AutoCAD", "Exhaust Planning", "Vanity Layout", "Electrical Points"],
  },
  {
    title: "Furniture & Space Planning",
    description:
      "Wardrobe and furniture layout optimized for interior space efficiency.",
    tags: ["AutoCAD", "Space Optimization", "Wardrobe Layout"],
  },
  {
    title: "Shopify Product Store Setup",
    description:
      "Product uploading, collection setup, and full storefront customization.",
    tags: ["Shopify", "Product Uploading", "Collection Setup", "Store Customization"],
  },
];

export const services: ServiceItem[] = [
  {
    title: "AutoCAD 2D Drafting",
    description: "Floor plans, sections, elevations, and working drawings.",
  },
  {
    title: "Interior Layout Planning",
    description: "Functional residential and commercial interior layouts.",
  },
  {
    title: "Ceiling & Lighting Design",
    description:
      "False ceiling layouts, profile lights, laser blade lights, and chandelier positioning.",
  },
  {
    title: "Bathroom & Electrical Layouts",
    description: "Complete bathroom fixture and electrical point planning.",
  },
  {
    title: "SketchUp 3D Modeling",
    description: "Basic 3D visualization for design presentations.",
  },
  {
    title: "Shopify Store Support",
    description: "Product uploading, collection organization, and theme customization assistance.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Hamza delivered accurate AutoCAD drawings and ceiling layouts with excellent attention to detail.",
    name: "Interior Client",
    role: "Residential Project",
  },
  {
    quote:
      "Professional, responsive, and highly skilled in lighting and electrical planning drawings.",
    name: "Contractor",
    role: "Commercial Fit-out",
  },
  {
    quote:
      "Product uploads and store customization were completed efficiently and professionally.",
    name: "Shopify Client",
    role: "E-commerce Store",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
