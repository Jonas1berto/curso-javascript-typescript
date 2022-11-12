import React from 'react';
import PropTypes from 'prop-types';
// Form icone de + do botão
import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input
        onChange={handleChange}
        type="text"
        className="adcTarefa"
        value={novaTarefa}
      />
      <button type="submit" className="btnTarefa">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
