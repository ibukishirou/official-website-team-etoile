import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/images/logo.webp" alt="team Étoiles" />
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
