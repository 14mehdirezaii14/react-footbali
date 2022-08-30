export type MatchesType = {
  away: { id: number; name: string; logo: string; winner: null };
  home: { id: number; name: string; logo: string; winner: null };
  timeGame:string
};

export type CardLeaguesType = {
  leagueImage: string;
  matches: MatchesType[];
  nameLeague: string;
};

export interface ListDatesType {
  nameDay: string;
  date: string;
}

export interface ListLeagues {
  [key: string]: CardLeaguesType;
}