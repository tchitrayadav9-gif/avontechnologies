import HeroSection from '../components/home/HeroSection'
import CompanyIntro from '../components/home/CompanyIntro'
import StatisticsCards from '../components/home/StatisticsCards'
import FeatureCards from '../components/home/FeatureCards'
import Testimonials from '../components/home/Testimonials'
import CTASection from '../components/common/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatisticsCards />
      <CompanyIntro />
      <FeatureCards />
      <Testimonials />
      <CTASection />
    </>
  )
}
