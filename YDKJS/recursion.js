//find second highest number in an unsorted list using RECURSION

let highest = 0;
let runnerUp = 0;

function findRunnerUp(array) {
  var number = array.shift();
    if(number == undefined) {
      return runnerUp;
    }
    if(number > highest){
      runnerUp = highest;
      highest = number;
    }
  return findRunnerUp(array);

}

const list = [100,34,54,65,788,800,801,900];
console.log('RunnerUp is',findRunnerUp(list));



//find second highest number in an unsorted list using ITERATION

function findRunnerUp(array){
  var greatest = 0;
  var runnerUp = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > greatest) {
      greatest = array[i];
      console.log('The greatest is now',greatest);
    }
    if (array[i] < greatest && array[i] > runnerUp) {
      runnerUp = array[i];
      console.log('The runnerUp is now',runnerUp);
    }
  }
  return runnerUp;
}

const numbers = [4,3,6,2,9,8];

console.log(findRunnerUp(numbers));
