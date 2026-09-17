export interface SkillItem {
  name: string;
  percent: number;
}

export interface SkillGroup {
  id: string;
  label: string;
  items: SkillItem[];
}

export interface HighlightItem {
  label: string;
}

export interface ExperienceItem {
  role: string;
  period: string;
  responsibilities: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}
