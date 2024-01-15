export const formatPrice = (price) => {
  const amount = new Intl.NumberFormat("ar-DZ", {
    style: "currency",
    currency: "DZD",
  }).format((price / 100).toFixed(2));
  return amount;
};

export const formatDate = (date) => {
  const newDate = new Date(date);
  const option = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  return newDate.toLocaleDateString("fr-DZ", option);
};
