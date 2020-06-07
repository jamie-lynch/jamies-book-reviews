import React from 'react'
import { IconButton, Tooltip } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Rating, PageCard, SkeletonTypography } from 'components'
import { useParams } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'

const REVIEW = (id) => `
    {
        review(id: ${id}) {
            id
            book {
                title
                author
                description
            }
            date
            rating
            review
        }
    }
`

const Review = () => {
    let { id } = useParams()
    const { loading, error, data } = useQuery(gql(REVIEW(id)))

    let review = data && data.review ? data.review : { book: {} }

    return (
        <PageCard
            loading={loading}
            error={error}
            title={review.book.title}
            icon={
                <Tooltip title="Back to Home">
                    <div>
                        <IconButton href="/" color="default">
                            <HomeIcon />
                        </IconButton>
                    </div>
                </Tooltip>
            }
        >
            <SkeletonTypography
                loading={loading}
                width={120}
                variant="caption"
                color="textSecondary"
            >
                {review.date}
            </SkeletonTypography>
            <Rating id={id} rating={review.rating} loading={loading} />
            <div className="mt-8">
                <SkeletonTypography
                    loading={loading}
                    variant="body1"
                    color="textSecondary"
                >
                    {review.book.author}
                </SkeletonTypography>
                <SkeletonTypography
                    loading={loading}
                    height={60}
                    variant="body1"
                >
                    {review.book.description}
                </SkeletonTypography>
            </div>
            <div className="mt-8">
                <SkeletonTypography loading={loading} variant="subtitle">
                    Review
                </SkeletonTypography>
            </div>
            <SkeletonTypography loading={loading} variant="body1" height={200}>
                {review.review}
            </SkeletonTypography>
        </PageCard>
    )
}

export default Review
