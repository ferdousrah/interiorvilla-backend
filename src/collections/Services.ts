import { CollectionConfig } from 'payload/types'

const Services: CollectionConfig = {
  slug: 'services', // ✅ must match exactly!
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'shortDescription', type: 'textarea' },
    { name: 'introVideo', type: 'text' },
  ],
}

export default Services
