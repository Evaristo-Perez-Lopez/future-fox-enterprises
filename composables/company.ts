import type { Company } from "~/types/Company"
const Companies: Company[] = [
  {
    id: "e4a81525-8d0d-4537-b4d5-1106b774af01",
    name: "Codely TV",
    description: "Plataforma de educacion en linea. Cubre temas de programacion, diseño de interfaces y diseño de arquitectura de software",
    phone: 9841408103,
    code: 52
  },
  {
    id: "446298ff-2762-4df3-a686-7fcd614587fd",
    name: "Cookies&Cream",
    description: "Plataforma de educacion en linea. Cubre temas de programacion, diseño de interfaces y diseño de arquitectura de software",
    phone: 9841408103,
    code: 52
  },
  {
    id: "c780e55b-ed98-4934-bf02-30970d11bede",
    name: "Mac'Ma",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem perferendis beatae asperiores accusamus, velit aut.e",
    phone: 9841408103,
    code: 52
  },
  {
    id: "4e8059f8-8ec6-401d-b518-7abc1e38ba38",
    name: "Snacknation",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem perferendis beatae asperiores accusamus, velit aut.e",
    phone: 9841408103,
    code: 52
  },
  {
    id: "67fc16be-8785-4e1f-9545-5688c99b050e",
    name: "Universidad Tecnologica de la Riviera Maya",
    description: "Ofrece capacitación universitaria a jovenes de la ciudad de Playa del Carmen y los alrededores de la región. Tiene convenios con Francia, Canadá y otras UTs.",
    phone: 9841408103,
    code: 52
  }
]
// const company = ref<Company[]>()
export const useCompany = () => useState<Company[]>('companies', () => Companies)