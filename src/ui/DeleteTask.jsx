import ConfirmDelete from "../components/ConfirmDelete";
import Modal from "./Modal";
import { useState } from "react";

function DeleteTask({ id, task }) {
  const [openModal, handleCloseModal] = useState(false);

  return (
    <div>
      <button className="btn btn-del" onClick={handleCloseModal}>
        Delete
      </button>

      {openModal && (
        <Modal isOpen={openModal} handleCloseModal={handleCloseModal}>
          <ConfirmDelete
            isOpen={openModal}
            handleCloseModal={handleCloseModal}
            task={task}
            id={id}
          />
        </Modal>
      )}
    </div>
  );
}

export default DeleteTask;
