import './About.css'

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">ABOUT</h2>
        <div className="about-content">
          <p className="about-lead">
            チーム・エトワールは、アニメーションコンテンツと企業を繋ぐ<br />
            プロデュース会社です。
          </p>
          <p className="about-text">
            アニメIPの企画・制作から、企業とのコラボレーション企画まで、<br />
            エンターテインメントの力で新しい価値を創造します。<br />
            <br />
            確かな実績と豊富なネットワークを活かし、<br />
            クライアント企業様の課題解決とブランド価値向上に貢献いたします。
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
