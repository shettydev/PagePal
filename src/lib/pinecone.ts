import { PineconeClient,  Pinecone} from '@pinecone-database/pinecone'

export const getPineconeClient = async () => {
  const client = new PineconeClient()

  await client.init({
    apiKey: process.env.PINECONE_API_KEY!,
    environment: 'us-central1-gcp',
  })

  return client
}

// export const pincone = new Pinecone({
//   apiKey: process.env.PINECONE_API_KEY!,
//   environment: 'us-central1-gcp',
// })

// export const getPineconeClient = async () => {
//   const client = new Pinecone()

//   await client({
//     apiKey: process.env.PINECONE_API_KEY,
//     environment: 'us-east1-gcp',
//   })

//   return client
// }
