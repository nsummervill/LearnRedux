var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;
var reducer = (state = stateDefault, action)=>{
  switch(action.type){
    case 'CHANGE_NAME':
      return{
        ...state,
        name: action.name
      };
      case 'ADD_HOBBY':
      return{
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
      case 'REMOVE_HOBBY':
      return{
        ...state,
        hobbies: state.hobbies.filter((hobby)=> hobby.id !== action.id)
      };
      case 'ADD_MOVIE':
      return{
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            movie: action.movie,
            genre: action.genre
          }
        ]
      };
      case 'REMOVE_MOVIE':
      return{
        ...state,
        movies: state.movies.filter((movie)=> movie.id !== action.id)
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(()=>{
  var state = store.getState();
  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('New state', store.getState());
});

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Nick'
});
//unsubscribe();

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Walking'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'ADD_MOVIE',
  movie: 'Inglorious Bastards',
  genre: 'War'
});

store.dispatch({
  type: 'ADD_MOVIE',
  movie: 'Stepbrothers',
  genre: 'Comedy'
});

store.dispatch({
  type: 'ADD_MOVIE',
  movie: 'Lala Land',
  genre: 'Musical'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 3
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
});
