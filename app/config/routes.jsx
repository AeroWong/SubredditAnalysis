import { Router, Route, Link, IndexRoute} from 'react-router'
import React from 'react'
import Main from '../components/Main.jsx'
import Home from '../components/Home.jsx'
import SubredditList from '../components/subredditList/SubredditList.jsx'

module.exports = (
    <Router>
        <Route name="app" path="/" component={Main}>
            <Route path="subredditList" component={SubredditList}>
            </Route>
            <IndexRoute component={Home} />
        </Route>
    </Router>
)