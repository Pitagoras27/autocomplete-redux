import React, { Component } from 'react';
import { connect } from 'react-redux';
// import withRouter from 'react-router-dom';

import Page from './page';

import './styles.css';

class Results extends Component {
  state = {};

  goTo = path => {
    this.props.history.push(path);
  }

  render() {
    const {
      dataList,
      currentPage,
    } = this.props;

    return (
      <Page
        dataList={dataList}
        goTo={this.goTo}
        currentPage={currentPage}
      />
    );
  }
}

const mapStateToProps = store => ({
  dataList: store.results,
});

export default connect(mapStateToProps, null)(Results);
