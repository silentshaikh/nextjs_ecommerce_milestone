import Collection from "@/components/Collection/Collection";
import Fashion from "@/components/Fashion/Fashion";
import Hero from "@/components/Hero/Hero";
import NewWeek from "@/components/NewWeek/NewWeek";
import SwiperHero from "@/components/SwiperHero/SwiperHero";
export default function Home() {
  return (
   <main>
    <Hero/>
    <NewWeek/>
    <Collection/>
    <Fashion/>
   </main>
  );
}
