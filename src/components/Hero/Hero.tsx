
import HeroCategroy from "../HeroCategroy/HeroCategroy";
import { workSans } from '@/utils/Helper/helper';
import HeroMain from "../HeroMain/HeroMain";
function Hero() {
  return (
    <section className={`${workSans.className} bg-[#f3f3f3] pt-20`}>
      <HeroCategroy/>
      <HeroMain/>
    </section>
  )
}

export default Hero
