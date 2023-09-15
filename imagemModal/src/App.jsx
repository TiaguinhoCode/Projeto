import { Children, useState } from 'react';
import Modal from './components/Modal/Modal'
import Teste from './components/Modal/Teste/Teste';

export default function App() {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      <div>
        front Begginers - Modal
      </div>

      <button onClick={() => setOpenModal(true)}>Abrir o modal</button>

      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        <Teste/>
        
      </Modal>
    </div>
  );
}
