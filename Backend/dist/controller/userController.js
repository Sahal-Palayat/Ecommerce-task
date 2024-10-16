"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = getProducts;
const products = [
    {
        "id": 1,
        "name": "Tailored Dress",
        "description": "Elegant custom-fitted dress perfect for formal events.",
        "price": 149.99,
        "category": "Dresses",
        "stock": 50,
        "imageUrl": "https://via.placeholder.com/150?text=Tailored+Dress"
    },
    {
        "id": 2,
        "name": "Formal Suit",
        "description": "Bespoke formal suit crafted for a sleek and professional look.",
        "price": 299.99,
        "category": "Suits",
        "stock": 30,
        "imageUrl": "https://via.placeholder.com/150?text=Formal+Suit"
    },
    {
        "id": 3,
        "name": "Tailored Pants",
        "description": "Custom-fitted formal pants for a sharp and comfortable fit.",
        "price": 89.99,
        "category": "Pants",
        "stock": 100,
        "imageUrl": "https://via.placeholder.com/150?text=Tailored+Pants"
    },
    {
        "id": 4,
        "name": "Casual Shirt",
        "description": "Hand-stitched casual shirt made from premium cotton fabric.",
        "price": 49.99,
        "category": "Shirts",
        "stock": 200,
        "imageUrl": "https://via.placeholder.com/150?text=Casual+Shirt"
    },
    {
        "id": 5,
        "name": "Tailored Blazer",
        "description": "Custom blazer designed for both formal and semi-formal occasions.",
        "price": 199.99,
        "category": "Jackets",
        "stock": 40,
        "imageUrl": "https://via.placeholder.com/150?text=Tailored+Blazer"
    },
    {
        "id": 6,
        "name": "Evening Gown",
        "description": "Beautifully crafted evening gown made with high-quality fabric.",
        "price": 249.99,
        "category": "Dresses",
        "stock": 25,
        "imageUrl": "https://via.placeholder.com/150?text=Evening"
    }
];
async function getProducts(req, res) {
    try {
        res.json(products);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}
//# sourceMappingURL=userController.js.map