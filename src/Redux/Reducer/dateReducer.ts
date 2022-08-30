let initialState: string = "loading";

type typeAction = {
  type: string;
  peyload: string[];
};

export const dateReducer = (state = initialState, action: typeAction) => {
  switch (action.type) {
    case "GET_DATES":
      return action.peyload;
    default:
      return state;
  }
};
