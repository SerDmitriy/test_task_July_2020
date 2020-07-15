export const secondTask = () => {
  const arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const arr2 = [
    [1, 2, 2, 3],
    [4, 5, 7, 6],
    [7, 8, 0, 9],
    [17, 18, 10, 19],
  ];

  const showSpiral = (array: number[][]) => {
    let res: number[] = [];
    let maxI = array.length - 1;
    let maxJ = array[0].length - 1;
    let minI = 0;
    let minJ = 0;
    const moveRight = () => {
      for (let i = minI; i <= maxI; i++) {
        res.push(array[minJ][i]);
      }
      minJ++;
    };
    const moveLeft = () => {
      for (let i = maxI; i >= minI; i--) {
        res.push(array[maxJ][i]);
      }
      maxJ--;
    };
    const moveDown = () => {
      for (let j = minJ; j <= maxJ; j++) {
        res.push(array[j][maxI]);
      }
      maxI--;
    };
    const moveUp = () => {
      for (let j = maxJ; j >= minJ; j--) {
        res.push(array[j][minI]);
      }
      minI++;
    };

    const movements = [moveRight, moveDown, moveLeft, moveUp];
    while (minI <= maxI && minJ <= maxJ) {
      movements.forEach(f => f());
    }
    console.log('___________________');
    console.log(array);
    console.log('result  ===', res);
  };

  console.log('=====================');
  console.log('Second task');
  showSpiral(arr1);
  showSpiral(arr2);
};
