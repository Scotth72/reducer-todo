export const initialState = [
  {
    item: "Learn to use Reducer",
    completed: false,
    id: 1234325,
  },
];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { item: action.payload, completed: false, id: Date.now() },
      ];
    case "TOGGLE_TODO":
      // console.log(state)
      return [
        ...state.map((item) => {
          return (
            item.id == action.payload ? { ...item, completed: !item.completed } : item
          )
        })
      ];
    case 'CLEAR_TODO':
      return [
        ...state.filter(item =>
          // console.log('test', item.completed)
          item.completed == false
        )
      ]
    default:
      return state;
  }
};
