import Player from "./Player";

const PlayerList = function() {
  return(
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player />
    </section>
  );
}

export default PlayerList;