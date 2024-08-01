const baseApiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL

export const fetchProjectData = async (slug) => {
  const apiUrl = `${baseApiUrl}/projects/get-project-info/${slug}`
  const response = await fetch(apiUrl)

  if (!response.ok) {
    throw new Error("Failed to fetch Project data and related images")
  }

  return response.json()
}

export const fetchProjectsData = async () => {
  const apiUrl = `${baseApiUrl}/projects/get-all-projects-data/`
  const response = await fetch(apiUrl)

  if (!response.ok) {
    throw new Error("Failed to fetch Projects' data")
  }

  return response.json()
}