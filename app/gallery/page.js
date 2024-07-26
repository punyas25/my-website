import GalleryGrid from "./components/GalleryGrid"
import HeroBlock from "../components/common/HeroBlock"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-slate-800 text-gray-300 p-5">
      <HeroBlock
        title="Quis eleifend quam adipiscing vitae proin sagittis."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        link="/"
        linkText="Contact Me"
      />
     <GalleryGrid />
    </div>
  );
}
