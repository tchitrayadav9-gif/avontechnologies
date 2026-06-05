import {
  HiOutlineServerStack,
  HiOutlineGlobeAlt,
  HiOutlineDevicePhoneMobile,
  HiOutlineUserGroup,
  HiOutlineBuildingOffice2,
  HiOutlineChartBarSquare,
  HiOutlineLifebuoy,
} from 'react-icons/hi2'

export const services = [
  {
    id: 1,
    title: 'Enterprise Software Solutions',
    description:
      'Custom-built enterprise applications tailored to your business workflows, security requirements, and scalability needs.',
    icon: HiOutlineServerStack,
    features: ['Custom Architecture', 'Legacy Modernization', 'API Integration'],
  },
  {
    id: 2,
    title: 'Web Development',
    description:
      'Modern, responsive web applications and portals built with cutting-edge technologies for optimal performance.',
    icon: HiOutlineGlobeAlt,
    features: ['React & Node.js', 'Progressive Web Apps', 'E-Commerce Portals'],
  },
  {
    id: 3,
    title: 'Mobile Applications',
    description:
      'Native and cross-platform mobile apps that deliver seamless user experiences on iOS and Android.',
    icon: HiOutlineDevicePhoneMobile,
    features: ['React Native', 'iOS & Android', 'Offline-First Design'],
  },
  {
    id: 4,
    title: 'CRM Solutions',
    description:
      'Customer relationship management systems that streamline sales, marketing, and customer service operations.',
    icon: HiOutlineUserGroup,
    features: ['Salesforce', 'Custom CRM', 'Lead Management'],
  },
  {
    id: 5,
    title: 'ERP/BaaN Services',
    description:
      'End-to-end ERP implementation, customization, and support for Infor BaaN and leading ERP platforms.',
    icon: HiOutlineBuildingOffice2,
    features: ['BaaN Implementation', 'Module Customization', 'Data Migration'],
  },
  {
    id: 6,
    title: 'BI Tools',
    description:
      'Business intelligence dashboards and analytics platforms that turn data into actionable insights.',
    icon: HiOutlineChartBarSquare,
    features: ['Power BI', 'Custom Dashboards', 'Data Warehousing'],
  },
  {
    id: 7,
    title: 'Technical Support',
    description:
      'Dedicated support services with SLA guarantees, proactive monitoring, and rapid incident resolution.',
    icon: HiOutlineLifebuoy,
    features: ['24/7 Helpdesk', 'SLA Management', 'Remote Assistance'],
  },
]
