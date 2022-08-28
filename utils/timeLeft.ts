export default (time: number): number => {
  const now = new Date().getTime();
  return time - now;
};
