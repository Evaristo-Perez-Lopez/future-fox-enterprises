export const useSendMessage = () => {
  const sender = (to: Number, msg: String) => {
    const { data, error } = useFetch("/api/message", {
      method: "POST",
      body: {
        to: to, message: msg
      }
    })
    return { data, error }
  }
  return { sender }
}