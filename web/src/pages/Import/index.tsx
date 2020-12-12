/* eslint-disable no-console */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'antd';

import filesize from 'filesize';

import Header from '../../components/Header';
import FileList from '../../components/FileList';
import Upload from '../../components/Upload';
import 'antd/dist/antd.css';

import { Container, Title, ImportFileContainer, Footer } from './styles';

import alert from '../../assets/alert.svg';
import api from '../../services/api';

interface FileProps {
  file: File;
  name: string;
  readableSize: string;
}

const Import: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
  const history = useHistory();

  async function handleUpload(): Promise<void | Error> {
    const data = new FormData();

    if (!uploadedFiles.length) {
      Modal.warning({
        title: 'Arquivo csv não selecionado',
      });

      return;
    }

    const { file, name } = uploadedFiles[0];

    data.append('file', file, name);

    try {
      await api.post('/transactions/import', data);

      history.push('/');
    } catch (err) {
      console.error(err);
      Modal.error({
        title: 'Falha ao enviar',
      });
    }
  }

  function submitFile(files: File[]): void {
    const uploadFiles = files.map(file => ({
      file,
      name: file.name,
      readableSize: filesize(file.size),
    }));
    setUploadedFiles(uploadFiles);
  }

  return (
    <>
      <Header size="small" isVisible />
      <Container>
        <Title>Importar uma transação</Title>
        <ImportFileContainer>
          <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

          <Footer>
            <p>
              <img src={alert} alt="Alert" />
              Permitido apenas arquivos CSV
            </p>
            <button onClick={handleUpload} type="button">
              Enviar
            </button>
          </Footer>
        </ImportFileContainer>
      </Container>
    </>
  );
};

export default Import;
