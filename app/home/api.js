const baseApiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL

export const fetchProjectsData = async () => {
  const apiUrl = `${baseApiUrl}/features/get-all-featured-images/`
  const response = await fetch(apiUrl)

  if (!response.ok) {
    throw new Error("Failed to fetch Featured images")
  }

  return response.json()
}
