import { NavElement, Advisor, Pillar, Partner, ConsortiumStep, Scenario } from "./types";
import partner5Img from "./assets/images/regenerated_image_1780462377858.avif";
import partner3Img from "./assets/images/regenerated_image_1780418402015.jpg";

export const NAV_ELEMENTS: NavElement[] = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Partnership Model", href: "#model" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" }
];

export const ADVISORS: Advisor[] = [
  { label: "Media Strategy Advisors", desc: "Project positioning / Business model / Capability mapping" },
  { label: "Content & IP Developers", desc: "Original IP / Format development / Archive repackaging" },
  { label: "Production Studios", desc: "Film / TV / Short-form / Digital & branded content" },
  { label: "Studio Technology & Systems Integrators", desc: "Studio planning / Broadcast systems / AV integration" },
  { label: "Virtual Production & AI Media Specialists", desc: "LED volume / XR production / AI-assisted creation" },
  { label: "Post-Production & Restoration Houses", desc: "Editing / VFX / AI restoration / Localization" },
  { label: "Digital Platform & App Architects", desc: "OTT / App / CMS / Audience engagement" },
  { label: "Commercialization & IP Operators", desc: "Distribution / Licensing / Brand partnerships" }
];

export const PILLARS: Pillar[] = [
  {
    num: "01",
    title: "Strategy & Project Structuring",
    tagline: "Core Alignment",
    desc: "Defining project objectives, operating model, required capabilities, partnership models and development roadmaps.",
    tags: ["Project Positioning", "Operating Model", "Capability Mapping", "Partnership Structure", "Consortium Planning"]
  },
  {
    num: "02",
    title: "Content & IP Activation",
    tagline: "Core Alignment",
    desc: "Developing, repackaging and activating content assets and IP across formats, platforms and audiences.",
    tags: ["Content Concepts", "IP Extension", "Archive Activation", "Format Innovation", "AI-Assisted Creation"]
  },
  {
    num: "03",
    title: "Production & Media Technology",
    tagline: "Core Alignment",
    desc: "Organizing studio infrastructure, production systems, media technology and workflow partners into a practical production ecosystem.",
    tags: ["Studio Infrastructure", "Broadcast Systems", "Virtual Production", "AI Media Tools", "Post-Production Pipeline"]
  },
  {
    num: "04",
    title: "Commercialization & Platform Operation",
    tagline: "Core Alignment",
    desc: "Designing platform operation and commercial pathways through content distribution, audience engagement, licensing, brand partnerships and monetization models.",
    tags: ["App Operation", "Content Distribution", "Audience Engagement", "IP Licensing", "Monetization Models"]
  }
];

export const PARTNERS: Partner[] = [
  {
    id: "timeaxis",
    name: "TIMEAXIS DIGITAL IMAGING TECHNOLOGY",
    role: "Virtual Production / Advanced Post-Production",
    thumb: "src/assets/images/regenerated_image_1780418399662.jpg",
    images: [
      "src/assets/images/regenerated_image_1780418713710.jpg",
      "src/assets/images/regenerated_image_1780418715388.jpg",
      "src/assets/images/regenerated_image_1780418931870.jpg"
    ],
    desc: "A specialist partner supporting virtual production studio solutions, LED stage integration, digital asset creation, cinematic VFX, AIGC-assisted visual production and advanced post-production workflows.",
    expertise: [
      "Virtual production solutions",
      "LED & XR integration",
      "Sony Crystal LED technology",
      "Digital assets",
      "VFX & post-production",
      "AIGC visual workflow",
      "Immersive content"
    ],
    highlights: [
      "300+ film and television works supported with comprehensive digital solutions.",
      "Asia-scale / China-leading virtual production ecosystem with advanced LED technology across 15,000㎡.",
      "Deep technology collaboration with Sony on Crystal LED Display System.",
      "The Wandering Earth 2 — visual effects contributor.",
      "Born to Fly — China's first military film utilizing LED virtual production.",
      "China's first AI sci-fi short drama preview with China Unicom."
    ]
  },
  {
    id: "malanshan",
    name: "MALANSHAN AUDIO-VIDEO LABORATORY",
    role: "AI Media & Audio-Video Innovation Lab",
    thumb: "src/assets/images/regenerated_image_1780418400987.png",
    images: [
      "src/assets/images/regenerated_image_1780419660927.jpg",
      "src/assets/images/regenerated_image_1780419662074.jpg",
      "src/assets/images/regenerated_image_1780419662898.jpg"
    ],
    desc: "An audio-video R&D and innovation partner supporting AI media production, audio-video infrastructure, content localization, restoration, immersive media and full-chain audio-video technologies.",
    expertise: [
      "Full-chain audio-video technology",
      "AI video translation & dubbing",
      "AI subtitling & synchronization",
      "AI restoration & enhancement",
      "AIGC film & TV production",
      "4DGS immersive content",
      "AUDIO Vivid & HDR Vivid"
    ],
    highlights: [
      "Core R&D engine within China V Valley — Malanshan Video Cultural & Creative Industrial Park.",
      "Government-backed institution jointly established by Hunan Province and Changsha City.",
      "CEIC 2025 showcase — 13 proprietary technologies across intelligent audio-visual production.",
      "Micro-drama globalization support with AI translation and localization capabilities.",
      "Next-generation immersive media applications for virtual studios, XR filming, cultural tourism."
    ]
  },
  {
    id: "ndt",
    name: "DADA + ISM STUDIO",
    role: "Event Creative & Experience Strategy Partner",
    thumb: partner3Img,
    images: [
     "src/assets/images/003-Interior-Pages01.jpg",
      "src/assets/images/003-Interior-Pages02.jpg",
      "src/assets/images/003-Interior-Pages03.jpg"
    ],
    desc: "A cross-border event creative and experience strategy partner connecting selected Chinese creative capabilities with cultural, entertainment, sports, media and brand opportunities across Saudi Arabia and the wider Middle East.",
    expertise: [
     "Event creative strategy",
     "Concept development",
     "Creative direction",
     "Stadium ceremonies",
     "Brand launches",
     "Immersive cultural experiences",
     "Multimedia storytelling",
     "Sports & esports entertainment",
     "Sponsorship activation",
     "Partner curation"
     ],
     highlights: [
     "Spanish Super Cup 2025, Jeddah — stadium ceremony and entertainment delivery support.",
     "AFC Asian Cup Saudi Arabia 2027 — final-round shortlisted opening and closing ceremony proposal.",
     "Prince Badr Immersive Museum Experience — approved immersive cultural experience concept.",
     "CEER Automotive Launch 2026 — shortlisted brand launch concept and content design.",
     "Esports World Cup 2026 Opening Ceremony — final-round shortlisted ceremony proposal.",
     "WTA Riyadh 2025 × ERKE — sponsorship secured and activation strategy support.",
     "Core Creative Network — selected partners across brand experience, ceremonies, esports, immersive media, AI content and sports marketing."
    ]
  },
  {
    id: "dayang",
    name: "DAYANG TECHNOLOGY",
    role: "Media Asset & Broadcast Workflow Systems Partner",
    thumb: "src/assets/images/regenerated_image_1780418402908.jpg",
    images: [
     "src/assets/images/004-Interior-Pages01.avif",
     "src/assets/images/004-Interior-Pages02.jpg",
     "src/assets/images/004-Interior-Pages03.jpg"
    ],
    desc: "A media technology and broadcast workflow systems partner supporting media asset management, integrated production, ultra-HD editing, broadcast playout and multi-platform distribution.",
    expertise: [
      "Media asset management",
      "Integrated production workflow",
      "4K-8K editing",
      "Broadcast playout",
      "Cloud media platform",
      "Multi-platform publishing"
    ],
    highlights: [
      "China Media Group / Integrated Media Resource Library — long-term CMG platform since 2003.",
      "CCTV / New-Site Media Asset Management System — ingest and management of all broadcast materials.",
      "China Media Group / 8K Ultra-HD TV Channel — customized 8K broadcast control system.",
      "Beijing Radio & Television / 8K Ultra-HD Upgrade.",
      "Peking University / All-Media Studio Center."
    ]
  },
  {
    id: "sobey",
    name: "SOBEY DIGITAL TECHNOLOGY",
    role: "Media Cloud & Converged Workflow Partner",
    thumb: "src/assets/images/Main-Image05.avif",
    images: [
      "src/assets/images/005-Interior-Pages01.jpg",
      "src/assets/images/005-Interior-Pages02.jpg",
      "src/assets/images/005-Interior-Pages03.jpg"
    ],
    desc: "A media technology and integrated broadcast workflow partner supporting media cloud, converged newsroom, content management, ultra-HD production, multi-platform publishing and professional media system integration.",
    expertise: [
      "Media cloud",
      "Converged newsroom",
      "Content management",
      "Cloud editing",
      "Live streaming",
      "Smart media tools",
      "Multi-platform publishing"
    ],
    highlights: [
      "China Media Group / CCTV & CGTN — converged media platform and professional workflow.",
      "Zhejiang Radio & TV / China Blue Cloud — supporting 50+ city and county broadcasters.",
      "CCTV News / COVID-19 Live Coverage — 24-hour livestreaming with zero-error transmission.",
      "Major National Events: 70th National Day Parade, G20 Summit, Olympic Games.",
      "International Media Clients — solutions adopted by 200+ institutions across 30+ countries."
    ]
  },
  {
    id: "songguo",
    name: "SONGGUO DIGITAL CULTURE",
    role: "Short Drama Content & Commercialization Partner",
    thumb: "src/assets/images/Main-Image06.avif",
    images: [
      "src/assets/images/006-Interior-Pages01.avif",
      "src/assets/images/006-Interior-Pages02.jpg",
      "src/assets/images/006-Interior-Pages03.avif"
    ],
    desc: "A short drama content and commercialization partner with a national production and distribution network. Supports the full short drama value chain from IP development to commercial monetization.",
    expertise: [
      "Short drama IP",
      "Industrialized production",
      "AI-assisted workflow",
      "Platform distribution",
      "Traffic operation",
      "Brand integration",
      "Monetization"
    ],
    highlights: [
      "Jingzhou Media Group / Short Drama Ecosystem — 100-150 live-action dramas annually.",
      "ByteDance strategic cooperation & multi-platform distribution.",
      "Duxiaoman brand short drama — 150M+ views within one month.",
      "Roewe brand short drama — 100M+ views with performance-driven distribution.",
      "Production resources: 60+ directors / 3,000+ actor profiles / 500+ influencers."
    ]
  },
  {
    id: "utour",
    name: "UTOUR DIGITAL CULTURE",
    role: "Immersive Experience & Digital Culture Partner",
    thumb: "src/assets/images/Main-Image07.avif",
    images: [
      "src/assets/images/007-Interior-Pages01.jpg",
      "src/assets/images/007-Interior-Pages02.jpg",
      "src/assets/images/007-Interior-Pages03.jpg"
    ],
    desc: "An immersive experience and spatial computing partner supporting LBE experiences, XR interaction, virtual production, multimedia content, digital heritage and turnkey immersive solutions.",
    expertise: [
      "Spatial computing",
      "LBE experience",
      "AR-VR-MR",
      "UE5 & Unity",
      "Digital twin assets",
      "Virtual production",
      "Digital heritage"
    ],
    highlights: [
      "IMMERSIVE EXTREMES: ANTARCTIC ODYSSEY — world's first Antarctic-themed large-space LBE VR.",
      "Digital Jingdezhen — World Heritage digital project; AR/VR/MR experience matrix.",
      "Chengdu FISU World University Games Closing Ceremony 2023.",
      "Shanghai F1 Auto Culture Festival 2024/2025.",
      "PUBG Mobile × Transformers CG Cinematic collaboration."
    ]
  },
  {
    id: "huanxi",
    name: "HUANXI MEDIA GROUP",
    role: "Premium Film, IP & AI Content Partner",
    thumb: "src/assets/images/Main-Image08.avif",
    images: [
      "src/assets/images/008-Interior-Pages01.avif",
      "src/assets/images/008-Interior-Pages02.jpg",
      "src/assets/images/008-Interior-Pages03.jpg"
    ],
    desc: "A premium film and IP content partner supporting film investment, production, director-led content development, theatrical release, online distribution, curated streaming and AI-powered entertainment content.",
    expertise: [
      "Film investment & production",
      "Director-led content",
      "Premium IP",
      "Theatrical release",
      "Online distribution",
      "Curated streaming",
      "AI-powered content"
    ],
    highlights: [
      "Premium Chinese Film Portfolio — accumulated box office over RMB 9.3B.",
      "Full River Red — RMB 4.544B box office.",
      "Crazy Alien — Ning Hao film; around RMB 2.21B box office.",
      "Director Network — Ning Hao, Xu Zheng, Zhang Yimou, Peter Chan, Wong Kar-wai.",
      "AI Content Cooperation with Phancy covering AI film production and interactive entertainment."
    ]
  }
];

export const CONSORTIUM_STEPS: ConsortiumStep[] = [
  { num: "1", label: "UNDERSTAND", title: "Frame the Opportunity", desc: "Clarify ambition, context, business logic and expected outcome." },
  { num: "2", label: "MAP", title: "Map Required Capabilities", desc: "Identify strategic, creative, technical, operational and commercial needs." },
  { num: "3", label: "CURATE", title: "Curate the Partner Mix", desc: "Select the right partners based on scope, complexity and long-term potential." },
  { num: "4", label: "DEFINE", title: "Structure the Collaboration Model", desc: "Define roles, responsibilities, communication flow and roadmap." },
  { num: "5", label: "DEPLOY", title: "Advance to Proposal & Planning", desc: "Coordinate partner input, commercial discussion and execution planning." }
];

export const SCENARIOS: Scenario[] = [
  {
    num: "01",
    title: "Future Studio & Production Hubs",
    tags: ["Studio planning", "Virtual production", "AI-enabled workflow", "Smart production systems"],
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1600&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "Content Library Repackaging",
    tags: ["Classic content restoration", "Archive activation", "Short-form adaptation", "Digital redistribution"],
    img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "Digital Platforms & App Monetization",
    tags: ["Content apps", "Membership models", "Paid content", "Fan engagement", "Data-driven operation"],
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop"
  },
  {
    num: "04",
    title: "IP & Entertainment Extensions",
    tags: ["Co-production", "Branded content", "Licensing", "Live entertainment", "Immersive experiences"],
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop"
  }
];
