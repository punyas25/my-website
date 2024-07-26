import HeroBlock from "../components/common/HeroBlock"
import ImageGrid from "../components/common/ImageGrid"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-slate-800 text-gray-300 p-5">
      <HeroBlock
        title="Quis eleifend quam adipiscing vitae proin sagittis."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        link="/contact"
        linkText="Contact Me"
      />
      <ImageGrid />
      <div>
        <p>Credits for icon/assets used</p>
        <a href="https://www.flaticon.com/free-icons/tangerine" title="tangerine icons">Tangerine icons created by Freepik - Flaticon</a>
      </div>
    </div>
  );
}
