import React, { createContext, useContext, useState, useEffect } from "react";
import { NavElement, Advisor, Pillar, Partner, ConsortiumStep, Scenario } from "../types";
import partner1Img from "../assets/images/regenerated_image_1780418658205.jpg";
import partner2Img from "../assets/images/regenerated_image_1780418400987.png";
import partner3Img from "../assets/images/regenerated_image_1780418402015.jpg";
import partner4Img from "../assets/images/regenerated_image_1780418402908.jpg";
import partner1Sub1Img from "../assets/images/regenerated_image_1780456872747.jpg";
import partner1Sub2Img from "../assets/images/regenerated_image_1780420459174.jpg";
import partner1Sub3Img from "../assets/images/regenerated_image_1780420460297.jpg";
import partner5Img from "../assets/images/regenerated_image_1780462377858.avif";

export type Language = "EN" | "TC";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  navElements: NavElement[];
  advisors: Advisor[];
  pillars: Pillar[];
  partners: Partner[];
  consortiumSteps: ConsortiumStep[];
  scenarios: Scenario[];
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const UI_TRANSLATIONS: Record<Language, Record<string, string>> = {
  EN: {
    // Header & Hero
    "header.logo.sub": "Media Partners",
    "header.contact": "Get In Touch",
    "hero.transformation": "The 23°26′ Transformation Vision",
    "hero.partners": "MEDIA PARTNERS",
    "hero.line": "Media Collaboration, Structured.",
    "hero.btn.discover": "Discover Our Model",
    "hero.btn.initiate": "Initiate a Project",
    "hero.live": "Platform Live",
    "hero.scroll": "Scroll",

    // Who We Are
    "who.subtitle": "Who We Are",
    "who.heading": "AN INTERNATIONAL MEDIA PARTNERSHIP PLATFORM",
    "who.italic": "Structuring project-based collaborations across content, production, media technology, digital platforms and commercialization.",
    "who.box1": "ARTRANS Media Partners is an international media partnership platform that structures project-based collaborations across content, production, media technology digital platforms and commercialization.",
    "who.box2": "ARTRANS helps clients structure project-based partnerships by assembling the right combination of strategic, creative, technological and operational partners for future-facing media opportunities.",
    "who.stats.pillars": "Core Pillars",
    "who.stats.partners": "Strategic Partners",
    "who.stats.based": "Based In",

    // Partnership Model
    "model.subtitle": "The Partnership Model",
    "model.heading": "ONE INTERFACE. FULL MEDIA ECOSYSTEM.",
    "model.desc": "Clients work through one clear interface with ARTRANS. Behind it, ARTRANS curates and coordinates specialized partners across the media value chain according to each project's objectives.",
    "model.diag.client": "CLIENT",
    "model.diag.frame": "Frame",
    "model.diag.curate": "Curate",
    "model.diag.structure": "Structure",
    "model.diag.coordinate": "Coordinate",
    "model.alignment": "Core Alignment:",

    // Structuring Ecosystem
    "eco.subtitle": "Structuring the Ecosystem",
    "eco.heading": "FROM PARTNER EXPERTISE TO PROJECT-READY SOLUTIONS.",
    "eco.desc": "Four capability pillars that turn ecosystem resources into practical media solutions.",

    // Strategic Partners
    "partners.subtitle": "Representative Strategic Partner Profiles",
    "partners.heading": "SPECIALIST PARTNERS ALIGNED TO PROJECT NEEDS.",
    "partners.tag": "Strategic Partner",
    "partners.modal.role": "PARTNER ROLE",
    "partners.modal.tech": "Core Expertise",
    "partners.modal.expertise": "PARTNERS EXPERTISE",
    "partners.modal.experience": "Representative Experience",
    "partners.btn.view": "View Profile",

    // Consortium
    "consortium.subtitle": "How We Build the Right Consortium",
    "consortium.heading": "FROM OPPORTUNITY TO CONSORTIUM.",
    "consortium.desc": "Each project requires a different combination of expertise. ARTRANS helps define the right partner structure based on the project's real ambition, required capabilities and commercial direction.",

    // Collaboration Scenarios
    "scenarios.subtitle": "Potential Collaboration Scenarios",
    "scenarios.heading": "STRUCTURING FUTURE-FACING MEDIA PROJECTS.",
    "scenarios.desc": "ARTRANS can structure different partner combinations for future-facing media projects — from studio development and content activation to digital platforms, IP commercialization and entertainment extensions.",

    // Contact Form
    "contact.subtitle": "Contact",
    "contact.heading": "INITIATE COLLABORATION.",
    "contact.desc": "Ready to structure a future-facing media project? Get in touch to discuss positioning, ecosystem requirements and partner curation opportunities.",
    "contact.enquiry": "General enquiries",
    "contact.based": "ADDRESS",
    "contact.hk": "Hong Kong",
    "contact.city": "21/F, Henley Building, 5 Queen’s Road Central, Central, Hong Kong",
    "contact.success.title": "Enquiry Submitted",
    "contact.success.desc": "Thank you for starting the conversation. We will review your enquiry and respond shortly.",
    "contact.success.btn": "Send another enquiry",
    "contact.name": "Name*",
    "contact.name.placeholder": "Enter your name",
    "contact.company": "Company",
    "contact.company.placeholder": "Enter company name",
    "contact.email": "Email*",
    "contact.email.placeholder": "Enter email address",
    "contact.interest": "Area of Interest*",
    "contact.interest.placeholder": "Select area of interest",
    "contact.message": "Message*",
    "contact.message.placeholder": "Describe your project goals or questions",
    "contact.submit": "Send Enquiry",
    "contact.submitting": "Submitting Enquiry...",

    // Footer
    "footer.desc": "Hong Kong's premier model-based media consortium coordinator."
  },
  TC: {
    // Header & Hero
    "header.logo.sub": "Media Partners",
    "header.contact": "聯絡我們",
    "hero.transformation": "23°26′ 轉型變革願景",
    "hero.partners": "MEDIA PARTNERS",
    "hero.line": "媒體卓越協作，結構化呈現。",
    "hero.btn.discover": "探索我們的模式",
    "hero.btn.initiate": "開啟項目合作",
    "hero.live": "平台服務已啟動",
    "hero.scroll": "向下滾動",

    // Who We Are
    "who.subtitle": "關於我們",
    "who.heading": "國際媒體戰略合作平台",
    "who.italic": "全面構建以項目為核心的跨界合作，涵蓋優質內容、影棚製作、媒體科技、數字平台和商業化變現。",
    "who.box1": "ARTRANS Media Partners 平台是一個國際性的媒體戰略合作平台。我們致力於圍繞優質內容、影棚製作、媒體科技、數字平台以及商業化運營，構建起以項目為核心的、高度專業的跨界協作體系。",
    "who.box2": "ARTRANS 靈活匯聚市場中最契合的戰略、創意、技術和運營合作夥伴，幫助客戶構建最符合項目實質目標與演進路線的合夥架構，從容把握面向未來的媒體機遇。",
    "who.stats.pillars": "核心專業板塊",
    "who.stats.partners": "戰略合作夥伴",
    "who.stats.based": "總部設立於",

    // Partnership Model
    "model.subtitle": "合夥協作模式",
    "model.heading": "單一對接接口，對接全媒體生態系。",
    "model.desc": "在外部，客戶只需與 ARTRANS 單一對接；而在內部，ARTRANS 會根據各個項目的核心目標，全權篩選並統籌協作整個媒體產業價值鏈中的各個專業細分合作夥伴。",
    "model.diag.client": "客戶",
    "model.diag.frame": "框架設定",
    "model.diag.curate": "合作篩選",
    "model.diag.structure": "架構深化",
    "model.diag.coordinate": "統籌協作",
    "model.alignment": "核心配置項目：",

    // Structuring Ecosystem
    "eco.subtitle": "生態系統建制",
    "eco.heading": "匯聚合作夥伴專長，打造即刻落地的完整解決方案。",
    "eco.desc": "四大核心能力支柱，將龐大的媒體生態資源轉化為切實可行的項目成果。",

    // Strategic Partners
    "partners.subtitle": "核心戰略合作夥伴代表",
    "partners.heading": "攜手頂尖專才，精準契合項目需求。",
    "partners.tag": "戰略夥伴",
    "partners.modal.role": "PARTNER ROLE",
    "partners.modal.tech": "核心專長技術",
    "partners.modal.expertise": "PARTNERS EXPERTISE",
    "partners.modal.experience": "代表性合作經歷與亮點",
    "partners.btn.view": "觀看簡介",

    // Consortium
    "consortium.subtitle": "我們如何組建合適的聯合體",
    "consortium.heading": "從把握市場機會，到聯合體完美落地。",
    "consortium.desc": "不同的項目需要完全不同維度的專業配合。ARTRANS 會全方位理解客戶的真實抱負、能力缺口與商業願景，定制最契合的合夥夥伴架構。",

    // Collaboration Scenarios
    "scenarios.subtitle": "潛在合作場景",
    "scenarios.heading": "構建面向未來的媒體標竿項目。",
    "scenarios.desc": "不論是新概念影棚與虛擬影視基地建設、經典內容庫的優化重組、數字流媒體平台搭建，還是 IP 的商業化變現與線下體驗延展，我們都能組裝出最強的專家矩陣。",

    // Contact Form
    "contact.subtitle": "聯絡我們",
    "contact.heading": "開啟全新協作願景。",
    "contact.desc": "準備好啟動面向未來的媒體項目了？歡迎立即與我們的團隊取得聯繫，深入探討定位、資源對接以及項目合夥的無限可能。",
    "contact.enquiry": "業務與合作諮詢",
    "contact.based": "ADDRESS",
    "contact.hk": "香港特別行政區",
    "contact.city": "香港皇后大道中5號衡怡大廈21樓",
    "contact.success.title": "諮詢已成功提交",
    "contact.success.desc": "非常感謝您開啟本次對話。我們的團隊正在認真評估您的需求，並將在最短時間內與您取得聯繫。",
    "contact.success.btn": "提交另一個諮詢",
    "contact.name": "姓名*",
    "contact.name.placeholder": "請輸入您的姓名",
    "contact.company": "公司或機構名稱",
    "contact.company.placeholder": "請輸入公司名稱",
    "contact.email": "電子郵箱*",
    "contact.email.placeholder": "請輸入您的電子郵箱",
    "contact.interest": "您感興趣的板塊*",
    "contact.interest.placeholder": "請選擇感興趣的業務板塊",
    "contact.message": "諮詢詳情或留言*",
    "contact.message.placeholder": "請簡要描述您的項目目標或合作問題",
    "contact.submit": "發送諮詢",
    "contact.submitting": "正在發送您的諮詢...",

    // Footer
    "footer.desc": "香港卓越的、基於成熟合夥人模式的媒體聯合體領先協調機構。"
  }
};

const DYNAMIC_TRANSLATIONS: Record<Language, {
  navElements: NavElement[];
  advisors: Advisor[];
  pillars: Pillar[];
  partners: Partner[];
  consortiumSteps: ConsortiumStep[];
  scenarios: Scenario[];
}> = {
  EN: {
    navElements: [
      { label: "Who We Are", href: "#who-we-are" },
      { label: "Partnership Model", href: "#model" },
      { label: "Ecosystem", href: "#ecosystem" },
      { label: "Partners", href: "#partners" },
      { label: "Contact", href: "#contact" }
    ],
    advisors: [
      { label: "Media Strategy Advisors", desc: "Project positioning / Business model / Capability mapping" },
      { label: "Content & IP Developers", desc: "Original IP / Format development / Archive repackaging" },
      { label: "Production Studios", desc: "Film / TV / Short-form / Digital & branded content" },
      { label: "Studio Technology & Systems Integrators", desc: "Studio planning / Broadcast systems / AV integration" },
      { label: "Virtual Production & AI Media Specialists", desc: "LED volume / XR production / AI-assisted creation" },
      { label: "Post-Production & Restoration Houses", desc: "Editing / VFX / AI restoration / Localization" },
      { label: "Digital Platform & App Architects", desc: "OTT / App / CMS / Audience engagement" },
      { label: "Commercialization & IP Operators", desc: "Distribution / Licensing / Brand partnerships" }
    ],
    pillars: [
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
    ],
    partners: [
      {
        id: "timeaxis",
        name: "TIMEAXIS DIGITAL IMAGING TECHNOLOGY",
        role: "Virtual Production / Advanced Post-Production",
        thumb: partner1Img,
        images: [
          partner1Sub1Img,
          partner1Sub2Img,
          partner1Sub3Img
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
        thumb: partner2Img,
        images: [
          "src/assets/images/regenerated_image_1780419660927.jpg",
          "src/assets/images/regenerated_image_1780419376096.png",
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
        thumb: partner4Img,
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
    ],
    consortiumSteps: [
      { num: "1", label: "UNDERSTAND", title: "Frame the Opportunity", desc: "Clarify ambition, context, business logic and expected outcome." },
      { num: "2", label: "MAP", title: "Map Required Capabilities", desc: "Identify strategic, creative, technical, operational and commercial needs." },
      { num: "3", label: "CURATE", title: "Curate the Partner Mix", desc: "Select the right partners based on scope, complexity and long-term potential." },
      { num: "4", label: "DEFINE", title: "Structure the Collaboration Model", desc: "Define roles, responsibilities, communication flow and roadmap." },
      { num: "5", label: "DEPLOY", title: "Advance to Proposal & Planning", desc: "Coordinate partner input, commercial discussion and execution planning." }
    ],
    scenarios: [
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
    ]
  },
  TC: {
    navElements: [
      { label: "關於我們", href: "#who-we-are" },
      { label: "合作模式", href: "#model" },
      { label: "生態藍圖", href: "#ecosystem" },
      { label: "合作夥伴", href: "#partners" },
      { label: "聯絡我們", href: "#contact" }
    ],
    advisors: [
      { label: "媒體戰略顧問", desc: "專注於品牌與項目定位、商業模式創新及核心運營技術能力配置 mapping" },
      { label: "內容與頂級 IP 開創團隊", desc: "主辦原創影視 IP 的深度策劃、格式（Format）開發和經典檔案內容的活化重組" },
      { label: "專業影視製作工作室", desc: "承接電影、電視、創新微短劇、數字互動資產及定制品牌內容的製作" },
      { label: "影棚技術與廣電系統集成商", desc: "承擔影棚系統性規劃、專業廣播級播控與視聽系統（AV）的高效集成" },
      { label: "虛擬製作與 AI 智能影片科技專家", desc: "提供 LED 智能攝製舞台、XR 混合現實技術以及 AIGC 智能輔助影音工作流" },
      { label: "後期製作與電影級修復機構", desc: "專注於剪輯、高精視覺特效（VFX）、AI 視頻高清修復與多語種本地化譯配" },
      { label: "數字平台與流媒體架構專家", desc: "負責 OTT 平台搭建、移動端應用開發、內容管理系統（CMS）建構與受眾深度互動" },
      { label: "商業化與 IP 權益運營商", desc: "策劃跨國發行、版權許可、品牌戰略整合及多元化變現機制的部署" }
    ],
    pillars: [
      {
        num: "01",
        title: "戰略規劃與項目結構化",
        tagline: "核心配置",
        desc: "全面定義項目的業務目標、運營模組、急需技術、最優對接合夥模式以及分階段發展路線圖。",
        tags: ["項目市場定位", "商業運營模式", "核心能力配置", "合作對接架構", "聯合體落地規劃"]
      },
      {
        num: "02",
        title: "優質內容策劃與 IP 活化",
        tagline: "核心配置",
        desc: "開發獨家內容概念，活化並重新封裝現有經典版權和檔案庫，橫跨多渠道、多格式及多元受眾群體。",
        tags: ["內容創意概念", "IP 衍生拓展", "經典文獻重組", "多樣格式創新", "AI 輔助內容創作"]
      },
      {
        num: "03",
        title: "前沿影棚製作與媒體技術",
        tagline: "核心配置",
        desc: "完美整合虛擬拍攝、廣播播控系統及後期製作流程，組裝出能高效響應的標準化現代製作業態。",
        tags: ["影棚基建規劃", "廣播電視系統", "LED 虛擬製作", "AI 專業媒體科技", "後期全鏈條工作流"]
      },
      {
        num: "04",
        title: "商業化推廣與數字平台運營",
        tagline: "核心配置",
        desc: "量身定制平台運營路徑，配合優質內容的多渠道分發、實時粉絲互動、授權合作及可持續高收益經營模式。",
        tags: ["移動應用端運營", "版權全渠道分發", "社群與粉絲互動", "IP 品牌許可授權", "商業盈利模式創新"]
      }
    ],
    partners: [
      {
        id: "timeaxis",
        name: "時空軸數字影像技術 (TIMEAXIS)",
        role: "虛擬製作 / 高級特效與後期流程",
        thumb: partner1Img,
        images: [
          partner1Sub1Img,
          partner1Sub2Img,
          partner1Sub3Img
        ],
        desc: "戰略性技術合夥夥伴，為大型項目配備一整套虛擬舞台影視方案、高級 LED 現場拍攝、高品質數字虛擬資產研發、大銀幕級特效（VFX）及 AI 輔助影像工作流。",
        expertise: [
          "虛擬製作解決方案",
          "LED 與 XR 深度集成",
          "索尼黑彩晶高解析技術",
          "三維高精數字資產",
          "電影級 VFX 特效及後期",
          "AIGC 智能視覺製作",
          "空間沉浸式多媒體內容"
        ],
        highlights: [
          "已成功為超過 300 部國內外頂級電影及電視大片提供全鏈條的數字技術解決方案。",
          "擁有亞洲一流、超15,000平方米的大型虛擬攝影基地及超高清 LED 顯示屏模塊。",
          "與全球索尼 (Sony) 團隊在 Crystal LED 系統的核心成像調試中保持深度聯合研發關係。",
          "深度參與《流浪地球 2》特效製作，為影片的高精數字場景提供核心支撐。",
          "為軍事題材電影《長空之王》提供完整 LED 虛擬攝製全流體支持，締造了行業典範。",
          "與中國聯通戰略攜手，製作並推出了國內首部生成式 AI 科幻科創新穎短劇預告。"
        ]
      },
      {
        id: "malanshan",
        name: "馬欄山視頻超高清實驗室 (MALANSHAN LAB)",
        role: "AI 智能影音與超高清技術創新機構",
        thumb: partner2Img,
        images: [
         "src/assets/images/regenerated_image_1780419660927.jpg",
          "src/assets/images/regenerated_image_1780419376096.png",
          "src/assets/images/regenerated_image_1780419662898.jpg"
        ],
        desc: "頂尖研發科研實體，專精於前沿音視頻科學、AI 視頻自動化翻譯與譯配、字幕精準同步、經典老片超清修複、高交互空間媒體以及次世代聲效技術的開發。",
        expertise: [
          "全棧式超高清影音科技",
          "AI 多語種自動語音配音",
          "AI 智能字幕與精準對齊",
          "老舊素材 AI 超分辨率修復",
          "AIGC 內容自動生成工作流",
          "4DGS 混合空間實時影音",
          "國內 AUDIO Vivid / HDR 三維標準"
        ],
        highlights: [
          "坐落於中國「V谷」馬欄山視頻文創產業園中，充當核心科技引擎與源頭研發節點。",
          "由湖南省、長沙市兩級政府強力主導建置的省級前沿科技新秀重組實驗室。",
          "在 CEIC 2025 全國科技盛會中重磅發布 13 項具有世界領先水平的超高清智能製作裝備與系統。",
          "在微短劇全球化浪潮中，依託其自研 AI 翻譯，為大批版權方打通英語、泰語、西語等高水準本地化譯製。",
          "將先進 of 3D 高保真與全維度虛擬交互場景導入智慧文旅和混合沉浸式博物館中。"
        ]
      },
      {
        id: "ndt",
        name: "達達ISM",
        role: "活動創意與體驗策略夥伴",
        thumb: partner3Img,
        images: [
          "src/assets/images/003-Interior-Pages01.jpg",
          "src/assets/images/003-Interior-Pages02.jpg",
          "src/assets/images/003-Interior-Pages03.jpg"
        ],
        desc: "一家跨境活動創意和體驗策略合作夥伴，將精選的中國創意能力與沙烏地阿拉伯及更廣泛的中東地區的文化、娛樂、體育、媒體和品牌機會聯繫起來。",
        expertise: [
          "活動創意策略",
          "概念發展",
          "創意指導",
          "體育場館儀式",
          "品牌發布",
          "沉浸式文化體驗",
          "多媒體敘事",
          "運動及電競娛樂",
          "贊助活化",
          "合作夥伴甄選"
        ],
        highlights: [
          "2025年西班牙超級盃（吉達）－體育場開幕式及娛樂活動支援。",
          "2027年亞足聯亞洲盃（沙烏地阿拉伯）－開幕式和閉幕式方案入圍決賽。",
          "巴德爾王子沉浸式博物館體驗－沉浸式文化體驗方案獲準。",
          "2026年CEER汽車發表會－品牌發布方案及內容設計入圍決賽。",
          "2026年電競世界盃開幕式－開幕式方案入圍決賽。",
          "2025年WTA利雅德站×ERKE－贊助落實及推廣策略支持。",
          "核心創意網絡－在品牌體驗、開幕式、電競、沉浸式媒體、人工智慧內容及運動行銷等領域甄選合作夥伴。"
        ]
      },
      {
        id: "dayang",
        name: "中科大洋科技 (DAYANG)",
        role: "國家級非線性編輯與智能化媒資庫系統商",
        thumb: partner4Img,
        images: [
          "src/assets/images/004-Interior-Pages01.avif",
          "src/assets/images/004-Interior-Pages02.jpg",
          "src/assets/images/004-Interior-Pages03.jpg"
        ],
        desc: "專注於融合媒體核心系統研發，特別是在大容量智能媒體資源管理庫（MAM）、高端非線性編輯基站、8K 信號全自動化播控平台等方向居於行業制高點。",
        expertise: [
          "大容量多維媒體資源智能庫",
          "全功能智能化編目與檢索",
          "4K-8K 骨幹網絡實時剪輯",
          "自動化秒級安全播出系統",
          "私有化媒體雲與流分發器",
          "全媒體一鍵多渠道分發系統"
        ],
        highlights: [
          "自 2003 年起，持續為中央廣播電視總台 (CMG) 進行融媒體大數據資產庫的代建與不間斷研發，安全穩定運行超 20 年。",
          "承建央視新大樓的主力全能媒資管理底座，保障日均 5,000+ 小時素材的高清高速存取。",
          "為中央廣播電視總台 8K 超高清電視頻道交付定制化的大底座 8K 超高清播出智能安全控制平台。",
          "深度承建北京廣播電視台 (BRTV) 的全系統 8K 超高清升級方案。",
          "承建北京大學多媒體融合中央演播中心（面向未來高素質高校的示範性項目）。"
        ]
      },
      {
        id: "sobey",
        name: "索貝數字科技 (SOBEY)",
        role: "泛媒體雲與融合採編室全生態運營商",
        thumb: partner5Img,
        images: [
          "src/assets/images/005-Interior-Pages01.jpg",
          "src/assets/images/005-Interior-Pages02.jpg",
          "src/assets/images/005-Interior-Pages03.jpg"
        ],
        desc: "領先的專業級媒體雲平台提供商，開創了融合採編室（Converged Newsroom）生態，使跨區域、跨團隊的多端雲端在線採編發一體化成爲可能。",
        expertise: [
          "分布式多端媒體雲架構",
          "融合採編、策劃與發佈一體化",
          "安全高性能全媒體內容管理",
          "無損網絡實時在線剪輯",
          "彈性雲流媒體直播解決方案",
          "AI 智慧輔助寫作與智能標籤",
          "多平台聚合式一鍵出版"
        ],
        highlights: [
          "為中央電視台 (CCTV) 及 CGTN 打造核心全融新聞採編系統，提供高效的一體化協同辦公流程。",
          "規劃並建設「浙江藍雲」，聯通浙江全省 50 多個市、縣級融媒體中心，實現省市縣三級資源全線共享。",
          "為全國各大緊急社會公共直播提供 24 小時不間斷抗載流媒體直播，實現百萬級併發零瞬斷。",
          "作為核心技術保障方，承接並零死角保障國慶70周年大閱兵、杭州G20峰會、北京冬奧會等重大外事直播。",
          "核心產品和系統已成功走出國門，被全球 30 多個國家及地區的 200 家世界級新聞社、電視台所採購。"
        ]
      },
      {
        id: "songguo",
        name: "松果數字文化 (SONGGUO C_C)",
        role: "微短劇製作、發行與全網商業化合夥人",
        thumb: "src/assets/images/Main-Image06.avif",
        images: [
          "src/assets/images/006-Interior-Pages01.avif",
          "src/assets/images/006-Interior-Pages02.jpg",
          "src/assets/images/006-Interior-Pages03.avif"
        ],
        desc: "微短劇垂直業態領跑者，擁有領先行業的標準化拍攝基地與強大的流量運營和推廣投放引擎，為客戶打通從劇本活化、批量攝製到平台分發和裂變變現。",
        expertise: [
          "精品IP微短劇開創研發",
          "流水線精益化攝製控本",
          "AI 劇本分析與輔助精剪",
          "全主流短影音平台戰略發行",
          "極端精準的流量買量投放",
          "品牌深度軟裝定制與植入",
          "海內外多模式精準變現"
        ],
        highlights: [
          "與荊州電視台深度合資共建微短劇文創孵化基地，達成年均 100-150 部高品質短劇的穩健量產。",
          "與抖音、快手、微信視頻號等多個平台保持一線白名單戰略對接渠道，分發效率領先行業。",
          "為度小滿定制系列品牌情境短劇，劇集在全網點擊量上線單月即大破 1.5 億級次。",
          "承製上汽榮威汽車多題材主題短劇，巧妙植入車型，全網累計點閱播放突破 1 億次，品效雙修。",
          "坐擁華中及華南最大影棚集群，聚合簽約導演 60+ 位，群演資源 3000+ 位，合作百萬級網紅主播 500+ 位。"
        ]
      },
      {
        id: "utour",
        name: "眾信數字文化 (UTOUR)",
        role: "線下特大型沉浸展演與大型空間計算開拓者",
        thumb: "src/assets/images/Main-Image07.avif",
        images: [
          "src/assets/images/007-Interior-Pages01.jpg",
          "src/assets/images/007-Interior-Pages02.jpg",
          "src/assets/images/007-Interior-Pages03.jpg"
        ],
        desc: "專精於 5D 虛擬視覺交互、高擬真線下大空間虛擬現實（LBE）、AR/VR 文化體驗研發以及利用虛幻引擎5（UE5）構建新穎虛擬數字雙生資產的頂尖團隊。",
        expertise: [
          "高維空間計算與動態定位",
          "LBE 特大型 VR 線下多人格鬥互動",
          "AR-VR-MR 開發與體感交互設備",
          "UE5 與 Unity 超擬真渲染",
          "數字孿生古建築與文博資產",
          "多維混合現實智能攝影影棚",
          "歷史文化遺產高精度復刻"
        ],
        highlights: [
          "推出《極致沉浸：南極奧德賽》，此為全球首款純冰雪南極科考探險的大空間多人 LBE 互動項目。",
          "打造《数字景德鎮》數字世界，採用厘米級高精度掃描還原千年瓷都核心古窯與文博互動體驗矩陣。",
          "為2023年成都大運會閉幕式提供核心的舞台 AR 數字特效技術保障與動畫渲染支援。",
          "為上海國際賽車文化節 2024/2025 連續承接大屏特種交互、AR賽事賽車還原互動的開發實施。",
          "與騰訊《和平精英》攜手，渲染引進了《變形金剛》定制 CG 影院級 CG 大片宣傳視頻，反響極其熱烈。"
        ]
      },
      {
        id: "huanxi",
        name: "歡喜傳媒集團 (HUANXI MEDIA)",
        role: "華語電影矩陣、頂級導演 IP 與歡喜首映流媒體平台",
        thumb: "src/assets/images/Main-Image08.avif",
        images: [
         "src/assets/images/008-Interior-Pages01.avif",
         "src/assets/images/008-Interior-Pages02.jpg",
         "src/assets/images/008-Interior-Pages03.jpg"
        ],
        desc: "中國最為著名的華語精品院線電影、強大名導聯盟、優質長影劇網絡以及高質量自營流媒體「歡喜首映」應用平台的擁有者與合夥運營機構。",
        expertise: [
          "商業大片重磅投資與操盤製作",
          "一線頂級導演核心IP聯合開發",
          "全產業院線發行與版權體系",
          "全網及全球權益渠道經銷商",
          "自營流媒體「歡喜首映」高水準運營",
          "AI + 電影新業態的整合佈局"
        ],
        highlights: [
          "累計投資、策劃與發行了龐大的華語大片矩陣，旗下影視大片全網總票房大破 93億元 人民幣。",
          "主導投資與製作電影《滿江紅》（張藝謀導演作品），在院線狂攬超 45.44 億元 人民幣巨額票房。",
          "打造重磅科幻喜劇精品《瘋狂的外星人》（寧浩作品），獲得高達 22.1 億元 人民幣的市場回報。",
          "牢固構建起名導利益命運共同體：囊括寧浩、徐錚、張藝謀、陳可辛、王家衛等巨匠。",
          "與 Phancy 團隊達成一線 AI 內容科技戰略合夥，致力於推出國內首個融入大模型微調的互動電影娛樂應用。"
        ]
      }
    ],
    consortiumSteps: [
      { num: "1", label: "框架設定", title: "錨定底層機遇", desc: "釐清項目的願景深度、現實背景脈絡、基本商業逻辑，以及所設定的終端期望指標。" },
      { num: "2", label: "能力對接", title: "繪合所需細部能力", desc: "全面盤點和拆解戰略定位、創意設計、深層技術、日常運作等各維度的資質與能力需求。" },
      { num: "3", label: "合夥篩選", title: "精準甄選合夥陣容", desc: "基於項目涉及的範疇、複雜系數、長期演講可能性，在全球或區域生態中精心配置特定合夥人。" },
      { num: "4", label: "架構確立", title: "量身定制協同機制", desc: "深度確定各角色的職權定位、界定責任範圍、制定溝通流體矩陣，並畫出里程碑式的合戰進度路線圖。" },
      { num: "5", label: "部署落地", title: "推進入駐與細案籌備", desc: "統籌協調各大合夥方的提案整合、商業框架合約的談判深化，並推動實施方案的最終定稿。" }
    ],
    scenarios: [
      {
        num: "01",
        title: "明日智能影棚與虛擬製片基地",
        tags: ["影棚前期規劃", "虛擬製片LED舞台", "AI影視工作流", "超高速廣電主控"],
        img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1600&auto=format&fit=crop"
      },
      {
        num: "02",
        title: "豐富內容庫非線再組與活化修復",
        tags: ["文化與歷史档案修復", "经典IP再激活", "短形式與微短劇改編", "數字版權全球在分發"],
        img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600&auto=format&fit=crop"
      },
      {
        num: "03",
        title: "數字流媒體與應用平台多軌商業化",
        tags: ["付費內容應用端", "高粘性會員體系", "新穎粉絲運營模組", "大數據分析與精益運營"],
        img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop"
      },
      {
        num: "04",
        title: "大IP外延與空間體感文娛實景配合",
        tags: ["多方聯合製作合夥", "高端品牌微定制", "版權拓展授權許可", "多人線下 LBE VR娛樂"],
        img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop"
      }
    ]
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Default to EN per instructions
    return "EN";
  });

  const t = (key: string): string => {
    return UI_TRANSLATIONS[language][key] || UI_TRANSLATIONS["EN"][key] || key;
  };

  const dynamic = DYNAMIC_TRANSLATIONS[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        navElements: dynamic.navElements,
        advisors: dynamic.advisors,
        pillars: dynamic.pillars,
        partners: dynamic.partners,
        consortiumSteps: dynamic.consortiumSteps,
        scenarios: dynamic.scenarios
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
