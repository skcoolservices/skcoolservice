import HomeContactSection from "@/Components/Homepage/HomeContactSection"
import HomeFinalCTA from "@/Components/Homepage/HomeCTA"
import HomeHeroCarousel from "@/Components/Homepage/HomeHeroCarousel"
import HomeAcRentalPricing from "@/Components/Homepage/HomePricing"
import HomeServicesSection from "@/Components/Homepage/HomeServices"
import HomeTestimonialsSection from "@/Components/Homepage/HomeTestimonials"
import HomeWhyChooseUs from "@/Components/Homepage/HomeWhyChooseUs"


const HomePage=()=>{
  return (
    <>
    
    <HomeHeroCarousel/>
    <HomeServicesSection/>
    <HomeAcRentalPricing/>
    <HomeWhyChooseUs/>
    <HomeTestimonialsSection/>
    <HomeContactSection/>
    <HomeFinalCTA/>
    </>
  )
}
export default HomePage