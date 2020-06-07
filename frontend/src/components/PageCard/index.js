import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import { Alert, Skeleton } from '@material-ui/lab'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
})

const PageCard = ({ title, children, error, icon }) => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardContent>
                <div className="flex items-center justify-between">
                    <Typography variant="h3" className="flex-grow">
                        {!title ? <Skeleton /> : title}
                    </Typography>
                    {icon}
                </div>

                {error && (
                    <Alert variant="filled" severity="error">
                        {error}
                    </Alert>
                )}
                {children}
            </CardContent>
        </Card>
    )
}

export default PageCard
