export function paginate(array, currentPage, itemsPerPage) {
  // Calculate the starting and ending indexes for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the items array to get the items for the current page
  const paginatedItems = array.slice(startIndex, endIndex);

  // pagination count
  const paginationCount = Math.ceil(array.length / itemsPerPage);

  return [paginatedItems, paginationCount];
}
