import React from 'react'
import { TopBar, Reviews, Review } from 'containers'
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
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import { Switch, Route } from 'react-router-dom'

const client = new ApolloClient({
    uri: 'http://localhost:4000',
})

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
            <ApolloProvider client={client}>
                <CssBaseline />

                <div className={classes.root}>
                    <TopBar />
                    <Page>
                        <Switch>
                            <Route path="/:id">
                                <Review />
                            </Route>
                            <Route path="/">
                                <Reviews />
                            </Route>
                        </Switch>
                    </Page>
                </div>
            </ApolloProvider>
        </ThemeProvider>
    )
}

const mapStateToProps = ({ theme }) => ({ theme: theme.currentTheme })

export default connect(mapStateToProps)(App)
