import React from "react"
function AboutBubbleSort(){
     return(
         <div>
             <h1>Bubble Sort</h1>
             <p>
                 Step1: A for LOOP for all elements
                 <br/>
                 Step2: Another nested LOOP for all elements expect last
                 <br/>
                 Step3: Compare the current value and next value
                 <br/>
                 Step4: If current value is greater then swap the value
                 <br/>
                 Time Complexity: O(n*n)
                 <br/>
                 Space Complexity: O(1)
             </p>
         </div>
     )
}
export default AboutBubbleSort;