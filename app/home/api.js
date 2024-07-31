const baseApiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL

export const fetchProjectsData = async () => {
  const apiUrl = `${baseApiUrl}/projects/get-all-projects-data/`
  const response = await fetch(apiUrl)

  if (!response.ok) {
    throw new Error('Failed to fetch user data')
  }

  return response.json()
}