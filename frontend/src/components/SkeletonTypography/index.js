import React from 'react'
import { Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

const SkeletonTypography = ({ loading, width, height, children, ...props }) => {
    if (loading && (height || width)) {
        return <Skeleton height={height} width={width} />
    }
    return (
        <Typography {...props}>{loading ? <Skeleton /> : children}</Typography>
    )
}

export default SkeletonTypography
