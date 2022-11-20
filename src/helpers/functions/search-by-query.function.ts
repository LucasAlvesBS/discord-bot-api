export const searchByQuery = (
  query: string,
  filterOptions: Record<string, unknown>,
) => {
  if (query) {
    filterOptions = {
      name: new RegExp(query, 'i'),
    };
    return filterOptions;
  }
};
