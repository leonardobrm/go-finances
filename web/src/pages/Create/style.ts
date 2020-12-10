import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin-top: 30px;

  div {
    width: 339px;
    display: flex;
    justify-content: space-between;
    margin-top: 14px;
  }

  input {
    height: 45px;
    border: none;
    border-radius: 5px solid;
    padding: 15px;
    margin-top: 14px;
    color: #969cb2;
    font-weight: normal;
    line-height: 21px;
  }

  input:focus {
    border: 1px solid #12a454;
    border-radius: 3px;
  }

  button {
    height: 50px;
    width: 165px;
    margin-right: 0px;
    background: #f0f2f5;
    color: #363f5f;

    /* Textos */
    font-size: 14px;
    font-weight: 400;
    border: 1.5px solid #969cb3;
    box-sizing: border-box;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-right: 10px;
    }
  }

  .incomeButton:hover {
    border-color: #12a454;
  }

  .incomeButton:focus {
    background: #cbf7c7;
  }

  .outcomeButton:hover {
    border-color: #e83f5b;
  }

  .outcomeButton:focus {
    background: #ffbfaa;
  }

  .sendForm {
    width: 348px;
    border: none;
    border-radius: 5px;
    margin-top: 14px;
    background: #ff872c;
    color: #f0f2f5;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;
