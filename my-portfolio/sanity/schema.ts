import { type SchemaTypeDefinition } from 'sanity'
import portfolio from './portfolio-schema'
import skills from './skills'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [portfolio, skills],
}

