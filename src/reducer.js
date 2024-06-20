export const initialState = {
  user: null,
  token: null,
  playlists: [],
  discover_weekly: null,
  currently_playing: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_CURRENTLY_PLAYING":
      return {
        ...state,
        currently_playing: action.currently_playing,
      };
    default:
      return state;
  }
};

export default reducer;
