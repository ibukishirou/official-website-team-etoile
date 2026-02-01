import './Contact.css'

const Contact = () => {
  const handleContactClick = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSdiUTiNeW6VDfhOdU4H-mpB4U-Rcbtq8vr73Ww2gW7jTjTEmw/viewform',
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">CONTACT</h2>
        <div className="contact-content">
          <p className="contact-text">
            お仕事のご依頼・ご相談は<br />
            こちらからお問い合わせください
          </p>
          <button 
            className="contact-button" 
            onClick={handleContactClick}
          >
            お問い合わせフォーム
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact
