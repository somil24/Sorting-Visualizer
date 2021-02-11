import React from "react"

function AboutInsertionSort(){
    return(
        <div>
        <h1>Insertion Sort</h1>
            <p>
            Algorithm-
To sort an array of size n in ascending order:
</p>
<p>
1: Iterate from arr[1] to arr[n] over the array.
</p>
<p>
2: Compare the current element (key) to its predecessor.
</p>
<p>
3: If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.
</p>
<p>
Time Complexity: O(n*2)
<br/>
Auxiliary Space: O(1)
            </p>
        </div>
    )
}
export default AboutInsertionSort