export type TModal = {
    setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>
    message: string
    modalCloseButtonImg?: string 
    style?: {
      overlayModal?: Object
      modalContainer?:Object
      modalCloseButton?: Object
      modal?:Object
    }
  }