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

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(()=>{
  var state = store.getState();
  console.log('searchText is', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_SEARCHTEXT',
  searchText: 'Nick sucks at coding'
});

//unsubscribe();

store.dispatch({
  type: 'CHANGE_SEARCHTEXT',
  searchText: 'Nick kicks ass at coding'
});
