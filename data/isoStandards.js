const standards = [
  {
    code: "ISO 9001",
    name: "ISO 9001",
    href: "/iso-9001-2015-certification",
    category: "Quality Management System",
    focus: "Consistent quality and customer satisfaction",
    description:
      "ISO 9001 provides a framework for managing quality, improving processes, and consistently meeting customer and applicable requirements.",
    benefit:
      "A process-led Quality Management System helps organizations monitor performance, reduce avoidable errors, and build customer confidence.",
    applications: ["Manufacturing and production", "Professional and business services", "Organizations of every size"],
    certifiable: true,
  },
  {
    code: "ISO 10002",
    name: "ISO 10002",
    href: "/iso-10002-certification",
    category: "Customer Satisfaction",
    focus: "Fair and effective complaint handling",
    description:
      "ISO 10002 gives organizations guidance for designing and operating an accessible, responsive process to receive, investigate, and resolve customer complaints.",
    benefit:
      "A consistent complaint-handling approach can help identify recurring issues, improve customer experience, and turn feedback into service improvements.",
    applications: ["Customer support teams", "Consumer product and service providers", "Public-facing organizations"],
    certifiable: false,
    certificationNote: "ISO 10002 is guidance for a complaints-handling system, not a requirements standard intended for certification.",
  },
  {
    code: "ISO 13485",
    name: "ISO 13485",
    href: "/iso-13485-certification",
    category: "Medical Devices Quality Management",
    focus: "Quality and regulatory controls for medical devices",
    description:
      "ISO 13485 specifies Quality Management System requirements for organizations involved in the life cycle of medical devices and related services.",
    benefit:
      "A controlled, documented system supports product consistency, risk management, traceability, and applicable medical-device regulatory requirements.",
    applications: ["Medical device manufacturers", "Distributors and suppliers", "Medical device service providers"],
    certifiable: true,
  },
  {
    code: "ISO 13009",
    name: "ISO 13009",
    href: "/iso-13009-certification",
    category: "Tourism and Beach Operations",
    focus: "Well-managed and visitor-ready beaches",
    description:
      "ISO 13009 provides requirements and recommendations for beach operators, covering service provision, safety, information, and sustainable beach management.",
    benefit:
      "A structured operating approach helps beach managers coordinate visitor services, communicate clearly, and address operational and environmental considerations.",
    applications: ["Public beach operators", "Resorts and tourism destinations", "Coastal authorities and service providers"],
    certifiable: true,
  },
  {
    code: "ISO 14001",
    name: "ISO 14001",
    href: "/iso-14001-certification",
    category: "Environmental Management System",
    focus: "Managing environmental responsibilities",
    description:
      "ISO 14001 sets requirements for an Environmental Management System that helps organizations manage environmental aspects, obligations, and improvement objectives.",
    benefit:
      "A systematic approach can improve environmental performance, support compliance obligations, and make resource use and environmental impacts easier to manage.",
    applications: ["Manufacturing and construction", "Energy and utilities", "Organizations managing significant environmental impacts"],
    certifiable: true,
  },
  {
    code: "ISO 14064",
    name: "ISO 14064",
    href: "/iso-14064-certification",
    category: "Greenhouse Gas Accounting",
    focus: "Reliable greenhouse gas quantification and reporting",
    description:
      "The ISO 14064 series provides requirements and guidance for quantifying, monitoring, reporting, and verifying greenhouse gas emissions and removals.",
    benefit:
      "Consistent greenhouse gas information helps organizations understand their emissions, report transparently, and support credible climate action.",
    applications: ["Organizations preparing GHG inventories", "Project developers", "GHG validation and verification activities"],
    certifiable: false,
    certificationNote: "ISO 14064 addresses greenhouse gas quantification and verification; it is not a management-system certification standard.",
  },
  {
    code: "ISO 20000",
    name: "ISO 20000",
    href: "/iso-20000-1-certification",
    category: "IT Service Management System",
    focus: "Reliable and well-managed IT services",
    description:
      "ISO/IEC 20000-1 specifies requirements for establishing, implementing, maintaining, and continually improving a service management system.",
    benefit:
      "A defined service management system helps align IT services with agreed requirements and improve service delivery, support, and continual improvement.",
    applications: ["IT service providers", "Internal IT departments", "Managed service and cloud providers"],
    certifiable: true,
  },
  {
    code: "ISO 20121",
    name: "ISO 20121",
    href: "/iso-20121-certification",
    category: "Event Sustainability Management",
    focus: "Sustainability across event planning and delivery",
    description:
      "ISO 20121 specifies requirements for an event sustainability management system, helping event organizations address social, economic, and environmental impacts.",
    benefit:
      "A management-system approach helps event teams set priorities, engage stakeholders, and improve sustainability performance throughout the event lifecycle.",
    applications: ["Event organizers and venues", "Conferences and exhibitions", "Suppliers serving the events sector"],
    certifiable: true,
  },
  {
    code: "ISO 21001",
    name: "ISO 21001",
    href: "/iso-21001-certification",
    category: "Educational Organization Management System",
    focus: "Learner-centred, consistent educational services",
    description:
      "ISO 21001 specifies management-system requirements for educational organizations, with a focus on the needs of learners and other beneficiaries.",
    benefit:
      "A structured system helps educational organizations align services with their objectives, evaluate performance, and continually improve learning support.",
    applications: ["Schools and colleges", "Universities and training providers", "Educational departments and learning services"],
    certifiable: true,
  },
  {
    code: "ISO 21401",
    name: "ISO 21401",
    href: "/iso-21401-certification",
    category: "Accommodation Sustainability Management",
    focus: "Sustainable management of accommodation services",
    description:
      "ISO 21401 specifies sustainability management system requirements for accommodation establishments, including environmental, social, and economic considerations.",
    benefit:
      "A practical system helps accommodation providers manage impacts, engage interested parties, and improve sustainability practices over time.",
    applications: ["Hotels and resorts", "Guest houses and lodges", "Other accommodation establishments"],
    certifiable: true,
  },
  {
    code: "ISO 22000",
    name: "ISO 22000",
    href: "/iso-22000-certification",
    category: "Food Safety Management System",
    focus: "Food safety throughout the supply chain",
    description:
      "ISO 22000 specifies requirements for a Food Safety Management System for organizations directly or indirectly involved in the food chain.",
    benefit:
      "Coordinated food safety controls help organizations identify hazards, communicate across the supply chain, and provide products that meet agreed safety requirements.",
    applications: ["Food and beverage production", "Food storage and distribution", "Food service and packaging"],
    certifiable: true,
  },
  {
    code: "ISO 22301",
    name: "ISO 22301",
    href: "/iso-22301-certification",
    category: "Business Continuity Management System",
    focus: "Preparing for and responding to disruption",
    description:
      "ISO 22301 specifies requirements for a Business Continuity Management System to help organizations prepare for, respond to, and recover from disruptive incidents.",
    benefit:
      "A continuity framework helps identify critical activities, plan response arrangements, and strengthen the organization’s ability to continue priority services.",
    applications: ["Essential and public services", "Financial and technology organizations", "Organizations with critical operations"],
    certifiable: true,
  },
  {
    code: "ISO 26000",
    name: "ISO 26000",
    href: "/iso-26000-certification",
    category: "Social Responsibility Guidance",
    focus: "Integrating responsible practices into an organization",
    description:
      "ISO 26000 provides guidance on social responsibility, including organizational governance, human rights, labour practices, the environment, and community involvement.",
    benefit:
      "Its guidance can help organizations understand their impacts and embed responsible conduct in decisions, relationships, and everyday operations.",
    applications: ["Organizations of every size", "Supply chains and business partners", "Public, private, and nonprofit sectors"],
    certifiable: false,
    certificationNote: "ISO 26000 is guidance on social responsibility and is not intended or appropriate for certification.",
  },
  {
    code: "ISO 27001",
    name: "ISO 27001",
    href: "/iso-27001-certification",
    category: "Information Security Management System",
    focus: "Protecting information through risk management",
    description:
      "ISO/IEC 27001 specifies requirements for establishing, implementing, maintaining, and continually improving an Information Security Management System.",
    benefit:
      "A risk-based ISMS helps organizations protect information confidentiality, integrity, and availability while managing security risks systematically.",
    applications: ["Technology and cloud services", "Financial and professional services", "Organizations handling sensitive information"],
    certifiable: true,
  },
  {
    code: "ISO 27701",
    name: "ISO 27701",
    href: "/iso-27701-certification",
    category: "Privacy Information Management System",
    focus: "Managing privacy and personal information",
    description:
      "ISO/IEC 27701 provides requirements and guidance for a Privacy Information Management System, extending privacy controls for organizations processing personal information.",
    benefit:
      "A privacy management framework helps define responsibilities, manage personal-data risks, and demonstrate a systematic approach to privacy protection.",
    applications: ["Personal data controllers and processors", "Cloud and technology providers", "Organizations with privacy obligations"],
    certifiable: true,
  },
  {
    code: "ISO 27017",
    name: "ISO 27017",
    href: "/iso-27017-certification",
    category: "Cloud Information Security",
    focus: "Cloud-specific information security controls",
    description:
      "ISO/IEC 27017 provides cloud-specific information security controls and implementation guidance for cloud service providers and cloud service customers.",
    benefit:
      "Shared cloud-security guidance helps clarify responsibilities and strengthen controls for provisioning, operating, and using cloud services.",
    applications: ["Cloud service providers", "Organizations using cloud platforms", "Managed hosting and SaaS providers"],
    certifiable: false,
    certificationNote: "ISO/IEC 27017 provides cloud-security controls and guidance; it is not a standalone management-system certification standard.",
  },
  {
    code: "ISO 27018",
    name: "ISO 27018",
    href: "/iso-27018-certification",
    category: "Public Cloud Privacy Protection",
    focus: "Protecting personal information in public clouds",
    description:
      "ISO/IEC 27018 provides guidance and controls for protecting personally identifiable information when a public cloud provider acts as a processor.",
    benefit:
      "Privacy-focused cloud controls support transparent handling of personal information and help providers address customer privacy expectations.",
    applications: ["Public cloud providers", "Cloud processors handling personal information", "Organizations assessing cloud privacy controls"],
    certifiable: false,
    certificationNote: "ISO/IEC 27018 provides public-cloud privacy controls and guidance; it is not a standalone management-system certification standard.",
  },
  {
    code: "ISO 28000",
    name: "ISO 28000",
    href: "/iso-28000-certification",
    category: "Security and Resilience Management System",
    focus: "Managing security risks across operations and supply chains",
    description:
      "ISO 28000 specifies requirements for a security and resilience management system, supporting the systematic assessment and treatment of security-related risks.",
    benefit:
      "A structured security system helps organizations protect operations, people, assets, and supply-chain activities against relevant disruptions and threats.",
    applications: ["Logistics and transport", "Ports and supply-chain operators", "Organizations managing security-sensitive assets"],
    certifiable: true,
  },
  {
    code: "ISO 29000",
    name: "ISO 29000",
    href: "/iso-29000-certification",
    category: "Petroleum, Petrochemical and Natural Gas Quality",
    focus: "Quality requirements for energy-sector supply chains",
    description:
      "ISO 29000 is commonly used to refer to quality requirements for the petroleum, petrochemical, and natural gas industries; the applicable document and edition should be confirmed for each scope.",
    benefit:
      "Using the relevant sector-specific quality requirements can help organizations align their processes with demanding industry and supply-chain expectations.",
    applications: ["Oil and gas equipment suppliers", "Petrochemical manufacturers", "Energy-sector service providers"],
    certifiable: false,
    certificationNote: "ISO 29000 is a family designation. Confirm the exact applicable document and edition; sector certification requirements may be specified in ISO 29001.",
  },
  {
    code: "ISO 30000",
    name: "ISO 30000",
    href: "/iso-30000-certification",
    category: "Ship Recycling Management System",
    focus: "Responsible management of ship recycling",
    description:
      "ISO 30000 specifies management-system requirements for safe and environmentally sound ship recycling facilities and their associated processes.",
    benefit:
      "A defined system helps facilities manage health, safety, and environmental responsibilities during ship recycling operations.",
    applications: ["Ship recycling facilities", "Ship owners and operators", "Marine recycling supply chains"],
    certifiable: true,
  },
  {
    code: "ISO 31000",
    name: "ISO 31000",
    href: "/iso-31000-certification",
    category: "Risk Management Guidance",
    focus: "Integrating risk management into decisions",
    description:
      "ISO 31000 provides principles, a framework, and a process for managing risk across an organization, tailored to its context and objectives.",
    benefit:
      "Consistent risk practices help decision-makers identify uncertainty, consider potential effects, and make informed choices across activities.",
    applications: ["Strategic and operational planning", "Project and change management", "Organizations of every size and sector"],
    certifiable: false,
    certificationNote: "ISO 31000 provides risk-management guidance and is not a requirements standard intended for certification.",
  },
  {
    code: "ISO 37001",
    name: "ISO 37001",
    href: "/iso-37001-certification",
    category: "Anti-Bribery Management System",
    focus: "Preventing, detecting, and addressing bribery",
    description:
      "ISO 37001 specifies requirements and guidance for establishing, implementing, maintaining, and improving an Anti-Bribery Management System.",
    benefit:
      "A proportionate anti-bribery system helps organizations assess exposure, apply controls, and promote a culture of integrity.",
    applications: ["Public and private organizations", "Organizations operating across borders", "Businesses managing third-party relationships"],
    certifiable: true,
  },
  {
    code: "ISO 37301",
    name: "ISO 37301",
    href: "/iso-37301-certification",
    category: "Compliance Management System",
    focus: "Building a consistent approach to compliance",
    description:
      "ISO 37301 specifies requirements and guidance for establishing, developing, implementing, evaluating, maintaining, and improving a Compliance Management System.",
    benefit:
      "A structured compliance system helps organizations identify obligations, assign accountability, monitor performance, and respond to noncompliance.",
    applications: ["Regulated organizations", "Organizations with complex legal obligations", "Public, private, and nonprofit sectors"],
    certifiable: true,
  },
  {
    code: "ISO 41001",
    name: "ISO 41001",
    href: "/iso-41001-certification",
    category: "Facility Management System",
    focus: "Effective and efficient facility management",
    description:
      "ISO 41001 specifies requirements for a Facility Management System that supports the effective delivery of facility management services.",
    benefit:
      "A common management framework helps align facilities, service providers, and workplace support with the organization’s needs.",
    applications: ["Facility management providers", "Corporate real estate teams", "Organizations with complex building portfolios"],
    certifiable: true,
  },
  {
    code: "ISO 42001",
    name: "ISO 42001",
    href: "/iso-42001-certification",
    category: "Artificial Intelligence Management System",
    focus: "Responsible management of AI systems",
    description:
      "ISO/IEC 42001 specifies requirements for establishing, implementing, maintaining, and continually improving an Artificial Intelligence Management System.",
    benefit:
      "An AI management system helps organizations assess AI-related impacts and risks and establish governance across the AI system lifecycle.",
    applications: ["Organizations developing AI systems", "Businesses using AI in products or services", "AI technology and service providers"],
    certifiable: true,
  },
  {
    code: "ISO 45001",
    name: "ISO 45001",
    href: "/iso-45001-certification",
    category: "Occupational Health and Safety Management System",
    focus: "Safer, healthier workplaces",
    description:
      "ISO 45001 specifies requirements for an Occupational Health and Safety Management System to prevent work-related injury and ill health.",
    benefit:
      "A systematic OH&S approach helps identify hazards, reduce risks, involve workers, and improve health and safety performance.",
    applications: ["Construction and manufacturing", "Service and public-sector organizations", "Workplaces of every size"],
    certifiable: true,
  },
  {
    code: "ISO 45003",
    name: "ISO 45003",
    href: "/iso-45003-certification",
    category: "Psychological Health and Safety Guidance",
    focus: "Managing psychosocial risks at work",
    description:
      "ISO 45003 provides guidance for managing psychosocial risks and promoting psychological health and safety at work, within an occupational health and safety framework.",
    benefit:
      "Practical guidance helps organizations recognize work-related psychosocial hazards and take steps to support worker well-being.",
    applications: ["Organizations implementing ISO 45001", "People and health-and-safety teams", "Workplaces managing psychosocial hazards"],
    certifiable: false,
    certificationNote: "ISO 45003 provides guidance that can complement an OH&S management system; it is not independently certifiable.",
  },
  {
    code: "ISO 50001",
    name: "ISO 50001",
    href: "/iso-50001-certification",
    category: "Energy Management System",
    focus: "Improving energy performance",
    description:
      "ISO 50001 specifies requirements for establishing, implementing, maintaining, and improving an Energy Management System.",
    benefit:
      "An EnMS helps organizations establish an energy baseline, monitor energy use, and pursue continual improvements in energy performance.",
    applications: ["Energy-intensive operations", "Commercial buildings and campuses", "Organizations managing multiple facilities"],
    certifiable: true,
  },
  {
    code: "ISO 55000",
    name: "ISO 55000",
    href: "/iso-55000-certification",
    category: "Asset Management Guidance",
    focus: "Understanding and applying asset management",
    description:
      "ISO 55000 introduces asset management principles, terminology, and an overview of asset management systems across the asset life cycle.",
    benefit:
      "Its common language helps organizations connect asset decisions with value, performance, risk, and long-term organizational objectives.",
    applications: ["Infrastructure and utilities", "Asset-intensive organizations", "Organizations planning asset management systems"],
    certifiable: false,
    certificationNote: "ISO 55000 provides an overview and vocabulary for asset management; certification requirements are specified in ISO 55001.",
  },
];

export const isoStandards = standards;
export const isoStandardsByCode = Object.fromEntries(
  standards.map((standard) => [standard.code, standard]),
);
