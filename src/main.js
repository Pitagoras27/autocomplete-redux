import React, { Component } from 'react';

import AppBar from './components/appBar';
import Results from './components/results/index2';
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
    const matchItem = items.filter(element => element.id === idItem);

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
              currentItem={matchItem[0]}
              currentPage={this.onSetCurrentPage}
            />
        }
      </>
    )
  }
}

export default Main;