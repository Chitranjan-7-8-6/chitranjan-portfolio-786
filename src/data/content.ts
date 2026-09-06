// Edit everything in this file with your real details, numbers, and links.

export const profile = {
  name: "Chitranjan Vishwakarma",
  initials: "Chitranjan",
  role: "Data Analyst",
  tagline: "BCA Graduate — Data Analytics Intern turning raw data into decisions.",
  location: "Varanasi, Uttar Pradesh, India",
  phone: "+91 9453171634",
  email: "chitranjanvishwakarma84@gmail.com",
  linkedin: "https://www.linkedin.com/in/chitranjan-vishwakarma-429a373b5",
  github: "https://github.com/Chitranjan-7-8-6",
  resumeUrl: "/CC-ONLINE-02.pdf",
};

export const heroBadges = ["DATA ANALYST", "POWER BI", "SQL", "DAX"];

export const heroQuote = {
  text: ["RAW DATA IN.", "CLEAR DECISIONS OUT."],
  signature: "Chitranjan Vishwakarma",
};

export const aboutStats = [
  { value: "5 +", label: "DASHBOARDS DEPLOYED", note: "Power BI, Hummingbyte Pvt Ltd" },
  { value: "15%", label: "REGIONAL DROP FOUND", note: "Insurance DB analysis" },
  { value: "5 MO", label: "ANALYTICS INTERNSHIP", note: "JUN – OCT 2025" },
  { value: "BCA", label: "GRADUATE, 2026", note: "Varanasi" },
];

export const tickerFacts = [
  "BCA graduate, Sri Ram Kishun PG College, 2026",
  "Data Analytics Intern at Hummingbyte Pvt Ltd (JUN – OCT 2025)",
  "Power BI (Professional Level), DAX, Data Modeling",
  "SQL, MSSQL, Python (NumPy, Pandas)",
  "CCC certified, Nielit, 2024",
];

export const about = {
  eyebrow: "01 / ABOUT",
  heading: ["FROM RAW DATA", "TO REAL DECISIONS."],
  body: "I'm an analytical, detail-oriented BCA graduate with hands-on experience as a Data Analytics Intern at Hummingbyte Pvt Ltd. I build interactive Power BI dashboards, clean data with Power Query (ETL), and use DAX and SQL to turn complex raw data into clear, actionable stories that support real decisions.",
};

export type Project = {
  id: string;
  index: string;
  category: string;
  title: string[];
  summary: string;
  metrics: { label: string; value: string }[];
  tools: string[];
  link?: string;
};

export const projectsHeading = {
  eyebrow: "02 / FEATURED WORK",
  heading: ["SELECTED WORK.", "INSIGHTS DELIVERED."],
  sub: "Built during a Data Analytics internship at Hummingbyte Pvt Ltd — each dashboard mapped to a real business question.",
};

export const projects: Project[] = [
  {
    id: "car-trend",
    index: "01",
    category: "AUTOMOTIVE / MARKET TRENDS",
    title: ["CAR TREND", "ANALYSIS"],
    summary:
      "Analyzed the CarDekho used-car dataset to uncover pricing trends across brand, fuel type, transmission, and year of manufacture.",
    metrics: [
      { label: "DATASET", value: "CarDekho (used cars)" },
      { label: "TOOL", value: "Python, Power BI" },
      { label: "FOCUS", value: "Price & trend patterns" },
    ],
    tools: ["Python", "pandas", "Power BI"],
  },
  {
    id: "insurance-db",
    index: "02",
    category: "INSURANCE / SALES ANALYTICS",
    title: ["INSURANCE DB", "ANALYSIS"],
    summary:
      "Power BI report tracking monthly sales revenue and regional growth — identified a 15% drop in specific regions, helping the team pivot strategy.",
    metrics: [
      { label: "FINDING", value: "15% regional drop" },
      { label: "TOOL", value: "Power BI" },
      { label: "FOCUS", value: "Revenue & region" },
    ],
    tools: ["Power BI", "DAX", "Power Query"],
  },
  {
    id: "sales-db",
    index: "03",
    category: "RETAIL / CHURN ANALYSIS",
    title: ["SALES DB", "ANALYSIS"],
    summary:
      "Analyzed customer behavior data to predict churn rates using Power BI visualizations.",
    metrics: [
      { label: "FOCUS", value: "Churn prediction" },
      { label: "TOOL", value: "Power BI" },
      { label: "INPUT", value: "Customer behavior data" },
    ],
    tools: ["Power BI", "DAX", "Data Modeling"],
  },
  {
    id: "upi-transaction",
    index: "04",
    category: "FINTECH / OPERATIONS",
    title: ["UPI TRANSACTION", "ANALYSIS"],
    summary:
      "Built an automated dashboard to monitor stock levels and supply chain efficiency.",
    metrics: [
      { label: "TYPE", value: "Automated dashboard" },
      { label: "TOOL", value: "Power BI" },
      { label: "FOCUS", value: "Stock & supply chain" },
    ],
    tools: ["Power BI", "SQL", "Power Query"],
  },
];

export const pillarsHeading = {
  eyebrow: "03 / TOOLKIT",
  heading: ["METHOD OVER", "GUESSWORK."],
};

export const pillars = [
  {
    tag: "COLLECT",
    badge: "SQL & MSSQL",
    title: "DATA COLLECTION",
    description:
      "Pulling and querying data with SQL joins across MSSQL databases before any analysis begins.",
    tools: ["SQL", "MSSQL", "Github"],
  },
  {
    tag: "CLEAN",
    badge: "ETL",
    title: "CLEANING & MODELING",
    description:
      "Data cleaning (ETL) with Power Query, plus data modeling and DAX for calculated columns and measures.",
    tools: ["Power Query", "DAX", "Data Modeling"],
  },
  {
    tag: "ANALYZE",
    badge: "PYTHON",
    title: "ANALYSIS & LOGIC",
    description:
      "Analytical thinking backed by Python (NumPy, Pandas) and a C / C++ programming foundation.",
    tools: ["Python", "NumPy", "Pandas", "C / C++"],
  },
  {
    tag: "REPORT",
    badge: "PRO LEVEL",
    title: "VISUALIZATION",
    description:
      "Interactive Power BI dashboards with slicers, drill-downs, and maps to track KPIs for senior management.",
    tools: ["Power BI", "Excel", "KPI Dashboards"],
  },
];

export const timelineHeading = { eyebrow: "04 / TIMELINE" };

export const timeline = [

  // YAHA SE EDIT HUA HAI

  {
    period: "SEP – OCT 2026",
    title: "DATA ANALYST INTERN",
    org: "BSNL BRBRAITT (TIRTC), Jabalpur",
    note: "Thrilled to share that I have successfully completed my telecom internship at BSNL BRBRAITT (TIRTC), Jabalpur! Grateful for the hands-on learning in networking and advanced telecom technologies. 🙌",
  },
   
  {
    period: "AUG – SEP 2026",
    title: "DATA ANALYST INTERN",
    org: "VODAFONE IDEA AND EDUNET FOUNDATION",
    note: "Analysis the dataset of Car Dekho, and find the trend and analysis it also. Use the Numpy, Pandas, Matplotlib, and Seaborn.",
  },

   {
    period: "MAY – JUN 2026",
    title: "Deloitte Australia - Data Analytics Job Simulation",
    org: "FORAGE",
    note: "Built Tableau dashboards, performed ETL with Query, and used DAX for data modeling and trend analysis.",
  },


  {
    period: "JUN – OCT 2025",
    title: "DATA ANALYST INTERN",
    org: "HUMMINGBYTE PVT LTD",
    note: "Built 3 Power BI dashboards, performed ETL with Power Query, and used DAX for data modeling and trend analysis.",
  },
  {
    period: "2024",
    title: "CERTIFICATIONS",
    org: "NIELIT",
    note: "CCC certification (Nielit, 2024).",
  },
  {
    period: "2023 – 2026",
    title: "BCA (BACHELOR OF COMPUTER APPLICATIONS)",
    org: "SRI RAM KISHUN PG COLLEGE",
    note: "Graduating 2026.",
  },
  {
    period: "2020 – 2022",
    title: "HIGHER SECONDARY & INTERMEDIATE",
    org: "SRI KRISHNA INTERMEDIATE COLLEGE, UP BOARD",
    note: "10th (2020) and 12th (2022).",
  },
];

export const contact = {
  eyebrow: "05 / CONTACT",
  heading: ["HAVE A DATASET", "WORTH A LOOK?"],
  sub: "Open to data analyst roles, internships, and freelance dashboard work. Reach out below.",
  submitLabel: "SEND MESSAGE",

  email: profile.email,
  phone: profile.phone,

};
