const filterProduct = {
    priceFilter: (categoryProducts, minPrice, maxPrice) => {
        return categoryProducts.filter(
            (categoryProduct) =>
                categoryProduct.price >= minPrice &&
                categoryProduct.price <= maxPrice
        );
    },
};

export default filterProduct;
