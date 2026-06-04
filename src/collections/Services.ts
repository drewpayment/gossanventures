import type { CollectionConfig } from 'payload'
import { iconField } from '../fields/iconField'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order'],
    group: 'Content',
    description: 'Core capabilities shown in the Services section.',
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
      name: 'slug',
      type: 'text',
      admin: {
        description: 'Optional anchor id, e.g. "freight-brokerage".',
      },
    },
    iconField,
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      admin: {
        description: 'One or two sentences describing the service.',
      },
    },
    {
      name: 'features',
      type: 'array',
      labels: { singular: 'Feature', plural: 'Features' },
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Lower numbers appear first.',
        step: 1,
      },
    },
  ],
}
