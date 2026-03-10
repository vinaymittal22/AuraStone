export function applyProductFilters(products, filters) {
  return products.filter((product) => {
    const categoryMatch = filters.category === "all" || product.category === filters.category;
    const occasionMatch = filters.occasion === "all" || product.occasion === filters.occasion;
    const toneMatch = filters.tone === "all" || product.tone === filters.tone;
    const bestMatch = !filters.bestSeller || product.bestSeller;
    const newMatch = !filters.newArrival || product.newArrival;
    const priceMatch =
      filters.price === "all" ||
      (filters.price === "under-2500" && product.price < 2500) ||
      (filters.price === "2500-4000" && product.price >= 2500 && product.price <= 4000) ||
      (filters.price === "4000-plus" && product.price > 4000);

    return categoryMatch && occasionMatch && toneMatch && bestMatch && newMatch && priceMatch;
  });
}

export function sortProducts(products, sortBy) {
  const sorted = [...products];

  switch (sortBy) {
    case "newest":
      return sorted.sort((a, b) => Number(b.newArrival) - Number(a.newArrival) || b.id - a.id);
    case "price-low":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-high":
      return sorted.sort((a, b) => b.price - a.price);
    case "best":
      return sorted.sort((a, b) => Number(b.bestSeller) - Number(a.bestSeller) || b.rating - a.rating);
    default:
      return sorted.sort((a, b) => b.rating - a.rating || Number(b.bestSeller) - Number(a.bestSeller));
  }
}
