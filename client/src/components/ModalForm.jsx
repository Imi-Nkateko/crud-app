import React, { useEffect, useRef, useState } from "react";

const ModalForm = ({ isOpen, onClose, mode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [rate, setRate] = useState("");
  const [status, setStatus] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal()
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  const handleStatusChange = (e) => {
    setStatus(e.target.value === "Active");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    onClose();
  };

  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg py-4">
          {mode === "edit" ? "Edit Employee" : "Add Employee"}
        </h3>
        <form method="dialog">
          <label className="input mb-4 input-bordered flex items-center gap-2">
            Name:
            <input
              type="text"
              className="grow"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="input mb-4 input-bordered flex items-center gap-2">
            Email:
            <input
              type="email"
              className="grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="input mb-4 input-bordered flex items-center gap-2">
            Job:
            <input
              type="text"
              className="grow"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </label>

          <div className="flex mb-4 justify-between gap-4">
            <label className="input input-bordered flex items-center gap-2">
              Rate:
              <input
                type="number"
                className="grow"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </label>
            <select
              value={status ? "Active" : "Inactive"}
              className="select"
              onChange={handleStatusChange}
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Close button */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>

          {/* Submit button */}
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            {mode === "edit" ? "Edit" : "Add "}
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default ModalForm;
