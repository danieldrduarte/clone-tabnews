import { useState } from 'react';

function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const featuredNews = [
    {
      id: 1,
      category: 'Tecnologia',
      title: 'A Revolução da IA: Como a Inteligência Artificial está Transformando o Mundo',
      excerpt: 'Descubra as últimas tendências em IA e como elas estão moldando nosso futuro digital.',
      author: 'João Silva',
      date: '28 Out 2025',
      readTime: '5 min',
      icon: '🤖'
    },
    {
      id: 2,
      category: 'Programação',
      title: 'Next.js 15: Novidades que Todo Desenvolvedor Precisa Conhecer',
      excerpt: 'Explore as funcionalidades revolucionárias da nova versão do framework React mais popular.',
      author: 'Maria Santos',
      date: '27 Out 2025',
      readTime: '8 min',
      icon: '⚡'
    },
    {
      id: 3,
      category: 'Segurança',
      title: 'Cibersegurança em 2025: Protegendo seus Dados na Era Digital',
      excerpt: 'Aprenda as melhores práticas para manter suas informações seguras online.',
      author: 'Pedro Costa',
      date: '26 Out 2025',
      readTime: '6 min',
      icon: '🔒'
    },
    {
      id: 4,
      category: 'Web Dev',
      title: 'CSS Moderno: Técnicas Avançadas de Estilização para 2025',
      excerpt: 'Domine as últimas features do CSS e crie interfaces incríveis.',
      author: 'Ana Lima',
      date: '25 Out 2025',
      readTime: '7 min',
      icon: '🎨'
    }
  ];

  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          width: 100%;
          height: 100%;
          overflow-x: hidden;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }
      `}</style>
      
      <style jsx>{`
        .page-wrapper {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          position: relative;
          overflow: hidden;
        }

        /* Efeito de partículas de notícias flutuantes */
        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .particle {
          position: absolute;
          font-size: 24px;
          opacity: 0.15;
          animation: float-particle 15s infinite ease-in-out;
        }

        .particle:nth-child(1) { left: 10%; top: 20%; animation-delay: 0s; }
        .particle:nth-child(2) { left: 80%; top: 40%; animation-delay: 2s; }
        .particle:nth-child(3) { left: 30%; top: 60%; animation-delay: 4s; }
        .particle:nth-child(4) { left: 70%; top: 80%; animation-delay: 6s; }
        .particle:nth-child(5) { left: 50%; top: 30%; animation-delay: 8s; }
        .particle:nth-child(6) { left: 20%; top: 70%; animation-delay: 10s; }
        .particle:nth-child(7) { left: 90%; top: 15%; animation-delay: 3s; }
        .particle:nth-child(8) { left: 40%; top: 85%; animation-delay: 7s; }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.15;
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
            opacity: 0.3;
          }
        }

        .container {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        /* Header */
        .header {
          text-align: center;
          margin-bottom: 60px;
          animation: fadeInDown 1s ease-out;
        }

        .logo-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .newspaper-icon {
          font-size: 64px;
          animation: rotate-news 4s ease-in-out infinite;
        }

        @keyframes rotate-news {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        .site-title {
          font-size: 72px;
          font-weight: 900;
          color: white;
          text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
          letter-spacing: -2px;
          margin: 0;
        }

        .site-subtitle {
          font-size: 24px;
          color: rgba(255, 255, 255, 0.95);
          font-weight: 300;
          margin-top: 10px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }

        .breaking-news-banner {
          background: linear-gradient(90deg, #ff6b6b, #ee5a6f, #ff6b6b);
          background-size: 200% 100%;
          animation: gradient-shift 3s ease infinite;
          padding: 15px 30px;
          border-radius: 50px;
          display: inline-flex;
          align-items: center;
          gap: 15px;
          margin-top: 30px;
          box-shadow: 0 8px 30px rgba(255, 107, 107, 0.4);
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .breaking-news-banner .icon {
          font-size: 28px;
          animation: pulse-icon 1.5s ease-in-out infinite;
        }

        @keyframes pulse-icon {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .breaking-news-banner .text {
          color: white;
          font-weight: 600;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Featured Section */
        .featured-section {
          margin-bottom: 50px;
        }

        .section-title {
          font-size: 32px;
          color: white;
          font-weight: 700;
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          gap: 12px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }

        .section-title .icon {
          font-size: 36px;
        }

        /* News Grid */
        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .news-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .news-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .news-card:hover::before {
          transform: scaleX(1);
        }

        .news-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
        }

        .card-icon {
          font-size: 48px;
          margin-bottom: 15px;
          display: inline-block;
          animation: bounce 2s ease-in-out infinite;
        }

        .news-card:hover .card-icon {
          animation: spin 0.6s ease-in-out;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .category-badge {
          display: inline-block;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 15px;
        }

        .card-title {
          font-size: 22px;
          color: #2d3748;
          font-weight: 700;
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .card-excerpt {
          font-size: 15px;
          color: #718096;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .card-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          border-top: 2px solid #e2e8f0;
          font-size: 13px;
          color: #a0aec0;
        }

        .author-info {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .author-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea, #764ba2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 14px;
        }

        .read-time {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        /* Stats Section */
        .stats-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 60px;
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 25px;
          text-align: center;
          border: 2px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-5px);
        }

        .stat-number {
          font-size: 42px;
          font-weight: 900;
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
          margin-bottom: 5px;
        }

        .stat-label {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.95);
          font-weight: 500;
        }

        /* Footer */
        .footer {
          margin-top: 80px;
          padding: 30px;
          text-align: center;
          color: rgba(255, 255, 255, 0.9);
          border-top: 2px solid rgba(255, 255, 255, 0.2);
        }

        .footer-icons {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 20px;
        }

        .footer-icon {
          font-size: 28px;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .footer-icon:hover {
          transform: scale(1.3) rotate(10deg);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .site-title {
            font-size: 48px;
          }

          .site-subtitle {
            font-size: 18px;
          }

          .newspaper-icon {
            font-size: 48px;
          }

          .news-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 26px;
          }

          .breaking-news-banner {
            padding: 12px 20px;
          }

          .breaking-news-banner .text {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 20px 15px;
          }

          .site-title {
            font-size: 36px;
          }

          .card-title {
            font-size: 18px;
          }
        }
      `}</style>

      <div className="page-wrapper">
        {/* Partículas Flutuantes */}
        <div className="floating-particles">
          <div className="particle">📰</div>
          <div className="particle">📝</div>
          <div className="particle">💡</div>
          <div className="particle">🔔</div>
          <div className="particle">📱</div>
          <div className="particle">💻</div>
          <div className="particle">🌐</div>
          <div className="particle">✨</div>
        </div>

        <div className="container">
          {/* Header */}
          <header className="header">
            <div className="logo-container">
              <span className="newspaper-icon">📰</span>
              <h1 className="site-title">Tabnews</h1>
            </div>
            <p className="site-subtitle">Sua fonte confiável de notícias sobre tecnologia e desenvolvimento</p>
            
            <div className="breaking-news-banner">
              <span className="icon">🔥</span>
              <span className="text">Últimas Notícias em Tempo Real</span>
              <span className="icon">🔥</span>
            </div>
          </header>

          {/* Featured News Section */}
          <section className="featured-section">
            <h2 className="section-title">
              <span className="icon">⭐</span>
              Destaques da Semana
            </h2>
            
            <div className="news-grid">
              {featuredNews.map((news, index) => (
                <div 
                  key={news.id} 
                  className="news-card"
                  onMouseEnter={() => setHoveredCard(news.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="card-icon">{news.icon}</div>
                  <span className="category-badge">{news.category}</span>
                  <h3 className="card-title">{news.title}</h3>
                  <p className="card-excerpt">{news.excerpt}</p>
                  
                  <div className="card-meta">
                    <div className="author-info">
                      <div className="author-avatar">
                        {news.author.charAt(0)}
                      </div>
                      <div>
                        <div style={{fontWeight: 600, color: '#4a5568'}}>{news.author}</div>
                        <div>{news.date}</div>
                      </div>
                    </div>
                    <div className="read-time">
                      <span>📖</span>
                      <span>{news.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="stats-section">
            <div className="stat-card">
              <div className="stat-number">1.2M+</div>
              <div className="stat-label">Leitores</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5.8K+</div>
              <div className="stat-label">Artigos</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">850+</div>
              <div className="stat-label">Colaboradores</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Atualizações</div>
            </div>
          </section>

          {/* Footer */}
          <footer className="footer">
            <p style={{fontSize: '18px', fontWeight: 600, marginBottom: '10px'}}>
              Fique conectado com as últimas tendências em tecnologia
            </p>
            <p style={{opacity: 0.8}}>
              © 2025 Tabnews. Todos os direitos reservados.
            </p>
            
            <div className="footer-icons">
              <span className="footer-icon">🐦</span>
              <span className="footer-icon">📘</span>
              <span className="footer-icon">📸</span>
              <span className="footer-icon">💼</span>
              <span className="footer-icon">📺</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Home;
