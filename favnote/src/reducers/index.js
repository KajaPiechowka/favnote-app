import {
  ADD_ITEM,
  REMOVE_ITEM,
  AUTH_SUCCESS,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from 'actions';

const initialState = {
  userID: 'kjidsfhudg39',
  twitters: [
    {
      title: 'Dan Abramow says',
      content: 'Lorem ipsum dolor sit amet du hast mis',
      articleUrl: 'http://google.com',
      twitterUrl:
        'https://avatars.githubusercontent.com/u/810438?s=460&u=36b11d1db9c2380295b4371a98de87ab6b4c898f&v=4',
      _id: 'kjidsfhudg39',
    },
  ],
};




const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        user: {
          userID: action.payload.data.id,
        },
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]:[...action.payload.data]
      };
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer; 