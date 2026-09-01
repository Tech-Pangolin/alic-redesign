export type LbBlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type LbBlogPost = {
  id: string;
  category: "LB Blog";
  title: string;
  excerpt: string;
  date: string;
  author: string;
  sourceUrl: string;
  sections: LbBlogSection[];
};

export const LB_BLOG_COLOR = "#5C4B8A";

export const lbBlogPosts: LbBlogPost[] = [
  {
    id: "burnout-psychological-safety",
    category: "LB Blog",
    title:
      "Burnout at an All-Time High: Why Psychological Safety is the Key to Saving America's Workforce",
    excerpt:
      "Burnout is at an all-time high while employee engagement falls. Leaders can change that by prioritizing psychological safety — creating spaces where employees feel seen, heard, and safe to take smart risks.",
    date: "May 7, 2026",
    author: "Dr. Kristin Tugman",
    sourceUrl:
      "https://www.tugmanconsulting.com/post/burnout-at-an-all-time-high-why-psychological-safety-is-the-key-to-saving-america-s-workforce",
    sections: [
      {
        heading: "The Burnout Crisis in 2025–2026",
        paragraphs: [
          "American workers are facing unprecedented levels of burnout. Recent studies show that 66% of U.S. employees reported experiencing job burnout in 2025, the highest rate in six years. This surge is not a temporary spike; it reflects deeper structural issues in the workplace.",
          "In 2024, the Department of Health and Human Services underscored that mental health is now a public health priority. Employees are not just tired — they are disengaged, anxious, and increasingly skeptical about whether their organizations value their well-being.",
        ],
      },
      {
        heading: "The Cost of Burnout",
        paragraphs: [
          "Burnout is not just a human issue; it is a financial one. Research estimates that burnout costs employers millions annually in lost productivity, absenteeism, and turnover. Employees experiencing burnout are twice as likely to leave their jobs within a year.",
          "Lost productivity, rising healthcare costs, and costly turnover drain both human capital and financial resources. Employers who fail to address burnout risk workforce instability and diminished competitiveness.",
        ],
      },
      {
        heading: "Why Psychological Safety Matters",
        paragraphs: [
          "One of the most effective antidotes to burnout is psychological safety — a workplace climate where employees feel safe to speak up, take risks, and express concerns without fear of retaliation.",
          "Psychological safety directly combats burnout by reducing stress from job insecurity, encouraging open dialogue about workload and mental health, and fostering inclusion so employees feel respected and valued.",
        ],
      },
      {
        heading: "How Employers Can Build a Psychologically Safe Workplace",
        paragraphs: [
          "Normalize conversations about mental health. Encourage leaders to openly discuss stress and burnout and provide training on recognizing signs of burnout and responding with empathy.",
          "Redesign workloads and expectations. Audit workloads to ensure they are realistic and establish clear boundaries between work and personal time.",
          "Empower employee voice through anonymous feedback channels and leaders who act on input regularly.",
          "Invest in manager training to foster trust, inclusion, and psychological safety — including recognizing emerging mental health conditions versus performance issues.",
          "Measure and monitor burnout indicators such as absenteeism, turnover, and engagement scores.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Burnout has reached crisis levels in the American workforce. Yet there is a clear path forward: psychological safety. By fostering environments where employees feel secure, valued, and empowered, employers can reverse the burnout trend and build workplaces that thrive.",
          "Psychological safety is not just about protecting employees — it is about saving organizations.",
        ],
      },
    ],
  },
  {
    id: "stress-in-america",
    category: "LB Blog",
    title:
      "Stress in America: How workers can care for themselves and how employers must step up",
    excerpt:
      "The American workplace in 2025 is defined by uncertainty, anxiety, and a growing mental health crisis — from economic instability to food insecurity, workers face pressures that extend far beyond the office walls.",
    date: "February 17, 2026",
    author: "Dr. Kristin Tugman",
    sourceUrl:
      "https://www.tugmanconsulting.com/post/stress-in-america-how-workers-can-care-for-themselves-and-how-employers-must-step-up",
    sections: [
      {
        paragraphs: [
          "Division in America is exacerbating stress and loneliness. Stress levels are at historic highs, engagement is at historic lows, and the ripple effects are being felt across families, communities, and organizations.",
        ],
      },
      {
        heading: "The Current State of Worker Stress",
        paragraphs: [
          "Recent surveys show that stress among U.S. workers is at an all-time high, with only 31% of employees reporting engagement at work. Individual contributors are at an all-time low of 18% engagement.",
          "Economic worries are intensifying, healthcare affordability compounds stress, and political polarization adds another layer of distress affecting mental health.",
        ],
      },
      {
        heading: "Food Insecurity and Mental Health",
        paragraphs: [
          "One of the most direct links between economic instability and mental health is food insecurity. Research found that food insecurity causes an immediate increase in anxiety and depression symptoms, while alleviating it reduces symptoms significantly.",
          "For workers, stress is not just about abstract fears of the economy — it is about whether they can afford groceries, pay medical bills, and keep their families healthy.",
        ],
      },
      {
        heading: "What Workers Can Do: Self-Care in Uncertain Times",
        paragraphs: [
          "Prioritize basic needs: access to nutritious food, sleep, and exercise are foundational.",
          "Set boundaries to protect time and energy when engagement is low and stress is high.",
          "Build connection through community groups and professional networks to combat loneliness.",
          "Practice stress management through mindfulness, journaling, or short breaks during the workday.",
          "Seek support through therapy, counseling, or Employee Assistance Programs.",
        ],
      },
      {
        heading: "What Employers Must Do",
        paragraphs: [
          "Normalize mental health conversations and provide access to counseling and mental health benefits.",
          "Address food insecurity through meal stipends, grocery cards, or partnerships with local organizations.",
          "Offer flexibility through remote work options and generous leave policies.",
          "Invest in engagement through recognition programs, career development, and transparent communication.",
          "Foster community through team-building, mentorship, and social events that combat loneliness.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "American workers are stressed, anxious, and fearful about the future. Self-care can help individuals weather the storm, but employers must step up with meaningful support. Resilience will come from both sides.",
        ],
      },
    ],
  },
  {
    id: "healthcare-costs-workforce-crisis",
    category: "LB Blog",
    title:
      "Healthcare Costs as a Workforce Crisis: Why Employers Must Act Now",
    excerpt:
      "Healthcare costs in the United States have reached a crisis point — premiums, out-of-pocket expenses, and disability-related costs are rising at unsustainable rates.",
    date: "December 19, 2025",
    author: "Dr. Kristin Tugman",
    sourceUrl:
      "https://www.tugmanconsulting.com/post/healthcare-costs-as-a-workforce-crisis-why-employers-must-act-now",
    sections: [
      {
        paragraphs: [
          "Premiums, out-of-pocket expenses, and disability-related costs are rising at unsustainable rates, threatening not only financial stability but also workforce health and productivity. Employer-sponsored healthcare costs are projected to rise 8.4% in 2026 — the steepest increase in over a decade.",
        ],
      },
      {
        heading: "The Drivers of Rising Healthcare Costs",
        paragraphs: [
          "Medical inflation, chronic disease prevalence, delayed care, and administrative complexity are all driving costs upward. Nearly half of U.S. adults report skipping or delaying care due to affordability, leading to higher acuity and expensive emergency interventions.",
        ],
      },
      {
        heading: "The Workforce Impact",
        paragraphs: [
          "Rising healthcare costs drive absenteeism, presenteeism, and prolonged disability claims. Employees are more likely to leave for better coverage when healthcare benefits rank as a top employment factor.",
        ],
      },
      {
        heading: "Employer Solutions",
        paragraphs: [
          "Transitional return-to-work programs shorten disability durations by allowing modified schedules and lighter workloads during recovery.",
          "Stay-at-work initiatives keep employees with emerging health conditions on the job through ergonomic adjustments and flexible scheduling.",
          "Preventive health and wellness programs emphasize screenings and chronic disease management.",
          "Point solutions — chronic disease apps, mental health platforms, musculoskeletal care, and women's health solutions — deliver measurable ROI while improving accessibility.",
        ],
      },
      {
        heading: "The Strategic Imperative",
        paragraphs: [
          "Employers who deploy return-to-work, stay-at-work, preventive health, point solutions, and supportive workplace policies will reduce costs, protect productivity, strengthen retention, and build resilience in the face of systemic healthcare inflation.",
        ],
      },
    ],
  },
  {
    id: "gen-z-in-the-workplace",
    category: "LB Blog",
    title: "Gen Z in the Workplace: What Employers Need to Know",
    excerpt:
      "Generation Z is now 27% of the U.S. workforce. Many employers are still trying to understand their needs and motivations when it comes to work.",
    date: "April 25, 2025",
    author: "Dr. Kristin Tugman",
    sourceUrl: "https://www.tugmanconsulting.com/post/gen-z-in-the-workplace",
    sections: [
      {
        paragraphs: [
          "Generation Z (individuals born between 1997 and 2012) is now 27% of the workforce in the US. While they are quickly becoming an important target for hiring and talent development, many employers are still trying to understand their needs and motivations when it comes to work.",
          "Recently I interviewed a small group of individuals from this cohort to seek to better understand their perspectives. These conversations produced interesting insights on their shared attitudes and beliefs when it comes to their ideal work environment, career aspirations, benefits expectations, and more.",
        ],
      },
      {
        heading: "Mental Health as the Norm",
        paragraphs: [
          "Mental health is considered the norm, with the majority of interviewees agreeing it is a normal conversation topic for the workplace. In fact, these individuals felt employers should take responsibility for preserving the mental health of their workforce.",
        ],
      },
      {
        heading: "Community at Work",
        paragraphs: [
          "Study participants shared a common need to find community at work. Enjoying their co-workers and seeing them as friends outside of work is important, as is feeling comfortable to be themselves and bring their whole selves to work.",
        ],
      },
      {
        heading: "Additional Themes",
        paragraphs: [
          "Other themes that arose included the impact of COVID-19 on their attitudes toward work/life balance, their interest in compensation that powers life experiences, and expectations for diversity, inclusion, and equity within the workplace.",
        ],
      },
    ],
  },
  {
    id: "seven-step-return-to-work",
    category: "LB Blog",
    title: "The 7-step Model to Enhance Return-to-Work Outcomes",
    excerpt:
      "The experience of the inability to work due to an injury or illness is a psychological event — and the middle bucket of claims is where the opportunity lies for intervention.",
    date: "April 7, 2025",
    author: "Dr. Kristin Tugman",
    sourceUrl: "https://www.tugmanconsulting.com/post/the-7-step-model",
    sections: [
      {
        paragraphs: [
          "The experience of the inability to work due to an injury or illness is a psychological event. The psychology of disability and return-to-work may not be a diagnosable mental health condition, but it does require psychological adjustment that is critical to return-to-work success.",
          "The disability experience can be categorized into three buckets: claims that are predictable and self-resolve, claims that are long term and permanent, and a middle bucket — claims that should be medically progressing but are not improving. The middle bucket is where the opportunity lies.",
        ],
      },
      {
        heading: "The 7 Steps",
        paragraphs: [
          "1. Validation of the illness — Shame and guilt often accompany the inability to work. It is important to validate the need for treatment and give permission to take the time away.",
          "2. Baby steps — Incremental steps to recovery through small goals that demonstrate progress.",
          "3. Challenge negative thoughts — Cognitive distortions often leave the person believing the condition will never get better.",
          "4. Fears of return to work — Identify tangible fears and develop a plan for each.",
          "5. Preventing illness relapse — Identify early warning signs and steps to take when they appear.",
          "6. Boundaries — Identify reasonable boundaries around workload and hours to help the claimant feel prepared.",
          "7. Work adjustment or Transitional return-to-work — When available, return incrementally over a brief period.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "As soon as an individual experiences an inability to stay at work due to an illness or injury, there is a race to prevent the disability mindset and promote psychological adjustment.",
          "The 7-step model can identify thought process barriers as they occur and provide a sense of security and preparedness for return-to-work success.",
        ],
      },
    ],
  },
];

export function getAllLbBlogPosts(): LbBlogPost[] {
  return lbBlogPosts;
}

export function getLbBlogPost(slug: string): LbBlogPost | undefined {
  return lbBlogPosts.find((post) => post.id === slug);
}
