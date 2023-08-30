import {
  projectNameSchema,
  stylingVariantSchema,
  technologySchema,
  useCasesSchema,
  variantSchema
} from '@/app/config/schema'
import { NextResponse } from 'next/server'
import { parse } from 'valibot'

// valid params

/*
  {
    name,
    technology: ['React', 'Node.js', 'JavaScript'],
    variant: ['TypeScript', 'JavaScript],
    stylingTool: if technology === 'React' || 'JavaScript' then ['Tailwind', 'CSS'] else null,
    useCase: if technology === 'Node.js' then ['Scripting', 'Express.js'] else null,
    testing: boolean
  }
*/

export async function GET(request: Request) {
  // READ PARAMS FROM URL
  const url = new URL(request.url)
  const params = url.searchParams

  // VALIDATE PARAMS
  const projectName = params.get('projectName')
  const technology = params.get('technology')
  const variant = params.get('variant')
  const stylingTool = params.get('stylingTool')
  const useCase = params.get('useCase')
  const testing = params.get('testing')

  // VALIDATE NAME

  try {
    parse(projectNameSchema, projectName ?? '')
    parse(technologySchema, technology ?? '')

    parse(variantSchema, variant ?? '')

    if (technology === 'React' || technology === 'JavaScript') {
      parse(stylingVariantSchema, stylingTool ?? '')
    } else {
      parse(useCasesSchema, useCase ?? '')
    }
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 400 })
  }

  return NextResponse.json('hello')
}
