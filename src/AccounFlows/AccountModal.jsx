import React, { useState } from 'react';

const ChangeFieldModal = ({ field, value, onChange }) => {
  const [newValue, setNewValue] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = () => {
    onChange(newValue);
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Change</button>
      {isOpen && (
        <div>
          <input value={newValue} onChange={(e) => setNewValue(e.target.value)} />
          <button onClick={handleSubmit}>Save</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ChangeFieldModal;
