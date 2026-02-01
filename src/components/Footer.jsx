import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const baseUrl = import.meta.env.BASE_URL

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={`${baseUrl}images/logo.webp`} alt="team Étoiles" />
          </div>
          <p className="footer-copy">
            &copy; {currentYear} team Étoiles Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
