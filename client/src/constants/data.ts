import {
  Briefcase,
  BriefcaseBusiness,
  FileText,
  FolderIcon,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  User,
} from "lucide-react";

export const sections = [
  { id: "personal", name: "Personal Info", icon: User },
  { id: "summary", name: "Summary", icon: FileText },
  { id: "experience", name: "Experience", icon: Briefcase },
  { id: "education", name: "Education", icon: GraduationCap },
  { id: "projects", name: "Projects", icon: FolderIcon },
  { id: "skills", name: "Skills", icon: Sparkles },
];

export const templates = [
  {
    id: "classic",
    name: "Classic",
    preview:
      "A clean, traditional resume format with clear sections and professional typography",
  },
  {
    id: "modern",
    name: "Modern",
    preview: "Sleek design with strategic use of color and modern font choices",
  },
  {
    id: "minimal-image",
    name: "Minimal Image",
    preview: "Minimal design with a single image and clean typography",
  },
  {
    id: "minimal",
    name: "Minimal",
    preview: "Ultra-clean design that puts your content front and center",
  },
];

export const colors = [
  { name: "Blue", value: "#3882f6" },
  { name: "Indigo", value: "#6366f1" },
  { name: "Purple", value: "#8b5cf6" },
  { name: "Green", value: "#108981" },
  { name: "Red", value: "#ef4444" },
  { name: "Orange", value: "#f97316" },
  { name: "Teal", value: "#14b8a6" },
  { name: "Pink", value: "#ec4899" },
  { name: "Gray", value: "#6b7280" },
  { name: "Black", value: "#1f2937" },
];

export const fields = [
  {
    key: "full_name",
    label: "Full Name",
    icon: User,
    type: "text",
    required: true,
  },
  {
    key: "email",
    label: "Email Address",
    icon: Mail,
    type: "email",
    required: true,
  },
  { key: "phone", label: "Phone Number", icon: Phone, type: "tel" },
  { key: "location", label: "Location", icon: MapPin, type: "text" },
  {
    key: "profession",
    label: "Profession",
    icon: BriefcaseBusiness,
    type: "text",
  },
  { key: "linkedin", label: "LinkedIn Profile", icon: Linkedin, type: "url" },
  { key: "website", label: "Personal Website", icon: Globe, type: "url" },
];
