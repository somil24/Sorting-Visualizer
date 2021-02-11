import React from "react"
import "./Sorting.css"
import { Route, Switch, useParams } from 'react-router-dom';
import AboutInsertionSort from "../AboutSorting/AboutInsertionSort";
import {getInsertionSortAnimation} from "../SortingAlgorithms/InsertionSort.js";
const ANIMATION_SPEED_MS=1
//var Length=100;

const PRIMARY_COLOR='turquoise'
const SECONDARY_COLOR='red'
export default class SortingVisualizerBody extends React.Component{
    constructor(){
        super()
        this.state={
            array:[]
        }
        this.resetArray=this.resetArray.bind(this)
    }
    componentDidMount(){
        this.resetArray();
        window.addEventListener('resize', this.resetArray);
        //Length=(document.getElementById("display").offsetWidth)/8;
    }
    //window.addEventListener("resize", this.resetArray());

    resetArray(){
        const Length=(document.getElementById("display").offsetWidth);
        let ArrayLength=0,lastVal=600;
        if(Length<=800 && Length>=650){
            ArrayLength=100;
            lastVal=670;
        }
        else if(Length<650 && Length>=470){
            ArrayLength=60;
            lastVal=450;
        }
        
        else if(Length<470){ArrayLength=30;
            lastVal=200;}

        const array=[];
        for(let i=0;i<ArrayLength;i++){
            array.push(randomIntFromInternal(5,lastVal));
        }
        this.setState({array})
        console.log(document.getElementById("display").offsetWidth)
    }
   
    insertionSort(){
        const animation =getInsertionSortAnimation(this.state.array);
        for(let i=0;i<animation.length;i++){
            const arrayBars=document.getElementsByClassName("array-bar")
            const [one,two,isChange,height1,height2]=animation[i]
            if(isChange){
                setTimeout(()=>{
                    const Barone=arrayBars[one].style;
                    const Bartwo=arrayBars[two].style;
                    Barone.height=`${height1}px`;
                    Bartwo.height=`${height2}px`;
                },i*ANIMATION_SPEED_MS)
            }
        }
    }






    render(){
        const {array}=this.state;
        const pathname = window.location.state
        console.log(pathname)
     return( <>

<div className="container">
  <div className="row gx-10">
    <div className="col-md-3 Info">
    <Switch>
       <Route path="/insertionsort" component={AboutInsertionSort}/>
     </Switch>
     <button type="button" onClick={()=>this.resetArray()} className="btn btn-primary">Generate Array</button>
     <button type="button" className="btn btn-success" onClick={()=>this.window.location.state.fun}>Sort</button>
    </div>

    <div className="col-md me-auto Diplay" id="display">
    {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        ))}
    </div>
  </div>
</div>

        </>
     )
    }

}
function randomIntFromInternal(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}