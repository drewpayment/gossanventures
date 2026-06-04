import type { GlobalConfig } from 'payload'
import { iconField } from '../fields/iconField'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Home Page',
  admin: {
    group: 'Content',
    description: 'Hero, trust stats, differentiators, process, and closing CTA.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'hero',
              type: 'group',
              fields: [
                { name: 'eyebrow', type: 'text', defaultValue: 'Logistics & Supply Chain Advisory' },
                { name: 'headingLead', type: 'text', defaultValue: 'The signals are already in your supply chain.' },
                {
                  name: 'headingHighlight',
                  type: 'text',
                  defaultValue: 'We help you act on them.',
                  admin: { description: 'Rendered in the brand teal as the emphasis line.' },
                },
                {
                  name: 'subheading',
                  type: 'textarea',
                  defaultValue:
                    'Gossan Ventures gives mid-market shippers the capabilities of a national 3PL — without the bureaucracy. Senior-led, transparent, and accountable to your numbers.',
                },
                {
                  type: 'row',
                  fields: [
                    { name: 'primaryCtaLabel', type: 'text', defaultValue: 'Get a free freight assessment' },
                    { name: 'primaryCtaHref', type: 'text', defaultValue: '#contact' },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    { name: 'secondaryCtaLabel', type: 'text', defaultValue: 'Explore capabilities' },
                    { name: 'secondaryCtaHref', type: 'text', defaultValue: '#services' },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Trust Stats',
          fields: [
            {
              name: 'trustStats',
              type: 'array',
              maxRows: 4,
              labels: { singular: 'Stat', plural: 'Stats' },
              fields: [
                { name: 'value', type: 'text', required: true, admin: { description: 'e.g. "98.7%"' } },
                { name: 'label', type: 'text', required: true, admin: { description: 'e.g. "on-time delivery"' } },
              ],
            },
          ],
        },
        {
          label: 'Why Gossan',
          fields: [
            {
              name: 'differentiatorsHeading',
              type: 'text',
              defaultValue: 'Built to be the antidote to the mega-broker',
            },
            {
              name: 'differentiatorsIntro',
              type: 'textarea',
              defaultValue:
                'The national brokers run on volume and call centers. We run on senior expertise and straight answers.',
            },
            {
              name: 'differentiators',
              type: 'array',
              labels: { singular: 'Differentiator', plural: 'Differentiators' },
              fields: [
                iconField,
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'textarea', required: true },
              ],
            },
          ],
        },
        {
          label: 'Process',
          fields: [
            {
              name: 'processHeading',
              type: 'text',
              defaultValue: 'How we surface the value',
            },
            {
              name: 'processIntro',
              type: 'textarea',
              defaultValue:
                'A gossan is the surface outcrop that signals the ore body beneath. Our method reads your operation the same way — find the signal, then mine the value.',
            },
            {
              name: 'processSteps',
              type: 'array',
              labels: { singular: 'Step', plural: 'Steps' },
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'textarea', required: true },
              ],
            },
          ],
        },
        {
          label: 'Closing CTA',
          fields: [
            {
              name: 'cta',
              type: 'group',
              fields: [
                { name: 'heading', type: 'text', defaultValue: 'Let’s find what your freight is hiding.' },
                {
                  name: 'body',
                  type: 'textarea',
                  defaultValue:
                    'Send us a recent freight invoice or lane list. Within a week, we’ll show you where the savings and service gains are — no obligation.',
                },
                { name: 'buttonLabel', type: 'text', defaultValue: 'Start your assessment' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
