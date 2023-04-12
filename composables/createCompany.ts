import { Company } from "~/types/Company"

export const useCreateCompany = () => {
  const create = async (payload: Company) => {
    try {
      const { data, error } = await useFetch("/api/create", {
        method: "POST",
        body: payload
      })
      console.log(data);
      console.log(error);
      
      return { data, error }
    } catch (error) {
      const data = null
      return { data, error }
    }
  }
  return { create }
}
