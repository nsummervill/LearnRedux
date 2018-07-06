var redux = require('redux');

console.log('Redux Todo example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};
var reducer = (state = stateDefault, action)=>{
  switch(action.type){
    case 'CHANGE_SEARCHTEXT':
      return{
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_SEARCHTEXT',
  searchText: 'Nick sucks at coding'
});

console.log('searchText should be Nick sucks at coding', store.getState());
