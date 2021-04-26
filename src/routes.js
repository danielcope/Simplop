import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Trends from './components/Trends'
import Notification from './components/Notification'
import Kid from './components/Kid/Kid'
import Suggestion from './components/Suggestion';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/trends/:id' component={Trends} />
        <Route path='/notification' component={Notification} />
        <Route path='/kid' component={Kid} />
        <Route path='/suggestion' component={Suggestion} />
    </Switch>
);
