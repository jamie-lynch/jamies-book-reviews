import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

const useStyles = makeStyles({
    root: {
        overflow: 'scroll',
        flexGrow: 2,
    },
})

const Page = ({ children }) => {
    const classes = useStyles()
    return (
        <div
            className={classNames(
                classes.root,
                'p-4 sm:p-8 md:p-12 lg:px-16 lg:py-12 xl:px-18'
            )}
        >
            {children}
        </div>
    )
}

export default Page
