import gsap from 'gsap'
import scrollTrigger from 'gsap/ScrollTrigger'

export const animateWithGsapTimline = (tl2, rotationRef, setRotationState, firstTarget, seconTarget, animationProps) =>{
    tl2.to(rotationRef.current.rotation, {
        y: 0,
        duration: 1,
        ease: 'power4.inOut',
       
    })

    tl2.to(firstTarget, {
        ...animationProps,
        ease: 'power2.inOut',
    }, '<')

    tl2.to(seconTarget, {
        ...animationProps,
        ease: 'power2.inOut',
    }, '<')
}


export const animatwithgsap = ( target, animationProps, scrolprops) =>{
    gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
            triger: target,
            toggleActions: "restart reverse restart reverse",
            start: "top 85%",
            ...scrolprops,
        }
    })
}