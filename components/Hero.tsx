import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { FlipWords } from './ui/FlipWord'
import { HeroHighlight, Highlight } from './ui/HeroHighlight'

const Hero = () => {

    const words1 = ["Dynamic","Responsive"]
    const words2 = ["Next.js","React","Tailwind"]


  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
            <Spotlight className='top-10 left-full h-[80vh]' fill="purple"/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue"/>
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <div className="uppercase tracking-widest text-sm text-center text-blue-100 max-w-100">
                    Build a
                    <FlipWords words={words1} className='text-purple'/>
                    Web Magic with 
                    <FlipWords words={words2} className='text-purple'/>
                </div>
                <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words='Transforming Concepts into Seamless User Experiences'/>
                <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                    <HeroHighlight>
                        <div
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
                            Hi, I&apos;m Jaelos,{" "}
                            <Highlight className="text-black dark:text-white">
                                a React Next.js Developer based in Singapore
                            </Highlight>
                        </div>
                    </HeroHighlight>
                </div>
                <a href='#about'>
                    <MagicButton 
                        title="Show my work"
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>

        </div>
    </div>
  )
}

export default Hero