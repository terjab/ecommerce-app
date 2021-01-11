export const formatProduct = (data, included) => ({
  ...data.attributes,
  id: data.id,
  price: included.find(
    price => price.id === data.relationships.prices.data[0].id
  ).attributes,
})
