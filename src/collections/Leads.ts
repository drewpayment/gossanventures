import type { CollectionConfig } from 'payload'

/**
 * Contact-form submissions. Anyone can create (the public form posts here),
 * but only authenticated admins can read/update/delete.
 */
export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'company', 'email', 'createdAt'],
    group: 'Inbox',
    description: 'Inbound enquiries from the contact form.',
  },
  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'interest',
      type: 'select',
      options: [
        { label: 'Freight Brokerage (FTL/LTL)', value: 'freight-brokerage' },
        { label: 'Managed Transportation', value: 'managed-transportation' },
        { label: 'Supply Chain Consulting', value: 'supply-chain-consulting' },
        { label: 'Freight Audit & Procurement', value: 'freight-audit' },
        { label: 'Not sure yet', value: 'general' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Qualified', value: 'qualified' },
        { label: 'Closed', value: 'closed' },
      ],
      admin: {
        description: 'Internal tracking only.',
        position: 'sidebar',
      },
    },
  ],
}
