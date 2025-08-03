import { GlobalConfig } from 'payload/types';

const Home: GlobalConfig = {
  slug: 'home',
  fields: [
    {
      name: 'featuredWorks',
      type: 'group',
      fields: [
        { name: 'sectionTitle', type: 'text' },
        { name: 'sectionDescription', type: 'textarea' },
        {
          name: 'projects',
          type: 'relationship',
          relationTo: 'projects',
          hasMany: true,
        },
      ],
    },
    // Add AboutSection, ServicesWeOffer, OurProcess, ClientStories similarly...
  ],
};

export default Home;
