import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  isVisible: true | false;
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  isVisible = true,
}: HeaderProps) => {
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        {isVisible ? (
          <nav>
            <div>
              <Link to="/">Listagem</Link>
              <Link to="/import">Importar</Link>
              <Link to="/adicionar">adicionar</Link>
            </div>
          </nav>
        ) : (
          <nav>
            <div>
              <Link to="/">
                <FiArrowLeft size={30} color="#fff" />
              </Link>
            </div>
          </nav>
        )}
      </header>
    </Container>
  );
};

export default Header;
