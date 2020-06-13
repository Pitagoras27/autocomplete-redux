import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
const Results = props => {
  return (
    <div>
      {
        props.dataList.map(item =>
          <div className="card-container" key={item.id}>
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
          </div>
        )
      }
    </div>
  )
}

export default Results;
