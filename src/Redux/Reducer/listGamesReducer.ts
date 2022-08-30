export function listGamesReducer(state: any = "loading", action: any) {
  switch (action.type) {
    case "GET_LIST_GAMES":
      return action.peyload;
    case "LOADING":
      return "loading";
    default:
      return state;
  }
}
