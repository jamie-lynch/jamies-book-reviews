import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import EmptyStarIcon from '@material-ui/icons/StarBorder'
import { Skeleton } from '@material-ui/lab'

const Rating = ({ id, rating, loading }) => {
    if (loading) {
        return <Skeleton width={180} />
    }
    return (
        <div>
            {[...Array(5).keys()].map((i) => {
                if (i + 1 > rating) {
                    return <EmptyStarIcon key={`${id}-${i}`} />
                } else {
                    return <StarIcon key={`${id}-${i}`} />
                }
            })}
        </div>
    )
}

export default Rating
