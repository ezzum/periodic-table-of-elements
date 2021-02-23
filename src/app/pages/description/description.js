import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './description.scss';

import ExitButton from '../../exit-button/exit-button';
import { GetPageId, GetPageContent } from '../../redux/actions';
import Spinner from '../../spinner/spinner';

function Description({
  activeElementName,
  activeElementPageId,
  activeElementContent,
  GetPageId,
  GetPageContent,
  loading,
}) {
  useEffect(() => {
    GetPageId(activeElementName);
    GetPageContent(activeElementPageId);
  }, [GetPageId, GetPageContent, activeElementName, activeElementPageId]);

  let fragment = (
    <>
      <div
        className="description__content"
        dangerouslySetInnerHTML={createMarkup(activeElementContent)}
      ></div>
    </>
  );

  if (loading) {
    fragment = <Spinner />;
  }

  return (
    <div className="description">
      <ExitButton />
      <h1>{activeElementName}</h1>
      {fragment}
    </div>
  );
}

function createMarkup(data) {
  return {
    __html: data,
  };
}

function mapStateToProps(state) {
  return {
    activeElementName: state.activeElement.name,
    activeElementPageId: state.activeElement.pageId,
    activeElementContent: state.activeElement.content,
    loading: state.loading,
  };
}

const mapDispatchToProps = {
  GetPageId,
  GetPageContent,
};

export default connect(mapStateToProps, mapDispatchToProps)(Description);
