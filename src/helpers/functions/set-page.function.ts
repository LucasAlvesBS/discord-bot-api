export const setPage = (page: number) => {
  if (!page) {
    return (page = 1);
  } else {
    return page;
  }
};
