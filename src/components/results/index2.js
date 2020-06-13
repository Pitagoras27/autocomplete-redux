import React, { Component } from 'react';
// import withRouter from 'react-router-dom';
import Page from './page';

import './styles.css';


class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.goTo = this.goTo.bind(this);
  }

  goTo(path) {
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

export default Results;
