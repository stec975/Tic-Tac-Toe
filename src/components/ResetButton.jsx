import './ResetButton.css';

export default function ResetButton({resetBoard}){
  return (
    <button className="reset" onClick={resetBoard}>Reset Game</button>
  )
}