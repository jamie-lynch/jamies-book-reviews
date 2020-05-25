import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Toolbar,
    Typography,
    AppBar,
    IconButton,
    Icon,
    Tooltip,
} from '@material-ui/core'
import BookIcon from '@material-ui/icons/MenuBook'
import { connect } from 'react-redux'
import { toggleLightDarkMode } from 'stores/actions'
import { LIGHT } from 'config/constants'

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

const TopBar = ({ toggleLightDarkMode, theme }) => {
    const classes = useStyles()
    return (
        <AppBar position="static">
            <Toolbar>
                <BookIcon className="mr-4" />

                <Typography variant="h6" className={classes.title}>
                    Jamie's Book Reviews
                </Typography>
                <Tooltip title="Toggle light/dark mode">
                    <IconButton color="inherit" onClick={toggleLightDarkMode}>
                        <Icon>
                            {theme === LIGHT ? 'brightness_3' : 'brightness_7'}
                        </Icon>
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = ({ theme }) => ({ theme: theme.currentTheme })

const mapDispatchToProps = (dispatch) => ({
    toggleLightDarkMode: () => dispatch(toggleLightDarkMode()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
