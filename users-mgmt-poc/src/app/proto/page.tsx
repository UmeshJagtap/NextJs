'use client';
import Image from 'next/image';
import './underline-animate.css';
const Proto = () => {
  return (
    <section className="">
      <div className="bg-[#222831] text-[#DFD0B8]">
        <section className="m-4 p-4 flex flex-col items-end justify-end text-8xl gap-4">
          <p className="underline-animate">WORKS</p>
          <p className="underline-animate">ABOUT</p>
          <p className="border-b border-[#121212] hover:border-[#E2DFD2] underline-animate">
            CONTACT
          </p>
          <p className="border-b border-[#121212] hover:border-[#E2DFD2] underline-animate">
            RESUME
          </p>
          <p className="border-b border-[#121212] hover:border-[#E2DFD2] underline-animate">
            BLOG
          </p>
        </section>
        <section className="p-2 m-2">
          <article>
            <time>Mar 10, 2020</time>
            <h2>Boost your conversion rate</h2>
            <p className="line-clamp-3">
              Nulla dolor velit adipisicing duis excepteur esse in duis nostrud
              occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex
              occaecat eu tempor labore enim adipisicing minim ad. Est in quis
              eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim
              ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat
              irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor
              et ad sint voluptate sunt elit mollit officia ad enim sit
              consectetur enim.
            </p>
            <div className="flex items-center gap-2">
              <p className="text-[#E2DFD2]">Lindsay Walton</p>
              <div className="w-10 h-10 rounded-full bg-red-500 transition delay-100 duration-300 ease-in-out hover:scale-125 "></div>
              <div className="w-14 h-14 rounded-full bg-red-500 transition delay-100 duration-300 ease-in-out hover:scale-125 "></div>
              <div className="w-20 h-20  rounded-full bg-red-500 transition delay-150 duration-300 ease-in-out hover:scale-125 "></div>
              <div className="w-24 h-24 my-2 rounded-full overflow-hidden transition delay-150 duration-300 ease-in-out hover:scale-125">
                {/* <Image src="/img/lindsay.jpg" alt='Lindsay Walton' width={80} height={50} /> */}
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3F6VEGUwo6MNIFBKieE81JDvSQa6HnauiqA&s"
                  alt="Lindsay Walton"
                  width={80}
                  height={80}
                />
              </div>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};

export default Proto;
