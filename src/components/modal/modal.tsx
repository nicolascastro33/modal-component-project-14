import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { TModal } from './modal.types'
import defaultStyle from './style.stories'
import { useOutsideClick } from '../../utils/use-outside-click'
import React from 'react'

const Modal = ({
  setIsModalOpened,
  message,
  modalCloseButtonImg,
  style,
}: TModal) => {
  document.body.style.overflow = 'hidden'

  const closeModal = () => {
    document.body.style.overflow = 'unset'
    setIsModalOpened(false)
  }
  const keyDownBehavior = (e: any) => {
    e.preventDefault()
    if (e.key === 'Escape') {
      closeModal()
    }
    return
  }

  const ref = useOutsideClick(closeModal)

  return (
    <div
      className="modalContainer"
      tabIndex={0}
      id="confirmation"
      onKeyDown={keyDownBehavior}
      style={style?.modalContainer ?? defaultStyle.modalContainer}
    >
      <div
        className="overlayModal"
        style={style?.overlayModal ?? defaultStyle.overlayModal}
      />
      <div
        className="modal"
        ref={ref}
        style={style?.modal ?? defaultStyle.modal}
      >
        <h2>{message}</h2>
        {modalCloseButtonImg ? (
          <img
            src={modalCloseButtonImg}
            onClick={closeModal}
            style={style?.modalCloseButton ?? defaultStyle.modalCloseButton}
          />
        ) : (
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
