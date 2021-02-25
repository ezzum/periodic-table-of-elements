import React from 'react';
import { connect } from 'react-redux';

import { PreviewStyled, ElementInfo } from './preview-styled';

function Preview({ previewElement }) {
  let fragment = (
    <>
      <ElementInfo>
        <div>Порядковый номер</div>
        <div>{previewElement.number}</div>
      </ElementInfo>
      <ElementInfo>
        <div>Название</div>
        <div>{previewElement.name}</div>
      </ElementInfo>
      <ElementInfo>
        <div>Группа</div>
        <div>
          {previewElement.group === 'metal'
            ? 'Металлы'
            : previewElement.group === 'nonMetal'
            ? 'Неметаллы'
            : 'Полуметаллы'}
        </div>
      </ElementInfo>
      <ElementInfo>
        <div>Символ</div>
        <div>{previewElement.symbol}</div>
      </ElementInfo>
      <ElementInfo>
        <div>Атомная масса</div>
        <div>{previewElement.atomicMass}</div>
      </ElementInfo>
    </>
  );

  if (!previewElement.number) {
    fragment = (
      <>
        <div>{previewElement.name}</div>
        <div>{previewElement.group}</div>
        <div>{previewElement.symbol}</div>
      </>
    );
  }

  return <PreviewStyled className={'preview'}>{fragment}</PreviewStyled>;
}

function mapStateToProps(state) {
  return {
    previewElement: state.previewElement,
  };
}

export default connect(mapStateToProps)(Preview);
