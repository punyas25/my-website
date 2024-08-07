const baseApiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL

export const saveSubmission = async (formData) => {
  const apiUrl = `${baseApiUrl}/contact-form-submissions/save-submissions`

  const data = {
    data: formData
  }
  
  const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(formData)
  });

  if (!response.ok) {
    throw new Error("Failed to submit the form")
  }

  return response.json()
}
