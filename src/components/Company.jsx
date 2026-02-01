import './Company.css'

const Company = () => {
  const companyInfo = [
    { label: '会社名', value: 'チーム・エトワール株式会社' },
    { label: '英文社名', value: 'team Étoiles Inc.' },
    { 
      label: '所在地', 
      value: '〒104-0061\n東京都中央区銀座1丁目12番4号 N&E BLD.6F' 
    },
    { label: '代表者', value: '代表取締役 佐々木裕路' },
    { label: '設立', value: '令和5年10月17日' },
    { 
      label: '事業内容', 
      value: '音楽・映像ソフト・デジタルコンテンツ等の企画、制作、販売' 
    },
  ]

  return (
    <section id="company" className="company section">
      <div className="container">
        <h2 className="section-title">COMPANY</h2>
        <div className="company-info">
          {companyInfo.map((info, index) => (
            <div key={index} className="info-row">
              <div className="info-label">{info.label}</div>
              <div className="info-value">{info.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Company
