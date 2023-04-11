export type WAresponse = {
  messaging_product: string,
  contacts: [{ input: string, wa_id: string }],
  messages: [
    {
      id: string
    }
  ]
}