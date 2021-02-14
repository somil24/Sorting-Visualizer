function bubbleSortAnimation(array){
    const animation=[];
    bubbleSort(array,animation);
    return animation;
}
function bubbleSort(array,animation){
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-i-1;j++){
            if(array[j]>array[j+1]){
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
                animation.push([j,j+1,array[j],array[j+1]]);
            }
        }
    }
}
export default bubbleSortAnimation;