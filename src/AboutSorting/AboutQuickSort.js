import React from "react";

function AboutQuickSort(){
    return(
        <div>
            <p>Algorithm- </p>
            <p>
            Step 1 − Choose the highest index value has pivot
            <br/>
            Step 2 − Take two variables to point left and right of the list excluding pivot
            <br/>
            Step 3 − left points to the low index
            <br/>
            Step 4 − right points to the high
            <br/>
            Step 5 − while value at left is less than pivot move right
            <br/>
            Step 6 − while value at right is greater than pivot move left
            <br/>
            Step 7 − if both step 5 and step 6 does not match swap left and right
            <br/>
            Step 8 − if left ≥ right, the point where they met is new pivot
            <br/>
            Time Complexity: O(nLogn)
            Space Complexity:O(1)
            </p>
        </div>
    )
}

export default AboutQuickSort;