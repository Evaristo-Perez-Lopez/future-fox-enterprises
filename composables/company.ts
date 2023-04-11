import type { Company } from "~/types/Company"
export const useCompany = () => {
  const dataCompanies = useState<Company[] | null>('companies', () => { return null })
  const setCompanies = (companies: Company[] | null) => {
    dataCompanies.value = companies
  }
  return {
    dataCompanies, setCompanies
  }
}
