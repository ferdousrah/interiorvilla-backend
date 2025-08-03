import { GlobalConfig } from 'payload/types'

const About: GlobalConfig = {
  slug: 'about',
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'heroImage', type: 'upload', relationTo: 'media', required: true },
        { name: 'title', type: 'text' },
        { name: 'subtitle', type: 'textarea' },
      ],
    },
    {
      name: 'introSection',
      type: 'group',
      fields: [
        { name: 'sectionTitle', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'introVideo', type: 'text' },
        {
          name: 'stats',
          type: 'array',
          fields: [
            { name: 'label', type: 'text' },
            { name: 'value', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'ourApproach',
      type: 'group',
      fields: [
        { name: 'sectionTitle', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
          name: 'approaches',
          type: 'array',
          fields: [
            { name: 'icon', type: 'upload', relationTo: 'media' },
            { name: 'title', type: 'text' },
            { name: 'description', type: 'textarea' },
          ],
        },
      ],
    },
    {
      name: 'missionVision',
      type: 'group',
      fields: [
        { name: 'sectionTitle', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'missionContent', type: 'richText' },
        { name: 'visionContent', type: 'richText' },
      ],
    },
    {
      name: 'teamSection',
      type: 'group',
      fields: [
        { name: 'sectionTitle', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
          name: 'teamMembers',
          type: 'relationship',
          relationTo: 'team-members',
          hasMany: true,
        },
      ],
    },
  ],
}

export default About
