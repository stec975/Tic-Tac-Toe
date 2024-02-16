import './ScoreBoard.css'

export default function ScoreBoard({scores , xPlaying}){

    const {xScore, oScore} = scores;

    return (
    
        <div className='ScoreBoard'>
            <span className={`score x-score ${!xPlaying && 'inactive'}`}>X - {xScore} </span>
            <span className={`score o-score ${xPlaying && 'inactive'}`}>O - {oScore} </span>
        </div>
    
        
    )
}