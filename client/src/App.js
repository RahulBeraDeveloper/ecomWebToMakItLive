
// import React, { useEffect , lazy , Suspense } from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import { Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch
// import Home from './pages/Home';
// import Login from './pages/auth/Login';
// import Register from './pages/auth/Register';
// import NotFound from './pages/NotFound';
// import Header from './components/nav/Header';
// import RegisterComplete from './pages/auth/RegisterComplete';
// import ForgotPassword from './pages/auth/ForgotPassword';
// import History from './pages/user/History';
// import UserRoute from './components/routes/UserRoutes';
// import Password from './pages/user/Password';
// import WishList from './pages/user/WishList';
// import AdminRoute from './components/routes/AdminRoute';
// import AdminDashboard from './pages/admin/AdminDashboard';
// import CategoryCreate from './pages/admin/category/CategoryCreate';
// import CategoryUpdate from './pages/admin/category/CategoryUpdate';
// import SubCreate from './pages/admin/sub/SubCreate';
// import SubUpdate from './pages/admin/sub/SubUpdate';
// import ProductCreate from './pages/admin/product/ProductCreate';
// import AllProducts from './pages/admin/product/AllProducts';
// import UpdateProduct from './pages/admin/product/UpdateProduct';
// import Product from './pages/Product';
// import CategoryHome from './pages/category/CategoryHome'
// import SubHome from './pages/sub/SubHome'
// import Shop from './pages/Shop'
// import Cart from './pages/Cart'
// import SideDrawer from './components/drawer/SideDrawer';
// import Checkout from './pages/Checkout'
// import CreateCoupon from './pages/admin/coupon/CreateCoupon'
// import Payment from "./pages/Payment"
// import Footer  from './pages/Footer';



// import { useLocation } from 'react-router-dom';


// import { auth } from './firebase';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { currentUser } from './functions/auth';
// const App = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); // Initialize useNavigate
//   const location = useLocation();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(async (user) => {
//       if (user) {
//         const idTokenResult = await user.getIdTokenResult();
//         dispatch({
//           type: 'LOGGED_IN_USER',
//           payload: {
//             email: user.email,
//             token: idTokenResult.token,
//           },
//         });
//       }
//     });

//     // Cleanup
//     return () => unsubscribe();
//   }, [dispatch]);

//   // To check firebase auth state
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(async (user) => {
//       if (user) {
//         const idTokenResult = await user.getIdTokenResult();
//         console.log('user', user);
//         currentUser(idTokenResult.token)
//           .then((res) => {
//             dispatch({
//               type: 'LOGGED_IN_USER',
//               payload: {
//                 name: res.data.name,
//                 email: res.data.email,
//                 token: idTokenResult.token,
//                 role: res.data.role,
//                 _id: res.data._id,
//               },
//             });
//             // navigate('/'); // Redirect on successful login
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       }
//     });
//     // Cleanup
//     return () => unsubscribe();
//   }, [dispatch, navigate]);

//   return (
//     <>
//       <Header />
        
//       <ToastContainer />

//       <SideDrawer/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="*" element={<NotFound />} />
//         <Route path="/register/complete" element={<RegisterComplete />} />
//         <Route path="/forgot/password" element={<ForgotPassword />} />
//         <Route path="/product/:slug" element={<Product />} />
//         <Route exact path="/category/:slug" element={<CategoryHome />} />
//         <Route path="/sub/:slug" element={<SubHome />} /> 
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout />} />  
//         <Route path="/payment" element={<Payment />} /> 
      
//         {/* <Route path="/" element={<Footer />} />  */}
//         {/* User protected routes */}
//         <Route
//           path="/user/history"
//           element={
//             <UserRoute>
//               <History />
//             </UserRoute>
//           }
//         />
//         <Route
//           path="/user/password"
//           element={
//             <UserRoute>
//               <Password />
//             </UserRoute>
//           }
//         />
//         <Route
//           path="/user/wishlist"
//           element={
//             <UserRoute>
//               <WishList />
//             </UserRoute>
//           }
//         />

//         {/* Admin protected routes */}
//         <Route
//           path="/admin/dashboard"
//           element={
//             <AdminRoute>
//               <AdminDashboard />
//             </AdminRoute>
//           }
//         />

//         <Route
//           path="/admin/category"
//           element={
//             <AdminRoute>
//               <CategoryCreate />
//             </AdminRoute>
//           }
//         />


//         <Route
//           path="/admin/category/:slug"
//           element={
//             <AdminRoute>
//               <CategoryUpdate />
//             </AdminRoute>
//           }
//         />

//         <Route
//           path="/admin/sub"
//           element={
//             <AdminRoute>
//               <SubCreate />
//             </AdminRoute>
//           }
//         />


//         <Route
//           path="/admin/sub/:slug"
//           element={
//             <AdminRoute>
//               <SubUpdate />
//             </AdminRoute>
//           }
//         />


//         <Route
//           path="/admin/product"
//           element={
//             <AdminRoute>
//               <ProductCreate />
//             </AdminRoute>
//           }
//         />

//         <Route
//           path="/admin/products"
//           element={
//             <AdminRoute>
//               <AllProducts />
//             </AdminRoute>
//           }
//         />

//         <Route
//           path="/admin/product/:slug"
//           element={
//             <AdminRoute>
//               <UpdateProduct />
//             </AdminRoute>
//           }
//         />

//         <Route
//           path="/admin/coupon"
//           element={
//             <AdminRoute>
//               <CreateCoupon />
//             </AdminRoute>
//           }
//         />

//       </Routes>

//       {location.pathname === '/' && <Footer />}


//     </>
//   );
// };

// export default App;//AllProducts
import React, { useEffect, lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/nav/Header';
import SideDrawer from './components/drawer/SideDrawer';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { currentUser } from './functions/auth';
import { LoadingOutlined } from '@ant-design/icons';
// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const NotFound = lazy(() => import('./pages/NotFound'));
const RegisterComplete = lazy(() => import('./pages/auth/RegisterComplete'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword'));
const History = lazy(() => import('./pages/user/History'));
const Password = lazy(() => import('./pages/user/Password'));
const WishList = lazy(() => import('./pages/user/WishList'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const CategoryCreate = lazy(() => import('./pages/admin/category/CategoryCreate'));
const CategoryUpdate = lazy(() => import('./pages/admin/category/CategoryUpdate'));
const SubCreate = lazy(() => import('./pages/admin/sub/SubCreate'));
const SubUpdate = lazy(() => import('./pages/admin/sub/SubUpdate'));
const ProductCreate = lazy(() => import('./pages/admin/product/ProductCreate'));
const AllProducts = lazy(() => import('./pages/admin/product/AllProducts'));
const UpdateProduct = lazy(() => import('./pages/admin/product/UpdateProduct'));
const Product = lazy(() => import('./pages/Product'));
const CategoryHome = lazy(() => import('./pages/category/CategoryHome'));
const SubHome = lazy(() => import('./pages/sub/SubHome'));
const Shop = lazy(() => import('./pages/Shop'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const CreateCoupon = lazy(() => import('./pages/admin/coupon/CreateCoupon'));
const Payment = lazy(() => import('./pages/Payment'));
const Footer = lazy(() => import('./pages/Footer'));
const UserRoute = lazy(() => import('./components/routes/UserRoutes'));
const AdminRoute = lazy(() => import('./components/routes/AdminRoute'));

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        });
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        currentUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: 'LOGGED_IN_USER',
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <Suspense fallback={<div className='col text-center p-5'>
      ___PrimeTech
      <LoadingOutlined/>
      Store____
      </div>}>
      <Header />
      <ToastContainer />
      <SideDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register/complete" element={<RegisterComplete />} />
        <Route path="/forgot/password" element={<ForgotPassword />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/category/:slug" element={<CategoryHome />} />
        <Route path="/sub/:slug" element={<SubHome />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />

        {/* User protected routes */}
        <Route
          path="/user/history"
          element={
            <UserRoute>
              <History />
            </UserRoute>
          }
        />
        <Route
          path="/user/password"
          element={
            <UserRoute>
              <Password />
            </UserRoute>
          }
        />
        <Route
          path="/user/wishlist"
          element={
            <UserRoute>
              <WishList />
            </UserRoute>
          }
        />

        {/* Admin protected routes */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/category"
          element={
            <AdminRoute>
              <CategoryCreate />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/category/:slug"
          element={
            <AdminRoute>
              <CategoryUpdate />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/sub"
          element={
            <AdminRoute>
              <SubCreate />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/sub/:slug"
          element={
            <AdminRoute>
              <SubUpdate />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/product"
          element={
            <AdminRoute>
              <ProductCreate />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <AdminRoute>
              <AllProducts />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/product/:slug"
          element={
            <AdminRoute>
              <UpdateProduct />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/coupon"
          element={
            <AdminRoute>
              <CreateCoupon />
            </AdminRoute>
          }
        />
      </Routes>
      {location.pathname === '/' && <Footer />}
    </Suspense>
  );
};

export default App;
