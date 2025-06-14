export const calcIncrement = (initial: number = 0, count: number = 100) => {
  const items = [...Array(count)].map((_, i) => i);
  return items.reduce((acc, current) => acc + current, initial);
};
