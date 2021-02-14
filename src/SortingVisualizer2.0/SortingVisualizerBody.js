import React from "react"
import "./Sorting.css"
import { Route, Switch, useParams } from 'react-router-dom';
import SortingHome from "../AboutSorting/SortingHome"
import AboutInsertionSort from "../AboutSorting/AboutInsertionSort";
import AboutMergeSort from "../AboutSorting/AboutMergeSort";
import {getInsertionSortAnimation} from "../SortingAlgorithms/InsertionSort.js";
import {mergeSortAnimation} from "../SortingAlgorithms/mergeSort"
import {QuickSortAnimation} from "../SortingAlgorithms/quickSort";
import AboutQuickSort from "../AboutSorting/AboutQuickSort";
import bubbleSortAnimation from "../SortingAlgorithms/BubbleSort";
import AboutBubbleSort from "../AboutSorting/AboutBubbleSort"

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
        let animation =getInsertionSortAnimation(this.state.array);
        for(let i=0;i<animation.length;i++){
            let arrayBars=document.getElementsByClassName("array-bar")
            let [one,two,isChange,height1,height2]=animation[i]
            if(isChange){
                setTimeout(()=>{
                    let Barone=arrayBars[one].style;
                    let Bartwo=arrayBars[two].style;
                    Barone.height=`${height1}px`;
                    Bartwo.height=`${height2}px`;
                    Barone.backgroundColor=PRIMARY_COLOR;
                    Bartwo.backgroundColor=PRIMARY_COLOR;
                },i*ANIMATION_SPEED_MS)
            }
            
        }
    }
    mergeSort(){
        let animations = mergeSortAnimation(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      let arrayBars = document.getElementsByClassName('array-bar');
      let isColorChange = i % 3 !== 2;
      if (isColorChange) {
        let [barOneIdx, barTwoIdx] = animations[i];
        let barOneStyle = arrayBars[barOneIdx].style;
        let barTwoStyle = arrayBars[barTwoIdx].style;
        let color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 5);
      } else {
        setTimeout(() => {
          let [barOneIdx, newHeight] = animations[i];
          let barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 5);
      }
    }
        
    }

    quickSort(){
        let animation=QuickSortAnimation(this.state.array);
       for(let i=0;i<animation.length;i++){
        let arrayBars = document.getElementsByClassName('array-bar');
            let [barOne,bartwo,height1,height2]=animation[i];
            setTimeout(()=>{
                arrayBars[barOne].style.height=`${height1}px`;
                arrayBars[bartwo].style.height=`${height2}px`;
            },i*10);
        }
        
       //console.log(this.state.array.length);
       //for(let i=0;i<animation.length;i++)console.log(animation[i]);
    }

    bubbleSort(){
        let animation =bubbleSortAnimation(this.state.array);
        for(let i=0;i<animation.length;i++){
           
            let arrayBars = document.getElementsByClassName('array-bar');
                let [barOne,bartwo,height1,height2]=animation[i];
                setTimeout(()=>{
                    arrayBars[barOne].style.height=`${height1}px`;
                    arrayBars[bartwo].style.height=`${height2}px`;
                },i*3);
            }
    }

    handleClick(id){
        if(id==="/insertionsort")this.insertionSort();
        else if(id==="/mergeSort")this.mergeSort();
        else if(id==="/quickSort")this.quickSort();
        else if(id==="/bubbleSort")this.bubbleSort();

    }






    render(){
        const {array}=this.state;
        const pathname = window.location.pathname
        console.log(pathname)
     return( <>

<div className="container">
  <div className="row gx-10">
    <div className="col-md-3 Info">
    <Switch>
       <Route exact path="/Sorting-Visualizer.github.io/" component={SortingHome}/> 
       <Route path="/insertionsort" component={AboutInsertionSort} render={(props)=>{this.insertionSort()}}/>
       <Route path="/bubbleSort" component={AboutBubbleSort}/>
       <Route path="/mergeSort" component={AboutMergeSort}/>
       <Route path="/quickSort" component={AboutQuickSort}/>
       
     </Switch>
     <button type="button" onClick={()=>this.resetArray()} className="btn btn-primary">Generate Array</button>
     <button type="button" className="btn btn-success" onClick={()=>this.handleClick(pathname)}>Sort</button>
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