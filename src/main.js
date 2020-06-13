import React, { Component } from 'react';

import AppBar from './components/appBar';
import Results from './components/results';
import Details from './components/details';

import items from './data/items';

class Main extends Component {
  state = {
    onPage: 'results',
    idItem: null,
  }

  onSetCurrentPage = (page, idItem) => {
    this.setState({
      onPage: page,
      idItem,
    })
  }
  render() {
    const {
      onPage,
      idItem,
    } = this.state;

    return (
      <>
        <AppBar suggestions={null} />
        { onPage === 'results' &&
            <Results 
              dataList={items}
              currentPage={this.onSetCurrentPage}
            />
        }
        { onPage === 'details' &&
            <Details
              currentItem={items[idItem]}
              currentPage={this.onSetCurrentPage}
            />
        }
      </>
    )
  }
}

export default Main;