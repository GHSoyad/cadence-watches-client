# Cadence Watches

### Live Website Link https://cadence-watches.web.app/

## Description
The Project is developed using ReactJS, NodeJS, ExpressJS, MongoDB and FireBase, The app is responsive on smaller devices.

#### Admin Login Details
Email: admin@cadence.com
Password: Admin@cadence123

### CSS Framework
TailWind CSS Framework and DaisyUI components

### React Library's used
Some of the library's that was used in the project

#### React Router
 - To navigate the website
 - To load data from the API
 - To make dynamic paths for the website component
 - To make private routing
 - To redirect user

#### TanStack Query
 - To fetch data
 - To show data loading
 - To cache data

#### Axios
 - To fetch data
 - To Handle status error

#### React Hot Toast
 - To display messages

#### React Icons
 - To display icons

#### React Helmet Async
 - To dynamically display site title

#### React Photo View
 - To preview photos

#### Date fns
 - To format date

### Pages
The website consists of 6 main pages

 - Home
 - Blogs
 - Login
 - Register
 - Category Products
 - Dashboard
 - All Sellers (Admin)
 - All Buyers (Admin)
 - Reported Products (Admin)
 - My Products (Seller)
 - Add Product (Seller)
 - My Orders (Buyer)
 - Checkout (Buyer)

The Category Products page is dynamic which changes based on selected category
Dashboard route is divided into 3 parts which changes based on user role

### Features
Features of the website

 - Navbar can be used to navigate the website
 - Navbar has conditional rendering based on user login and logout
 - Homepage contains a Category list, Advertised product list, and Testimonial section
 - Clicking on a category takes the user to that category products page
 - Clicking on advertised item opens a booking modal to order the product, if the user is not logged in it will show login button
 - Category products page lists all products listed in the category
 - Each product card shows product details name, image, seller, price, years used, location
 - Product card have a book now button which opens a booking modal
 - The booking modal shows product name, price, logged in buyer name and email which are not editable
 - Buyer needs to input phone and location to submit the order, if buyer previously ordered the same product it will show a error toast
 - There is a small flag button beside product name to report the product
 - If the seller is verified it will show a blue tick to show the seller is verified
 - Blog page have some blog contents with title, author, image, and description
 - Login page has email-password and google login options
 - Register page has email-password and google registration options
 - During registration user can select their role buyer or seller (default is buyer)
 - Logging in with google will always give user the buyer role
 - Login, registration, google-login have jwt implemented with them
 - Footer has some dummy links and social media icons
 - Logged in user will see a dashboard and the dashboard shows different routes based on user role
 - Dashboard home shows the user name, user email and user role
 - Admin will see All sellers, All buyers and Reported products route
 - All sellers shows all sellers list with name, email, verify status and a delete button, If the seller is verified it will show Verified else it will show a verify button to make the seller verified
 - All buyers shows all sellers list with name, email and a delete button
 - Clicking the delete button will open a confirm modal to delete seller or buyer from the database
 - Reported products shows the product name, reporter and seller email, and a delete button to delete the report, associated product and product orders
 - Seller will see My products and Add product route
 - My products shows the products added by the seller with product name, category, price, sell status, advertise status and delete button
 - Advertise status shows if the product is advertised or not, if the product is available seller can click on advertise to show it on homepage
 - Seller can delete a their product by clicking the delete button which opens a confirm to delete the product and associated orders
 - Add product page has a form for seller to fill and add a product
 - Buyers will see My orders route
 - My orders route shows all the booked/ordered products of the buyer with product image, name, price and a pay button
 - Users can pay for the product by clicking on the pay button which takes them to checkout page
 - Checkout page has stripe card payment implemented for user to pay securely
 - If a user has paid for the booked/ordered product then it will show text paid instead of pay button
