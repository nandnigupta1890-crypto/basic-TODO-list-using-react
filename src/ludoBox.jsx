
import {useState} from "react"
export default function LudoBox(){
    let [moves,setMoves]=useState({blue:0,yellow:0,red:0,green:0})
        function updateblue(){
            setMoves((prevmoves)=>{
                return {...prevmoves, blue: prevmoves.blue+1}
            })
        }
         function updateyellow(){
            setMoves((prevmoves)=>{
                return {...prevmoves, yellow: prevmoves.yellow+1}
            })
        }
    return(

        <div>
            <p>game begins!</p>
            <div className="board">
            <p>blue moves={moves.blue}</p>
            <button style ={{backgroundColor:"blue"}} onClick={updateblue}>+1</button>
            <p>yellow moves={moves.yellow}</p>
            <button style ={{backgroundColor:"yellow"}} onClick={updateyellow}>+1</button>
            <p>red moves={moves.red}</p>
            <button style ={{backgroundColor:"red"}}>+1</button>
            <p>green moves={moves.green}</p>
            <button style ={{backgroundColor:"green"}}>+1</button>
        </div>
        </div>
    )
}