import React from 'react'
import { List } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { PageCard } from 'components'
import { Link } from 'react-router-dom'
import ReviewListItem from './ReviewListItem'

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

const Reviews = () => {
    const { loading, error, data } = useQuery(REVIEWS)

    return (
        <PageCard error={error} title="Latest Reviews">
            <div className="mt-4">
                <List component="nav" aria-label="main mailbox folders">
                    {loading ? (
                        <>
                            <ReviewListItem loading={true} />
                            <ReviewListItem loading={true} />
                            <ReviewListItem loading={true} />
                        </>
                    ) : (
                        <>
                            {data.reviews.map((review) => (
                                <Link to={`/${review.id}`} key={review.id}>
                                    <ReviewListItem review={review} />
                                </Link>
                            ))}
                        </>
                    )}
                </List>
            </div>
        </PageCard>
    )
}

export default Reviews
