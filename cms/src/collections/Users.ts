import { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',          // <-- обязательно 'users' (в нижнем регистре)
  auth: true,             // <-- обязательно включено
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // дополнительные поля
    {
      name: 'name',
      type: 'text',
    },
  ],
}

