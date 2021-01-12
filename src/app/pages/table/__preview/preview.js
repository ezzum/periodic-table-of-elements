import React from 'react';
import { connect } from 'react-redux';

import { PreviewStyled } from './preview-styled';

function Preview({ previewElement }) {
  return (
    <PreviewStyled>
      <div>{previewElement.number}</div>
      <div>{previewElement.name}</div>
      <div>{previewElement.group}</div>
      <div>{previewElement.symbol}</div>
      <div>{previewElement.atomicMass}</div>
    </PreviewStyled>
  );
}

function mapStateToProps(state) {
  return {
    previewElement: state.previewElement,
  };
}

export default connect(mapStateToProps)(Preview);
