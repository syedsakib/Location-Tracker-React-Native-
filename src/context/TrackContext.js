import createDataContext from './createDataContext';

const tracReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => () => {};

const createTrack = (dispatch) => (name, locations) => {
  console.log(name, locations.length);
};

export const { Provider, Context } = createDataContext(
  tracReducer,
  { fetchTracks, createTrack },
  []
);
