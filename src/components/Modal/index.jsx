import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#000000',
    width: '50%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
}

export function ModalComponent({ modalIsOpen, closeModal, children }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {children}
    </Modal>
  )
}
