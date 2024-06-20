import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { cn } from "../lib/style";

type NavItemProps = {
  href:string;
  className?: string;
  children: React.ReactNode;
};

const NavItem: React.FC<NavItemProps> = ({href,className, children }) => (
  <Link to={href} className={cn("grow",className)}>{children}</Link>
);

type SocialIconProps = {
  src: string;
  alt: string;
  className?: string;
};

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={`shrink-0 ${className}`} />
);



export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex flex-col ">

      <header className="flex overflow-hidden relative flex-col items-center px-12 pt-6 pb-20 w-full min-h-[942px] max-md:px-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/650b47d92e4a9c3e1dc5bd3de8e89e3efd88ec972de84068b7fa504209a8f48b?apiKey=e4f9866b714c4df59452d779cd49dfa0&" alt="" className="absolute inset-0 object-cover size-full" />
        <nav className="relative flex items-center self-stretch justify-between w-full gap-5 max-md:flex-wrap max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6639b8cbefc13993cfd66e398bd75da4a18f0821abb7613f3489c90f9f1f6c52?apiKey=e4f9866b714c4df59452d779cd49dfa0&" alt="Logo" className="shrink-0 self-stretch max-w-full aspect-[4.55] w-[122px]" />
          <div className="flex self-stretch gap-5 my-auto text-base font-bold text-white max-md:flex-wrap max-md:max-w-full">
            <NavItem href="/" className="[&.active]:font-bold ">
            Home
          </NavItem>
          <NavItem href="/about" className="[&.active]:font-bold ">
            About
          </NavItem>
          <NavItem href="/auth/login" className="[&.active]:font-bold">
            Login
          </NavItem>
          <NavItem href="/review" className="[&.active]:font-bold ">
            Review
          </NavItem>
          <NavItem href="/reducer" className="[&.active]:font-bold ">
            Reducer
          </NavItem>
          <NavItem href="/context" className="[&.active]:font-bold ">
            Context
          </NavItem>
          <NavItem href="/builder-demo" className="[&.active]:font-bold ">
            Builder
          </NavItem>
          </div>
          <div className="flex self-stretch gap-3 my-auto">
            <SocialIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b5416dbd54cd63b82f480ec1bdf69ea293c93c4f1f9431f9f2ff7f81e127341?apiKey=e4f9866b714c4df59452d779cd49dfa0&" alt="Social Icon 1" className="w-3.5 aspect-[0.93]" />
            <SocialIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/08f59c040bd83ed431ac8b6bb4068e19926297a0a0e2739d6083a8fc994bc0cd?apiKey=e4f9866b714c4df59452d779cd49dfa0&" alt="Social Icon 2" className="self-start w-3.5 border border-white border-solid aspect-square stroke-[1px] stroke-white" />
            <SocialIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/804c7671521a707b4c228278b09e1d1bfacffb8e1834dcb1eab86d74630b08b3?apiKey=e4f9866b714c4df59452d779cd49dfa0&" alt="Social Icon 3" className="self-start aspect-[1.15] fill-white w-[15px]" />
            <SocialIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/9451957e216cf5eacd82def1983ef7bba012d7a6cb17751dbf9e170ae32252a4?apiKey=e4f9866b714c4df59452d779cd49dfa0&" alt="Social Icon 4" className="aspect-square w-[15px]" />
          </div>
        </nav>
        <h1 className="relative mt-56 ml-40 text-6xl font-bold text-white w-[337px] max-md:mt-10 max-md:text-4xl">
          Comfort shoes
        </h1>
        <p className="relative mt-10 ml-56 text-base text-white">
          Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum is.
        </p>
        <button className="relative justify-center py-6 mt-8 mb-56 ml-40 text-base font-bold text-white border-2 border-white border-solid px-11 rounded-3xl max-md:px-5 max-md:mb-10">
          OUR COLLECTION
        </button>
      </header>
        <hr />
        <main className="flex flex-1">
          <Outlet />
        </main>
      </div>

      <TanStackRouterDevtools />
    </>
  ),
});
