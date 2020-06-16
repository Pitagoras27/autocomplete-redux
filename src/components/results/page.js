import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import AppBar from '../appBar';

const Results = props => {
  return (
    <div>
      <AppBar />
      <div className="results-page">
        {!props.dataList.length ?
          <Typography variant="h5" component="h3" className="page-message">
            There are no results
          </Typography> :
          props.dataList.map(item =>
            (<div className="card-container" key={item.id}>
              <Card
                className="card"
                onClick={() => props.currentPage('details', item.id)}
              >
                <CardActionArea>
                  
                  <CardMedia
                    className="card-media"
                    image={item.image}
                    title={item.title}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography component="p">
                      {item.content}
                    </Typography>
                  </CardContent>

                </CardActionArea>

              </Card>
            </div>)
          )}
      </div>
    </div>
  )
}

export default Results;
