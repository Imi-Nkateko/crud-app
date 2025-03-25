import React from "react";

const ModalForm = ({ isOpen, onClose, mode, onSubmit }) => {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">
            {mode === "edit" ? "Edit Employee" : "Add Employee"}
          </h3>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>

            

            <button onSubmit={onSubmit} className="btn btn-primary">
              {mode === "edit" ? "Edit" : "Add "}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ModalForm;
