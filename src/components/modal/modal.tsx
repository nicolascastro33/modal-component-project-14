import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
// import './modal.css'
import { TModal } from './modal.types'
import  defaultStyle from './style.stories'


const Modal = ({
  setIsModalOpened,
  message,
  modalCloseButtonImg,
  style
}: TModal 
) => {
  document.body.style.overflow = 'hidden'

  const closeModal = (e: any) => {
    e.preventDefault()
    document.body.style.overflow = 'unset'
    setIsModalOpened(false)
  }
  return (
    <div className="modalContainer" id="confirmation" style={style?.modalContainer ?? defaultStyle.modalContainer}>
      <div className="overlayModal" style={style?.overlayModal ?? defaultStyle.overlayModal}/>
      <div className="modal" style={style?.modal ?? defaultStyle.modal}>
        <h2>{message}</h2>
        {modalCloseButtonImg ? (
          <img src={modalCloseButtonImg} onClick={closeModal} style={style?.modalCloseButton ?? defaultStyle.modalCloseButton}/>
        ): (
              <FontAwesomeIcon
          onClick={closeModal}
          icon={faCircleXmark}
          className="modalCloseButton"
          style={style?.modalCloseButton ?? defaultStyle.modalCloseButton}
        />
        )}
    
      </div>
    </div>
  )
}

export default Modal

