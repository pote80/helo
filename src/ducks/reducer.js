const initialState = {
    username: '',
    id: '',
    profile_pic: '',
}

const UPDATE_USER = 'UPDATE_USER'

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
          return Object.assign({}, state, {
            id: action.payload.id,
            username: action.payload.username,
            image: action.payload.image
          });
        default:
            return state
    }
}

export function updateUser({ id, username, image }) {
    return {
      type: UPDATE_USER,
      payload: { id, username, image }
    };
  }

export default reducer