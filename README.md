**Githib link** :- https://github.com/kumar-rajat0/React-Project-new

     **Project overview** : ShoppyGlobe is a basic e‑commerce application where users can:
                        1). Browse products
                        2), View product details
                        3). Search products
                        4). Add/remove items from the cart
                        5). Adjust cart quantities
                        6). Proceed to checkout
                        7), Place a dummy order

**Project structure** : ├── src
│ ├── components
│ │ ├── Header.jsx
│ │ ├── ProductList.jsx
│ │ ├── ProductItem.jsx
│ │ ├── ProductDetail.jsx
│ │ ├── Cart.jsx
│ │ ├── CartItem.jsx
│ │ ├── Checkout.jsx
│ │ └── NotFound.jsx
│ ├── hooks
│ │ └── useFetchProducts.js
│ ├── store
│ │ ├── cartSlice.js
│ │ ├── searchSlice.js
│ │ └── store.js
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
│ └── data
│ └── (optional placeholder)
├── vite.config.js
└── README.md


**How to Run This Project** :-  1).npm install 
                                2).npm run dev
                            

# ShoppyGlobe Backend API

## Technologies Used
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- ThunderClient

## How to Run the Project
1. Clone the repository
2. Install dependencies:
   npm install
3. Start server:
   npm run dev
## API Endpoints
- GET /api/products
- GET /api/products/:id
- POST /api/auth/register
- POST /api/auth/login
- POST /api/cart
- PUT /api/cart/:id
- DELETE /api/cart/:id

## API Testing
All APIs are tested using ThunderClient.
Screenshots are available in the screenshots folder.