/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { Formulario } from './style';

import api from '../../services/api';

const Create: React.FC = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState('');
  const [catgory, setCategory] = useState('');

  const createNewTransaction = async (e: { preventDefault: () => void }) => {
    // e.preventDefault();
    // const data = {
    //   title: 'teste',
    //   value: 500,
    //   type: 'income',
    //   category: 'testando',
    // };
    // try {
    //   await api.post('/transactions', data);
    // } catch (error) {
    //   console.log(error);
    // }
    console.log('');
  };

  return (
    <div>
      <div>
        <section>
          <h1>Cadastrar nova transação</h1>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>
        <Formulario>
          <input type="text" name="" placeholder="Name" />
          <input type="text" name="" placeholder="preço" />
          <div>
            <button>Income</button>
            <button>Outcome</button>
          </div>
          <input type="text" placeholder="Categoria" />
          <button type="submit" onClick={createNewTransaction}>
            Enviar
          </button>
        </Formulario>
      </div>
    </div>
  );
};

export default Create;
