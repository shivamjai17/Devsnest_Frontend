var a = "w3resources";
b=[1,4,5,6];
function is_Array(t){
    return Array.isArray(t);
}
console.log(is_Array(a))
console.log(is_Array(b))


// ---------------------------------------//

a=[1,2,4,0]
b=[1,2,[4,0]]
function Array_Clone(t){
    const b1= t.slice(0)
    return b1
}
console.log(Array_Clone(a))
console.log(Array_Clone(b))

//--------------------------------------------//
function firstElement(test_case,n=1){
    const b1=test_case.slice(0,1);
    return b1
    // console.log(test_case.slice(0,1));
}
console.log(firstElement([7,9,0,-2]));
console.log(firstElement([],3));
console.log(firstElement([7,9,0,-2],3));
console.log(firstElement([7,9,0,-2],6));
console.log(firstElement([7,9,0,-2],-3));

//----------------------------------------------//

myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join());
console.log(myColor.join("+"));

//--------------------------------------------------//
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function maxcont(arr){
var ans;
high=0;
for(var i=0;i<arr.length;i++){
    var current=0;
    for(var j=1;j<arr.length;j++){
        if (arr[i]==arr[j]) current++;
        if (high<current){
            high=current
            ans=arr[i]
        } 

        }
    }
    return ans;
}
console.log(maxcont(arr1));