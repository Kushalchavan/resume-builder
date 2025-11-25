export interface PersonalInfo {
  full_name: string;
  email: string;
  phone: string;
  location?: string;
  linkedin?: string;
  website?: string;
  profession?: string;
  image?: string | File | null;
  [key: string]: any;
}

export interface Experience {
  company: string;
  position: string;
  start_date: string;
  end_date: string;
  is_current: boolean;
  description: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  start_date: string;
  end_date: string;
  graduation_date: string;
  gpa?: string;
}

export interface Project {
  name: string;
  type: string;
  description: string;
}

export interface ResumeData {
  _id: string;
  title: string;
  personal_info: PersonalInfo;
  professional_summary: string;
  experience: Experience[];
  education: Education[];
  project: Project[];
  skills: string[];
  template: string;
  accent_color: string;
  public: boolean;
  createdAt?: string;
  updatedAt?: string;
}
