function filterProductsByCategoryAndPrice (products, searchString, diapason) {
    products = products.filter(el => el.category === searchString && el.price > diapason[0] && el.price < diapason[1])
    products.forEach(element => {
            let averageRating = element.reviews.reduce((accum, el) => accum += el.rating, 0)
            element.averageRating = averageRating / element.reviews.length
    })
    return products
}

