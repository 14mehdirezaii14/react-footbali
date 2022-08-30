import { all, put, takeLatest } from "redux-saga/effects";
import { Axios } from "../components/api/axiosConfig";
import { getToday } from "../components/getToday";
import { ListDatesType, ListLeagues, CardLeaguesType } from "../types/index";
let moment = require("moment-jalaali");

function* sagaSetDates() {
  const today: string = getToday();
  const tomorrow: string = moment().add(1, "days").format("YYYY-MM-DD");

  let listDates: ListDatesType[] = [
    { nameDay: "امروز", date: today },
    { nameDay: "فردا", date: tomorrow },
  ];

  for (let n = 2; n <= 5; n++) {
    yield moment.loadPersian();
    const nameDay: string = moment().add(n, "days").format("jD jMMMM ");
    const date: string = moment().add(n, "days").format("YYYY-MM-DD");
    yield listDates.push({ nameDay, date });
  }

  yield put({ type: "GET_DATES", peyload: listDates });
}

function* watchSagaSetDates() {
  yield takeLatest("SET_DATES", sagaSetDates);
}

//

let listLeagues: ListLeagues = {};
function* arrangeTheLeaguesList(list: any) {
  yield list.map((item: any) => {
    if (listLeagues[item.league.name]) {
      listLeagues[item.league.name].matches.push({
        ...item.teams,
        timeGame: item.fixture.date,
      });
    } else {
      listLeagues[item.league.name] = {
        nameLeague: item.league.name,
        leagueImage: item.league.logo,
        matches: [{ ...item.teams, timeGame: item.fixture.date }],
      };
    }
  });
}

//

function* getListGames(action: any) {
  let data: any = [];
  yield Axios.get("/fixtures", { params: { date: action.peyload } })
    .then((res) => {
      data = res.data.response;
    })
    .catch((err) => {
      console.log(err.message);
      if (err.message === "Network Error") {
        data = "errVpn";
      }
    });
  if (data === "errVpn") {
    yield put({ type: "GET_LIST_GAMES", peyload: data });
  } else {
    yield arrangeTheLeaguesList(data);
    yield put({ type: "GET_LIST_GAMES", peyload: listLeagues as ListLeagues });
  }
}

function* watchGetListGames() {
  yield takeLatest("WATCH_GET_LIST_GAMES", getListGames);
}

export function* rootSaga() {
  yield all([watchSagaSetDates(), watchGetListGames()]);
}
