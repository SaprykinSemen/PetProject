const SET_COUNT = '[counter] SET_COUNT';

const initialState = {value: 0};

export default (state = initialState, action) => {
  switch (action) {
    case SET_COUNT:
      return state;

    default:
      return state;
  }
};

export const setCount = count => ({
  type: SET_COUNT,
  count,
});

setCount(5);
