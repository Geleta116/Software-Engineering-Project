import _ from "lodash";

export function paginate(array, currentPage, numberOfItemOnAPage) {
  const startingIndex = (currentPage - 1) * numberOfItemOnAPage;

  return _(array).slice(startingIndex).take(numberOfItemOnAPage).value();
}
