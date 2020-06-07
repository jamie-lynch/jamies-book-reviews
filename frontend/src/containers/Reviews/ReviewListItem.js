import React from 'react'
import { ListItem } from '@material-ui/core'
import { Rating, SkeletonTypography } from 'components'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const ReviewListItem = ({ loading, review = {} }) => {
    return (
        <ListItem button>
            <div className="flex-grow">
                <SkeletonTypography
                    variant="caption"
                    color="textSecondary"
                    loading={loading}
                >
                    {review.date}
                </SkeletonTypography>
                <SkeletonTypography variant="h5" loading={loading}>
                    {loading ? '' : review.book.title}
                </SkeletonTypography>
                <Rating
                    loading={loading}
                    rating={review.rating}
                    id={review.id}
                />
            </div>
            {!loading && <ArrowForwardIosIcon />}
        </ListItem>
    )
}

export default ReviewListItem
