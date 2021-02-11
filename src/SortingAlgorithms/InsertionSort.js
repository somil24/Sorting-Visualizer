

export function getInsertionSortAnimation(array){
    const animation=[];
    if(array.length===1)return array;
    Sort(array,animation);
    return animation;
}

function Sort(array,animation){
    for(let i=0;i<array.length;i++){
        for(let j=i;j<array.length;j++){
            if(array[i]===array[j])continue;
            if(array[i]>array[j]){
                let temp=array[i];
                array[i]=array[j];
                array[j]=temp;
                animation.push([i,j,true,array[i],array[j]]);
            }
            else animation.push([i,j,false,null,null]);
        }
    }
}