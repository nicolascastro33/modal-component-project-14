## Modal Component

This versatile React modal component is perfect for confirming actions like employee deletion or any other action requiring user confirmation. Easily integrate it into your app and customize the styling to match your design.

## Installation

To install the modal component, you need to have React and ReactDOM installed in your project. If they aren't already, you can install them via npm:

```bash
npm install react react-dom
```

Then, you can install the `modal-component` via npm:

```bash
npm install modal-component-openclassrooms
```

Or, if you use Yarn:

```bash
yarn add modal-component-openclassrooms
```

## Usage

Here's a basic example of how to use the `Modal` component in your project:

```jsx
import React, { useState } from 'react';
import Modal from 'modal-component-ocr-finalproject';
import closeButtonImage from "./closeButtonImage"

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div>
      <button onClick={handleOpen}>Open Modal</button>
      {isModalOpen &&
        <Modal
        setIsModalOpen={setIsModalOpen}
        message="You're account has been created!"
        closeButtonImage={closeButtonImage}
        style={{
          overlayModal: {
            backgroundColor: "#333333d3",
          }
          modalContainer:{
            width: "100vw",
            height: "100vh",
            overflowY: "hidden",
            zIndex: "10",
          }
          modalCloseButton: {
            width: "30px",
            height: "30px",
            cursor: "pointer",
          }
          modal:{
            backgroundColor: "white",
            borderRadius: "10px 0 10px 10px",
          }
        }}
      />
      }
    </div>
  );
};

export default App;
```

## Props

| Prop                 | Type     | Description                                                                                                                                                            | Required | Default                  |
| -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------ |
| `message`            | `string` | The message or content inside the modal.                                                                                                                               | Yes      | N/A                      |
| `setIsModalOpen`     | `func`   | The set function from a useState hook that will turn your current state at false(either by clicking outside the modal or the close button or pressing the escape key). | Yes      | N/A                      |
| `closeButtonImage`   | `string` | Link to the image you want for your close button.                                                                                                                      | false    | `N/A`                    |
| `style`              | `object` | Custom global styles for the compoenent modal, passed as an object of CSS properties.                                                                                  | No       | `{}`                     |
| `style.overlayModal` | `object` | Custom styles for the modal overlay, passed as an object of CSS properties.                                                                                            | No       | `{  position: "absolute", height: "100%", width: "100%", backgroundColor: "#333333d3",}`    |
| `style.modalContainer` | `object` | Custom styles for the container of the modal, passed as an object of CSS properties. | No |  `{ position: "fixed", top: "0", width: "100vw", height: "100vh", overflowY: "hidden", zIndex: "10",}`  |
| `style.modalCloseButton` | `object` | Custom styles for the close button modal, passed as an object of CSS properties. | No | `{  position: "absolute", top: "-10px", right: "-10px", width: "30px", height: "30px", cursor: "pointer", transition: "transform 0.5s", transform: "scale(1)",}` |
| `style.modal` | `object` | Custom styles for the modal, passed as an object of CSS properties. | No | `{    position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "white", borderRadius: "10px 0 10px 10px", border: "1px solid black", width: "70%", display: "flex", alignItems: "center", padding: "15px", zIndex: "10",}` |


## Key Features

- **Customizable**: Easily adjust colors, text, and styles via the `style` prop.
- **Keyboard Support**: Close the modal by pressing the `Escape` key.
- **Responsive**: Adjusts well to different screen sizes.
- **User-friendly**: Closes on clicking outside the modal.
