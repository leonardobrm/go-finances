import React, { useState, FormEvent } from 'react';
import { Modal } from 'antd';

import { Form, Main } from './style';
import 'antd/dist/antd.css';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

import Header from '../../components/Header/index';

import api from '../../services/api';

const Create: React.FC = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');

  const clearFields = (): void => {
    setTitle('');
    setValue('');
    setType('');
    setCategory('');
  };

  async function createNewTransaction(
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();

    const data = {
      title,
      value,
      type,
      category,
    };

    try {
      await api.post('/transactions', data);
      Modal.success({
        title: 'Transação criada com sucesso',
        onOk: () => clearFields(),
      });
    } catch (err) {
      console.error(err);
      Modal.error({
        title: 'Erro ao criar transação',
        content: 'Verifique se os campos foram preenchidos corretamente',
      });
    }
  }

  const addIncome = (): void => {
    setType('income');
  };

  const addOutcome = (): void => {
    setType('outcome');
  };

  return (
    <>
      <Header size="small" isVisible={false} />
      <div>
        <Main>
          <section>
            <h1>Cadastro</h1>
          </section>
          <Form onSubmit={createNewTransaction}>
            <input
              type="text"
              placeholder="Nome"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <input
              type="number"
              placeholder="preço"
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            <div>
              <button
                type="button"
                className="incomeButton"
                onClick={addIncome}
              >
                <img src={income} alt="income" width={25} />
                Income
              </button>
              <button
                type="button"
                className="outcomeButton"
                onClick={addOutcome}
              >
                <img src={outcome} alt="outcome" width={25} />
                Outcome
              </button>
            </div>
            <input
              type="text"
              placeholder="Categoria"
              value={category}
              onChange={e => setCategory(e.target.value)}
            />
            <button className="sendForm" type="submit">
              Cadastrar
            </button>
          </Form>
        </Main>
      </div>
    </>
  );
};

export default Create;
