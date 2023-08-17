import React from 'react';
import { Link } from 'react-router-dom';
import fondo from "../../images-videos/detail.png"
const Landing = () => {
  return (
    <div style={{ position: 'relavite', height: '100vh'}}>
    
    <img src={fondo} style={{width: "100%", height: "100%"}}/>  

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: "-500px"
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
