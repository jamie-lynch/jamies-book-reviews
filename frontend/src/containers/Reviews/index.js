import React from 'react'
import { Typography, Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
})

const Reviews = () => {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h3" gutterBottom>
                    Latest Reviews
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras congue sodales lorem ac ultricies. Vestibulum at
                    vestibulum dui. Nunc ac consectetur erat. Sed id quam
                    ultricies dolor volutpat lobortis. Suspendisse placerat a
                    massa et tincidunt. Maecenas quis ante maximus, condimentum
                    justo nec, pulvinar enim. Donec convallis ante a augue
                    vulputate interdum. Aenean a sollicitudin dui. Maecenas
                    turpis lectus, tincidunt eu fringilla at, suscipit a odio.
                    Morbi dui libero, bibendum ut ligula ut, posuere vulputate
                    tellus. In laoreet nisi lectus, quis convallis dolor cursus
                    in. Aenean ultrices ultrices elit. Aenean semper nunc urna,
                    nec egestas orci sollicitudin eget. Proin blandit tincidunt
                    ex, vitae posuere turpis hendrerit non. Pellentesque nec
                    venenatis erat, id molestie est.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Vestibulum faucibus mauris nec tristique sollicitudin. Nunc
                    iaculis ex sit amet malesuada laoreet. Fusce eget ligula
                    scelerisque, maximus magna eget, semper purus. Proin ac
                    blandit tortor. Vestibulum facilisis tortor a justo blandit,
                    ut maximus magna molestie. Nunc condimentum euismod ornare.
                    Nunc sit amet finibus nisi. Maecenas massa nunc, euismod
                    quis sapien et, eleifend tristique elit. Mauris vehicula leo
                    quis neque vestibulum pretium. Suspendisse placerat vel
                    lorem ac congue. Phasellus gravida arcu erat, eget semper
                    metus aliquet maximus. Mauris fringilla a quam vulputate
                    aliquam. Quisque iaculis arcu non aliquet dignissim.
                    Phasellus a varius erat.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Donec elementum, enim vitae auctor porttitor, tellus est
                    vestibulum dui, ac congue lectus sapien in magna. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Aenean in
                    ipsum gravida leo placerat faucibus. Sed in justo eu felis
                    placerat volutpat. Suspendisse id leo pulvinar, suscipit
                    dolor ac, consequat tellus. In magna quam, molestie eget
                    elementum sed, placerat eget diam. Nam vel mattis nisi.
                    Curabitur consectetur, est ac sodales hendrerit, odio metus
                    condimentum ligula, at varius nisi arcu nec nibh. Ut luctus
                    nisi non massa faucibus, sit amet laoreet neque tincidunt.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Nulla porta pretium lacus, vitae sagittis eros. In mattis
                    facilisis sollicitudin. Vivamus non magna enim. Nullam porta
                    est feugiat hendrerit malesuada. Mauris aliquam, ante quis
                    faucibus congue, mauris massa fermentum eros, eget maximus
                    orci turpis et orci. Vivamus aliquet eros ipsum, quis
                    consectetur urna accumsan sit amet. Ut interdum et sapien
                    sed porta. Morbi convallis justo magna, eget tempus ex
                    pretium sit amet. Proin at efficitur metus.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Donec elementum, enim vitae auctor porttitor, tellus est
                    vestibulum dui, ac congue lectus sapien in magna. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Aenean in
                    ipsum gravida leo placerat faucibus. Sed in justo eu felis
                    placerat volutpat. Suspendisse id leo pulvinar, suscipit
                    dolor ac, consequat tellus. In magna quam, molestie eget
                    elementum sed, placerat eget diam. Nam vel mattis nisi.
                    Curabitur consectetur, est ac sodales hendrerit, odio metus
                    condimentum ligula, at varius nisi arcu nec nibh. Ut luctus
                    nisi non massa faucibus, sit amet laoreet neque tincidunt.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Nulla porta pretium lacus, vitae sagittis eros. In mattis
                    facilisis sollicitudin. Vivamus non magna enim. Nullam porta
                    est feugiat hendrerit malesuada. Mauris aliquam, ante quis
                    faucibus congue, mauris massa fermentum eros, eget maximus
                    orci turpis et orci. Vivamus aliquet eros ipsum, quis
                    consectetur urna accumsan sit amet. Ut interdum et sapien
                    sed porta. Morbi convallis justo magna, eget tempus ex
                    pretium sit amet. Proin at efficitur metus.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Donec elementum, enim vitae auctor porttitor, tellus est
                    vestibulum dui, ac congue lectus sapien in magna. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Aenean in
                    ipsum gravida leo placerat faucibus. Sed in justo eu felis
                    placerat volutpat. Suspendisse id leo pulvinar, suscipit
                    dolor ac, consequat tellus. In magna quam, molestie eget
                    elementum sed, placerat eget diam. Nam vel mattis nisi.
                    Curabitur consectetur, est ac sodales hendrerit, odio metus
                    condimentum ligula, at varius nisi arcu nec nibh. Ut luctus
                    nisi non massa faucibus, sit amet laoreet neque tincidunt.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Nulla porta pretium lacus, vitae sagittis eros. In mattis
                    facilisis sollicitudin. Vivamus non magna enim. Nullam porta
                    est feugiat hendrerit malesuada. Mauris aliquam, ante quis
                    faucibus congue, mauris massa fermentum eros, eget maximus
                    orci turpis et orci. Vivamus aliquet eros ipsum, quis
                    consectetur urna accumsan sit amet. Ut interdum et sapien
                    sed porta. Morbi convallis justo magna, eget tempus ex
                    pretium sit amet. Proin at efficitur metus.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Reviews
