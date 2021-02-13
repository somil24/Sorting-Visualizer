export function QuickSortAnimation(array){
    const animation=[];
    quickSort(array,0,array.length-1,animation);
    return animation;
}

function quickSort(array,l,r,animation){
    if(l<r){
        let pi=partion(array,l,r,animation);
        quickSort(array,l,pi-1,animation);
        quickSort(array,pi+1,r,animation);
    }
}

function partion(array,l,r,animation){
    let pivot=array[r];
    let i=l-1;
    for(let j=l;j<r;j++){
        if(array[j]<pivot){
            i++;
            let temp=array[j];
            array[j]=array[i];
            array[i]=temp;
            animation.push([i,j,array[i],array[j]]);
        }
    }
    let temp=array[r];
    array[r]=array[i+1];
    array[i+1]=temp;
    animation.push([i+1,r,array[i+1],array[r]]);

    return i+1;
}