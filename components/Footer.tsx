import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import { HeroHighlight, Highlight } from "./ui/HeroHighlight";
import { FlipWords } from "./ui/FlipWord";

const Footer = () => {
    const words = ["anytime", "anywhere", "today"]
  return (
    <footer className="w-full pb-10 mb-[50px] md:mb-5" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-purple ">your</span>
            <HeroHighlight className="mt-4">
                <motion.div
                    initial={{
                    opacity: 0,
                    y: 20,
                    }}
                    animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                    }}
                    transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-2xl px-4 md:text-sm lg:text-xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
                >
                    <Highlight className="mt-5 heading lg:max-w-[45vw] text-black dark:text-white ">
                    digital presence to the next level?
                    </Highlight>
                </motion.div>
            </HeroHighlight>
        </h1>
        <div className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me<FlipWords words={words} className="text-purple"/>and let&apos;s discuss how I can help you
          achieve your goals.
        </div>
        <a href="mailto:angjaelos@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light max-lg:pb-5">
          Copyright © 2024 <span className="text-purple text-lg">Ang Jaelos</span>
        </p>

        <div className="flex items-center md:gap-3 gap-x-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
                <a href={info.link} target="_blank">
                    <img src={info.img} alt="icons" width={20} height={20}  />
                </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;