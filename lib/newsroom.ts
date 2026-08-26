export const NEWSROOM_CATEGORIES = [
  "Community & Events",
  "Corporate & Clients",
  "Conferences & Industry",
  "Company & Updates",
] as const;

export type NewsroomCategory = (typeof NEWSROOM_CATEGORIES)[number];

export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
};

export type NewsroomArticle = {
  id: string;
  category: NewsroomCategory;
  title: string;
  excerpt: string;
  date: string;
  location?: string;
  tags?: string[];
  sections: ArticleSection[];
  heroImage?: string;
};

export const CATEGORY_COLORS: Record<NewsroomCategory, string> = {
  "Community & Events": "#11224d",
  "Corporate & Clients": "#2F6B4F",
  "Conferences & Industry": "#5C4B8A",
  "Company & Updates": "#A65D3F",
};

const CLOSING =
  "Atlanta Life Insurance Company is committed to the communities it serves — through purposeful partnerships, meaningful presence, and a mission that has guided this organization for more than 120 years.";

export const newsroomArticles: NewsroomArticle[] = [
  {
    id: "pearls-of-purpose",
    category: "Community & Events",
    title:
      "Pearls of Purpose Foundation — Mother & Daughter Scholarship Luncheon",
    excerpt:
      "Atlanta Life sponsored this celebration of legacy and scholarship honoring the bonds between mothers and daughters.",
    date: "Date TBD",
    location: "Location TBD",
    tags: ["Event Recap", "Community"],
    sections: [
      {
        paragraphs: [
          "Some events leave a mark not because of their scale, but because of what they stand for. The Pearls of Purpose Foundation's Mother & Daughter Scholarship Luncheon was exactly that kind of event — an afternoon built around legacy, love, and the quiet but powerful conviction that the bond between a mother and her daughter is one of the most enduring forces a community can invest in.",
          "Atlanta Life Insurance Company was proud to serve as a sponsor of this year's luncheon, joining a gathering of families, community leaders, and advocates united by a shared belief in scholarship, mentorship, and the next generation of young women.",
        ],
      },
      {
        heading: "An Afternoon Centered on Legacy",
        paragraphs: [
          "The Pearls of Purpose Foundation has long been committed to uplifting women and girls through education and mentorship. The luncheon brought that mission to life — creating space for mothers and daughters to sit together, be celebrated together, and be reminded of what is possible when community invests in its own.",
          "Among the evening's special guests were Angelina Jolie and her daughter Zahara Jolie, whose presence added a layer of warmth and meaning to an already meaningful occasion. Their attendance reflected the spirit of the event itself — the idea that across every background and every walk of life, the mother-daughter relationship is something worth honoring.",
        ],
      },
      {
        heading: "Atlanta Life's Presence",
        paragraphs: [
          "Members of Atlanta Life's leadership team were in attendance to represent the company and show support for the Foundation's work. As a sponsor, Atlanta Life was also pleased to provide a small gift for luncheon participants — a gesture in keeping with our belief that showing up for community means more than a name on a program.",
          "Our presence at this event reflects something deeper than a sponsorship line item. Atlanta Life was founded on the conviction that legacy is worth protecting — that people and their families deserve the tools, the support, and the community around them to build something lasting. An event like this one, which celebrates that conviction in one of its most personal forms, is exactly the kind of moment we want to be part of.",
        ],
      },
      {
        heading: "About the Pearls of Purpose Foundation",
        paragraphs: [
          "The Pearls of Purpose Foundation is dedicated to empowering women and girls through scholarship, mentorship, and community engagement. Through signature events and ongoing programming, the Foundation creates opportunities for the next generation to step forward with confidence, purpose, and the support of a community behind them.",
          CLOSING,
        ],
      },
    ],
  },
  {
    id: "strength-in-the-city",
    category: "Community & Events",
    title:
      "Strength in the City National Wellness Tour — Atlanta Life on the Road",
    excerpt:
      "Lead sponsor for the second year — 13 cities nationwide connecting communities through fitness, mindfulness, and well-being.",
    date: "2026",
    location:
      "Atlanta, Austin, Aurora, Charlotte, Brooklyn, Denver, Chicago, Nashville, Detroit, Los Angeles, Milwaukee, Phoenix, San Diego",
    tags: ["Event Recap", "Community", "Partnership"],
    sections: [
      {
        paragraphs: [
          "Wellness is not a conversation that belongs in one city. It belongs in every city — in every neighborhood, on every block, with every community that deserves to feel strong, supported, and seen. That is the conviction behind the Strength in the City National Wellness Tour, and it is the reason Atlanta Life Insurance Company has been proud to serve as lead sponsor and financial education and resources partner for the second consecutive year.",
          "From Atlanta to Los Angeles, Brooklyn to Phoenix, Nashville to San Diego — the Strength in the City tour moves through communities across the country, bringing together fitness, mindfulness, recovery, and the kind of real, human connection that makes wellness feel less like a trend and more like a right.",
        ],
      },
      {
        heading: "Thirteen Cities. One Mission.",
        paragraphs: [
          "This year's tour made stops in thirteen cities across the country — Atlanta, Austin, Aurora, Charlotte, Brooklyn, Denver, Chicago, Nashville, Detroit, Los Angeles, Milwaukee, Phoenix, and San Diego. At each stop, the energy was the same: people showing up for themselves, for their neighbors, and for the belief that a community that moves together and supports one another is a stronger one.",
          "The Strength in the City experience is deliberately designed to meet people where they are — combining high-energy physical activations with spaces for recovery, reflection, and community. For Atlanta Life, it has been one of the most meaningful partnerships we have built, precisely because it reflects how we think about wellness: not as a single thing, but as a whole picture.",
        ],
      },
      {
        heading: "Atlanta Life on the Ground",
        paragraphs: [
          "At every tour stop, the Atlanta Life team showed up ready — not just to be present, but to be useful. Our team was on the ground at each city with a booth presence and speaking opportunities, engaging attendees in real conversations about financial wellness and what it means to build a more secure future.",
          "We brought our Financial Wellness Guides — available free to every attendee — as a tangible resource people could take home. These guides are designed to help people understand the fundamentals of financial well-being: budgeting, savings, insurance, and the tools available to support long-term financial health. Our goal at every stop was simple: meet people where they are, give them something real, and start a conversation worth continuing.",
          "Our team also participated in on-site activations throughout the tour — not just as a sponsor in the background, but as an active presence in the experience itself.",
        ],
      },
      {
        heading: "Why This Partnership Matters to Us",
        paragraphs: [
          "Atlanta Life has been in the business of protecting people and families for more than 120 years. That history is built on the belief that financial security and community well-being are inseparable — that a person cannot fully thrive when their financial foundation is unstable, and that communities are stronger when the people within them have access to education, tools, and support.",
          "The Strength in the City tour brings that belief to life in one of the most direct ways possible. Thousands of people across thirteen cities had the opportunity to connect with Atlanta Life — to ask questions, pick up resources, and learn more about what financial wellness actually looks like in practice. That is not something we take lightly.",
          "For the second year running, this has been one of the highlights of our community engagement calendar — and we are grateful to the Strength in the City team for building something that makes this kind of work possible.",
        ],
      },
      {
        heading: "About Strength in the City",
        paragraphs: [
          "Strength in the City is a national wellness movement connecting communities through fitness, mindfulness, recovery, and education. Through its national tour, SITC brings free and accessible wellness experiences to cities across the country — building healthier, stronger communities one stop at a time.",
          CLOSING,
        ],
      },
    ],
  },
  {
    id: "sweet-auburn-stories",
    category: "Community & Events",
    title: "Sweet Auburn Stories — An Evening with Ambassador Andrew Young",
    excerpt:
      "Filmed at the Herndon Home, celebrated at Hammonds House Museum — honoring the life and legacy of Ambassador Andrew Young.",
    date: "2026",
    location: "Atlanta, Georgia",
    tags: ["Event Recap", "Community", "Partnership", "History"],
    sections: [
      {
        paragraphs: [
          "There are stories that belong to a city. Stories that stretch across decades, through struggle and triumph and the quiet determination of a people who refused to be written out of their own history. The story of Ambassador Andrew Young — civil rights leader, diplomat, Mayor of Atlanta, United States Ambassador to the United Nations, and one of the most consequential figures in the history of this city and this nation — is one of those stories.",
          "Atlanta Life Insurance Company was honored to play a role in bringing it to the public through a partnership with Sweet Auburn Stories and filmmaker Royce Bable. What unfolded across two extraordinary days was not just a production — it was a moment of communion between Atlanta Life's living history and the man who helped shape the world that history was part of.",
        ],
      },
      {
        heading: "Part One — A Recording at the Herndon Home",
        paragraphs: [
          "The first chapter of this experience began at the Herndon Home — the historic residence of Alonzo Franklin Herndon, Atlanta Life's founder and Atlanta's first Black millionaire. There are few places in Atlanta as charged with meaning. The home stands as a testament to what was built against extraordinary odds, and what was left behind for those who came after.",
          "With the permission and full collaboration of the Herndon Foundation, which operates and preserves the Herndon Home, Atlanta Life secured access to the property as the setting for Ambassador Young's recorded conversation. The Sweet Auburn Stories team and Royce Bable led the filming, capturing Ambassador Young in a space that carries the weight of the very history he was invited to speak about.",
          "The entire Atlanta Life leadership team was present that day — not only to support the logistics of the production, but to bear witness. To be in that space, with that man, talking about Atlanta Life's place in the arc of Atlanta's story, was not a small thing. It was the kind of moment an organization carries with it.",
          "Ambassador Young spoke about Atlanta life and culture, his own extraordinary career, and the influence Atlanta Life Insurance Company had — and continues to have — on the civil rights movement, the Atlanta University Center, the development of Atlanta and the broader South, and the communities that shaped him. He connected threads that many people have never had the opportunity to see connected: the relationship between Black economic institutions, civil rights progress, and the city that became the capital of a movement.",
        ],
      },
      {
        heading: "Part Two — The Release Party at Hammonds House Museum",
        paragraphs: [
          "The second chapter was a celebration. Held at the historic Hammonds House Museum in Atlanta — one of the city's most beloved cultural institutions — the release party brought together community, leadership, history, and the warmth of an evening built for people who care deeply about this city and its story.",
          "Atlanta Life helped sponsor and support the event, which opened as a community gathering and reception before moving into a formal speaking program. The speakers that evening reflected the full arc of what this partnership represented.",
          "Atlanta Life leadership took the stage to speak about the company's history, its mission, and what it meant to be part of a project of this significance. Royce Bable and the Sweet Auburn Stories team shared their vision for the project and what it meant to tell this chapter of Atlanta's story through this particular lens.",
          "Mayor Andre Dickens, the current Mayor of Atlanta, joined the evening — a presence that underscored the ongoing relevance of the history being honored and the living connection between Atlanta Life, this city, and its leadership. Henrietta Antonin, former Atlanta Life leader, brought a personal and institutional perspective to the evening — bridging the company's past and present in a way that only someone who has lived inside both can.",
          "And at the center of it all — Ambassador Andrew Young himself, whose words that evening carried the authority of a life fully lived in service of something larger than himself. He spoke of Atlanta, of the movement, of the Atlanta University Center and its role in shaping a generation of leaders, of the South's transformation, and of Atlanta Life's quiet but indelible presence in all of it.",
        ],
      },
      {
        heading: "Why This Mattered to Atlanta Life",
        paragraphs: [
          "Atlanta Life was founded in 1905 by Alonzo Herndon with a singular conviction: that people and their families deserve the means to build something lasting. That conviction did not exist in a vacuum. It existed inside a city, a culture, a movement — and it shaped and was shaped by the people and forces around it.",
          "Ambassador Andrew Young is part of that story. The civil rights movement is part of that story. The Atlanta University Center is part of that story. Sweet Auburn, Hammonds House, the Herndon Home — all of it is part of the same long thread that Atlanta Life has been woven into for more than 120 years.",
          "This project gave us the rare opportunity to say that out loud — to document it, to share it, and to do so in partnership with people and institutions who carry that history with the same care and intentionality we try to bring to our own work.",
          "We are deeply grateful to Ambassador Young for his time, his words, and his trust. To Sweet Auburn Stories and Royce Bable for their artistry and their vision. To the Herndon Foundation for their generosity and their stewardship of a place that belongs to all of us. And to Mayor Dickens, Henrietta Antonin, and everyone who joined us at Hammonds House for an evening that reminded us — and we hope, everyone in that room — of what this city is made of.",
        ],
      },
      {
        heading: "About Sweet Auburn Stories",
        paragraphs: [
          "Sweet Auburn Stories is dedicated to preserving and sharing the cultural, historical, and community narratives of Atlanta's Sweet Auburn district and the broader Atlanta community. Through storytelling, film, and public programming, the organization brings Atlanta's living history to new and wider audiences.",
        ],
      },
      {
        heading: "About Royce Bable",
        paragraphs: [
          "Royce Bable is an Atlanta-based filmmaker and storyteller whose work centers on community, culture, and the stories that shape a city.",
        ],
      },
      {
        heading: "About the Herndon Foundation",
        paragraphs: [
          "The Alonzo F. and Norris B. Herndon Foundation is a private foundation dedicated to preserving the legacy of Atlanta Life's founders and investing in education, mentorship, and community advancement. The Foundation operates and preserves the Herndon Home as a historic landmark and educational resource.",
          CLOSING,
        ],
      },
    ],
  },
  {
    id: "bridge-to-leadership",
    category: "Community & Events",
    title:
      "Investing in What Comes Next — Atlanta Life Hosts Bridge to Leadership's Annual Fundraiser",
    excerpt:
      "Atlanta Life hosted and sponsored BTL fundraising events supporting the next generation of leaders.",
    date: "February 2026",
    location: "Atlanta, Georgia",
    tags: ["Event Recap", "Community", "Partnership"],
    sections: [
      {
        paragraphs: [
          "Every year, thousands of college students step toward graduation with the same quiet question underneath all the excitement: am I ready? Bridge to Leadership exists to make sure the answer is yes — and this February, Atlanta Life Insurance Company was honored to help them raise the resources to keep that work going.",
          "Atlanta Life hosted and sponsored Bridge to Leadership's annual fundraising event, bringing together supporters, alumni, and community members for an evening centered on one of the most meaningful investments a community can make: the futures of its young people.",
        ],
      },
      {
        heading: "About Bridge to Leadership",
        paragraphs: [
          "Bridge to Leadership is a nonprofit organization with a clear and urgent mission — empowering college students with the tools necessary for meaningful, valuable employment after graduation. Through mentorship, programming, and real-world skill development, BTL works to close the gap between academic achievement and professional readiness, giving students the confidence and capability to step into careers with purpose and preparedness.",
          "It is exactly the kind of organization Atlanta Life believes in. Our founding mission — creating legacy for people and their families — begins with opportunity. And opportunity begins with investment in the people who are still building toward it.",
        ],
      },
      {
        heading: "An Evening Built Around Purpose",
        paragraphs: [
          "Atlanta Life organized the full schedule of events and operations for the evening — creating a program that was both purposeful and engaging. The event opened as a gathering of supporters before moving into a structured program designed to bring BTL's work to life for everyone in the room.",
          "The Bridge to Leadership team presented on the organization's programming, sharing the scope of what they do, who they serve, and what the year ahead holds for their students. Their presentation was a reminder that behind every fundraising number is a student whose trajectory is being shaped by the work this organization does.",
          "De'Andre Williams of Atlanta Life's Group Solutions team took the stage to speak on behalf of Atlanta Life — sharing why this partnership matters to the company and what it means for an institution built on legacy to invest in the people who will carry that legacy forward.",
          "The centerpiece of the evening was a panel discussion featuring Bridge to Leadership alumni — former students who have gone through the program and come out the other side with careers, confidence, and a story worth telling. Their voices brought the most important element of the night into the room: proof. Proof that this work is real, that it changes lives, and that it is worth every dollar raised in its support.",
        ],
      },
      {
        heading: "Why Atlanta Life Showed Up",
        paragraphs: [
          "Atlanta Life has been in the business of protecting people and building legacies for more than 120 years. That work has always been most meaningful at the intersection of community and opportunity — in the moments when an institution with resources and reach chooses to put both in service of something that matters.",
          "Bridge to Leadership is doing work that matters. The students they serve are building futures — not just for themselves, but for the families and communities that surround them. When those students graduate ready, employed, and purposeful, the ripple effect extends far beyond a single career. That is the kind of impact Atlanta Life was built to support.",
          "We are proud to have hosted this event, proud of the BTL team for the work they do every day, and grateful to everyone who joined us for an evening that reminded the room why this investment is worth making.",
          CLOSING,
        ],
      },
    ],
  },
  {
    id: "atlanta-life-at-404-day",
    category: "Community & Events",
    title: "Atlanta Life at 404 Day — Celebrating the City We Call Home",
    excerpt:
      "Our team showed up for Atlanta's citywide celebration — sharing wellness items and Financial Wellness Guides with parade-goers.",
    date: "April 4, 2026",
    location: "Atlanta, Georgia",
    tags: ["Event Recap", "Community"],
    sections: [
      {
        paragraphs: [
          "April 4th belongs to Atlanta. Every year, 404 Day is a citywide celebration of everything that makes this place what it is — the culture, the energy, the people, and the deep sense of community that has defined Atlanta for generations. This year, Atlanta Life Insurance Company was glad to be part of it.",
          "Our team showed up to the parade ready to celebrate alongside the city we have called home for more than 120 years — passing out small wellness items and Financial Wellness Guides to parade-goers and simply being present in the spirit of the day.",
        ],
      },
      {
        heading: "Showing Up for Atlanta",
        paragraphs: [
          "There was no grand activation, no stage, no spotlight. Just our team, out in the city, among the people — handing out resources, starting conversations, and being part of a day that belongs to all of Atlanta.",
          "We distributed our Financial Wellness Guides to anyone who wanted one — a free resource designed to help people understand the fundamentals of financial well-being. Alongside those, we passed out small wellness items as a gesture of goodwill and appreciation for the community that has supported and surrounded Atlanta Life since our founding.",
        ],
      },
      {
        heading: "120 Years in This City",
        paragraphs: [
          "Atlanta Life has been part of this city since 1905. We were founded here, we have grown here, and we have served the people of Atlanta and beyond for more than a century. Days like 404 Day — when the city comes together simply to celebrate itself — are a reminder of why that history matters and why showing up for community, in whatever form that takes, is always worth doing.",
          "We are proud to call Atlanta home. And we were glad to be on the streets celebrating it.",
          CLOSING,
        ],
      },
    ],
  },
  {
    id: "tayari-jones",
    category: "Community & Events",
    title: "A Conversation Worth Having — Atlanta Life Hosts Author Tayari Jones",
    excerpt:
      "An intimate fireside chat with Oprah's Book Club author Tayari Jones, moderated by Courtney Johnson at Atlanta Life's offices.",
    date: "Date TBD",
    location: "Atlanta, Georgia",
    tags: ["Event Recap", "Community", "Culture"],
    sections: [
      {
        paragraphs: [
          "Some partnerships make perfect sense the moment you name them out loud. Atlanta Life Insurance Company and Tayari Jones — an institution rooted in this city's history and an artist rooted in its soul — coming together to celebrate a book that is both deeply personal and deeply Atlanta. It was not a stretch. It was a natural meeting of two entities that love this city and the community it has built.",
          "This spring, Atlanta Life opened its offices to the public for an intimate fireside chat with Jones — author, cultural icon, and the mind behind Kin, her celebrated new novel and her second selection for Oprah's Book Club. The evening was exactly what it was designed to be: a real conversation, in a real space, between a remarkable woman and the community that claims her as its own.",
        ],
      },
      {
        heading: "An Evening at Atlanta Life",
        paragraphs: [
          "The event was held in Atlanta Life's conference center — a setting that felt right for a conversation about history, identity, and the stories that shape a place. Open to the public, the evening drew an audience of community members, book lovers, and admirers of Jones's work who came ready to listen, to ask, and to connect.",
          "At the center of the evening was a fireside chat moderated by Courtney Johnson, Atlanta Life's Vice President of Group Solutions. Courtney brought both warmth and intention to the conversation — creating the kind of space that allowed Jones to speak freely, to go deep, and to share the layers of Kin and its connection to Atlanta in a way that felt genuine rather than performative.",
          "Their conversation moved across the landscape of the book, Atlanta's cultural history, and Jones's own relationship with the city — touching on the Atlanta University Center, the civil rights movement, the cultural forces that have shaped Black Atlanta, and the thread that connects all of it to a present-day city still in the process of understanding its own story.",
        ],
      },
      {
        heading: "Atlanta Life's Place in That Story",
        paragraphs: [
          "Jones spoke about Atlanta Life's influence on Atlanta — on the city's development, its identity, and the Black community that built it. For an institution founded in 1905 by Alonzo Herndon, Atlanta's first Black millionaire, that history is not incidental. It is foundational. Atlanta Life has been part of this city's fabric for more than 120 years — through the civil rights movement, through the growth of the Atlanta University Center, through the building of a city that became the capital of a region and a movement.",
          "To hear that history named and honored by one of Atlanta's most celebrated contemporary voices — in our own building, in front of a community audience — was a moment that carried weight. It was a reminder that the story Atlanta Life is part of is still being told, still being discovered, and still worth sharing.",
        ],
      },
      {
        heading: "The Conversation Opens Up",
        paragraphs: [
          "After the fireside chat, the floor opened to the audience — giving guests the opportunity to bring their own questions directly to Jones. The exchange was lively and warm, the kind of back-and-forth that only happens when a room full of people are genuinely invested in both the subject and the person speaking.",
          "The evening closed with a book signing — Jones moving through the room, connecting with guests, signing copies of Kin, and taking pictures with the people who had come to celebrate her. It was unhurried and personal. Exactly the kind of closing a night like this deserved.",
        ],
      },
      {
        heading: "Why This Felt Right",
        paragraphs: [
          "Atlanta Life gave Tayari Jones a platform not because it needed to — she is already one of Atlanta's most recognized voices — but because it wanted to. Because we believe in using our space, our reach, and our relationships to amplify the people and stories that reflect what this city is made of. Because Kin is about belonging, legacy, and the histories we carry with us — and those are themes Atlanta Life has been living inside for more than a century.",
          "This was a natural partnership. Two Atlanta institutions — one rooted in the past and building toward the future, one telling the stories that make the past worth knowing — finding common ground in a love for this city and the community that sustains it.",
          "We are grateful to Tayari Jones for her time, her trust, and the generosity she brought to a room full of people who came simply because they admire her. And we are grateful to everyone who joined us for an evening that reminded us, once again, why Atlanta is worth celebrating.",
        ],
      },
      {
        heading: "About Tayari Jones",
        paragraphs: [
          "Tayari Jones is an Atlanta-based author and cultural icon whose work explores identity, history, and the complexity of Black American life. Kin is her most recent novel and her second selection for Oprah's Book Club. Her writing has established her as one of the most important literary voices of her generation and a celebrated figure in Atlanta's cultural community.",
          CLOSING,
        ],
      },
    ],
  },
  {
    id: "power-home-remodeling",
    category: "Corporate & Clients",
    title:
      "Financial Wellness in the Workplace — Atlanta Life at Power Home Remodeling",
    excerpt:
      "Leadership hosted a financial wellness program at campus — equipping teams with tools for stronger financial futures.",
    date: "Date TBD",
    location: "Location TBD",
    tags: ["Corporate & Clients"],
    sections: [
      {
        paragraphs: [
          "One of the most meaningful things an organization can do for its people is bring financial wellness education directly to them — in their space, on their time, in a format that feels relevant to their lives. That is exactly what Atlanta Life Insurance Company and Power Home Remodeling set out to do when Atlanta Life hosted a financial wellness program at Power Home Remodeling's office campus.",
        ],
      },
      {
        heading: "A Conversation Worth Having",
        paragraphs: [
          "The event brought together Atlanta Life leadership, Power Home Remodeling team members, and additional guest speakers for a program centered on financial wellness — the kind of practical, accessible education that helps people make more informed decisions about their financial lives.",
          "Atlanta Life's leadership team presented on financial wellness topics, sharing perspectives and resources designed to help attendees better understand the tools available to them and the steps they can take toward greater financial stability and security. The program was structured to be engaging and conversational — not a lecture, but a dialogue, rooted in the understanding that financial wellness looks different for different people and that the best education meets people where they are.",
        ],
      },
      {
        heading: "Why This Kind of Work Matters",
        paragraphs: [
          "Financial stress is one of the most pervasive challenges facing today's workforce. Research consistently shows that employees experiencing financial stress are less productive, less engaged, and more likely to leave their organizations. Bringing financial wellness education into the workplace — in a format that is accessible and relevant — is one of the most direct ways an organization can invest in the well-being of its people.",
          "For Atlanta Life, programs like this one are an extension of our core mission. We exist to create legacy for people and their families — and legacy begins with financial literacy, financial security, and access to the knowledge that makes informed decisions possible. Showing up at Power Home Remodeling's campus to have that conversation with their team was not just a program. It was that mission in action.",
        ],
      },
      {
        heading: "A Partnership Built on Shared Values",
        paragraphs: [
          "The relationship between Atlanta Life and Power Home Remodeling reflects a shared conviction that organizations have a responsibility to the people within them — not just as employees, but as whole people with financial goals, family obligations, and futures worth planning for. This event was one expression of that shared commitment, and we are grateful to the Power Home Remodeling team for the space and the partnership that made it possible.",
          CLOSING,
        ],
      },
    ],
  },
  {
    id: "ibi-national-conference",
    category: "Conferences & Industry",
    title:
      "Atlanta Life at IBI National Conference — The GenZ Workforce Is Here. Is Corporate America Ready?",
    excerpt:
      "Courtney Johnson, Dr. Tugman, and Trish Payne in Chicago sharing insights on attracting and retaining Gen Z talent.",
    date: "Date TBD",
    location: "Chicago, Illinois",
    tags: ["Conference", "Thought Leadership", "Industry"],
    sections: [
      {
        paragraphs: [
          "Generation Z is no longer entering the workforce. They are in it — showing up, pushing back, demanding more, and quietly reshaping what it means to be an employee in America. For the organizations responsible for attracting, retaining, and developing this generation while simultaneously managing the needs of every other generation in the room, the challenge is real and the stakes are high.",
          "Atlanta Life Insurance Company brought that conversation to the national stage at the IBI Annual Conference in Chicago — presenting on one of the most pressing workforce questions facing HR leaders, benefits professionals, and organizational decision-makers today: how do you attract and retain Gen Z workers while honoring their role as the incoming stewards of corporate America?",
        ],
      },
      {
        heading: "The Presentation",
        paragraphs: [
          "Atlanta Life's session was led by a panel that brought both research-grounded expertise and real-world perspective to the topic:",
          "Courtney Johnson, Vice President of Group Solutions at Atlanta Life, anchored the conversation from an organizational and solutions standpoint — speaking to what companies are doing, what is working, and where the gaps remain.",
          "Dr. Kristin Tugman, Workplace Mental Health & Health Productivity Specialist and Atlanta Life's lead expert advisor, brought the clinical and research-backed perspective — grounding the discussion in what we know about Gen Z's relationship with mental health, work, and the expectations they bring to the workplace.",
          "Trish Payne of Atlanta Life's Group Solutions team contributed a practitioner's lens — speaking to the practical realities of building programs and environments that resonate with this generation without alienating the ones that came before.",
        ],
      },
      {
        heading: "What the Conversation Covered",
        paragraphs: [
          "Gen Z brings a distinct set of behaviors, expectations, and values to the workplace — ones that organizations cannot afford to misread or dismiss. The panel explored what those behaviors actually look like in practice and what they mean for the organizations trying to meet them.",
          "On attraction: Gen Z evaluates employers differently. Salary matters, but so does mission, culture, mental health support, flexibility, and a sense that the organization actually cares about the people within it. Benefits packages that were designed for a different generation — and communicated in a different way — often miss the mark entirely with this cohort.",
          "On retention: Getting Gen Z in the door is one challenge. Keeping them is another. Research consistently shows that Gen Z workers are more likely to leave an organization that does not invest meaningfully in their well-being, does not offer growth and development, or does not feel aligned with their values. The panel addressed what meaningful investment actually looks like — and the difference between wellness as a checkbox and wellness as a genuine organizational commitment.",
          "On the caretaker role: Gen Z is often discussed as a generation making demands of corporate America. The panel offered a more complete framing — one that acknowledges that this generation is also inheriting the structures, systems, and challenges of the organizations they are joining. They are not just recipients of corporate culture. They are, increasingly, its next stewards. Understanding that dual role — and what it means for how organizations develop and invest in Gen Z talent — was a central thread of the session.",
        ],
      },
      {
        heading: "Atlanta Life's Perspective",
        paragraphs: [
          "The work Atlanta Life does through LiveBalanced™ — our health and productivity solution built on four pillars of well-being — is directly relevant to the Gen Z conversation. A generation that is more vocal about mental health, more financially stressed than any before it, and more aware of the connection between well-being and performance is also a generation that needs and expects the kind of holistic support LiveBalanced™ is designed to provide.",
          "Dr. Tugman's presence on the panel brought that expertise to life — grounding Atlanta Life's work in the clinical reality of what Gen Z workers are experiencing and what organizations can do to respond with both care and competence.",
          "The IBI National Conference brought together some of the most serious thinkers in the health and productivity space. We were honored to be at that table — and to contribute a perspective rooted in both research and the real work we do with the organizations we serve.",
        ],
      },
      {
        heading: "About the Integrated Benefits Institute (IBI)",
        paragraphs: [
          "The Integrated Benefits Institute is a leading nonprofit research organization focused on workforce health and its impact on employee productivity and organizational performance. IBI's annual conference brings together HR leaders, benefits professionals, researchers, and solution providers from across the country to advance the conversation on health, productivity, and the future of work.",
          CLOSING,
        ],
      },
    ],
  },
  {
    id: "ibi-regional-conference",
    category: "Conferences & Industry",
    title:
      "Bringing the Conversation Home — Atlanta Life Hosts IBI Regional Conference",
    excerpt:
      "Presentations by Atlanta Life, IBI, and Mellie — plus a Herndon Home tour for conference attendees in Atlanta.",
    date: "Date TBD",
    location: "Atlanta, Georgia",
    tags: ["Conference", "Thought Leadership", "Industry", "Community"],
    sections: [
      {
        paragraphs: [
          "There is something different about hosting. When Atlanta Life Insurance Company opened its doors to the Integrated Benefits Institute's regional conference, it was not simply a logistical decision — it was an invitation. An invitation for the HR leaders, benefits professionals, and organizational decision-makers who filled our conference center to step inside a company that has been doing the work of supporting people and their families for more than 120 years, and to see what that history looks like up close.",
          "The result was one of the most layered and meaningful events we have been part of in recent memory — a day of research, conversation, expert presentations, and an experience that took attendees off campus and into the heart of Atlanta's history.",
        ],
      },
      {
        heading: "The Conference",
        paragraphs: [
          "The IBI Regional Conference brought together a cross-section of health and productivity professionals from across the region for a program built around the issues shaping today's workforce. Atlanta Life's conference center served as the setting — a space that felt appropriate for conversations about the future of work happening inside a company with deep roots in the communities those workers belong to.",
          "Atlanta Life's own panel — led by Courtney Johnson, Vice President of Group Solutions, Dr. Kristin Tugman, Workplace Mental Health & Health Productivity Specialist, and Trish Payne of the Group Solutions team — brought their GenZ in the Workforce presentation to a regional audience. The session explored what it means to attract and retain the new generation of workers while supporting their growing role as the incoming stewards of corporate America.",
          "The Integrated Benefits Institute presented new data on employee benefits — sharing current research on workforce health, productivity, and the evolving landscape of what employees need and expect from the organizations they work for.",
          "Mellie, one of Atlanta Life's digital point solution partners, joined the program to present on caregiving as a workplace benefit. Mellie's platform supports employees who are navigating the demands of caring for older adults and loved ones with special needs — an increasingly significant and often overlooked dimension of workforce well-being.",
        ],
      },
      {
        heading: "A Tour Unlike Any Other",
        paragraphs: [
          "No conference agenda could have anticipated the moment that stood out most from the day — and it was not a presentation. It was a bus.",
          "Atlanta Life chartered transportation to take conference attendees to the Herndon Home — the historic residence of Alonzo Franklin Herndon, Atlanta Life's founder and Atlanta's first Black millionaire. There, attendees received a guided tour of the home and a history lesson on Atlanta Life's founding, its role in the civil rights movement, and its more than 120-year journey from a single office on Auburn Avenue to the institution it is today.",
          "To be in that space — to stand in the rooms where Alonzo Herndon built a vision that became a company, a legacy, and a movement — and then to return to that company's modern offices and continue a conversation about the future of workforce health and productivity, was something no breakout session could replicate. It was context. It was meaning. And for many attendees, it was the part of the day they are most likely to remember.",
        ],
      },
      {
        heading: "What the Day Reflected",
        paragraphs: [
          "Hosting the IBI Regional Conference was an opportunity for Atlanta Life to do something we believe in deeply — to use our space, our relationships, and our reach to bring people together around work that matters. Health and productivity is not an abstract field. It is the study of what happens to people when they are supported well and what is lost when they are not. That is a conversation Atlanta Life has been part of — in one form or another — for over a century.",
          "We are grateful to IBI for the partnership that made this event possible, to Mellie for bringing their expertise to our stage, and to every attendee who came ready to engage. And we are especially grateful to the Herndon Foundation for their continued generosity in welcoming people into a space that belongs to all of us.",
        ],
      },
      {
        heading: "About the Integrated Benefits Institute (IBI)",
        paragraphs: [
          "The Integrated Benefits Institute is a leading nonprofit research organization focused on workforce health and its impact on employee productivity and organizational performance. Through research, events, and member resources, IBI advances the conversation on health, productivity, and the future of work.",
        ],
      },
      {
        heading: "About Mellie",
        paragraphs: [
          "Mellie is a caregiving support platform that helps family caregivers plan, manage, and coordinate care for older adults and loved ones with special needs — giving employees the support they need to navigate one of life's most demanding responsibilities.",
          CLOSING,
        ],
      },
    ],
  },
  {
    id: "dmec-memphis",
    category: "Conferences & Industry",
    title:
      "Atlanta Life at DMEC — Whole Person Wellness, a Donation Drive, and a Conversation Worth Continuing",
    excerpt:
      "Whole Person Disability Management presentation, LiveBalanced™ booth, and a community donation drive in Memphis.",
    date: "August 2026",
    location: "Memphis, Tennessee",
    tags: ["Conference", "Thought Leadership", "Community", "Industry"],
    sections: [
      {
        paragraphs: [
          "Memphis welcomed some of the most serious minds in employee benefits, disability management, and workforce health this August — and Atlanta Life Insurance Company was there, ready to work. As a presenter, exhibitor, and community contributor at the Disability Management Employer Coalition (DMEC) Annual Conference, Atlanta Life brought its full presence to one of the most respected gatherings in the health and productivity space.",
          "What followed was a conference experience that reflected everything we believe about this work — that the conversation about workforce well-being is inseparable from the communities those workers belong to, and that showing up fully means showing up on all fronts.",
        ],
      },
      {
        heading: "On the Stage — A Presentation Worth the Room",
        paragraphs: [
          "Dr. Kristin Tugman, Atlanta Life's Workplace Mental Health & Health Productivity Specialist, took the stage alongside Courtney Johnson, Vice President of Group Solutions, and Trish Payne of the Group Solutions team to present Whole Person Disability Management: The Missing Link in Controlling Healthcare Costs.",
          "The session explored how physical, mental, financial, and social well-being intersect to shape return-to-work outcomes — making the case that disability management cannot be addressed effectively when it treats each dimension of a person's health in isolation. The four pillars that underpin Atlanta Life's LiveBalanced™ platform were at the heart of the argument: that when organizations attend to the whole person, the outcomes — including return-to-work outcomes — improve across the board.",
          "For a DMEC audience of HR professionals, disability managers, and benefits leaders, the presentation landed in exactly the right context. These are the practitioners on the front lines of the return-to-work process — and the case for a whole-person approach resonated with the complexity they navigate every day.",
        ],
      },
      {
        heading:
          "At the Booth — Introducing LiveBalanced™ and Its Point Solutions",
        paragraphs: [
          "At the Atlanta Life booth, the energy was consistent throughout the conference. Attendees stopped to learn about LiveBalanced™ and its three digital point solution partners — introduced here as the newest additions to the platform and framed specifically around their relevance to disability management and whole-person well-being:",
          "Mellie — caregiving support for employees managing the care of older adults and loved ones with special needs.",
          "Goodpath — whole-person health programs for chronic conditions that frequently intersect with disability and return-to-work challenges.",
          "Express Wages — earned wage access and financial wellness tools that reduce the financial stress that so often complicates recovery and reintegration.",
          "The conversations at the booth reflected the same themes as the presentation — employers and benefits professionals hungry for solutions that address the full picture of their employees' lives, not just the clinical dimensions of a disability claim.",
        ],
      },
      {
        heading: "The Donation Drive — Choosing to Give Back to Memphis",
        paragraphs: [
          "One of the most memorable moments of the conference was not a session or a handshake. It was a choice — and we gave that choice to the people who visited our booth.",
          "Atlanta Life ran a donation drive throughout the conference, inviting booth guests to vote on which local nonprofit would receive a contribution on behalf of Atlanta Life. The community spoke: the National Humane Association in Nashville, TN was selected as the recipient of Atlanta Life's contribution.",
          "It was a small gesture with a real spirit behind it — the belief that when you come into a community for a conference, you leave something behind that matters to the people who live there. That is how Atlanta Life thinks about showing up.",
        ],
      },
      {
        heading: "DMEC Was Just the Beginning",
        paragraphs: [
          "The conversations started in Memphis are continuing. Atlanta Life's engagement with DMEC extends beyond a single conference:",
          "Atlanta Life will join WMN+ Collective ATL on Friday, August 28, 2026 at Buckhead Art & Company in Atlanta — a full day dedicated to women's health and wellbeing at work, featuring Courtney Johnson, Trish Payne, and Dr. Kristin Tugman.",
          "And on Tuesday, October 6, 2026, Atlanta Life continues the disability management conversation with a DMEC Tools & Tactics Webinar — Psychological Safety as a Disability Management Strategy — examining how psychological safety shapes trust, disclosure, and return-to-work outcomes.",
          "Atlanta Life is also hosting the Employee Benefits & Total Rewards Summit on Thursday, October 22, 2026 at Epicenter, 150 Peabody Place in Memphis — bringing HR leaders and benefits professionals together for a full day of insight, networking, and a civil rights tour experience, in partnership with Mellie, Goodpath, and Express Wages. Registration is free and seats are limited.",
        ],
      },
      {
        heading: "About DMEC",
        paragraphs: [
          "The Disability Management Employer Coalition (DMEC) is the only organization focused exclusively on absence and disability management, providing education, resources, and community for HR and benefits professionals navigating the complexities of workforce health and productivity.",
          CLOSING,
        ],
      },
    ],
  },
];

export function getAllArticles(): NewsroomArticle[] {
  return newsroomArticles;
}

export function getArticle(slug: string): NewsroomArticle | undefined {
  return newsroomArticles.find((article) => article.id === slug);
}
