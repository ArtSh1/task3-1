import React from 'react'
import '../App.css';


function Modal({props}) {
  return ( 
  <div className='modalBackground'>
      <div className='modalContainer'>
         
        <div className='title'>
            <h3>Theme Color</h3>
            <h5>Change Theme</h5>
        </div>
        <div className='body'>
            <div className='body_item'>
            <p>Font Color</p>
            <p className='p_color1'>#444444</p>
            <button className='btnColor'></button>
            </div>

            <hr className='hr'></hr>
            
            <div className='body_item'>
            <p>Background Color</p>
            <p className='p_color2'>#FFFFF</p>
            <button className='btnColor1'></button>
            </div>

            <hr className='hr'></hr>

            <div className='body_item'>
            <p>Button Color</p>
            <p className='p_color3'>#2072EF</p>
            <button className='btnColor2'></button>
            </div>

            <hr className='hr'></hr>

            <div className='body_item'>
            <p>Button Border Color</p>
            <p className='p_color4'>#2072EF</p>
            <button className='btnColor3'></button>
            </div>

            <hr className='hr'></hr>

            <div className='body_item'>
            <p>Buttons Mouseover Color</p>
            <p className='p_color5'>#0053D1</p>
            <button className='btnColor4'></button>
            </div>

            <hr className='hr'></hr>

        </div>

        <div className='footer'>
            <button className='btnCancel' onClick={() => props(false)}>Cancel</button>
            <button className='btnSave'>Save</button>
        </div>
      </div>

  </div>
  );
}

export default Modal;