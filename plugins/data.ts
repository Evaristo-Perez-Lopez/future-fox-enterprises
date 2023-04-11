import type { Company } from '~/types/Company';
export default defineNuxtPlugin(async (nuxtApp) => {
  const { data } = await useFetch(() => "/api/companies", { transform: (value => value as any as Company[]) })
  useCompany().setCompanies(data.value)
  return {
    provide: {
      dataCompanies: data
    }
  }
})
