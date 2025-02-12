export const getPrime = (n) => {
  let i = 2;
  if (n % 2 === 0) return false;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};
