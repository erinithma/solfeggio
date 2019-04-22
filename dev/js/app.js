import React, { Component } from 'react';
import { 
    Switch,
    Route
  } from 'react-router-dom';

import Main from './view/main';
import Play from './view/play';
import MinDur from './view/mindur';
import CommonSettings from './view/commonSettings'

class App extends Component {

  render() {
    return (      
        <Switch>
            <Route path="/тренажер/" component={Main} exact />
            <Route path="/тренажер/игра" component={Play} exact />
            <Route path="/тренажер/мажор-минор" component={MinDur} exact />
            <Route path="/тренажер/настройки" component={CommonSettings} exact />
            <Route exact render={() => <h1>Not Found</h1>} />
        </Switch>
    )
  }
}

export default App
