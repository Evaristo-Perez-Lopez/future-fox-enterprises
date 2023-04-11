export const useSendMessage = () => {
  const sender = (to: string, msg: String) => {
    msg = msg.replace(/(\r\n|\n|\r)/gm, "")
    try {
      const { data, error } = useFetch("/api/message", {
        method: "POST",
        body: {
          to: to, message: msg
        }
      })
      return { data, error }
    } catch (error) {
      const data  = null
      return { data , error }
    }
  }
  return { sender }
}