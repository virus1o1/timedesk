import React from 'react';
import { Form } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';
import './DropdownStyles.css'; // Ensure this file contains the updated CSS

function Dropdown({ label, options, controlId }) {
  return (
    <Form.Group controlId={controlId || "exampleForm.ControlSelect"} className="dropdown-container">
      <Form.Label className="form-label">{label}</Form.Label>
      <div className="dropdown-wrapper">
        <Form.Control as="select" className="dropdown-select">
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </Form.Control>
        <FaChevronDown className="dropdown-icon" />
      </div>
    </Form.Group>
  );
}

export default Dropdown;
