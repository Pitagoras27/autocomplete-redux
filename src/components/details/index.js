import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './styles.css';

const Details = props => {
    const {
        currentPage,
        currentItem,
    } = props;
    console.log('currentItem--->', currentItem)
    return (
        <div className="details-page">
            <Paper
                elevation={1}
                className="paper-container"
            >
                <Typography gutterBottom variant="h5" component="h2">
                    {currentItem.title}
                </Typography>

                <div
                    className="item-image"
                    style={{
                        backgroundImage: `url(${currentItem.image})`,
                    }}
                />

                <Typography gutterBottom component="p" className="content">
                    {currentItem.content}
                </Typography>

                <Button
                    color="primary"
                    onClick={() => currentPage('results')}
                >
                    Back
                </Button>
            </Paper>
        </div>
    );
}

export default Details;