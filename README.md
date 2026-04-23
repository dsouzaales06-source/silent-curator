# The Silent Curator - E-commerce Platform

A premium artisanal crafts e-commerce platform built with Node.js, Express, MongoDB, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 14+
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone/Extract the project**
   ```bash
   cd silent-curator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start MongoDB**
   ```bash
   # If running locally, make sure MongoDB service is running
   mongod
   ```

5. **Seed the database with sample data (optional)**
   ```bash
   node backend/seeds.js
   ```

6. **Start the server**
   ```bash
   npm start
   # or for development with auto-reload
   npm run dev
   ```

7. **Open in browser**
   ```
   http://localhost:5000
   ```

## 📁 Project Structure

```
silent-curator/
├── public/
│   ├── index.html              # Home page
│   ├── pages/
│   │   ├── collection.html     # Products collection
│   │   ├── journal.html        # Articles/blog
│   │   ├── artist.html         # Artist profiles
│   │   ├── exhibitions.html    # Exhibitions showcase
│   │   ├── product.html        # Product detail
│   │   └── cart.html           # Shopping cart
│   └── js/
│       ├── main.js             # Home page logic
│       ├── collection.js       # Collection page logic
│       ├── journal.js          # Journal page logic
│       ├── artist.js           # Artist page logic
│       └── exhibitions.js      # Exhibition page logic
├── backend/
│   ├── server.js               # Express server
│   ├── models/                 # Database models
│   │   ├── Product.js
│   │   ├── Artist.js
│   │   ├── Exhibition.js
│   │   ├── Article.js
│   │   └── Cart.js
│   ├── controllers/            # Route handlers
│   │   ├── productController.js
│   │   ├── artistController.js
│   │   ├── exhibitionController.js
│   │   ├── articleController.js
│   │   └── cartController.js
│   └── routes/                 # API routes
│       ├── products.js
│       ├── artists.js
│       ├── exhibitions.js
│       ├── articles.js
│       └── cart.js
├── package.json
├── .env.example
└── README.md
```

## 🔌 API Endpoints

### Products
- `GET /api/products` - Get all products (paginated)
- `GET /api/products/featured` - Get featured products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Artists
- `GET /api/artists` - Get all artists
- `GET /api/artists/:id` - Get single artist
- `POST /api/artists` - Create artist
- `PUT /api/artists/:id` - Update artist
- `DELETE /api/artists/:id` - Delete artist

### Exhibitions
- `GET /api/exhibitions` - Get all exhibitions
- `GET /api/exhibitions/:id` - Get single exhibition
- `POST /api/exhibitions` - Create exhibition
- `PUT /api/exhibitions/:id` - Update exhibition
- `DELETE /api/exhibitions/:id` - Delete exhibition

### Articles
- `GET /api/articles` - Get all articles (paginated)
- `GET /api/articles/featured` - Get featured articles
- `GET /api/articles/:id` - Get single article
- `POST /api/articles` - Create article
- `PUT /api/articles/:id` - Update article
- `DELETE /api/articles/:id` - Delete article

### Cart
- `GET /api/cart/:sessionId` - Get cart
- `POST /api/cart/:sessionId` - Add to cart
- `PUT /api/cart/:sessionId/:productId` - Update cart item
- `DELETE /api/cart/:sessionId/:productId` - Remove from cart
- `DELETE /api/cart/:sessionId/clear/all` - Clear cart

## 🎨 Design System

The project uses a custom color scheme based on the material design system:
- **Primary**: #f2ca50 (Gold)
- **Background**: #121414 (Deep black)
- **Surface**: #1f2020 (Dark gray)
- **Fonts**: 
  - Headlines: Noto Serif
  - Body: Manrope
  - Icons: Material Symbols

## 🛒 Shopping Cart Features

- Session-based cart management
- Add/remove items
- Quantity adjustment
- Persistent storage using sessionId in localStorage

## 📊 Database Models

### Product
```javascript
{
  title: String,
  artist: String,
  category: String,
  material: String,
  price: Number,
  image: String,
  description: String,
  dimensions: String,
  weight: String,
  origin: String,
  available: Boolean,
  stock: Number,
  featured: Boolean
}
```

### Artist
```javascript
{
  name: String,
  title: String,
  bio: String,
  image: String,
  location: String,
  specialty: String,
  portfolio: [String],
  philosophy: String
}
```

### Exhibition
```javascript
{
  title: String,
  subtitle: String,
  description: String,
  startDate: Date,
  endDate: Date,
  location: String,
  image: String,
  featured: Boolean,
  status: String (current/upcoming/past),
  curator: String,
  artists: [String]
}
```

### Article
```javascript
{
  title: String,
  subtitle: String,
  author: String,
  category: String,
  content: String,
  image: String,
  publishedDate: Date,
  featured: Boolean
}
```

## 🔒 Environment Variables

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/silent-curator
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key_here
```

## 📝 Features

✅ Product catalog with pagination
✅ Artist profiles and portfolios
✅ Exhibition management
✅ Journal/Blog articles
✅ Shopping cart functionality
✅ Responsive design
✅ Dark mode UI
✅ RESTful API
✅ MongoDB database
✅ Session-based cart management

## 🚧 Future Enhancements

- User authentication
- Order management
- Payment integration (Stripe/PayPal)
- Search and filtering
- Reviews and ratings
- Wishlists
- Admin dashboard
- Email notifications

## 📄 License

MIT License - feel free to use this project for learning and development.

## 🤝 Support

For issues or questions, please create an issue in the repository.
