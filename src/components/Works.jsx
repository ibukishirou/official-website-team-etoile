import './Works.css'

const Works = ({ works }) => {
  const renderWorkItem = (work) => {
    return (
      <div key={work.id} className={`work-item ${work.featured ? 'featured' : ''}`}>
        <div className="work-media">
          {work.videoUrl ? (
            <div className="work-video">
              <iframe
                src={work.videoUrl}
                title={work.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : work.images && work.images.length > 0 ? (
            <div className="work-images">
              {work.images.map((image, idx) => (
                <img key={idx} src={image} alt={`${work.title} ${idx + 1}`} />
              ))}
            </div>
          ) : null}
        </div>
        <div className="work-info">
          <span className="work-category">{work.category}</span>
          <h3 className="work-title">{work.title}</h3>
          <p className="work-description">{work.description}</p>
          {work.url && (
            <a 
              href={work.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="work-link"
            >
              詳しく見る →
            </a>
          )}
        </div>
      </div>
    )
  }

  return (
    <section id="works" className="works section">
      <div className="container">
        <h2 className="section-title">WORKS</h2>
        <div className="works-grid">
          {works.map(work => renderWorkItem(work))}
        </div>
      </div>
    </section>
  )
}

export default Works
