import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  admin: {
    group: 'Settings',
    description: 'Company details used across the header, footer, and contact section.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'companyName',
      type: 'text',
      required: true,
      defaultValue: 'Gossan Ventures',
    },
    {
      name: 'legalName',
      type: 'text',
      defaultValue: 'Gossan Ventures LLC',
    },
    {
      name: 'tagline',
      type: 'text',
      defaultValue: 'Enterprise logistics capability. Boutique accountability.',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'email',
          type: 'email',
          defaultValue: 'hello@gossanventures.com',
        },
        {
          name: 'phone',
          type: 'text',
          defaultValue: '(555) 010-2842',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'city',
          type: 'text',
        },
        {
          name: 'region',
          type: 'text',
          admin: { description: 'State / province.' },
        },
      ],
    },
    {
      name: 'linkedinUrl',
      type: 'text',
    },
  ],
}
