import './Business.css'

const Business = () => {
  const services = [
    {
      title: 'アニメーション制作',
      description: 'オリジナルIPの企画・制作から、既存IPの活用まで、総合的なアニメーションプロデュースを行います。'
    },
    {
      title: '企業コラボレーション',
      description: 'アニメIPと企業のマッチングから、プロモーション企画の立案・実行まで、ワンストップでサポートします。'
    },
    {
      title: 'IPライセンシング',
      description: '音楽、映像ソフト、デジタルコンテンツ等の企画・制作・販売を通じて、IPの価値を最大化します。'
    }
  ]

  return (
    <section id="business" className="business section">
      <div className="container">
        <h2 className="section-title">BUSINESS</h2>
        <div className="business-grid">
          {services.map((service, index) => (
            <div key={index} className="business-card">
              <div className="card-number">0{index + 1}</div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Business
