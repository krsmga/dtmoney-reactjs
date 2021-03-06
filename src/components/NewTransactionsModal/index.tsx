import Modal from 'react-modal'
import { Container } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    //prettier-ignore
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose} 
      overlayClassName='react-modal-overlay' 
      className='react-modal-content'
    >
      <Container>
        <h2>Cadastrar nova transação</h2>

        <input 
          placeholder='Titulo' 
        />

        <input 
          type='number' 
          placeholder='Valor' 
        />

        <input 
          placeholder='Categoria' 
        />
        
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  )
}
