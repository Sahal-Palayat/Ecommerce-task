"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        "imageUrl": "https://cdn.shopify.com/s/files/1/1742/4023/products/H3245225-SATEEN-COTTON-TAILORED-DRESS-BLACK-SCANLANTHEODORE-2_46f603a6-f86b-4a88-a3f8-05d265d7c521.jpg?v=1707245896"
    },
    {
        "id": 2,
        "name": "Formal Suit",
        "description": "Bespoke formal suit crafted for a sleek and professional look.",
        "price": 299.99,
        "category": "Suits",
        "stock": 30,
        "imageUrl": "https://cdn09.nnnow.com/web-images/large/styles/8EMMSRAJFX1/1693212252653/1.jpg"
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
function getProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            res.json(products);
        }
        catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });
}
