// ===== THEME COLORS =====
const T = {
  blue: "#00A6E6",
  blueDark: "#0077B3",
  navy: "#0B2A4A",
  bg: "#EEF6FB",
  card: "#FFFFFF",
  ink: "#16324A",
  sub: "#6B8299",
  line: "#DCEAF3",
  good: "#1DB954",
  warn: "#F5A623",
  bad: "#E5484D",
};

// ===== FORMAT HELPER =====
const fmt = (n) =>
  isNaN(n) || n === null ? "0" : Math.round(n).toLocaleString("th-TH");

// ===== OCCUPATIONS =====
const OCCUPATIONS = [
  { id: "student", label: "Student", months: 3 },
  { id: "firstjob", label: "First Jobber", months: 6 },
  { id: "fulltime", label: "Full-time Employee", months: 6 },
  { id: "freelance", label: "Freelancer", months: 9 },
  { id: "biz", label: "Business Owner", months: 12 },
  { id: "other", label: "Others", months: 6 },
];

// ===== INCOME TYPES =====
const INCOME_TYPES = ["Fixed Income", "Variable Income", "Both"];

// ===== EMERGENCY FUND STATUS =====
const EF_STATUS = [
  { id: "none", label: "ไม่มี", months: 0 },
  { id: "lt3", label: "มี แต่ยังไม่ครบ 3 เดือนของค่าใช้จ่าย", months: 1.5 },
  { id: "m36", label: "มี 3–6 เดือนของค่าใช้จ่าย", months: 4.5 },
  { id: "gt6", label: "มีมากกว่า 6 เดือนของค่าใช้จ่าย", months: 7.5 },
];

// ===== INVESTMENT STATUS =====
const INVEST_STATUS = [
  { id: "never", label: "ไม่เคยลงทุน" },
  { id: "some", label: "เคยลงทุน" },
  { id: "regular", label: "ลงทุนอย่างสม่ำเสมอ" },
];

const INVEST_FREQ = ["Monthly DCA", "Quarterly", "Annually", "Ad-hoc"];

// ===== INDUSTRIES =====
const INDUSTRIES = [
  "FinTech / Digital Banking",
  "Healthcare / Biotech",
  "Technology / IT / Software",
  "Energy / Sustainability",
  "Real Estate / Property",
  "Manufacturing",
  "Retail / Consumer Goods",
  "Agriculture / Food",
  "Automotive",
  "Telecommunications",
  "Others",
];

// ===== INVESTMENT TYPES =====
const INVEST_TYPES = ["Mutual Funds", "Stocks", "Bonds", "ETF", "Crypto", "Others"];

// ===== STOCK SECTORS =====
const STOCK_SECTORS_TH = [
  "Thai Blue Chip",
  "Technology",
  "Healthcare",
  "Banking",
  "Energy",
  "Consumer",
  "Real Estate",
  "Others",
];

const STOCK_SECTORS_INT = [
  "Technology",
  "Healthcare",
  "Finance",
  "Consumer",
  "Energy",
  "Others",
];

// ===== INSURANCE TYPES =====
const INSURANCE_TYPES = [
  "ไม่มี",
  "Health Insurance",
  "Life Insurance",
  "Accident Insurance",
  "Others",
];

// ===== DEBT TYPES =====
const DEBT_TYPES = [
  "Student Loan",
  "Credit Card",
  "Personal Loan",
  "Car Loan",
  "Home Loan",
  "Others",
];

// ===== FINANCIAL GOALS =====
const GOALS = [
  { id: "travel", label: "Travel", icon: "✈️" },
  { id: "mba", label: "MBA / Education", icon: "🎓" },
  { id: "home", label: "Home", icon: "🏡" },
  { id: "wedding", label: "Wedding", icon: "💍" },
  { id: "retire", label: "Retirement", icon: "🌅" },
  { id: "freedom", label: "Financial Freedom", icon: "🕊️" },
  { id: "othergoal", label: "Others", icon: "⭐" },
];

// ===== RISK PROFILES =====
const RISK = [
  {
    id: "conservative",
    label: "Conservative",
    desc: "เน้นรักษาเงินต้น รับความผันผวนได้น้อย",
  },
  {
    id: "moderate",
    label: "Moderate",
    desc: "รับความผันผวนได้ปานกลาง เพื่อผลตอบแทนที่ดีขึ้น",
  },
  {
    id: "aggressive",
    label: "Aggressive",
    desc: "รับความผันผวนได้สูง เพื่อการเติบโตระยะยาว",
  },
];

// ===== PREFERENCES =====
const WEALTH_PREF = [
  "Financial Stability",
  "Wealth Growth",
  "Goal Achievement",
  "Passive Income",
  "Financial Freedom",
];

const LIFESTYLE = [
  "Necessities",
  "Lifestyle",
  "Experiences",
  "Travel",
  "Shopping",
  "Investment",
  "Others",
];
