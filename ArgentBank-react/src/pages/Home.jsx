import Header from '../components/molecules/header'
import Footer from '../components/molecules/footer'
import SectionHero from '../components/molecules/section_hero'
import FeatureItem from '../components/organismes/feature_item'
import './Home.css'


function Home() {
  return (
    <>
      <title>Argent Bank - Home Page</title>
      <Header />
      <div className="hero">
        <SectionHero />
      </div>
      <section className="features">
        <FeatureItem />
      </section>
      <Footer />
    </>
  )
}

export default Home
