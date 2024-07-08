import Camp from "@/components/Camp";
import Cards from "@/components/Cards";
import Features from "@/components/Features";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import LastMinuteDeals from "@/components/LastMinuteDeals";
import Offers from "@/components/Offers";
import NewService from "@/components/NewService";
import VideoPlayer from "@/components/VideoPlayer"
import Terms from "@/components/Terms";


export default function Home() {
  return (
    <>
      <Hero/>
      <Camp/>
      <Guide/>
      <Cards/>
            <Features/>
      <Offers/>
      <VideoPlayer/>
      <LastMinuteDeals/>
      <NewService/>
      <Terms/>
      
    </>
  )
}
