import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Details = props => {
  return (
    <div className="details-page">
      <Paper
        elevation={1}
        className="paper-container"
      >
        <Typography gutterBottom variant="h5" component="h2">
          {props.currentItem.title}
        </Typography>

        <div
          className="item-image"
          style={{
            backgroundImage: `url(${props.currentItem.image})`,
          }}
        />

        <Typography gutterBottom component="p" className="content">
          {props.currentItem.content}
        </Typography>

        <Button
          color="primary"
          onClick={() => props.currentPage('results')}
        >
          Back
        </Button>
      </Paper>
    </div>
  )
}

export default Details;
