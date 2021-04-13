import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Trends from './components/Trends'
import Notification from './components/Notification'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/trends' component={Trends} />
        <Route path='/notification' component={Notification} />
    </Switch>
);
