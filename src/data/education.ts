export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  grade: string;
}

export interface Certification {
  name: string;
  issuer: string;
  score: string;
}

export const education: Education[] = [
  {
    institution: "Government College of Engineering, Karad",
    degree: "B.Tech",
    field: "Electronics and Telecommunication",
    period: "2020 — 2024",
    location: "Karad, India",
    grade: "CGPA: 7.52",
  },
  {
    institution: "R.P. College",
    degree: "HSC",
    field: "General Science",
    period: "2020",
    location: "Dharashiv, India",
    grade: "78.77%",
  },
];

export const certifications: Certification[] = [
  { name: "Cloud Computing", issuer: "NPTEL", score: "87%" },
  { name: "Python Programming Language", issuer: "NPTEL", score: "96/100" },
];
