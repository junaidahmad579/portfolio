import { createClient, groq } from 'next-sanity'
import { portfolio } from '@/app/types/portfolio';
import { apiVersion, dataset, projectId, useCdn } from '../env'
import { skills } from '@/app/types/skills';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})


export async function getPortfolio():Promise<portfolio[]>{
    
    return await client.fetch(
    groq `*[_type == "portfolio"]{
      _id,
      _createdAt,
      _updatedAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
  }`)} 


  export async function getskills():Promise<skills[]>{
    
    return await client.fetch(
    groq `*[_type == "skill"]{
      _id,
      _createdAt,
      _updatedAt,
      name,
      "image": image.asset->url,
      url,
  }`)} 