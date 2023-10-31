import "./App.css";
import playerData from "./data/playerData";
import matchData from "./data/matchData";
import { preparePlayerData, addWinsToPlayers } from "./helpers/playerHelpers";
import PlayerList from "./components/tourney-matches/PlayerList";
import MatchList from "./components/tourney-matches/MatchList";

function App() {

  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  
  return (
    <div className="App">
      <h1>
        Tourney Matches {" "}
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList matches={matchData} playerData={parsedPlayerData}/>
      <MatchList matches={matchData}/>
    </div>
  );
}

export default App;
