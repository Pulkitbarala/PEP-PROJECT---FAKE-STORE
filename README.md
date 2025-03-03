# 🛒 React.js E-Commerce App

A modern, fully responsive e-commerce web application built using **React.js**, **Redux**, and **Bootstrap**.  
This app allows users to browse products, add them to a cart, and seamlessly check out with a visually appealing order confirmation animation.  
Designed with a clean and intuitive user interface, the app provides a smooth shopping experience across all devices.

---

## 🧩 Tech Stack Used
- **Frontend:** React.js for building the user interface, Redux for efficient state management, and Bootstrap for responsive design and styling.
- **API:** [Fake Store API](https://fakestoreapi.com) for real-time product data.
- **Icons:** Font Awesome for adding icons that enhance UI/UX.
- **Routing:** React Router for seamless page navigation.
- **Babel Plugin:** used to apply specific code transformations to JavaScript code, allowing developers to write modern JavaScript syntax that can be transpiled to older browser-compatible versions by modifying the Abstract Syntax Tree (AST) of the code, essentially enabling the use of new features without waiting for full browser support across different environments. 

---

## 💻 Demo
👉 [**Live Demo**](#) *https://fakestore-psi-lime.vercel.app/* - On Vercel

👉 [**Live Demo**](#) *https://project-s-104e.onrender.com/*  - On Render


---

## 🌟 **Features**
- ✅ **Responsive and Modern UI:** The app is fully responsive and looks great on all devices, from mobile to desktop.
- ✅ **Product Listing with Categories:** Browse through products grouped by categories for better navigation.
- ✅ **Product Details Page:** View detailed information about each product, including description, price, and category.
- ✅ **Shopping Cart with Quantity Control:** Easily add products to the cart, adjust quantities, or remove items.
- ✅ **Real-time Cart Updates:** The cart dynamically updates as items are added or removed, reflecting changes instantly.
- ✅ **Checkout Form with Multiple Payment Methods:** Choose from Cash on Delivery (COD), Net Banking, or UPI, with relevant form fields for each option.
- ✅ **Order Summary with Animation:** Before placing an order, review the order summary. Upon confirmation, an animated popup with a green tick visually indicates success.
- ✅ **Smooth Animations and Transitions:** Subtle animations enhance the user experience without being overwhelming.

---

## 💾 Data Persistence
- The shopping cart and user data are saved using **Local Storage**, ensuring that the user's cart items and information are preserved even after the page is refreshed or the browser is closed.  
- Local Storage allows for a seamless shopping experience by retaining product selections and user preferences without requiring an external database.

---
## 🖼️ Screenshots
### 🏡 Home Page
![Home Page](https://i.imghippo.com/files/Kozr4999uYo.png)
---
### Product Page
![Product Page](https://i.imghippo.com/files/KKcE1354fY.png)
---
### 🛒 Cart Page
![Cart Page](https://i.imghippo.com/files/HKBb3889bkg.png)
---
### 📝 Checkout Page
![Checkout Page](https://i.imghippo.com/files/Mkri4505dk.png)
---
### ✅ Order Confirmation Popup
![Order Confirmation](https://i.imghippo.com/files/HgM2922w.png)

---

## 🌐 **API Used**
The app fetches real-time product data from the [**Fake Store API**](https://fakestoreapi.com), ensuring that users can view product details and prices without any backend setup.  
A big thank you to the creators of Fake Store API for providing a free and accessible API that made this project possible.
[**GITHUB**](https://github.com/keikaavousi/fake-store-api)

---

## 💻 How to Run Locally

Follow these steps to clone and run this project on your local machine:

### ✅ Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** installed on your system
- **Git** installed to clone the repository

### 🗂️ Steps to Set Up
1. **Clone the Repository**
```bash
git clone https://github.com/pulkitbarala/PEP-PROJECT---FAKE-STORE.git
```

2. **Navigate to the Project Folder**
```bash
cd react-ecommerce-app
```

3. **Install Dependencies**
```bash
npm install
```
*or using yarn*
```bash
yarn install
```
4. **Start the Development Server**
```bash
npm start
```
*or using yarn*
```bash
yarn start
```
5. **The app should now be running at:**
```bash
http://localhost:3000
```
---
### 💡 Customization
**Update the API or integrate a different one by modifying the API URL in redux/action.js.Modify the styles by editing the CSS files in the src directory.**
---

### 🤝 Contributing
**Contributions are welcome! If you'd like to contribute, please follow these steps:**

1. **Fork the repository.**
2. **Create a new branch for your feature or bug fix.**
3. **Commit your changes.**
4. **Submit a pull request for review.**
---

### ⚡ Performance and Optimization
*The app uses Redux to manage global state efficiently, reducing unnecessary re-renders.
Bootstrap ensures a responsive layout with minimal CSS overhead.
Lazy loading is implemented where necessary to optimize page performance.*
---
