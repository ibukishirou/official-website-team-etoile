import './Hero.css'

const Hero = () => {
  const baseUrl = import.meta.env.BASE_URL
  
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-logo">
          <img src={`${baseUrl}images/logo.webp`} alt="team Étoiles" />
        </div>
        <h1 className="hero-title">
          アニメと企業をつなぎ<br />
          新しい価値を創出する<br />
          プロデュース会社です
        </h1>
        <div className="hero-scroll">
          <span>SCROLL</span>
          <div className="scroll-line"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
