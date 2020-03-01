function filterByTerm(input, serchTerm) {
  if (!serchTerm) throw Error('searchTerm cannot be empty');
  if (!input.length) throw Error('input cannot be empty');
  const regex = new RegEcp(searchTerm, 'i');
  return input.filter(function(arrayElement) {
    return arrayElement.url.match(regex);
  });
}

filterByTerm('input string', 'java');
