export default function Team1Details({ matchDet }) {
  let matchDetail = matchDet;
  //   console.log(matchDetail)
  return matchDetail.matchInfo.team1.playerDetails.map((player, i) => (
    <div key={i} className='text-xl flex flex-col m-5'>
      <h1>{player.fullName}</h1>
      <h3 className='opacity-60 text-sm'>{player.role}</h3>
    </div>
  ));
}
