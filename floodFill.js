const floodFill = (image, startRow, startCol, newColor) => {
  const floodHelper = (image, oldColor, newColor, row, col) => {
    if(!(row < image.length && col < image[0].length && row >= 0 && col >= 0)) {
      return;
    }
    if(image[row][col] === oldColor) {
      image[row][col] = newColor;
      if(row > 0) {
        floodHelper(image, oldColor, newColor, row - 1, col);
      }
      if(row < image.length) {
        floodHelper(image, oldColor, newColor, row + 1, col);
      }
      if(col > 0) {
        floodHelper(image, oldColor, newColor, row, col - 1);
      }
      if(col < image[0].length) {
        floodHelper(image, oldColor, newColor, row, col + 1);
      }
    }
  }
  if(image[startRow][startCol] === newColor) {
    return image;
  } else {
    floodHelper(image, image[startRow][startCol], newColor, startRow, startCol);
    return image;
  }
}