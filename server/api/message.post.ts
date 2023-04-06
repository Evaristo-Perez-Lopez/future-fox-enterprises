export default defineEventHandler(async (event) => {
  const { to, message } = await readBody(event)
  if (!to || !message) {
    return createError({ statusCode: 401, statusMessage: "Bad Request", message: "Provide to and message params" })
  }
  const rc = useRuntimeConfig()
  const composedUrl = `${rc.baseMessagingUrl}/${rc.waVersion}/${rc.phoneNumberId}/messages`
  const result = await $fetch(composedUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${rc.userAccessToken}`,
      "Content-Type": "application/json"
    },
    body: {
      "messaging_product": "whatsapp",
      "recipient_type": "individual",
      "to": to,
      "type": "text",
      "text": {
        "preview_url": true,
        "body": message
      }
    }
  })
  if (result?.messages) {
    return { code: 200, message: "Message sent" }
  }

})
