import * as React from 'react';

import TermList from '../../components/TermList/TermList';

const termList = [
  {
    name: '실화니?',
    defList: [
      {
        def: '실화',
        usage: '민수 차 산거 실화니?'
      },
      {
        def: '실화',
        usage: '민수 차 산거 실화니?'
      }
    ]
  },
  {
    name: '실화니?',
    defList: [
      {
        def: '실화',
        usage: '민수 차 산거 실화니?'
      },
      {
        def: '실화',
        usage: '민수 차 산거 실화니?'
      }
    ]
  },
  {
    name: '실화니?',
    defList: [
      {
        def: '실화',
        usage: '민수 차 산거 실화니?'
      },
      {
        def: '실화',
        usage: '민수 차 산거 실화니?'
      }
    ]
  },
  {
    name: '실화니?',
    defList: [
      {
        def: '실화',
        usage: '민수 차 산거 실화니?'
      },
      {
        def: '실화',
        usage: '민수 차 산거 실화니?'
      }
    ]
  },
  {
    name: '실화니?',
    defList: [
      {
        def: '실화',
        usage: '민수 차 산거 실화니?'
      },
      {
        def: '실화',
        usage: '민수 차 산거 실화니?'
      }
    ]
  },
]

class TermListContainer extends React.Component {
  render() {
    return (
      <TermList
        termList={termList}/>
    )
  }
}

export default TermListContainer;