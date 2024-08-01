const ProjectInfo = ({ projectData }) => {
  let statistics = [
    {
      title: "Project Year",
      info: projectData.project_year,
    },
    {
      title: "Project Type",
      info: projectData.project_type,
    },
  ]

  if (projectData.postcard_project) {
    statistics.push({
      title: "Postcards sent",
      info: projectData.postcards_sent,
    })
  }

  return (
    <div className="w-5/6 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="info-col prose text-gray-300 col-span-3">
        <h2 className="text-gray-200">{projectData.project_name}</h2>
        <p>{projectData.project_description}</p>
      </div>
      <div className="prose stats-col flex flex-col text-gray-300 lg:text-right">
        <h3 className="text-gray-200">Project Information</h3>
        <div>
          {statistics.map((statistic) => {
            return (
              <div>
                <h4 className="text-gray-500 mb-0 mt-1 uppercase">{statistic.title}</h4>
                <p>{statistic.info}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectInfo