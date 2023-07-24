import React from 'react'
import './QrComponent.css';
import QrImage from './assets/image-qr-code.png';

const QrComponent = () => {
  return (
      <div className='qr-wrapper'>
        <h2>Qr Code Component</h2>
        <div class="qr-component">
          <img src={QrImage} alt="qr-code"/>

          <span>
            Improve your front-end skills by building projects
          </span>

          <p>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
  )
}

export default QrComponent