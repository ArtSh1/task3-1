import Modal from './Component/Modal';
import './App.css';
import { useState } from 'react';
import Backdrop from './Component/Backdrop';

function App() {

  const [openModal , setOpenModal] = useState(false);

  function closeModal(){
    setOpenModal(false);
  }

  return (
    <div className="App">
      
      <button className='h1' onClick={() => {setOpenModal(true)}}>show popup</button>
      {openModal && <Modal  props={setOpenModal} />}

      <div className='background_div'>
      {openModal && <Backdrop onCancel={closeModal}/>}
      </div>
       
           
       
    </div>
    
  );
}

export default App;
