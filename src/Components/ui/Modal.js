import React, { useState } from "react";
import Modal from "react-modal";

const Modalis = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  return (
    <>
      <button onClick={() => setisModalOpen(true)}>Modal</button>
      <Modal  isOpen={isModalOpen} onRequestClose={() => setisModalOpen(false)}>
        <h2>This is modal</h2>
        <form>
          <input type="text" placeholder="Enter name" />
          <br />
          <input type="text" placeholder="Enter buddy" />
          <button type="submit">Submit</button>
        </form>
        <button onClick={() => setisModalOpen(false)}>close</button>
      </Modal>
    </>
  );
};

export default Modalis;
