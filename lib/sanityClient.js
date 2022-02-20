import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '47hkynv9',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})
