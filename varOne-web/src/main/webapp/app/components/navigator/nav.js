import React, { PropTypes } from 'react';
import Brand from './brand';
import Header from './header';

import VarOneLogModal from '../commons/varOne-log-modal';

class Nav extends React.Component {
  static propTypes = {
    jobItemClickCB: PropTypes.func,
    dimensionItemClickCB: PropTypes.func
  }

  render() {
    return (
      <div>
        <nav
          className='navbar navbar-default navbar-static-top'
          role='navigation'
          style={ { marginBottom: 0 } }>
            <Brand/>
            <div>
              <Header
                jobItemClickCB={ this.props.jobItemClickCB }
                dimensionItemClickCB={ this.props.dimensionItemClickCB }/>
            </div>
        </nav>
        <VarOneLogModal />
      </div>
    );
  }
}

export default Nav;
