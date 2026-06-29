import { useTitle } from "../../hooks/useTitle"
import { Faq } from "./components/Faq"
import { FeaturedProducts } from "./components/FeaturedProduct"
import Hero from "./components/Hero"
import { Testimonials } from "./components/Testimonials"

const Homepage = () => {
  useTitle("Acess Latest Computer Science eBooks")
  return (
    <main>
      <Hero/>
      <FeaturedProducts/>
      <Testimonials/>
      <Faq/>
    </main>
  )
}

export default Homepage