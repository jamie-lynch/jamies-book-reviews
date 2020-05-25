import React from 'react'
import { TopBar, Reviews } from 'containers'
import { Page } from 'components'
import {
    makeStyles,
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { dark, light } from 'themes'
import { connect } from 'react-redux'
import { LIGHT } from 'config/constants'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
})

const App = ({ theme }) => {
    const classes = useStyles()

    const muiTheme = createMuiTheme(theme === LIGHT ? light : dark)

    return (
        <ThemeProvider theme={muiTheme}>
            <CssBaseline />

            <div className={classes.root}>
                <TopBar />
                <Page>
                    <Reviews />
                </Page>
            </div>
        </ThemeProvider>
    )
}

const mapStateToProps = ({ theme }) => ({ theme: theme.currentTheme })

export default connect(mapStateToProps)(App)
