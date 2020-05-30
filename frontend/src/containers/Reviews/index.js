import React from 'react'
import {
    Typography,
    Card,
    CardContent,
    CircularProgress,
    List,
    ListItem,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Alert from '@material-ui/lab/Alert'
import { Rating } from 'components'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const REVIEWS = gql`
    {
        reviews {
            id
            book {
                title
            }
            date
            rating
        }
    }
`

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
})

const Reviews = () => {
    const classes = useStyles()

    const { loading, error, data } = useQuery(REVIEWS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    let body

    if (!!loading) {
        body = <CircularProgress />
    } else if (!!error) {
        body = (
            <Alert variant="filled" severity="error">
                {error}
            </Alert>
        )
    } else {
        body = (
            <List component="nav" aria-label="main mailbox folders">
                {data.reviews.map((review) => (
                    <ListItem button key={review.id}>
                        <div className="flex-grow">
                            <Typography variant="caption" color="textSecondary">
                                {review.date}
                            </Typography>
                            <Typography variant="h5">
                                {review.book.title}
                            </Typography>
                            <Rating rating={review.rating} id={review.id} />
                        </div>
                        <ArrowForwardIosIcon />
                    </ListItem>
                ))}
            </List>
        )
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h3" gutterBottom>
                    Latest Reviews
                </Typography>
                {body}
            </CardContent>
        </Card>
    )
}

export default Reviews
