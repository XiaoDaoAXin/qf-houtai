import React from 'react';
import { connect } from 'dva';
import Home from '../../components/home/home'

function IndexPage() {
  return (
    <div style={{ height: '100%' }}>
      <Home />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
