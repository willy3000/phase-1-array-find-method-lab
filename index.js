// code your solution here

const superbowlWin = (record) => {
  const foundObject = record.find((obj) => {
    return obj.result === "W";
  });
  if (foundObject) {
    return foundObject.year;
  } else {
    return undefined;
  }
};
