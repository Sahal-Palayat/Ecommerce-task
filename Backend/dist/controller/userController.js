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
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9XVEcOB9iaPotIaNiFt-p5cbO1ARP2VJsow&s"
    },
    {
        "id": 2,
        "name": "Formal Suit",
        "description": "Bespoke formal suit crafted for a sleek and professional look.",
        "price": 299.99,
        "category": "Suits",
        "stock": 30,
        "imageUrl": "https://s3.envato.com/files/399907745/af_31345.JPG"
    },
    {
        "id": 3,
        "name": "Tailored Pants",
        "description": "Custom-fitted formal pants for a sharp and comfortable fit.",
        "price": 89.99,
        "category": "Pants",
        "stock": 100,
        "imageUrl": "https://images.bestsellerclothing.in/data/vero-moda/14-feb-2024/186912202_g2.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto&dpr=1.2"
    },
    {
        "id": 4,
        "name": "Casual Shirt",
        "description": "Hand-stitched casual shirt made from premium cotton fabric.",
        "price": 49.99,
        "category": "Shirts",
        "stock": 200,
        "imageUrl": "https://static.cilory.com/681508-thickbox_default/nologo-white-navy-checked-casual-shirt.jpg"
    },
    {
        "id": 5,
        "name": "Tailored Blazer",
        "description": "Custom blazer designed for both formal and semi-formal occasions.",
        "price": 199.99,
        "category": "Jackets",
        "stock": 40,
        "imageUrl": "https://i.etsystatic.com/7416761/r/il/3cc0b7/6110682008/il_340x270.6110682008_mimh.jpg"
    },
    {
        "id": 6,
        "name": "Evening Gown",
        "description": "Beautifully crafted evening gown made with high-quality fabric.",
        "price": 249.99,
        "category": "Dresses",
        "stock": 25,
        "imageUrl": "https://veranderwest.com/wp-content/uploads/2024/07/Elizabeth-ball-gown-horizontal-first-photo-1024x683.jpg"
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