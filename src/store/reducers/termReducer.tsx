import ActionType from '../../constants/ActionType';

const initialState = {
  terms: [
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
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_TERMS:
      console.log("GET_TERMS", action)
      return {
        ...state,
      };
    case ActionType.GET_TERMS_SUCCESS:
      console.log("GET_TERMS_SUCCESS", action)
      return {
        ...state,
        terms: action.payload
      };  
    case ActionType.ADD_TERM: 
      console.log("ADD_TERM");
      return {
        ...state,
        termAdded: action.payload
      }
    case ActionType.ADD_TERM_SUCCESS: 
      console.log("ADD_TERM_SUCCESS");
      return {
        ...state,
        termAdded: action.payload
      }
    default:
      return state;
  }
};