import React from "react";
function AboutMergeSort(){
    return(
        <div>
            <h1>Merge Sort</h1>
            <p>
                Algorithm- MergeSort(arr[], l,  r)
            </p>         
            <p>If r>l</p>
            <p>
            1. Find the middle point to divide the array into two halves:  
             middle m = l+ (r-l)/2
            </p>
            <p>2. Call mergeSort for first half:   
             Call mergeSort(arr, l, m)</p>
             <p>
             3. Call mergeSort for second half:
             Call mergeSort(arr, m+1, r)
             </p>
             <p>
             4. Merge the two halves sorted in step 2 and 3:
             Call merge(arr, l, m, r)
             </p>
             <p>Time Complexity:θ(nLogn)</p>
             <p>Auxiliary Space: O(n)</p>
             <p>Algorithmic Paradigm: Divide and Conquer</p>

        </div>
    )
}

export default AboutMergeSort