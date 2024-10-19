import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import {explore1Img,explore2Img, exploreVideo} from '../utils'
import { animatwithgsap } from '../utils/animations'

const Features = () => {

    useGSAP(() => {
        animatwithgsap('#features_title', {y:0, opacity:1})
        animatwithgsap('.g_grow', {scale: 1, opacity: 1, ease: 'power1'},{scrub: 5.5})
        animatwithgsap('.g_text', {y: 0, opacity: 1, ease: 'power2.inOut', duration: 1})

        gsap.to('#exploreVideo', {
            scrollTrigger: {
            trigger: '#exploreVideo',
            start: '-10% bottom',
            toggleActions: 'play pause reverse restart',
        },
        onComplete: () => {
            Videoref.current.play();
        }
           
        
        })

        });
    const Videoref = useRef()

  return (
    <section className='h-full common-padding bg-zinc relative overflow-hidden'>
        <div className='screen-max-width'>
            <div className='mb-12 w-full'>
                <h1 id='features_title'
                className='section-heading'> Explore the full story.</h1>

            </div>

            <div className='flex flex-col justify-center items-center overflow-hidden'>
                <div className='mt-32 mb-24 pl-24'>
                    <h2 className='text-5xl lg:text-7xl font-semibold'>iPhone.</h2>
                    <h2 className='text-5xl lg:text-7xl font-semibold'>Forged in titanium.</h2>

                </div>
                <div className='flex-center flex-col sm:px-10'>
                    <div className='relative h-[50vh] w-full flex items-center'>
                    <video playsInline id="exploreVideo" className="w-full h-full object-cover object-center" preload="none" muted autoPlay >
                        <source src={exploreVideo} type="video/mp4" />
                    </video>

                    </div>

                    <div className='flex flex-col w-full relative'>
                        <div className='feature-video-container'>
                            <div className='overflow-hidden flex-1 h-[50vh]'>
                                <img src={explore1Img} alt="titanium"
                                className='feature-video g_grow' />
                            </div>


                            <div className='overflow-hidden flex-1 h-[50vh]'>
                                <img src={explore2Img} alt="titanium2"
                                className='feature-video g_grow' />
                            </div>


                        </div>
                        
                        <div className='feature-text-container'>
                            <div className='flex-1 flex-center'>
                                <p className='feature-text g_text'>
                                iphone 15 Pro is {''}
                                <span className='text-white'>
                                    thge first iphone to feature an aerospace-grade titanium design 
                                </span>

                                using the same allow that spacecrafts are use for missions to Mars.                                
                                </p>

                                <p className='feature-text g_text'>
                                Titanium has on of the best {''}
                                <span className='text-white'>
                                    the first iphone to feature an aerospace-grade titanium design 
                                </span>

                                using the same allow that spacecrafts are use for missions to Mars.                                
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        
    </section>
  )
}

export default Features