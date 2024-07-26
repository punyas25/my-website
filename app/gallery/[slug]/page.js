import HeroBlock from "../../components/common/HeroBlock"
import Carousel from "../components/Carousel"
import ProjectInfo from "../components/ProjectInfo"

export default function Page() {
  const statistics = [
    {
      title: "Project Year",
      info: "20xx",
    },
    {
      title: "Project Type",
      info: "Hobby Project",
    },
    {
      title: "Postcards sent",
      info: "52",
    }
  ]
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-slate-800 text-gray-300 p-5">
      <HeroBlock
        title="Project page Quis eleifend quam adipiscing vitae proin sagittis."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        link="/"
        linkText="Contact Me"
      />
      <Carousel />
      <ProjectInfo
        title="Project quis"
        content="Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius. Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis eum."
        statistics={statistics}
      />
    </div>
  );
}
