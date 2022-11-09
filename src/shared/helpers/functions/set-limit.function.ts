export const setLimit = (limit: number) => {
  if (!limit) {
    return (limit = 10);
  } else {
    return limit;
  }
};
