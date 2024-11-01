'use client';
import HeroForm from "../HeroForm/HeroForm"
import HeroList from "../HeroList/HeroList"

function HeroCategroy() {
  return (
    <section className="px-14 py-10 flex gap-6 items-start flex-col max-[400px]:px-5">
      <HeroList/>
      <HeroForm/>
    </section>
  )
}

export default HeroCategroy
