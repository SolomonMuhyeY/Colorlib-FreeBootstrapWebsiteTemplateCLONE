import PortfolioImgCont from "../components/PortfolioImgCont";
import ScrollToTop from "../utils/ScrollToTop";

export default function Portfolio() {
  return (
    <div>
      <div className='container mx-auto text-center w-full  lg:w-3/4 p-6 md:p-12 lg:p-20 mb-28'>
        <h1 className='text-brightRed text-2xl sm:text-4xl lg:text-6.5xl leading-loose word-spacing-4 lg:px-24 font-bold font-sans mb-12'>
          Our Portfolio
        </h1>
        <p className='leading-8 hidden sm:block'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
          incidunt vitae fugit harum architecto doloribus facere omnis
          recusandae pariatur porro quis alias quas animi, dignissimos fuga ab
          reprehenderit repudiandae ea?
        </p>
        <p className='leading-8 block sm:hidden'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem
          nulla quos suscipit laborum fugit aspernatur rem pariatur illo.
        </p>
      </div>
      <section
        style={{
          backgroundColor: "white",
        }}
        className='py-16'
      >
        <PortfolioImgCont />
      </section>
      <ScrollToTop />
    </div>
  );
}
