import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { clearDescription } from '../redux/actions';
import { ExitStyled } from './exit-button-styled';

function ExitButton({ clearDescription }) {
  return (
    <ExitStyled
      as={Link}
      to="/"
      className="exit-button"
      onClick={() => clearDescription()}
    >
      Назад в таблицу
    </ExitStyled>
  );
}

const mapDispatchToProps = {
  clearDescription,
};

export default connect(null, mapDispatchToProps)(ExitButton);
