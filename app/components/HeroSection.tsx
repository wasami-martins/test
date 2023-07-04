import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section
        id="hero"
        className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40"
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
            We Boldly Go...
            <span className="text-indigo-700 dark:text-indigo-300">
              Where No Rocket
            </span>{" "}
            Has Gone Before...
          </h2>
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
            We're building rockets for the next century today. From the moon to
            Mars, Jupiter and beyond...
          </p>
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
            Think Acme Rockets.
          </p>
        </article>
        <Image
          src="/assets/rocketdab.png"
          alt="Rocket Dab"
          width={400}
          height={400}
          className="w-1/2"
        />
      </section>
      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <section id="rockets" className="p-6 my-12 scroll-mt-20">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Our Rockets
        </h2>

        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
          <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
            <Image
              src="/assets/rocketman.png"
              alt="Explorer"
              className="w-1/2 mb-6"
              width={400}
              height={400}
            />
            <h3 className="text-3xl text-center text-slate-900 dark:text-white">
              Explorer
            </h3>
            <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">
              $
            </p>
            <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
              Affordable Exploration
            </p>
          </li>

          <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
            <img
              src="/assets/rocketride.png"
              alt="Adventurer"
              className="w-1/2 mb-6"
              width={400}
              height={400}
            />
            <h3 className="text-3xl text-center text-slate-900 dark:text-white">
              Adventurer
            </h3>
            <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">
              $$
            </p>
            <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
              Best Selling Rocket!
            </p>
          </li>

          <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
            <img
              src="/assets/rocketlaunch.png"
              alt="Infinity"
              className="w-1/2 mb-6"
              width={400}
              height={400}
            />
            <h3 className="text-3xl text-center text-slate-900 dark:text-white">
              Infinity
            </h3>
            <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">
              $$$
            </p>
            <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
              Luxury Starship
            </p>
          </li>
        </ul>
      </section>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <section id="testimonial" className="p-6 my-12 scroll-mt-20">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Testimonial
        </h2>
      </section>

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <section id="contact" className="p-6 my-12 scroll-mt-20">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Contact Us
        </h2>
      </section>
    </>
  );
}
