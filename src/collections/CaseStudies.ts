import type { CollectionConfig } from 'payload'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'client', 'order'],
    group: 'Content',
    description: 'Outcome stories shown in the Results section.',
  },
  access: {
    read: () => true,
  },
  defaultSort: 'order',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'client',
      type: 'text',
      admin: { description: 'Client name or descriptor, e.g. "Regional food distributor".' },
    },
    {
      name: 'industry',
      type: 'text',
    },
    {
      name: 'challenge',
      type: 'textarea',
      required: true,
    },
    {
      name: 'solution',
      type: 'textarea',
      required: true,
    },
    {
      name: 'metrics',
      type: 'array',
      labels: { singular: 'Metric', plural: 'Metrics' },
      maxRows: 3,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: { description: 'e.g. "18%"' },
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: { description: 'e.g. "freight spend reduction"' },
        },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: { step: 1 },
    },
  ],
}
