import React, { useState } from "react";
import { useEffect } from "react";
import Error from "./Error";
import PropTypes from "prop-types"

const Formulario = ({ search, setSearch, setConsult }) => {
  const [error, setError] = useState(false);

  const { ciudad, pais } = search;

  useEffect(() => {
    let elementos = document.querySelectorAll("select");
    M.FormSelect.init(elementos);
  }, []);

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.trim() == "" || pais.trim() == "") {
      setError(true);
      return;
    }
    setError(false);
    setConsult(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error mensaje="todos los campos son obligatorios" /> : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          onChange={handleChange}
          value={ciudad}
        />
        <label htmlFor="ciudad">ciudad</label>
      </div>
      <div className="input-field col s12">
        <select onChange={handleChange} name="pais" id="pais" value={pais}>
          <option value="">--seleccionar pais--</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">Mexico</option>
          <option value="VE">Venezuela</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España Peru</option>
          <option value="PE">Peru</option>
        </select>
        <label htmlFor="pais">pais</label>
      </div>
      <div className="input-field col s12">
        <button
          type="submit"
          className="btn-large btn-block waves-effect waves-light yellow accent-4 col s12"
        >
          Buscar Clima
        </button>
      </div>
    </form>
  );
};

Formulario.propTypes = {
  search: PropTypes.object.isRequired,
  setSearch: PropTypes.func.isRequired,
  setConsult: PropTypes.func.isRequired
}
export default Formulario;
