import * as React from 'react';
import { withRouter, BrowserRouter, Route, Switch } from 'react-router-dom';

import AppURL from '@models/AppURL';
import HomeLayout from '@components/app/HomeLayout/HomeLayout.mobile';
import ErrorLayout from '@components/app/ErrorLayout/ErrorLayout.mobile';
import RootContainer from '@containers/RootContainer/RootContainer.mobile';

class RouterContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      errorDidOccur: false,
    }
  }

  componentDidMount() {
  }

  componentDidCatch(err) {
    console.error(err);
    this.setState(() => ({
      errorDidOccur: true,
    }));
  }
  
  render() {
    return (
      <BrowserRouter>
        <RootContainer>
          <Switch>
            {this.state.errorDidOccur 
              ? <Route path={AppURL.ERROR} component={ErrorLayout}/>
              : <Route path={AppURL.__ROOT} component={HomeLayout}/>
            }
          </Switch>
        </RootContainer>
     </BrowserRouter>
    );
  }
}

/**
 * Do not connect redux, otherwise react-hot-loader won't work.
 * Dispatch action in RootContainer if necessary.
 */
export default RouterContainer;
