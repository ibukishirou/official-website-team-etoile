import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-logo">
          <img src="/images/logo.webp" alt="team Étoiles" />
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
