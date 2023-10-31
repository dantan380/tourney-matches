import Match from "./Match";

const MatchList = function (props) {
  const matches = props.matches.map(match => {
    return (
      <Match players={match.players} winner={match.winner} scoreDifference={match.scoreDifference} key={match.matchNumber}/>
    );
  });
    
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {matches}
    </section>
  );
};

export default MatchList;