import avatarImg from '../assets/images/kenneth-portrait.png';
import tizelaImg from '../assets/images/tizela_showcase_1792446059964.jpg';
import circleImg from '../assets/images/circle_showcase_1792446122933.jpg';
import examcrushImg from '../assets/images/examcrush_showcase_1792446076851.jpg';
import helizahImg from '../assets/images/helizah_fashion_showcase_1791989371094.jpg';
import digiverseImg from '../assets/images/digiverse_showcase_1792446137932.jpg';
import beatstreamImg from '../assets/images/beatstream_showcase_1792446094557.jpg';
import primedialImg from '../assets/images/primedial_showcase_1792446109618.jpg';
import globatrybeImg from '../assets/images/globatrybe_showcase_1792446157979.jpg';

export {
  avatarImg,
  tizelaImg,
  circleImg,
  examcrushImg,
  helizahImg,
  digiverseImg,
  beatstreamImg,
  primedialImg,
  globatrybeImg,
};

export interface ProjectPersona {
  name: string;
  role: string;
  goal: string;
  painPoint: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  client: string;
  role: string;
  summary: string;
  tags: string[];
  image: string; // High-res visual
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  personas: ProjectPersona[];
  metrics: { label: string; value: string }[];
  designDecisions: { title: string; description: string }[];
  liveUrl: string;
  liveStatus: 'live' | 'store' | 'preview';
  liveLabel: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  honors?: string;
}

export interface ResumeData {
  fullName: string;
  initials: string;
  titles: string[];
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
  personalProfile: string;
  employment: {
    period: string;
    role: string;
    company: string;
    location: string;
    bullets: string[];
  }[];
  coreSkills: {
    design: string[];
    tools: string[];
    soft: string[];
  };
  education: {
    period: string;
    degree: string;
    school: string;
    location: string;
  }[];
  certifications: string[];
  liveProducts: {
    name: string;
    url: string;
    type: string;
  }[];
}

export const RESUME_DATA: ResumeData = {
  fullName: "Kenneth Uyiosa Eguakun",
  initials: "UKM",
  titles: ["UI/UX Designer", "Product Designer", "Motion Designer"],
  email: "Uyiosachem99@gmail.com",
  phone: "(+234)91-6819-3514",
  location: "Anthony Village, Lagos, Nigeria",
  linkedin: "https://www.linkedin.com/in/kenneth/",
  portfolio: "https://portfolio-kenneth.design",
  personalProfile:
    "With five years of experience designing user-centered interfaces, I’ve built a strong ability to create intuitive and visually appealing solutions for websites, mobile apps, and web applications. I focus on understanding real user needs and translating them into clean, functional designs that feel natural to use. From research to wireframes and polished UI, I’m confident in my ability to craft meaningful experiences that improve clarity, boost engagement, and make every interaction smoother and more enjoyable for the user.",
  employment: [
    {
      period: "Aug 2024 – Present",
      role: "Product Designer",
      company: "Alvative Resources Limited",
      location: "Lagos, Nigeria",
      bullets: [
        "Led the design of an intuitive mobile app called Circle, which enables users to form groups and set up contribution cycles on a daily, weekly, or monthly basis. Each participant in the cycle receives their full payout on the specific day or week they selected, ensuring a seamless and organized experience.",
        "Designed a website (Shuri Farms) that clearly communicates how agricultural investment creates stable income and supports sustainable food production. The layout and visuals help users quickly understand long-term wealth opportunities in productive farmland.",
        "Created the Momo Food feature to let users order food items with seamless delivery, added as a component of the larger mobile app."
      ]
    },
    {
      period: "Apr 2024 – Jul 2025",
      role: "Product Designer",
      company: "Contract-based Projects",
      location: "Lagos, Nigeria",
      bullets: [
        "Built Helizah, a women's fashion e-commerce platform with a website and admin dashboard that enables effortless shopping, delivery to pick-up points, and smooth order and logistics management.",
        "Collaborated on Drivelink, a seamless mobility solution featuring a mobile app, admin web platform, and marketing site, all designed with intuitive flows and user-centered experiences for smooth, stress-free ride booking.",
        "Designed Digiverse as a unified multi-site creative agency platform with seamless navigation and a cohesive visual identity.",
        "Built Tizela, a mobile and web platform that lets users book accommodations, rent cars, and enjoy boat cruises in any destination."
      ]
    },
    {
      period: "Jul 2023 – Mar 2024",
      role: "Product Designer",
      company: "Hall of Bits",
      location: "Lagos, Nigeria",
      bullets: [
        "Designed an AI-powered mobile app that transforms uploaded course materials into interactive educational games, while also enabling users to create and share quizzes for rewards.",
        "Collaborated closely with developers and product managers to refine features, conducted usability testing to validate user needs, and iterated on the design to deliver an engaging, intuitive learning experience."
      ]
    },
    {
      period: "Jan 2022 – Dec 2022",
      role: "UI/UX Designer",
      company: "Capeflux Studios",
      location: "Lagos, Nigeria",
      bullets: [
        "Spearheaded the end-to-end UX/UI design of Wadflip, a comprehensive mobile FinTech application facilitating seamless trading, swapping, and payments utilizing both cryptocurrencies and fiat currencies.",
        "Collaborated daily with Product Managers to translate complex financial requirements into intuitive user stories and defined the feature roadmap for core services, including mobile airtime recharge and utility bill payments.",
        "Led the responsive web design of WasteCycle, an environmental platform dedicated to incentivizing community engagement in waste reduction and ecological protection through a tiered, gamified rewards system.",
        "Initiated and executed design cycles based on behavioral data and user feedback, utilizing usability testing to validate the reward mechanism and platform utility, leading to an increase in user retention and participation rates."
      ]
    },
    {
      period: "Jun 2021 – Dec 2021",
      role: "UI/UX Designer, Intern",
      company: "Cloudfift",
      location: "Lagos, Nigeria",
      bullets: [
        "Redesigned a medical App with other designers called VinDoc where patients can have meetings with Doctors concerning their health issue. The app had both Web App and mobile App.",
        "Designed a music app called Beatstream where users can listen to music, stream live concert and also where Artiste can upload their music and start live concert also."
      ]
    }
  ],
  coreSkills: {
    design: [
      "UX Design",
      "UI Design",
      "UX Research",
      "Prototyping",
      "Wireframing",
      "Motion Design",
      "Interaction Design",
      "Usability Testing"
    ],
    tools: [
      "Figma",
      "Design Systems",
      "AI Tools (Claude AI, ChatGPT, Gemini AI)"
    ],
    soft: [
      "Attention to detail",
      "Communication",
      "Collaboration & teamwork",
      "Empathy",
      "Problem-solving",
      "Critical thinking",
      "Time management",
      "Openness to feedback"
    ]
  },
  education: [
    {
      period: "Nov 2014 – Nov 2018",
      school: "University of Lagos",
      degree: "Bachelor’s Degree in Chemistry Science",
      location: "Lagos, Nigeria"
    }
  ],
  certifications: [
    "Figma UI UX Design Advanced Certificate - Udemy (2024)",
    "UX Design Foundations: Research, Design, Usability Testing Certificate - Udemy (2024)"
  ],
  liveProducts: [
    {
      name: "Examcrush",
      url: "https://play.google.com/store/apps/details?id=com.examcrush.client&pcampaignid=web_share",
      type: "Google Play Store"
    },
    {
      name: "Globaltrybe",
      url: "https://globaltrybe.com/",
      type: "Live Web Platform"
    },
    {
      name: "Drivelink",
      url: "https://www.usedrivelink.com/",
      type: "Live Mobility Platform"
    },
    {
      name: "Tizela",
      url: "https://play.google.com/store/apps/details?id=com.tizela.app",
      type: "Google Play Store"
    },
    {
      name: "Primedial Solutions",
      url: "https://primedialsolutions.com/",
      type: "Live Enterprise Portal"
    }
  ]
};

export const PORTFOLIO_DATA = {
  profile: {
    name: "Kenneth Uyiosa Eguakun",
    shortName: "Kenneth",
    initials: "UKM",
    title: "Product Designer / UI/UX Designer",
    tagline: "Connecting user needs with high-growth business goals",
    bio: "Hey there! I’m Kenneth, a Product Designer creating intuitive digital experiences that connect user needs with business goals.",
    email: "Uyiosachem99@gmail.com",
    phone: "(+234)91-6819-3514",
    location: "Anthony Village, Lagos, Nigeria",
    availability: "Open to Remote Opportunities",
    behanceLink: "https://www.behance.net",
    dribbbleLink: "https://dribbble.com",
    linkedinLink: "https://www.linkedin.com/in/kenneth/",
    githubLink: "https://github.com",
    avatar: avatarImg,
    stats: [
      { value: "5+", label: "Years Experience" },
      { value: "24+", label: "Shipped Products" },
      { value: "$14.2M+", label: "Client Value Generated" },
      { value: "99.4%", label: "System Adoption Rate" }
    ]
  },

  projects: [
    {
      id: "tizela",
      title: "Tizela",
      subtitle: "Mobile App, Web App & Travel Booking Platform",
      category: "Accommodations, Vehicles & Cruises",
      year: "2024",
      client: "Tizela Global Escapes",
      role: "Lead Product Designer",
      summary: "Platform enabling users to seamlessly book accommodations, rent vehicles, and embark on boat cruises tailored to travel destinations.",
      tags: ["Travel Tech", "Accommodations", "Vehicle Rentals", "Boat Cruises", "Mobile & Web"],
      image: tizelaImg,
      overview: "Tizela is a platform enabling users to seamlessly book accommodations, rent vehicles, and embark on boat cruises tailored to their travel destinations. Whether exploring a city or relaxing by the water, Tizela ensures memorable and convenient experiences at every location.",
      challenge: "Unifying fundamentally different travel verticals—boutique stays, vehicle rentals, and boat cruises—into a singular, intuitive booking flow without confusing users with complex scheduling, disparate policies, or cluttered search forms.",
      solution: "Architected an integrated multi-modal travel discovery engine with destination-tailored filters, unified calendar booking, and a frictionless single-basket checkout for stays, wheels, and boat cruises.",
      deliverables: ["Cross-Platform Mobile App", "Web Booking Portal", "Multi-Modal Travel Search", "Host & Fleet Management Console"],
      personas: [
        {
          name: "Elena Rostova",
          role: "Luxury Leisure Traveler",
          goal: "Book boutique villas, private yachts, and rental cars in one unified reservation.",
          painPoint: "Managing fragmented booking apps and mismatched confirmation codes."
        },
        {
          name: "Marcus Sterling",
          role: "Weekend Group Explorer",
          goal: "Coordinate seamless boat cruises and villa stays for friends without billing confusion.",
          painPoint: "Hidden booking surcharges and difficult group split-payments."
        }
      ],
      metrics: [],
      designDecisions: [
        {
          title: "Multi-Modal Search Architecture",
          description: "Consolidated accommodations, vehicles, and marine charter filters into an intelligent unified search bar."
        }
      ],
      liveUrl: "https://play.google.com/store/apps/details?id=com.tizela.app",
      liveStatus: "store",
      liveLabel: "View on Google Play"
    },

    {
      id: "circle",
      title: "Circle",
      subtitle: "Mobile App & Group Contribution Platform",
      category: "Social Finance & Contribution Cycles",
      year: "2024",
      client: "Alvative Resources Limited",
      role: "Product Designer",
      summary: "Platform enabling users to form groups and set up daily, weekly, or monthly contribution cycles with scheduled full payouts.",
      tags: ["Social Finance", "Contribution Cycles", "Group Savings", "FinTech", "Mobile App"],
      image: circleImg,
      overview: "Circle platform enables users to form groups and set up contribution cycles on a daily, weekly, or monthly basis. Each participant in the cycle receives their full payout on the specific day or week they selected, ensuring a seamless and organized experience.",
      challenge: "Eliminating the friction, anxiety, and default risk inherent in traditional community rotating savings groups, while ensuring prompt payouts and building trust among participants.",
      solution: "Designed an automated cycle scheduler with clear calendar timelines, automated escrow debiting, peer transparency indicators, and one-tap payout distribution on each member's chosen date.",
      deliverables: ["Mobile iOS & Android App", "Contribution Cycle Dial UI", "Automated Escrow Engine", "Group Transparency Dashboard"],
      personas: [
        {
          name: "Amara Nwachukwu",
          role: "Small Business Collective Lead",
          goal: "Organize monthly contribution circles to fund quarterly bulk inventory orders.",
          painPoint: "Chasing late manual bank transfers and keeping messy offline ledger notes."
        },
        {
          name: "David Chen",
          role: "Disciplined Peer Saver",
          goal: "Join automated weekly savings circles with trusted friends to reach lump-sum savings targets.",
          painPoint: "Lack of schedule transparency and uncertainty about payout timing."
        }
      ],
      metrics: [],
      designDecisions: [
        {
          title: "Transparent Cycle Timeline",
          description: "Visual calendar dial displaying upcoming payout turns and automated collection schedules."
        }
      ],
      liveUrl: "https://circle.finance",
      liveStatus: "preview",
      liveLabel: "Explore Circle Platform"
    },

    {
      id: "examcrush",
      title: "Exam Crush",
      subtitle: "AI Mobile App & Gamified Learning Platform",
      category: "AI Gamification & EdTech",
      year: "2025",
      client: "Hall of Bits",
      role: "Product Designer",
      summary: "AI mobile app where students upload course materials to convert into games, create quizzes, challenge friends, and earn rewards.",
      tags: ["AI Learning", "Mobile App", "Gamified Quizzes", "Course Conversion", "Social Rewards"],
      image: examcrushImg,
      overview: "Examcrush is an Ai Mobile App platform where students can upload course materials and it get coverted into a game which people can play and get knowledge about the course. Also on this product, users can also create games and quiz, share and play it with friends and earn fantastic rewards on it.",
      challenge: "Transforming dense, dry lecture slides, PDFs, and syllabus documents into engaging, bite-sized mobile games without losing academic rigor or overwhelming learners.",
      solution: "Architected an AI-powered course material converter that parses uploaded lecture notes into interactive quiz games, multiplayer battle arenas, and social reward leagues.",
      deliverables: ["iOS & Android Mobile App", "AI Document-to-Game Parser UI", "Multiplayer Quiz Arena", "Social Leaderboard & Rewards Track"],
      personas: [
        {
          name: "Chloe Martinez",
          role: "University Pre-Med Student",
          goal: "Upload 80-page anatomy PDFs and immediately play competitive flash-games on the commute.",
          painPoint: "Exhausting passive textbook reading and high exam anxiety."
        },
        {
          name: "Tobi Adeyemi",
          role: "Study Group Host",
          goal: "Create custom quiz leagues, challenge coursemates, and earn rewards while mastering course topics.",
          painPoint: "Clunky flashcard apps that lack interactive multiplayer motivation."
        }
      ],
      metrics: [],
      designDecisions: [
        {
          title: "One-Tap AI Material Ingestion",
          description: "Effortless upload flow that converts lecture PDFs into game rounds in under 5 seconds."
        }
      ],
      liveUrl: "https://play.google.com/store/apps/details?id=com.examcrush.client&pcampaignid=web_share",
      liveStatus: "store",
      liveLabel: "View on Google Play"
    },

    {
      id: "helizah",
      title: "Helizah",
      subtitle: "E-Commerce Website & Admin Web Application",
      category: "Women's Fashion & Retail Operations",
      year: "2026",
      client: "Helizah Fashion Atelier",
      role: "Lead Product Designer",
      summary: "Women's fashion e-commerce website and admin web app with pickup-location delivery and streamlined logistics.",
      tags: ["Women's Fashion", "E-Commerce Storefront", "Admin Web App", "Pickup Locations", "Logistics"],
      image: helizahImg,
      overview: "Helizah This is an e-commerce platform tailored for women’s fashion. Our work included creating the website and admin web application, ensuring a visually appealing, user-friendly experience. The platform allows customers to shop effortlessly for clothing and have their orders delivered to convenient pick-up locations, with the admin dashboard streamlining order management and logistics.",
      challenge: "Balancing an aspirational, editorial storefront for fashion shoppers with a dense, error-proof back-office for warehouse dispatch and pickup station management.",
      solution: "Engineered an editorial shopping experience with seamless clothing filters and interactive pickup location finders, paired with a high-contrast admin dashboard for order dispatch, inventory sync, and logistics telemetry.",
      deliverables: ["E-Commerce Web Storefront", "Admin Operations Dashboard", "Interactive Pickup Hub Locator", "Order Dispatch & Logistics Kanban"],
      personas: [
        {
          name: "Sophia Laurent",
          role: "Fashion-Conscious Professional",
          goal: "Shop luxury women's apparel effortlessly and select flexible nearby pickup points on her route.",
          painPoint: "Missed courier doorstep deliveries and cumbersome return procedures."
        },
        {
          name: "Zainab Al-Hassan",
          role: "Logistics & Fulfillment Manager",
          goal: "Process incoming clothing orders and assign fulfillment batches to localized pickup hubs in real time.",
          painPoint: "Cluttered admin interfaces that slow down 8-hour dispatch shifts."
        }
      ],
      metrics: [],
      designDecisions: [
        {
          title: "Split Logistics Admin Panel",
          description: "Dual-pane view for monitoring store pickup capacity and incoming fulfillment batches."
        }
      ],
      liveUrl: "https://helizah.com",
      liveStatus: "preview",
      liveLabel: "Visit Helizah Storefront"
    },

    {
      id: "digiverse",
      title: "DigiVerse",
      subtitle: "Multi-Site Creative Agency Ecosystem",
      category: "Creative Agency & Multi-Site Ecosystem",
      year: "2026",
      client: "DigiVerse Group",
      role: "Digital Design Director",
      summary: "Comprehensive creative agency platform with interconnected websites for studio, academy, consulting, and influencer branches.",
      tags: ["Creative Ecosystem", "Multi-Site IA", "Creative Studio", "Design Academy", "Influencer Platform"],
      image: digiverseImg,
      overview: "Digiverse This is a comprehensive creative agency platform featuring multiple interconnected websites — including an overview landing page, a creative studio site, an academy site, a consulting site, and an influencer site. The design focused on a unified visual identity, seamless navigation between sections, and a user-centered experience that showcases the agency’s diverse offerings in a cohesive digital ecosystem.",
      challenge: "Unifying 5 distinct agency departments into one coherent digital ecosystem without confusing visitors or fragmenting the brand identity.",
      solution: "Designed an interconnected multi-site architecture with a persistent global ecosystem switcher, shared design tokens, immersive studio showcases, and tailored conversion paths for students, brands, and creators.",
      deliverables: ["Global Overview Landing Hub", "Creative Studio Showcase Site", "Skills Academy Portal UI", "Influencer Talent & Consulting Sites"],
      personas: [
        {
          name: "Lucas Vance",
          role: "Brand Marketing Director",
          goal: "Evaluate agency credentials, explore studio projects, and book full-service creative consulting.",
          painPoint: "Disjointed agency sites that fail to demonstrate the breadth of their creative capabilities."
        },
        {
          name: "Nia Robinson",
          role: "Aspiring Digital Creator",
          goal: "Browse design masterclasses in the academy while drawing inspiration from live agency productions.",
          painPoint: "Confusing course portals detached from real-world studio work."
        }
      ],
      metrics: [],
      designDecisions: [
        {
          title: "Universal Branch Switcher",
          description: "Instant seamless navigation bar linking Studio, Academy, and Consulting with zero page reload."
        }
      ],
      liveUrl: "https://digiverse.agency",
      liveStatus: "preview",
      liveLabel: "Explore DigiVerse Studio"
    },

    {
      id: "beatstream",
      title: "BeatStream",
      subtitle: "Mobile App & Live Concert Streaming",
      category: "Music Streaming & Live Performance",
      year: "2024",
      client: "Cloudfift",
      role: "UI/UX Designer",
      summary: "Dynamic platform to listen to music, stream live concerts, and empower artists to upload tracks and host live performances.",
      tags: ["Music Streaming", "Live Concerts", "Artist Uploads", "Live Performances", "Mobile App"],
      image: beatstreamImg,
      overview: "Beatstream This platform allows users to listen to music, stream live concerts, and provides artists with the ability to upload their tracks or host live performances, creating a dynamic space for music lovers and creators to connect and share experiences.",
      challenge: "Unifying personal high-fidelity music playback with interactive live-streamed concerts and self-serve creator monetization tools in a fast, battery-efficient mobile interface.",
      solution: "Crafted a tactile, vinyl-inspired mobile streaming player with live audio waveform scrubbing, real-time virtual concert auditoriums with fan tipping, and a dedicated artist studio for uploading tracks and scheduling live performances.",
      deliverables: ["Mobile iOS & Android App", "Live Concert Virtual Auditorium UI", "Tactile Audio Player & Waveform", "Artist Upload & Performance Studio"],
      personas: [
        {
          name: "Maya Lin",
          role: "Music Lover & Concert Goer",
          goal: "Listen to high-res music on the go and join live virtual concert sets with live fan chats and tipping.",
          painPoint: "Fragmented music apps that treat concerts as external ticketing links rather than live social experiences."
        },
        {
          name: "Jordan Kalu",
          role: "Independent Performing Artist",
          goal: "Upload unreleased tracks directly and host ticketed live acoustic streams for global fans.",
          painPoint: "Opaque streaming royalties and complicated broadcasting software."
        }
      ],
      metrics: [],
      designDecisions: [
        {
          title: "Virtual Auditorium Mode",
          description: "Live concert interface with low-latency audio sync, dynamic crowd reactions, and direct artist tipping."
        }
      ],
      liveUrl: "https://beatstream.app",
      liveStatus: "preview",
      liveLabel: "Launch BeatStream Hub"
    },

    {
      id: "primedial",
      title: "Primedial",
      subtitle: "Enterprise Geospatial & Surveying Platform",
      category: "Geospatial, Surveying & Mapping",
      year: "2025",
      client: "Primedial Solutions",
      role: "Senior UI/UX Specialist",
      summary: "Platform showcasing innovative surveying, mapping, and geospatial services for construction, oil & gas, and real estate.",
      tags: ["Geospatial", "Surveying & Mapping", "Construction", "Oil & Gas", "Enterprise Web"],
      image: primedialImg,
      overview: "Primedial A platform to showcase innovative surveying, mapping, and geospatial services for sectors like construction, oil & gas, and real estate. This design emphasized clarity, trust, and a modern visual language to effectively communicate expertise and attract industry clients.",
      challenge: "Communicating heavy technical surveying capabilities, drone LiDAR accuracy, and regulatory compliance standards in an approachable, authoritative visual format that converts corporate decision-makers.",
      solution: "Crafted a high-authority dark corporate platform featuring interactive 3D terrain and orthomosaic map explorers, sector-specific solution pathways (construction, energy, property), and an instant enterprise RFP inquiry funnel.",
      deliverables: ["Enterprise Marketing Platform", "Interactive Geospatial Service Showcase", "Sector-Tailored Discovery Funnels", "Corporate Inquiry & RFP Builder"],
      personas: [
        {
          name: "Richard Thornton",
          role: "Construction Project Director",
          goal: "Commission certified topographical survey data and drone LiDAR site scans to de-risk large civil infrastructure projects.",
          painPoint: "Slow quote turnarounds and vague technical accuracy guarantees from traditional surveyors."
        },
        {
          name: "Franklyn Brooks",
          role: "Oil & Gas Pipeline Manager",
          goal: "Secure high-precision GIS pipeline mapping that meets stringent safety and environmental regulations.",
          painPoint: "Archaic geospatial vendor sites that lack modern data samples and proof."
        }
      ],
      metrics: [],
      designDecisions: [
        {
          title: "Sector-Segmented Solutions",
          description: "Dedicated conversion funnels tailored for civil engineering, petroleum, and real estate clients."
        }
      ],
      liveUrl: "https://primedialsolutions.com/",
      liveStatus: "live",
      liveLabel: "Visit Primedial Solutions"
    },

    {
      id: "globatrybe",
      title: "Globatrybe",
      subtitle: "Financial Software & Banking Infrastructure",
      category: "FinTech Solutions & Banking Infrastructure",
      year: "2025",
      client: "Globaltrybe Technologies",
      role: "Principal Product Designer",
      summary: "Product developing and managing innovative software solutions for banking, non-banking financial institutions, and fintech pioneers.",
      tags: ["FinTech", "Banking Infrastructure", "Financial Institutions", "Software Solutions", "Compliance"],
      image: globatrybeImg,
      overview: "Globatrybe A product designed to develop and manage innovative software solutions tailored for banking and non-banking financial institutions, fintech companies, and other pioneers in the financial markets, driving efficiency, compliance, and customer-centric services through cutting-edge technology and expertise.",
      challenge: "Instilling unquestioned institutional credibility and security trust for cutting-edge financial software solutions targeted at Tier-1 commercial banks, neobanks, and regulatory bodies.",
      solution: "Developed a commanding, modern corporate product platform featuring interactive API architecture breakdowns, live compliance verification highlights, institutional product suites, and an executive demo booking portal.",
      deliverables: ["Enterprise Flagship Web Platform", "Financial Software Solutions Explorer", "Compliance & Security Credentials Hub", "Executive Demo & Consultation Pipeline"],
      personas: [
        {
          name: "Victoria Adekunle",
          role: "Chief Technology Officer at Commercial Bank",
          goal: "Deploy mission-critical core banking software and settlement middleware that guarantee 99.99% uptime and regulatory compliance.",
          painPoint: "Superficial sales pitches lacking technical architecture depth and security certifications."
        },
        {
          name: "Tariq Hassan",
          role: "Fintech Product Architect",
          goal: "Integrate plug-and-play compliance APIs and customer-centric financial toolkits to accelerate time-to-market.",
          painPoint: "Opaque legacy banking vendor systems with brittle integration layers."
        }
      ],
      metrics: [],
      designDecisions: [
        {
          title: "Compliance & Security Matrix",
          description: "Prominent visual architecture highlighting SOC2, PCI-DSS, and central bank clearing compliance."
        }
      ],
      liveUrl: "https://globaltrybe.com/",
      liveStatus: "live",
      liveLabel: "Visit Globaltrybe Live"
    }
  ] as Project[],

  philosophy: [
    {
      number: "01",
      title: "Radical Simplicity & Cognitive Ease",
      description: "Great design does not call attention to itself; it removes obstacles between the user and their intent. Every button, label, and card must earn its presence on screen."
    },
    {
      number: "02",
      title: "Data-Validated Empathy",
      description: "Intuition sparks design hypotheses; behavioral data and rigorous user testing prove them. We measure drop-offs, dwell times, and task completion times to iterate with purpose."
    },
    {
      number: "03",
      title: "Zero Semantic Drift",
      description: "A design is only as good as what ships in production. Bridging design variables directly with frontend components prevents broken layouts and keeps design debt at zero."
    },
    {
      number: "04",
      title: "Business Impact First",
      description: "Aesthetic beauty and commercial performance are not opposites. Every visual choice is aligned to lower acquisition costs, elevate retention, and create measurable business value."
    }
  ],

  skillsMatrix: {
    productDesign: ["UX Design", "UI Design", "UX Research", "Prototyping", "Wireframing", "Motion Design", "Interaction Design", "Usability Testing"],
    research: ["User Interviews", "Heuristic Auditing", "Information Architecture", "Usability Testing", "Journey Mapping"],
    tools: ["Figma", "Design Systems", "AI Tools (Claude AI, ChatGPT, Gemini AI)", "Tailwind CSS"],
    domains: ["FinTech", "E-Commerce", "AI EdTech", "Travel Tech", "Geospatial & B2B"]
  },

  education: [
    {
      degree: "Bachelor’s Degree in Chemistry Science",
      institution: "University of Lagos",
      year: "Nov 2014 – Nov 2018",
      honors: "Lagos, Nigeria"
    }
  ],

  testimonials: [
    {
      quote: "Kenneth transformed our fragmented multi-site structure into a seamless, high-converting product experience.",
      name: "Marcus Vance",
      role: "Managing Director",
      company: "DigiVerse Group",
      avatar: avatarImg
    }
  ],

  experience: [
    {
      period: "Aug 2024 — Present",
      role: "Product Designer",
      company: "Alvative Resources Limited",
      location: "Lagos, Nigeria",
      description: "Leading the design of Circle mobile app, Shuri Farms agricultural investment portal, and Momo Food delivery.",
      achievements: [
        "Architected multi-cycle group contribution scheduler with automated escrow and payout engine.",
        "Engineered Shuri Farms farmland wealth platform communicating sustainable agriculture investments."
      ],
      skills: ["UX Design", "Mobile Architecture", "FinTech", "Figma", "Design Systems"]
    }
  ]
};
