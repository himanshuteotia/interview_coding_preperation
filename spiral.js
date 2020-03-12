console.log("---Spiral problem ----")

function spiral(n) {
  let results = [];
  for(i =0; i < n; i++) {
    results.push([])
  }
  console.log(results)
  let counter = 1;
  let row = 0;
  let higherRow = n;
  let column = 0;
  let higherColumn = n;

  while(row <= higherRow && column <= higherColumn) {
    
    // horizontal 

    for(let i = column; i < higherColumn; i++) {

      results[row][i] = counter;
      console.log("resultss", results)
      counter++
    } 
    row++;
    for(let i = row; i < higherRow; i++) {
      results[i][higherColumn] = counter;
      counter++
    }
    higherColumn--;   
    for(let i = higherColumn; i < column; i--) {
      results[i][higherRow] = counter;
      counter++;
    }
    higherRow--;
    for(let i=higherRow; i < row; i--) {
      results[i][column] = counter;
      counter++
    }
    column++;
  }
  console.log("results",results)
}
spiral(3)