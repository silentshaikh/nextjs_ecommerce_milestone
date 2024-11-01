'use client';
import HeroControl from '../HeroControl/HeroControl';
import HeroChild from '../HeroChild/HeroChild';

function HeroMain() {
  return (
    <section className='px-10 py-10 flex flex-col max-[1300px]:px-5'>
      <HeroChild/>
      <HeroControl/>
    </section>
  );
}

export default HeroMain
