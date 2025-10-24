function Amor() {
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
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          padding: 20px;
          position: relative;
          overflow: hidden;
        }

        /* Corações flutuantes - camada 1 */
        .hearts {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .heart {
          position: absolute;
          font-size: 30px;
          color: rgba(255, 255, 255, 0.3);
          animation: float-up 8s infinite ease-in;
        }

        .heart:nth-child(1) { left: 10%; animation-delay: 0s; font-size: 40px; }
        .heart:nth-child(2) { left: 20%; animation-delay: 1s; font-size: 25px; }
        .heart:nth-child(3) { left: 30%; animation-delay: 2s; font-size: 35px; }
        .heart:nth-child(4) { left: 40%; animation-delay: 0.5s; font-size: 28px; }
        .heart:nth-child(5) { left: 50%; animation-delay: 3s; font-size: 32px; }
        .heart:nth-child(6) { left: 60%; animation-delay: 1.5s; font-size: 38px; }
        .heart:nth-child(7) { left: 70%; animation-delay: 2.5s; font-size: 26px; }
        .heart:nth-child(8) { left: 80%; animation-delay: 0.8s; font-size: 33px; }
        .heart:nth-child(9) { left: 90%; animation-delay: 2.2s; font-size: 29px; }
        .heart:nth-child(10) { left: 15%; animation-delay: 3.5s; font-size: 36px; }

        @keyframes float-up {
          0% {
            bottom: -10%;
            opacity: 0;
            transform: translateX(0) rotate(0deg);
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            bottom: 110%;
            opacity: 0;
            transform: translateX(20px) rotate(360deg);
          }
        }

        /* Partículas brilhantes */
        .sparkles {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
            radial-gradient(circle, rgba(255, 192, 203, 0.6) 1px, transparent 1px),
            radial-gradient(circle, rgba(255, 255, 255, 0.7) 2px, transparent 2px);
          background-size: 50px 50px, 80px 80px, 120px 120px;
          background-position: 0 0, 40px 60px, 80px 20px;
          animation: sparkle 3s ease-in-out infinite;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        .card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border-radius: 30px;
          padding: 80px 100px;
          box-shadow: 
            0 8px 32px 0 rgba(255, 105, 180, 0.4),
            0 0 80px rgba(255, 192, 203, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.3);
          text-align: center;
          position: relative;
          z-index: 1;
          animation: pulse-card 3s ease-in-out infinite;
        }

        @keyframes pulse-card {
          0%, 100% {
            transform: scale(1);
            box-shadow: 
              0 8px 32px 0 rgba(255, 105, 180, 0.4),
              0 0 80px rgba(255, 192, 203, 0.3);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 
              0 12px 40px 0 rgba(255, 105, 180, 0.6),
              0 0 100px rgba(255, 192, 203, 0.5);
          }
        }

        /* Grande coração pulsante acima do texto */
        .big-heart {
          font-size: 120px;
          animation: heartbeat 1.5s ease-in-out infinite;
          margin-bottom: 30px;
          display: inline-block;
          filter: drop-shadow(0 0 20px rgba(255, 105, 180, 0.8));
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          10%, 30% {
            transform: scale(1.1);
          }
          20%, 40% {
            transform: scale(1);
          }
        }

        .message {
          font-size: 72px;
          font-weight: bold;
          background: linear-gradient(135deg, #fff 0%, #ffb6c1 50%, #fff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
          animation: glow 2s ease-in-out infinite;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
          letter-spacing: 2px;
        }

        @keyframes glow {
          0%, 100% {
            filter: brightness(1) drop-shadow(0 0 10px rgba(255, 192, 203, 0.5));
          }
          50% {
            filter: brightness(1.2) drop-shadow(0 0 20px rgba(255, 192, 203, 0.8));
          }
        }

        .subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 24px;
          font-weight: 300;
          font-style: italic;
          margin-top: 20px;
          animation: fadeIn 2s ease-in;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Corações girando ao redor do card */
        .rotating-hearts {
          position: absolute;
          width: 100%;
          height: 100%;
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .orbit-heart {
          position: absolute;
          font-size: 40px;
          color: rgba(255, 255, 255, 0.6);
        }

        .orbit-heart:nth-child(1) {
          top: 0%;
          left: 50%;
          transform: translateX(-50%);
        }

        .orbit-heart:nth-child(2) {
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
        }

        .orbit-heart:nth-child(3) {
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
        }

        .orbit-heart:nth-child(4) {
          top: 50%;
          left: 0%;
          transform: translateY(-50%);
        }

        @media (max-width: 768px) {
          .card {
            padding: 60px 40px;
          }
          
          .message {
            font-size: 48px;
          }

          .big-heart {
            font-size: 80px;
          }

          .subtitle {
            font-size: 18px;
          }
        }
      `}</style>

      <div className="container">
        {/* Corações flutuando */}
        <div className="hearts">
          <div className="heart">💖</div>
          <div className="heart">💕</div>
          <div className="heart">💗</div>
          <div className="heart">💓</div>
          <div className="heart">💝</div>
          <div className="heart">💖</div>
          <div className="heart">💕</div>
          <div className="heart">💗</div>
          <div className="heart">💓</div>
          <div className="heart">💝</div>
        </div>

        {/* Partículas brilhantes */}
        <div className="sparkles"></div>

        <div className="card">
          {/* Corações orbitando */}
          <div className="rotating-hearts">
            <div className="orbit-heart">💕</div>
            <div className="orbit-heart">💕</div>
            <div className="orbit-heart">💕</div>
            <div className="orbit-heart">💕</div>
          </div>

          <div className="big-heart">❤️</div>
          <h1 className="message">Eu te amo</h1>
          <p className="subtitle">Hoje, amanhã e sempre ✨</p>
        </div>
      </div>
    </>
  );
}

export default Amor;

