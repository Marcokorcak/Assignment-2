///----------------------------------

function myEach(arr, cb) 
{
    for(let i=0; i<arr.length; i++) //loops through array 
    {
        cb(arr[i]); //calls callBack
    }
}
function addOne(x) //function to add one
{
    console.log(x+1); //logs the adding one 
}

arrTestArr = [1,2,3]; //test array
console.log("1: forEach()");
myEach(arrTestArr, addOne);//passes array and callBack as parameters

///--------------------------------
function myMap(arr, cb) //myMap function
{
    let tempArray= []; //temporary array
    for (let i = 0; i<arr.length; i++) //goes through array 
    {
        let result = cb(arr[i]); //runs through cb and sets it to result
        tempArray.push(result);//pushes the result to temp array
    }
    return tempArray; //returns the temp array
}
function addTwo(x) //funstion for adding two
{
    return x + 2;
}
let tempArray2 = [1,2,3];
console.log("\n2: map()");
console.log(myMap(tempArray2, addTwo)); //adds two to every element

///-------------------------------
function greaterThanTwo(x){ //greater than two function 
    if(x > 2){
        console.log(x);
    }
}
function myFilter(arr, cb){
    for(i = 0; i < arr.length; i++){
        cb(arr[i]); //callback function
    }
}

let testArray2 = [1,2,3,4,5,6,7,8,9] //test array 
console.log("\n3: filter()")
console.log(myFilter(testArray2, greaterThanTwo)); //prints values in the array greater than two 

///------------------------------
function greaterThanTen(x) //greater than ten function
{
    if (x>10)
    {
    return x;
    }
}

function mySome(arr, cb)
{
    for(i = 0; i < arr.length; i++){ //goes through array
        if(cb(arr[i])) //if cb is true then it returns true
        {
            return true;
        }
    }
    return false; //false otherwise
}
let testArray1 = [2,3,11,3,22] //test array
console.log("\n4: mySome()")
console.log(mySome(testArray1,greaterThanTen))

///----------------------------
function myEvery(arr, cb) 
{
    for(i = 0; i < arr.length; i++){
    {
    if (!cb(arr[i])) //is cb is not true for every case it will return false
    {
        return false;
    }
    }
    }
    return true; //returns true otherwise
}

function greaterThanSix(x) //greater than six function
{
    return x>6;
}

let arrayTest = [1,2,3,4,5,8] //test array 
console.log("\n5: mySome()")
console.log(myEvery(arrayTest,greaterThanSix));

///--------------------------
function myReduce(arr1, cb, valueInitial = 0) //takes in array, cb and initial value
{
    let result = valueInitial; //restus the result to the initial value
    for (let i = 0; i<arr1.length; i++)
    {
        result = cb(result, arr1[i]); //does cb of every element and adds it to result
    }
    return result; //returns result
}

function addTogether(a,b) //adds elemnt values
{
    return a + b;
}

let arrayTemp = [1,2,3,4,5] //temp array 
console.log("\n6: myReduce()")
console.log(myReduce(arrayTemp, addTogether));

///--------------------------
function myIncludes(arr, target) //checks to see if an element is included in the array
{
    for(let i = 0; i <arr.length; i++)
    {
        if(arr[i] == target) //if array value is equal to target value
        {
            return true; //returns true
        }
    }
    return false; //false otehrwise
}

let arrTest = [1,24,52,5,2,]; //temp array
console.log("\n7: myIncludes()")
console.log(myIncludes(arrTest, 24));

///-------------------------------

function myIndexOf(arr, targetNum) //finds the index of a value that is looked for
{
    let index = -1; //set to -1 if value not found
    for (let i = 0; i < arr.length; i++) //runs through the array
    {
        if (arr[i] == targetNum) //checks if index value if equal to the target
        {
            index = i; //if found break
            break;
        }
    }
    return index;//return index
}

let testArray23 = [34,12,3,5,9,76];
console.log("\n8: myIndexOf")
console.log(myIndexOf(testArray23,5));

///---------------------------------

function myPush(arr, element) //takes in array and elemnt that wants to add
{
    arr[arr.length] = element; //sets the element equal to a new index in the array
    return arr.length; //returns array length to show it changed
}

testArray99 = [1,3,6,8,5];//test array 
console.log("\n9: myPush()") 
console.log(myPush(testArray99,9));//adds to the array through created function
console.log(testArray99);//outputs the array 

///---------------------------------
function myUnshift(arr, target) //takes in array and target 
{
let index = -1;//set to -1 if not found
for(let i = 0; i<arr.length;i++) //goes through the array
{
    if(arr[i] == target) //checks if it is equal to target 
    {
        index = i; //if it is then return index value
    }
}
return index;
}

let arrayTemp1 = [2,4,6,7,8,2];//temp array
console.log("\n10: myUnshift()")
console.log(myUnshift(arrayTemp1,2)); //looks for value 2 and returns the last instance of it 

///----------------------------

Object.prototype.grabKeys = function () {
  let keyArr = [];
  for (element in this) {
    if (this.hasOwnProperty(element)) {// Function will print out itself as an element without hasOwnProperty
      keyArr.push(element); 
    }
  }
  return keyArr; //returns key array
};

let testDict1 = {
  3: 9,
  4: 28,
  5: 16,
};
console.log("\n11: grabKeys())")
console.log(testDict1.grabKeys());
///----------------------------------
Object.prototype.grabValues = function () {
  let valArr = [];
  for (element in this) {
    if (this.hasOwnProperty(element)) {
      valArr.push(this[element]);
    }
  }
  return valArr; //returns the array
};

let testDict2 = {
  A: "orange",
  B: "bannana",
  C: "kiwi",
};

console.log("\n12: grabValues())")
console.log(testDict2.grabValues());