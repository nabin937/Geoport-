import { Project, SkillCategory, Education, ServiceItem } from './types';

export const COLORS = {
  primaryGreen: '#2E7D32',
  secondaryBlue: '#1976D2',
  neutralGray: '#757575',
  highlightOrange: '#FF8F00',
  white: '#FFFFFF',
  darkBg: '#1a1a1a',
  lightBg: '#f8fafc',
};

export const CONTACT_INFO = {
  email: 'Nabinpaiyani918@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nabin-paiyani-8981762b4',
  phone: '+9779849802312',
  location: 'Nepal'
};

export const BIO_TEXT = `I am a Geomatics Engineering diploma holder (2024) focused on precise spatial data solutions. My technical foundation covers land surveying, GIS analysis, and CAD drafting. Currently preparing for bachelor studies abroad, I provide remote engineering support for academic and professional projects.`;

export const CV_HIGHLIGHTS = [
  "Diploma in Geomatics Engineering (2020–2024)",
  "Strong skills in land surveying, GIS, AutoCAD, and QGIS",
  "Academic projects in topographic mapping, cadastral surveying, and thematic mapping",
  "Experience as Delivery Incharge with responsibility for coordination and reporting",
  "Available for remote geomatics work and academic collaboration"
];

export const EDUCATION_DATA: Education = {
  degree: "Diploma in Geomatics Engineering",
  institution: "CTEVT-affiliated institution, Nepal",
  year: "2024",
  highlights: [
    "Land surveying and engineering survey",
    "GIS applications and spatial analysis",
    "Remote sensing and photogrammetry",
    "CAD drafting and design",
    "Spatial data fundamentals"
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Surveying & Spatial Data",
    skills: ["Total Station", "GPS / GNSS", "Control Surveys", "Topographic Data Collection"]
  },
  {
    category: "GIS & Mapping",
    skills: ["QGIS", "ArcGIS", "Thematic Mapping", "Spatial Databases"]
  },
  {
    category: "CAD & Drafting",
    skills: ["AutoCAD", "Civil 3D", "Land Parceling", "Engineering Drawings"]
  },
  {
    category: "Supporting Skills",
    skills: ["Engineering Math", "Technical Reporting", "Remote Sensing", "English (IELTS Prep)"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: "Topographic Mapping",
    description: "Field survey of 10ha area using Total Station and GPS. Processed in AutoCAD Civil 3D. Output: 0.5m contour map and DTM.",
    tools: ["Total Station", "GPS", "AutoCAD", "QGIS"],
    caseStudy: "Problem: Create a detailed base map for housing development.\nMethod: Leveled traversing with Total Station and RTK-GPS for control points.\nOutput: Generated 0.5m interval contours, spot heights, and Digital Terrain Model (DTM) for civil design."
  },
  {
    id: '2',
    title: "AutoCAD Mapping",
    description: "Digitization of field notes into standard layout plans. Output: 1:500 scale land parcel drawings with accurate boundary delineation.",
    tools: ["AutoCAD", "Drafting Standards"],
    caseStudy: "Problem: Convert analog field data into municipal-standard digital plans.\nMethod: Applied strict layer management and standard symbology in AutoCAD.\nOutput: Production of 1:500 and 1:1000 scale layout sheets ready for municipal approval."
  },
  {
    id: '3',
    title: "Cadastral Surveying",
    description: "Boundary verification and subdivision survey. Output: Updated cadastral maps ('Kitta Kaat') and digital parcel database.",
    tools: ["Field Survey", "Cadastral Mapping"],
    caseStudy: "Problem: Resolve boundary conflicts and update land records.\nMethod: Precision stakeout using Total Station followed by conflict resolution meetings.\nOutput: Legal-grade cadastral plans updated for 50+ parcels in compliance with Land Revenue Office standards."
  },
  {
    id: '4',
    title: "Bridge Site Survey",
    description: "Hydrographic and engineering survey for 50m bridge span. Output: L-section, X-sections, and topographic site plan.",
    tools: ["Leveling Instrument", "Profiling", "Data Analysis"],
    caseStudy: "Problem: Gather hydraulic and terrain data for bridge design.\nMethod: Cross-sectional riverbed survey at 20m intervals and 500m longitudinal profiling.\nOutput: Technical profiles and HFL mapping used for structural analysis and abutment placement."
  },
  {
    id: '5',
    title: "Map Digitization",
    description: "Conversion of legacy analog maps to digital vector format. Output: Georeferenced GIS database with topology correction.",
    tools: ["Digitization", "Database Management", "Field Verification"],
    caseStudy: "Problem: Modernize legacy 1:25,000 topographic maps.\nMethod: Georeferencing raster scans and vectorizing hydrography and transport layers.\nOutput: Clean, topology-checked GIS database validated against satellite imagery."
  },
  {
    id: '6',
    title: "Resource Mapping",
    description: "GPS tracking of community forest resources. Output: Thematic map showing resource density and accessibility.",
    tools: ["GPS", "Resource Mapping"],
    caseStudy: "Problem: Document natural resources for community management.\nMethod: Handheld GPS tracking of water sources and plantation boundaries.\nOutput: GPX-derived thematic maps assisting the Community Forest User Group in resource allocation."
  },
  {
    id: '7',
    title: "Thematic Mapping",
    description: "Spatial analysis of census data. Output: Series of choropleth and density maps for socio-economic indicators.",
    tools: ["QGIS", "Spatial Analysis", "Thematic Cartography"],
    caseStudy: "Problem: Visualize complex socio-economic census data.\nMethod: Applied choropleth and dot-density techniques in QGIS.\nOutput: Visual decision-support maps highlighting poverty clusters and infrastructure gaps for development planning."
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: '1',
    title: "Remote GIS Data Processing",
    roleTitle: "Remote GIS Technician",
    description: "Cleaning and organizing spatial data.",
    features: [
      "GIS layer creation and cleaning",
      "Attribute table management",
      "Coordinate system handling",
      "QGIS-based workflows"
    ],
    tools: ["QGIS"],
    iconType: "GIS"
  },
  {
    id: '2',
    title: "Thematic Mapping",
    roleTitle: "GIS Cartographer",
    description: "Creating visual maps for analysis.",
    features: [
      "Population and density maps",
      "Education & facilities maps",
      "Disaster and risk mapping",
      "Socio-economic spatial analysis"
    ],
    tools: ["QGIS"],
    iconType: "Map"
  },
  {
    id: '3',
    title: "Map Digitization",
    roleTitle: "Digitization Specialist",
    description: "Paper-to-digital map conversion.",
    features: [
      "Feature tracing and labeling",
      "GIS-ready databases",
      "Quality-checked outputs",
      "Georeferencing"
    ],
    tools: ["QGIS"],
    iconType: "Digitize"
  },
  {
    id: '4',
    title: "CAD Drafting for Survey Maps",
    roleTitle: "CAD Drafter",
    description: "Remote drafting for survey outputs.",
    features: [
      "Land parcel drawings",
      "Layout plans",
      "Profiles and cross-sections",
      "AutoCAD-based outputs"
    ],
    tools: ["AutoCAD"],
    iconType: "CAD"
  },
  {
    id: '5',
    title: "Remote Sensing Support",
    roleTitle: "Junior RS Analyst",
    description: "Basic imagery analysis.",
    features: [
      "Land use / land cover maps",
      "Satellite image interpretation",
      "Change detection visuals",
      "Classification"
    ],
    tools: ["QGIS", "Satellite"],
    iconType: "Satellite"
  },
  {
    id: '6',
    title: "Academic GIS Project Support",
    roleTitle: "Project Assistant",
    description: "Support for students & researchers.",
    features: [
      "Geomatics assignments",
      "Map layout improvement",
      "Project data preparation",
      "Documentation help"
    ],
    tools: ["Research"],
    iconType: "Academic"
  }
];

// Data for the Skills Radar Chart
export const SKILLS_CHART_DATA = [
  { subject: 'Surveying', A: 90, fullMark: 100 },
  { subject: 'CAD', A: 85, fullMark: 100 },
  { subject: 'GIS', A: 80, fullMark: 100 },
  { subject: 'Field Work', A: 95, fullMark: 100 },
  { subject: 'Data Analysis', A: 75, fullMark: 100 },
  { subject: 'Remote Sensing', A: 70, fullMark: 100 },
];