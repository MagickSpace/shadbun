import { CATEGORIES } from '../src/data/categories.ts'
import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
  branch,
  clientId: '1a8f4069-9160-4382-a2c2-42647099b101', // Get this from tina.io
  token: 'db269ae55694e53b64cd0ec710f028f267fd5113', // Get this from tina.io
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'src/assets/images',
      publicFolder: '',
    },
  },
  schema: {
    collections: [
      {
        name: 'siteConfig',
        label: 'Site config',
        path: 'src/content/siteConfig',
        ui: {
          global: true,
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: 'string',
            name: 'thing',
            label: 'Thing',
            required: true,
          },
          {
            type: "string",
            name: "lang",
            label: "Language",
            required: true,
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
            ui: {
              timeFormat: 'HH:mm',
            },
          },
          {
            type: 'reference',
            name: 'fave_post',
            label: 'Favourite post',
            collections: ['post'],
          },
          {
            type: 'boolean',
            name: 'yes',
            label: 'Yes',
          },
          {
            type: 'number',
            name: 'number',
            label: 'Numero',
            description: 'El número es grande pero solo Alah es GRANDE',
          },
          {
            type: 'image',
            label: 'Hero image',
            name: 'imgSrc',
          },
          {
            type: 'string',
            name: 'color',
            label: 'Background Color',
            ui: {
              component: 'color',
              colorFormat: 'hex',
              colors: ['#EC4815', '#241748', '#B4F4E0', '#E6FAF8'],
              widget: 'sketch',
            },
          },
        ],
      },
      {
        name: 'post',
        label: 'Blog Post',
        path: 'src/content/blog',
        format: 'mdx',
        ui: {
          allowedActions: {
            create: true,
            delete: true,
          },
          router: () => '/',
        },
        fields: [
          {
            type: 'image',
            label: 'Cover Image',
            required: true,
            name: 'heroImage',
            description: 'The image used for the cover of the post',
          },

          {
            type: 'string',
            required: true,
            name: 'category',
            label: 'Category',
            description: 'Select an category for this post',
            options: [...CATEGORIES],
          },
          {
            type: 'string',
            label: 'description',
            required: true,
            name: 'description',
            description: 'A short description of the post',
          },
          {
            type: 'datetime',
            name: 'pubDate',
            label: 'Publication Date',
            required: true,
          },
          {
            name: 'draft',
            label: 'Draft',
            type: 'boolean',
            description: 'If this is checked the post will not be published',
          },
          {
            type: 'string',
            name: 'tags',
            required: true,
            label: 'Tags',
            description: 'Tags for this post',
            list: true,
            ui: {
              component: 'tags',
            },
          },
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            label: 'Body',
            name: 'SButton',
            isBody: true,
            templates: [
              // Custom Components
              {
                label: 'SButton',
                name: 'SButton',
                fields: [
                  {
                    type: 'rich-text',
                    label: 'SButton',
                    name: 'children',
                    isBody: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
})
