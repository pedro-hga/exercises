function timeRequiredToBuy(tickets: number[], k: number): number {
  const time: number = 1;
  let elapsedTime: number = 0;
  let i: number = 0;

  while (tickets[k] !== 0) {
    if (tickets[i] === undefined) i = 0;

    if (tickets[i] === 0) {
      i++;
      continue;
    }

    elapsedTime += time;
    tickets[i] = tickets[i] - 1;
    i++;


  }

  return elapsedTime;
};

