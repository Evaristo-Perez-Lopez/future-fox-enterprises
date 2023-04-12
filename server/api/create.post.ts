import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
  const { name, description, code, phone } = await readBody(event)
  const company = await prisma.company.create({
    data: {
      name: name,
      description: description,
      code: code,
      phone: phone
    }
  })
  return company
})
