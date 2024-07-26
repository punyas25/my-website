const ProjectInfo = ({ title, content, statistics }) => {
  return (
    <div className="w-5/6 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="info-col prose text-gray-300 col-span-3">
        <h2 className="text-gray-200">{title}</h2>
        <p>{content}</p>
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