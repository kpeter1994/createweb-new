import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const useGsapScrollArrayComposable = (
    container: Ref<HTMLElement> | null,
    classItem: string,
    animationSettings: gsap.TweenVars
) => {

  gsap.registerPlugin(ScrollTrigger)


  onMounted(() => {
    const items = document.querySelectorAll(`.${classItem}`);

    gsap.from([items], {
      scrollTrigger: {
        trigger: container.value,
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: false, // Az animáció gördülékenyen kövesse a scroll-t
      },
      ...animationSettings,
    })
  })
}
