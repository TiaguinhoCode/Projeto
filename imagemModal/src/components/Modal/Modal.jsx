const Background_Style = {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'rgb(0, 0, 0, 0.7)',
    zIndex: '100'
}

const Modal_Style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    tranform: 'translate(-10%, 10%)',
    padding: '150px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    color: '#000'
}
 

const Modal = ({ isOpen, children, setModalOpen }) => {
    if (isOpen) {
        return (
            <div style={Background_Style}>
                <div style={Modal_Style}>
                    <div>
                        {children}
                    </div>
                    <div>
                        <button onClick={setModalOpen}>Fechar</button>
                    </div>
                </div>
            </div>
        )
    }

    return null
}

export default Modal