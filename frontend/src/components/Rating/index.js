import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import EmptyStarIcon from '@material-ui/icons/StarBorder'

const Rating = ({ id, rating }) => {
    return (
        <div>
            {[...Array(5).keys()].map((i) => {
                console.log('here')
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
