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
          margin-bottom: 40px;
          font-family: 'Courier New', monospace;
        }

        .linkedin-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #0077b5 0%, #005582 100%);
          color: white;
          padding: 16px 32px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px 0 rgba(0, 119, 181, 0.4);
          border: 2px solid transparent;
        }

        .linkedin-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px 0 rgba(0, 119, 181, 0.6);
          border: 2px solid #0077b5;
          background: linear-gradient(135deg, #005582 0%, #0077b5 100%);
        }

        .linkedin-icon {
          width: 24px;
          height: 24px;
        }

        .tech-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 40px;
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
          
          <a 
            href="https://www.linkedin.com/in/danieldrduarte/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="linkedin-button"
          >
            <svg className="linkedin-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>

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