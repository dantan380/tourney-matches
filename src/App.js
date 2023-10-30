import "./App.css";
import PlayerList from "./components/tourney-matches/PlayerList";
import MatchList from "./components/tourney-matches/MatchList";

function App() {
  return (
    <div className="App">
      <h1>
        Tourney Matches {" "}
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList />
      <MatchList />
    </div>
  );
}

export default App;
