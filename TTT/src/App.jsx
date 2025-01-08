import './App.css'
export default function Board(){
  return(
    <>
    <div className="board-row">
      <button className="squre">1</button>
      <button className="squre">2</button>
      <button className="squre">3</button>
    </div>
    <div className="board-row">
      <button className="squre">4</button>
      <button className="squre">5</button>
      <button className="squre">6</button>
    </div>
    <div className="board-row">
      <button className="squre">7</button>
      <button className="squre">8</button>
      <button className="squre">9</button>
    </div>
    </>
  );
}