import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const useGsapScrollComposable = (
    container: Ref<HTMLElement> | null,
    item: Ref<HTMLElement> | null,
    animationSettings: gsap.TweenVars
) => {

  gsap.registerPlugin(ScrollTrigger)


  onMounted(() => {

    gsap.from([item], {
      scrollTrigger: {
        trigger: container.value,
        start: 'top center',
        end: 'bottom center',
        scrub: false, // Az animáció gördülékenyen kövesse a scroll-t
      },
      ...animationSettings,
    })
  })
}
