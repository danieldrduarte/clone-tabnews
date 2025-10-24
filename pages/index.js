function Home() {
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
        }
      `}</style>
      
      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: radial-gradient(ellipse at bottom, #1B2735 0%, #090a0f 100%);
          padding: 20px;
          position: relative;
          overflow: hidden;
        }

        /* Camada de estrelas pequenas */
        .container::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, white, transparent),
            radial-gradient(2px 2px at 60px 70px, white, transparent),
            radial-gradient(1px 1px at 50px 50px, white, transparent),
            radial-gradient(1px 1px at 130px 80px, white, transparent),
            radial-gradient(2px 2px at 90px 10px, white, transparent),
            radial-gradient(1px 1px at 120px 125px, white, transparent),
            radial-gradient(1px 1px at 10px 100px, white, transparent),
            radial-gradient(2px 2px at 170px 40px, white, transparent);
          background-size: 200px 200px;
          background-repeat: repeat;
          animation: twinkle 5s ease-in-out infinite, drift 60s linear infinite;
          opacity: 0.8;
        }

        /* Camada de estrelas médias brilhantes */
        .container::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(3px 3px at 40px 60px, rgba(255, 255, 255, 0.9), transparent),
            radial-gradient(2px 2px at 140px 30px, rgba(173, 216, 230, 0.8), transparent),
            radial-gradient(3px 3px at 80px 120px, rgba(255, 255, 255, 0.9), transparent),
            radial-gradient(2px 2px at 160px 90px, rgba(200, 220, 255, 0.8), transparent);
          background-size: 300px 300px;
          background-repeat: repeat;
          animation: twinkle 3s ease-in-out infinite alternate;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes drift {
          from { transform: translate(0, 0); }
          to { transform: translate(-200px, -200px); }
        }

        /* Estrelas grandes brilhantes */
        .stars-large {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 2px),
            radial-gradient(circle, rgba(173, 216, 230, 0.6) 0%, transparent 3px),
            radial-gradient(circle, rgba(255, 200, 150, 0.7) 0%, transparent 2px),
            radial-gradient(circle, rgba(200, 220, 255, 0.6) 0%, transparent 3px);
          background-position: 15% 20%, 85% 30%, 25% 70%, 75% 80%;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          animation: pulse-stars 4s ease-in-out infinite;
        }

        @keyframes pulse-stars {
          0%, 100% { 
            opacity: 0.6;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.1);
          }
        }

        .card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 60px 80px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          border: 1px solid rgba(255, 255, 255, 0.18);
          text-align: center;
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          max-width: 600px;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 48px 0 rgba(99, 102, 241, 0.4);
        }

        .code-brackets {
          color: #6366f1;
          font-family: 'Courier New', monospace;
          font-size: 48px;
          font-weight: bold;
          margin-bottom: 10px;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .greeting {
          color: #a78bfa;
          font-family: 'Courier New', monospace;
          font-size: 18px;
          margin-bottom: 15px;
          letter-spacing: 2px;
        }

        .name {
          font-size: 48px;
          font-weight: bold;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
          animation: fadeInUp 0.8s ease-out;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .subtitle {
          color: #c7d2fe;
          font-size: 18px;
          margin-bottom: 0;
          font-family: 'Courier New', monospace;
        }

        .contact-buttons {
          display: flex;
          gap: 12px;
          margin-top: 40px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .contact-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: white;
          padding: 16px 16px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .contact-button:hover {
          transform: translateY(-2px);
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .linkedin-button {
          background: linear-gradient(135deg, #0077b5 0%, #005582 100%);
          box-shadow: 0 4px 15px 0 rgba(0, 119, 181, 0.4);
        }

        .linkedin-button:hover {
          box-shadow: 0 6px 20px 0 rgba(0, 119, 181, 0.6);
        }

        .github-button {
          background: linear-gradient(135deg, #333 0%, #000 100%);
          box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.4);
        }

        .github-button:hover {
          box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.6);
        }

        .gmail-button {
          background: linear-gradient(135deg, #EA4335 0%, #C5221F 100%);
          box-shadow: 0 4px 15px 0 rgba(234, 67, 53, 0.4);
        }

        .gmail-button:hover {
          box-shadow: 0 6px 20px 0 rgba(234, 67, 53, 0.6);
        }

        .whatsapp-button {
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          box-shadow: 0 4px 15px 0 rgba(37, 211, 102, 0.4);
        }

        .whatsapp-button:hover {
          box-shadow: 0 6px 20px 0 rgba(37, 211, 102, 0.6);
        }

        .contact-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }

        .tech-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 30px;
          opacity: 0.6;
        }

        .tech-icon {
          font-size: 32px;
          animation: float 3s ease-in-out infinite;
        }

        .tech-icon:nth-child(1) { animation-delay: 0s; }
        .tech-icon:nth-child(2) { animation-delay: 0.3s; }
        .tech-icon:nth-child(3) { animation-delay: 0.6s; }
        .tech-icon:nth-child(4) { animation-delay: 0.9s; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @media (max-width: 768px) {
          .card {
            padding: 40px 30px;
          }
          
          .name {
            font-size: 32px;
          }
          
          .code-brackets {
            font-size: 32px;
          }

          .contact-buttons {
            gap: 10px;
          }

          .contact-button {
            padding: 14px 14px;
          }

          .contact-icon {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>

      <div className="container">
        {/* Estrelas grandes brilhantes */}
        <div className="stars-large"></div>
        
        <div className="card">
          <div className="code-brackets">{'<>'}</div>
          <div className="greeting">const developer = {}</div>
          <h1 className="name">Daniel Duarte</h1>
          <p className="subtitle">{'{ Building the future with code }'}</p>
          
          <div className="contact-buttons">
            <a 
              href="https://www.linkedin.com/in/danieldrduarte/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-button linkedin-button"
            >
              <svg className="contact-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <a 
              href="https://github.com/danieldrduarte" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-button github-button"
            >
              <svg className="contact-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            <a 
              href="mailto:danieldrduarte@gmail.com" 
              className="contact-button gmail-button"
            >
              <svg className="contact-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
              </svg>
            </a>

            <a 
              href="https://wa.me/5561984283558" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-button whatsapp-button"
            >
              <svg className="contact-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>

          <div className="tech-icons">
            <span className="tech-icon">💻</span>
            <span className="tech-icon">🚀</span>
            <span className="tech-icon">⚡</span>
            <span className="tech-icon">🎯</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;