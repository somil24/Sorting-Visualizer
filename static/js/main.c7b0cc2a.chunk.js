(this["webpackJsonpsorting2.0"]=this["webpackJsonpsorting2.0"]||[]).push([[0],{16:function(e,t,r){},29:function(e,t,r){},30:function(e,t,r){},37:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(1),i=r.n(a),s=r(18),o=r.n(s),c=(r(29),r(30),r(31),r(10)),l=r(19),h=r(20),j=r(11),d=r(23),u=r(22),b=(r(16),r(2));var p=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"About Sorting"}),Object(n.jsx)("p",{children:"The arrangement of data in a preferred order is called sorting in the data structure. By sorting data, it is easier to search through it quickly and easily. The simplest example of sorting is a dictionary."})]})};var m=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Insertion Sort"}),Object(n.jsx)("p",{children:"Algorithm- To sort an array of size n in ascending order:"}),Object(n.jsx)("p",{children:"1: Iterate from arr[1] to arr[n] over the array."}),Object(n.jsx)("p",{children:"2: Compare the current element (key) to its predecessor."}),Object(n.jsx)("p",{children:"3: If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element."}),Object(n.jsxs)("p",{children:["Time Complexity: O(n*2)",Object(n.jsx)("br",{}),"Auxiliary Space: O(1)"]})]})};var v=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Merge Sort"}),Object(n.jsx)("p",{children:"Algorithm- MergeSort(arr[], l,  r)"}),Object(n.jsx)("p",{children:"If r>l"}),Object(n.jsx)("p",{children:"1. Find the middle point to divide the array into two halves: middle m = l+ (r-l)/2"}),Object(n.jsx)("p",{children:"2. Call mergeSort for first half: Call mergeSort(arr, l, m)"}),Object(n.jsx)("p",{children:"3. Call mergeSort for second half: Call mergeSort(arr, m+1, r)"}),Object(n.jsx)("p",{children:"4. Merge the two halves sorted in step 2 and 3: Call merge(arr, l, m, r)"}),Object(n.jsx)("p",{children:"Time Complexity:\u03b8(nLogn)"}),Object(n.jsx)("p",{children:"Auxiliary Space: O(n)"}),Object(n.jsx)("p",{children:"Algorithmic Paradigm: Divide and Conquer"})]})};function f(e){var t=[];if(e.length<=1)return e;var r=e.slice();return g(e,0,e.length-1,r,t),t}function g(e,t,r,n,a){if(t!==r){var i=Math.floor((t+r)/2);g(n,t,i,e,a),g(n,i+1,r,e,a),function(e,t,r,n,a,i){var s=t,o=t,c=r+1;for(;o<=r&&c<=n;)i.push([o,c]),i.push([o,c]),a[o]<=a[c]?(i.push([s,a[o]]),e[s++]=a[o++]):(i.push([s,a[c]]),e[s++]=a[c++]);for(;o<=r;)i.push([o,o]),i.push([o,o]),i.push([s,a[o]]),e[s++]=a[o++];for(;c<=n;)i.push([c,c]),i.push([c,c]),i.push([s,a[c]]),e[s++]=a[c++]}(e,t,i,r,n,a)}}function x(e){var t=[];return O(e,0,e.length-1,t),t}function O(e,t,r,n){if(t<r){var a=function(e,t,r,n){for(var a=e[r],i=t-1,s=t;s<r;s++)if(e[s]<a){i++;var o=e[s];e[s]=e[i],e[i]=o,n.push([i,s,e[i],e[s]])}var c=e[r];return e[r]=e[i+1],e[i+1]=c,n.push([i+1,r,e[i+1],e[r]]),i+1}(e,t,r,n);O(e,t,a-1,n),O(e,a+1,r,n)}}var y=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Quick Sort"}),Object(n.jsxs)("p",{children:["Algorithm-",Object(n.jsx)("br",{}),"Step 1 \u2212 Choose the highest index value has pivot",Object(n.jsx)("br",{}),"Step 2 \u2212 Take two variables to point left and right of the list excluding pivot",Object(n.jsx)("br",{}),"Step 3 \u2212 left points to the low index",Object(n.jsx)("br",{}),"Step 4 \u2212 right points to the high",Object(n.jsx)("br",{}),"Step 5 \u2212 while value at left is less than pivot move right",Object(n.jsx)("br",{}),"Step 6 \u2212 while value at right is greater than pivot move left",Object(n.jsx)("br",{}),"Step 7 \u2212 if both step 5 and step 6 does not match swap left and right",Object(n.jsx)("br",{}),"Step 8 \u2212 if left \u2265 right, the point where they met is new pivot",Object(n.jsx)("br",{}),"Time Complexity: O(nLogn) Space Complexity:O(1)"]})]})},S="turquoise",k=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(l.a)(this,r),(e=t.call(this)).state={array:[]},e.resetArray=e.resetArray.bind(Object(j.a)(e)),e}return Object(h.a)(r,[{key:"componentDidMount",value:function(){this.resetArray(),window.addEventListener("resize",this.resetArray)}},{key:"resetArray",value:function(){var e=document.getElementById("display").offsetWidth,t=0,r=600;e<=800&&e>=650?(t=100,r=670):e<650&&e>=470?(t=60,r=450):e<470&&(t=30,r=200);for(var n,a,i=[],s=0;s<t;s++)i.push((n=5,a=r,Math.floor(Math.random()*(a-n+1)+n)));this.setState({array:i}),console.log(document.getElementById("display").offsetWidth)}},{key:"insertionSort",value:function(){for(var e=function(e){var t=[];return 1===e.length?e:(function(e,t){for(var r=0;r<e.length;r++)for(var n=r;n<e.length;n++)if(e[r]!==e[n])if(e[r]>e[n]){var a=e[r];e[r]=e[n],e[n]=a,t.push([r,n,!0,e[r],e[n]])}else t.push([r,n,!1,null,null])}(e,t),t)}(this.state.array),t=function(t){var r=document.getElementsByClassName("array-bar"),n=Object(c.a)(e[t],5),a=n[0],i=n[1],s=n[2],o=n[3],l=n[4];s&&setTimeout((function(){var e=r[a].style,t=r[i].style;e.height="".concat(o,"px"),t.height="".concat(l,"px"),e.backgroundColor=S,t.backgroundColor=S}),1*t)},r=0;r<e.length;r++)t(r)}},{key:"mergeSort",value:function(){for(var e=f(this.state.array),t=function(t){var r=document.getElementsByClassName("array-bar");if(t%3!==2){var n=Object(c.a)(e[t],2),a=n[0],i=n[1],s=r[a].style,o=r[i].style,l=t%3===0?"red":S;setTimeout((function(){s.backgroundColor=l,o.backgroundColor=l}),5*t)}else setTimeout((function(){var n=Object(c.a)(e[t],2),a=n[0],i=n[1];r[a].style.height="".concat(i,"px")}),5*t)},r=0;r<e.length;r++)t(r)}},{key:"quickSort",value:function(){for(var e=x(this.state.array),t=function(t){var r=document.getElementsByClassName("array-bar"),n=Object(c.a)(e[t],4),a=n[0],i=n[1],s=n[2],o=n[3];setTimeout((function(){r[a].style.height="".concat(s,"px"),r[i].style.height="".concat(o,"px")}),10*t)},r=0;r<e.length;r++)t(r)}},{key:"handleClick",value:function(e){"/insertionsort"===e?this.insertionSort():"/mergeSort"===e?this.mergeSort():"/quickSort"===e&&this.quickSort()}},{key:"render",value:function(){var e=this,t=this.state.array,r=window.location.pathname;return console.log(r),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row gx-10",children:[Object(n.jsxs)("div",{className:"col-md-3 Info",children:[Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{path:"/home",component:p}),Object(n.jsx)(b.a,{path:"/insertionsort",component:m,render:function(t){e.insertionSort()}}),Object(n.jsx)(b.a,{path:"/mergeSort",component:v}),Object(n.jsx)(b.a,{path:"/quickSort",component:y})]}),Object(n.jsx)("button",{type:"button",onClick:function(){return e.resetArray()},className:"btn btn-primary",children:"Generate Array"}),Object(n.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(){return e.handleClick(r)},children:"Sort"})]}),Object(n.jsx)("div",{className:"col-md me-auto Diplay",id:"display",children:t.map((function(e,t){return Object(n.jsx)("div",{className:"array-bar",style:{backgroundColor:S,height:"".concat(e,"px")}},t)}))})]})})})}}]),r}(i.a.Component);var N=r(7);var C=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)(N.b,{className:"navbar-brand",to:"/home",children:"Sorting Visualizer"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(n.jsxs)("ul",{className:"navbar-nav",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(N.b,{className:"nav-link active","aria-current":"page",to:{pathname:"/insertionsort"},children:"Insertion Sort"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(N.b,{className:"nav-link active",to:{pathname:"/mergeSort"},children:"Merge Sort "})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(N.b,{className:"nav-link active",to:{pathname:"/quickSort"},children:"Quick Sort "})})]})})]})})})};var w=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(C,{}),Object(n.jsx)(k,{})]})};o.a.render(Object(n.jsx)(N.a,{children:Object(n.jsx)(w,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.c7b0cc2a.chunk.js.map