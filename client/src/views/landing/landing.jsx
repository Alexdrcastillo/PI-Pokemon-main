import React from 'react';
import { Link } from 'react-router-dom';
import videoFondo from "../../images-videos/videoFondo.mp4"

const Landing = () => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src={videoFondo} type="video/mp4" />
      </video>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <button
          style={{
            backgroundColor: '#3B4CCA',
            color: '#FFCB05',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer'
          }}
        >
          <Link to="/home" style={{ color: '#FFCB05', textDecoration: 'none' }}>
            Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Landing;
