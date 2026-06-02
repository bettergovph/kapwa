import type { Meta, StoryObj } from '@storybook/react';
import { List } from './index';

const meta: Meta<typeof List> = {
  title: 'Components/Lists/List',
  component: List,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Section title within the card',
    },
    headerTitle: {
      control: 'text',
      description: 'Card header title',
    },
    headerSubtitle: {
      control: 'text',
      description: 'Optional card header subtitle',
    },
    externalLinkText: {
      control: 'text',
      description: 'Optional link text for each item',
    },
    listItems: {
      description: 'Array of list items with id, title, and category',
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    title: 'Search Results',
    headerTitle: 'Government Services',
    headerSubtitle: 'Find and access government services easily',
    externalLinkText: 'View',
    listItems: [
      {
        id: 1,
        title: 'National ID Registration',
        category: 'Identification',
        description:
          'The Philippine Identification System (PhilSys) provides a single national ID for all Filipino citizens and resident aliens. Registration is free and can be done at any PSA registration center or at designated sites in your municipality.',
      },
      {
        id: 2,
        title: 'Business Permit Application',
        category: 'Business',
        description:
          'Secure your business permit from your local government unit (LGU). Requirements include a filled-out application form, proof of business address, DTI or SEC registration, and barangay clearance.',
      },
      {
        id: 3,
        title: 'Passport Renewal',
        category: 'Travel',
        description:
          'Renew your Philippine passport through DFA online appointment. Bring your current passport, PSA birth certificate, and one valid government-issued ID. Processing takes 12 working days for regular and 6 for expedited.',
      },
      {
        id: 4,
        title: 'Tax Filing',
        category: 'Finance',
        description:
          'File your annual income tax return (ITR) through the BIR eFPS or eBIRForms system. Deadline is April 15 each year. Employees with substituted filing are exempt from filing.',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Default list component displaying government services with categories and optional action links. Each item shows a title, category badge, a "View" link, and a collapsible description — click "Show more" to expand.',
      },
    },
  },
};

export const WithoutLinks: Story = {
  args: {
    title: 'Available Services',
    headerTitle: 'Public Services Directory',
    headerSubtitle: 'Browse available government services',
    listItems: [
      {
        id: 1,
        title: "Driver's License Renewal",
        category: 'Transportation',
        description:
          "Renew your driver's license at any LTO branch or authorized computer-based testing center. Bring your current license, medical certificate, and valid IDs.",
      },
      {
        id: 2,
        title: 'Voter Registration',
        category: 'Elections',
        description:
          'Register to vote at your local COMELEC office. The registration period is open except 6 months before a scheduled election. Bring a PSA-issued document and proof of residency.',
      },
      {
        id: 3,
        title: 'Health Certificate',
        category: 'Healthcare',
        description:
          'Obtain a health certificate from your city or municipal health office. Required for food handlers, healthcare workers, and other regulated professions.',
      },
      {
        id: 4,
        title: 'Senior Citizen ID',
        category: 'Social Services',
        description:
          'Senior citizens (60 years and above) may apply for an OSCA ID at their barangay or municipal social welfare office. The ID grants 20% discount and VAT exemption on qualifying purchases.',
      },
      {
        id: 5,
        title: 'Professional License',
        category: 'Licensing',
        description:
          'Apply for or renew your professional license through the PRC LERIS portal. Requirements vary per profession. Valid for three years and renewable every professional regulation cycle.',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'List without action links. Useful for informational displays where items are not clickable. Descriptions are still collapsible.',
      },
    },
  },
};

export const DocumentsList: Story = {
  args: {
    title: 'Required Documents',
    headerTitle: 'Document Requirements',
    headerSubtitle: 'Documents needed for application',
    externalLinkText: 'Download',
    listItems: [
      {
        id: 1,
        title: 'Valid ID (Government-issued)',
        category: 'Primary',
        description:
          "Acceptable primary IDs include: PhilSys National ID, passport, driver's license, UMID, PRC license, voter's ID, or Senior Citizen ID. Must be current and unexpired.",
      },
      {
        id: 2,
        title: 'Birth Certificate',
        category: 'Primary',
        description:
          'Must be a PSA-authenticated (formerly NSO) copy. Digital copies issued via PSAHelpline.ph are accepted. Birth certificates from the local civil registrar must be accompanied by a PSA certification.',
      },
      {
        id: 3,
        title: 'Proof of Address',
        category: 'Secondary',
        description:
          'Acceptable documents: utility bill (not older than 3 months), barangay certificate of residency, bank statement, or government-issued mail addressed to your current residence.',
      },
      {
        id: 4,
        title: 'Passport-sized Photo (2x2)',
        category: 'Additional',
        description:
          'Must be taken on a white background within the last 6 months. Eyeglasses are not allowed. File format JPEG or PNG, minimum 400×400 pixels for digital submissions.',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'List of required documents with download links. Perfect for showing requirements, checklists, or document lists.',
      },
    },
  },
};

export const AgenciesList: Story = {
  args: {
    title: 'Government Agencies',
    headerTitle: 'National Government Agencies',
    headerSubtitle: 'Contact information and services',
    externalLinkText: 'Visit Site',
    listItems: [
      {
        id: 1,
        title: 'Department of Foreign Affairs',
        category: 'National Agency',
        description:
          'Responsible for the issuance of passports, authentication of documents, and consular services for Filipinos abroad. Main office located in Aseana, Paranaque City.',
      },
      {
        id: 2,
        title: 'Bureau of Internal Revenue',
        category: 'National Agency',
        description:
          'Administers and enforces tax laws. Handles income tax, VAT, and other national taxes. Use eFPS or eBIRForms for online filing and payment.',
      },
      {
        id: 3,
        title: 'Land Transportation Office',
        category: 'Attached Agency',
        description:
          "Regulates the operation of land transportation, enforces traffic rules, and issues driver's licenses and vehicle registrations across the Philippines.",
      },
      {
        id: 4,
        title: 'Philippine Statistics Authority',
        category: 'Attached Agency',
        description:
          'Collects and disseminates statistical data, administers civil registration, and provides PSA-authenticated documents such as birth, marriage, and death certificates.',
      },
      {
        id: 5,
        title: 'Commission on Elections',
        category: 'Constitutional Body',
        description:
          'Enforces and administers all election laws. Manages voter registration, canvassing, and proclamation of results. Operates the COMELEC Precinct Finder and online services.',
      },
      {
        id: 6,
        title: 'Civil Service Commission',
        category: 'Constitutional Body',
        description:
          'Central personnel agency responsible for recruiting, examining, and developing civil servants. Administers the Civil Service Exam and oversees HR management in government.',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'List of government agencies with external links. Shows how to organize and categorize multiple agencies.',
      },
    },
  },
};

export const ProjectsList: Story = {
  args: {
    title: 'Active Projects',
    headerTitle: 'Infrastructure Projects',
    headerSubtitle: 'Ongoing development projects across the Philippines',
    externalLinkText: 'Details',
    listItems: [
      {
        id: 1,
        title: 'Metro Manila Subway System',
        category: 'Transportation',
        description:
          'A 33-km underground rail system spanning 17 stations from Valenzuela to Bicutan. Expected to carry up to 370,000 passengers daily upon completion. Part of the Build Better More program.',
      },
      {
        id: 2,
        title: 'Clark International Airport Expansion',
        category: 'Aviation',
        description:
          'Expansion of the Clark International Airport in Pampanga to increase annual passenger capacity from 8 million to over 80 million, positioning it as a premier aviation hub in Southeast Asia.',
      },
      {
        id: 3,
        title: 'Mindanao Railway Project',
        category: 'Transportation',
        description:
          'A 2,000-km railway network spanning Mindanao designed to connect major cities and reduce travel time between economic centers, supporting agricultural logistics and regional development.',
      },
      {
        id: 4,
        title: 'New Clark City Development',
        category: 'Urban Development',
        description:
          'A planned 9,450-hectare smart, resilient, and sustainable city in Capas, Tarlac. Designed to decongest Metro Manila and serve as a disaster-resilient seat of government and economic zone.',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'List of infrastructure projects. Demonstrates how to display project listings with categories.',
      },
    },
  },
};

export const ProgramsList: Story = {
  args: {
    title: 'Social Programs',
    headerTitle: 'Government Assistance Programs',
    headerSubtitle: 'Available assistance programs for Filipino citizens',
    externalLinkText: 'Apply',
    listItems: [
      {
        id: 1,
        title: 'Pantawid Pamilyang Pilipino Program (4Ps)',
        category: 'Social Welfare',
        description:
          'A human development program that provides cash grants to extremely poor households to improve their health, nutrition, and education. Beneficiaries receive health subsidy and education subsidy per child enrolled in school.',
      },
      {
        id: 2,
        title: 'Tulong Panghanapbuhay sa Ating Disadvantaged/Displaced Workers',
        category: 'Employment',
        description:
          'TUPAD provides emergency employment to marginalized, displaced, or seasonal workers including those affected by natural and man-made calamities. Workers are engaged for a minimum of 10 days and a maximum of 30 days.',
      },
      {
        id: 3,
        title: 'Universal Health Care Program',
        category: 'Healthcare',
        description:
          'All Filipinos are automatically covered under PhilHealth. The UHC Act ensures access to a comprehensive set of health services without financial hardship, including in-patient and out-patient benefits and Z benefit packages for catastrophic illnesses.',
      },
      {
        id: 4,
        title: 'Free College Tuition Program',
        category: 'Education',
        description:
          'Republic Act 10931 provides free tuition and other school fees for students enrolled in state universities and colleges (SUCs) and local universities and colleges (LUCs). The program covers tuition, miscellaneous, and other fees.',
      },
      {
        id: 5,
        title: 'Senior Citizens Benefits and Privileges',
        category: 'Social Services',
        description:
          'Filipino citizens aged 60 and above are entitled to 20% discount and VAT exemption on medicines, medical services, and basic commodities. They also receive a monthly social pension of Php 500 through DSWD and a 5% discount on utilities.',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'List of government assistance programs with application links. Useful for social program directories.',
      },
    },
  },
};

export const ResourcesList: Story = {
  args: {
    title: 'Learning Resources',
    headerTitle: 'Civic Tech Resources',
    headerSubtitle: 'Educational materials and guides',
    externalLinkText: 'Learn',
    listItems: [
      {
        id: 1,
        title: 'Getting Started with Open Data',
        category: 'Tutorial',
        description:
          'A beginner-friendly guide to accessing, using, and contributing to open government datasets. Covers data formats, APIs, and visualization tools.',
      },
      {
        id: 2,
        title: 'Government API Documentation',
        category: 'API',
        description:
          'Technical reference for developers integrating with official government data APIs. Includes authentication, endpoints, rate limits, and code examples.',
      },
      {
        id: 3,
        title: 'Contributing to BetterGov',
        category: 'Guide',
        description:
          'Step-by-step guide on how to submit issues, open pull requests, and participate in the BetterGov open source community. All skill levels welcome.',
      },
      {
        id: 4,
        title: 'Design System Guidelines',
        category: 'Documentation',
        description:
          'Comprehensive documentation of the Kapwa Design System — tokens, components, patterns, and usage guidelines for building accessible civic technology products.',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'List of learning resources and documentation. Perfect for educational content and knowledge bases.',
      },
    },
  },
};

export const ContactsList: Story = {
  args: {
    title: 'Emergency Contacts',
    headerTitle: 'Important Contact Numbers',
    headerSubtitle: 'Emergency hotlines and support services',
    externalLinkText: 'Call',
    listItems: [
      {
        id: 1,
        title: 'National Emergency Hotline - 911',
        category: 'Emergency',
        description:
          'For life-threatening emergencies including fire, medical, and police. Available 24/7 nationwide. Do not use for non-emergency situations.',
      },
      {
        id: 2,
        title: 'Philippine Red Cross - 143',
        category: 'Emergency',
        description:
          'Provides ambulance services, blood donation, disaster relief, and humanitarian assistance. Dial 143 for emergency response and blood bank inquiries.',
      },
      {
        id: 3,
        title: 'NDRRMC Hotline - (02) 8911-1406',
        category: 'Disaster Response',
        description:
          'The National Disaster Risk Reduction and Management Council coordinates disaster response, relief operations, and public alerts for typhoons, earthquakes, and other calamities.',
      },
      {
        id: 4,
        title: 'DOH Health Line - 1555',
        category: 'Healthcare',
        description:
          'The Department of Health hotline for health advisories, referrals, and public health information. Also handles inquiries related to COVID-19, vaccination, and endemic disease management.',
      },
      {
        id: 5,
        title: 'PNP Hotline - 117',
        category: 'Security',
        description:
          'Philippine National Police emergency hotline for reporting crimes, requesting police assistance, or getting safety information. Available 24/7.',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'List of emergency contacts and hotlines. Essential for public safety and emergency response pages.',
      },
    },
  },
};

export const NoDescription: Story = {
  args: {
    title: 'Quick Reference',
    headerTitle: 'Government Hotlines',
    headerSubtitle: 'Items without description — no toggle should appear',
    externalLinkText: 'Call',
    listItems: [
      { id: 1, title: 'National Emergency Hotline', category: 'Emergency' },
      { id: 2, title: 'DOH Health Line - 1555', category: 'Healthcare' },
      { id: 3, title: 'PNP Hotline - 117', category: 'Security' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Items with no description field. Verifies that the "Show more" toggle is completely absent when description is omitted — the optional guard in the component handles this gracefully.',
      },
    },
  },
};

export const LongDescriptions: Story = {
  args: {
    title: 'Detailed Program Overview',
    headerTitle: 'Social Protection Programs',
    headerSubtitle: 'Comprehensive details — expand each item to read more',
    externalLinkText: 'Apply',
    listItems: [
      {
        id: 1,
        title: 'Pantawid Pamilyang Pilipino Program (4Ps)',
        category: 'Social Welfare',
        description:
          'The 4Ps is a human development program of the national government that invests in the health and education of poor households, particularly those with children aged 0-18 years old. Beneficiary households receive a health grant of Php 750 per month (Php 9,000 per year) and an education grant of Php 500 per child per month during the 10-month school year (Php 5,000 per child per year), with a maximum of three children per household. Beneficiaries are required to comply with the following conditionalities: children 0-5 years old must avail preventive health check-ups; pregnant women must avail pre and post natal care; children 6-14 must be enrolled in school and maintain at least 85% attendance; and parents must attend Family Development Sessions (FDS) conducted by the DSWD. The program currently covers over 4 million households across the country.',
      },
      {
        id: 2,
        title: 'Universal Health Care Act (Republic Act 11223)',
        category: 'Healthcare',
        description:
          'The Universal Health Care (UHC) Act ensures that all Filipinos are guaranteed equitable access to quality and affordable health care goods and services. Under UHC, all Filipinos are automatically enrolled as PhilHealth members, eliminating the need for direct enrollment and contribution. The law mandates that health services be provided in a more integrated and coordinated manner through primary care providers licensed and accredited as Health Care Providers Networks (HCPNs). This includes preventive, promotive, curative, rehabilitative, and palliative health services. The national government shoulders the premiums of indirect contributors such as indigents identified under the Listahanan, senior citizens, persons with disabilities, and solo parents. Z benefits cover catastrophic illnesses such as cancer, end-stage renal disease, and cardiovascular conditions, ensuring no Filipino faces financial ruin due to medical expenses.',
      },
      {
        id: 3,
        title: 'Free Tuition and Exemption from Other Fees Act (RA 10931)',
        category: 'Education',
        description:
          'Republic Act 10931, also known as the Universal Access to Quality Tertiary Education Act, makes higher education free in state universities and colleges (SUCs) and local universities and colleges (LUCs). The law covers tuition fees, and other school fees including laboratory fees, library fees, computer fees, athletic fees, cultural and development fees, admission fees, and other miscellaneous fees. It also extends to technical-vocational education institutions (TVIs) under TESDA. Students enrolled in private higher education institutions (HEIs) may be eligible for the Tertiary Education Subsidy (TES) to cover tuition and living allowances. The program is administered by the Commission on Higher Education (CHED) and benefits over 1 million students in public higher education institutions each year.',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Stress test for the collapsible description feature. Items contain very long program descriptions. Click "Show more" on any item to expand, which will automatically collapse any previously opened item (single-open behavior).',
      },
    },
  },
};
