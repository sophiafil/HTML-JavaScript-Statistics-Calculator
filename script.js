function performStatistics() {
	let textArea = document.getElementById("numbers").value;
    let numArray = textArea.split(" ").map(Number);
	
	let sum = calcSum(numArray);
    document.getElementById("sum").value = sum;
	
	let mean = calcMean(numArray);
    document.getElementById("mean").value = mean;
	
	let mode = calcMode(numArray);
    document.getElementById("mode").value = mode;

    let median = calcMedian(numArray);
    document.getElementById("median").value = median;

    let variance = calcVariance(numArray);
    document.getElementById("variance").value = variance;

    let stdDev = calcStdDev(numArray);
    document.getElementById("stdDev").value = stdDev;
	
	let max = findMax(numArray);
    document.getElementById("max").value = max;

    let min = findMin(numArray);
    document.getElementById("min").value = min;
			
	return false;
}

function calcMean(array) {
	let sum = 0;
	let mean;
	let count = array.length;
	
	sum = calcSum(array);
	mean = sum/count;
	
	return mean.toFixed(2);
}


function calcMedian(array) {
   let sortedArray = array.sort(function(a, b) { return a - b });
   var mid = Math.floor((sortedArray.length - 1) / 2);

    if (sortedArray.length % 2) {
        return sortedArray[mid].toFixed(2);
    }
	else {
        return ((sortedArray[mid] + sortedArray[mid + 1]) / 2).toFixed(2);
    }
}

function calcMode(array) {
   let tempArray = [];
   for (i = 0; i <array.length; i++) {
      tempArray[i] = array[i];
   }
   tempArray.sort(function(a, b){return a - b});
   let indexFreq = 0;
   let current = tempArray[0];
   let modeArray = [];
   let freqArray = [];
   freqArray[0] = 1;
   for (i = 1; i < tempArray.length; i++) {
      if (current == tempArray[i]) {
         freqArray[indexFreq]++;
      }
      else {
         indexFreq++;
         current = tempArray[i];
         freqArray[indexFreq] = 1;
      }
   }

   let modeNum = findMax(freqArray);
   let indexMode = 0;
   let sum = 0;

   for (i = 0; i < freqArray.length; i++) {
      sum += freqArray[i];
      if (freqArray[i] == modeNum) {
         modeArray[indexMode] = tempArray[sum - 1];
         indexMode++;
      }
   }

   if (modeNum == 1) {
      return false;
   }
   else {
      return modeArray;
   }
}

function calcStdDev(array) {
   return (Math.sqrt(calcVariance(array))).toFixed(2);
}

function calcSum(array) {
	let sum = 0
	
	for (i = 0; i < array.length; i++){
		sum = sum + array[i];
	}
	
	return sum.toFixed(2);
}

function calcVariance(array) {
   let mean = calcMean(array);
   let tempArray = [];
   for (i = 0; i <array.length; i++) {
      tempArray[i] = Math.pow((mean -  array[i]), 2);
   }
   return calcMean(tempArray);
}

function findMax(array) {
   let tempArray = [];
   for (i = 0; i <array.length; i++) {
      tempArray[i] = array[i];
   }
   tempArray.sort(function(a, b){return a - b});
   return tempArray[tempArray.length - 1].toFixed(2);
}

function findMin(array) {
   let tempArray = [];
   for (i = 0; i <array.length; i++) {
      tempArray[i] = array[i];
   }
   tempArray.sort(function(a, b){return b - a});
   return tempArray[tempArray.length - 1].toFixed(2);
}
