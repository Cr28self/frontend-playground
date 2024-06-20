import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/figma')({
  component: MyComponent
})


type SocialIconProps = {
  src: string;
  alt: string;
  className?: string;
};

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={`shrink-0 ${className}`} />
);

type NavItemProps = {
  children: React.ReactNode;
};

const NavItem: React.FC<NavItemProps> = ({ children }) => (
  <div className="grow">{children}</div>
);

type ProductCardProps = {
  imageSrc: string;
  title: string;
  price: string;
  discount?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, price, discount }) => (
  <div className="flex flex-col">
    <div className="flex overflow-hidden relative flex-col justify-center px-10 py-20 max-w-full aspect-[0.81] w-[344px] max-md:px-5">
      <img loading="lazy" src={imageSrc} alt={title} className="absolute inset-0 object-cover size-full" />
      <div className="relative flex justify-between gap-5 mb-32 mt-11 max-md:my-10">
        <div className="flex flex-col">
          <h3 className="text-2xl text-black">{title}</h3>
          <p className="mt-2.5 text-base text-white">{price}</p>
        </div>
        {discount && (
          <div className="justify-center self-start px-1.5 py-1 text-base text-white whitespace-nowrap bg-emerald-400">
            {discount}
          </div>
        )}
      </div>
    </div>
  </div>
);

type FooterLinkProps = {
  children: React.ReactNode;
};

const FooterLink: React.FC<FooterLinkProps> = ({ children }) => (
  <div className="mt-4">{children}</div>
);

function MyComponent() {
  return (
    <div className="flex flex-col bg-white">
      <header className="flex overflow-hidden relative flex-col items-center px-12 pt-6 pb-20 w-full min-h-[942px] max-md:px-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/650b47d92e4a9c3e1dc5bd3de8e89e3efd88ec972de84068b7fa504209a8f48b?apiKey=e4f9866b714c4df59452d779cd49dfa0&" alt="" className="absolute inset-0 object-cover size-full" />
        <nav className="relative flex items-center self-stretch justify-between w-full gap-5 max-md:flex-wrap max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6639b8cbefc13993cfd66e398bd75da4a18f0821abb7613f3489c90f9f1f6c52?apiKey=e4f9866b714c4df59452d779cd49dfa0&" alt="Logo" className="shrink-0 self-stretch max-w-full aspect-[4.55] w-[122px]" />
          <div className="flex self-stretch gap-5 my-auto text-base font-bold text-white max-md:flex-wrap max-md:max-w-full">
            <NavItem>Home</NavItem>
            <NavItem>Shop</NavItem>
            <NavItem>Sale</NavItem>
            <NavItem>Blog</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Contact Us</NavItem>
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
      <main className="w-full px-5 mt-12 max-md:mt-10 max-md:max-w-full">
        <section className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative z-10 flex-col grow justify-center items-center px-16 py-16 text-2xl text-white min-h-[453px] max-md:px-5 max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac9fde3dafe0e24c24ae47bd4aef8258ad771b0b431f769cf6f5d0cdd8414813?apiKey=e4f9866b714c4df59452d779cd49dfa0&" alt="" className="absolute inset-0 object-cover size-full" />
              <div className="flex relative flex-col mt-52 max-w-full w-[200px] max-md:mt-10">
                <p className="self-center text-base">OUR COLLECTION</p>
                <h2 className="mt-3.5">High quality and</h2>
                <h2 className="mt-3">Good design shape</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-3/12 ml-5 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow justify-center items-center px-16 py-20 min-h-[454px] max-md:px-5 max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b3c9becd70a32c37fad747e0badb2695bf231ff132c65063e0de5f705315804?apiKey=e4f9866b714c4df59452d779cd49dfa0&" alt="" className="absolute inset-0 object-cover size-full" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4937f1a42c6f19bcfe3e63a281c5f6ba5a9373e4abb24c9f6f503c8e7f962ca?apiKey=e4f9866b714c4df59452d779cd49dfa0&" alt="Product" className="mt-24 aspect-[0.95] w-[81px] max-md:mt-10" />
            </div>
          </div>
          <div className="flex flex-col w-3/12 ml-5 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow justify-center items-center px-16 py-20 text-2xl text-black whitespace-nowrap min-h-[453px] max-md:px-5 max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3308aeca843608ff25322376db904b05f58e268d8263bce9e779e14cd936910?apiKey=e4f9866b714c4df59452d779cd49dfa0&" alt="" className="absolute inset-0 object-cover size-full" />
              <div className="relative flex flex-col mt-20 max-md:mt-10">
                <p className="self-center">100%</p>
                <p className="mt-3">satisfaction</p>
                <p className="mt-4">guarantee</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-3/12 ml-5 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow items-center px-16 pt-6 pb-20 text-2xl text-black min-h-[453px] max-md:px-5 max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/afe77b5c05bc416df9209112d5a06f04c8e83f76169dfd7ba2771cf0ab65c8b2?apiKey=e4f9866b714c4df59452d779cd49dfa0&" alt="" className="absolute inset-0 object-cover size-full" />
              <div className="relative flex flex-col">
                <p className="self-center text-base">OUR COLLECTION</p>
                <h2 className="mx-5 mt-3.5 max-md:mx-2.5">Creating Everything</h2>
                <h2 className="mt-2.5">Classy and Comfortable</h2>
              </div>
            </div>
          </div>
        </section>
      </main>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8212bb610750e1585c901e33b92f92e902e9e1a3d3bec5de1906d939e7a0d951?apiKey=e4f9866b714c4df59452d779cd49dfa0&" alt="Product Showcase" className="self-center mt-36 w-full aspect-[4] max-w-[1467px] max-md:mt-10 max-md:max-w-full" />
      <section className="flex gap-5 justify-between items-start self-center px-5 mt-24 max-w-full w-[1269px] max-md:flex-wrap max-md:mt-10">
        <ProductCard imageSrc="http://b.io/placeholder-" title="Aero Gray" price="$150.00" />
        <ProductCard imageSrc="http://b.io/placeholder-" title="Glide Boost" price="$150.00" />
        <ProductCard imageSrc="http://b.io/placeholder-" title="Flex Dash" price="$150.00" />
        <ProductCard imageSrc="http://b.io/placeholder-" title="Swift Pace Yellow" price="$150.00" />
      </section>
      <section className="self-center mt-32 w-full max-w-[1437px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <ProductCard imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8cc1c07529ca25b44c95c3a3d62625b21df4c981a1e80f15adc381b4da64363a?apiKey=e4f9866b714c4df59452d779cd49dfa0&" title="Turbo Green" price="$150.00" discount="-17%" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba018b18d999cbec1375615f5558c2ea690654b72d7a9d2ed51f24c152721493?apiKey=e4f9866b714c4df59452d779cd49dfa0&" alt="Product Detail" className="mt-5 w-full aspect-[1.64] max-md:max-w-full" />
          </div>
          <div className="flex flex-col w-3/5 ml-5 max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5038da89ca6a6bd5c7fd7468c0df2ac092633fecbd7156d34807eb5ee86ed2df?apiKey=e4f9866b714c4df59452d779cd49dfa0&" alt="Featured Product" className="grow w-full aspect-[1.22] max-md:max-w-full" />
          </div>
        </div>
      </section>
      <footer className="w-full px-20 bg-black mt-96 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[81%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-base text-neutral-400 max-md:mt-10 max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3abc3a62a671193897a96ba8dd978af415f02c8613f04b4eb3e7bf1af03450a?apiKey=e4f9866b714c4df59452d779cd49dfa0&" alt="Footer Logo" className="max-w-full aspect-[4.55] w-[255px]" />
              <nav className="flex flex-col self-end mt-6">
                <h3 className="text-white">Categories</h3>
                <FooterLink>Women collection</FooterLink>
                <FooterLink>Men collection</FooterLink>
                <FooterLink>Child collection</FooterLink>
                <FooterLink>Accessories</FooterLink>
              </nav>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
            <nav className="flex flex-col mt-20 text-base grow text-neutral-400 max-md:mt-10">
              <h3 className="text-white">Customer</h3>
              <FooterLink>Help and support</FooterLink>
              <FooterLink>Shipping and delivery</FooterLink>
              <FooterLink>Payment method</FooterLink>
              <FooterLink>Terms and conditions</FooterLink>
              <FooterLink>Privacy policy</FooterLink>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

