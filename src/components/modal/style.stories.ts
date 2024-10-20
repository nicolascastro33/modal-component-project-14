
export const modalContainer = {
  position: "fixed",
  top: "0",
  width: "100vw",
  height: "100vh",
  overflowY: "hidden",
  zIndex: "10",
}
  
  export const overlayModal = {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "#333333d3",
  }
  
  export const modalCloseButton = {
    position: "absolute",
    top: "-10px",
    right: "-10px",
    width: "30px",
    height: "30px",
    cursor: "pointer",
    transition: "transform 0.5s",
    transform: "scale(1)",
    "&:hover": {
      transform: "scale(1.2)",
    }
  }
  
  export const modal = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    borderRadius: "10px 0 10px 10px",
    border: "1px solid black",
    width: "70%",
    display: "flex",
    alignItems: "center",
    padding: "15px",
    zIndex: "10",
  }

 const defaultStyle = {
    overlayModal,
    modalContainer,
    modalCloseButton,
    modal,
  }

  export default defaultStyle
// export * as defaultStyle from './style.stories'