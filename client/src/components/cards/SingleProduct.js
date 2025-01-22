// import React, { lazy } from "react";
// import { Card, Tabs } from "antd";
// import { Link } from "react-router-dom";
// import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
// import { Carousel } from "react-responsive-carousel";
// import "./SingleProduct.css"
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Laptop from '../../images/laptop.png';
// import ProductListItems from "./ProductListItems";
// import './SingleProduct.css';
// import StarRating from "react-star-ratings";
// import RatingModal from "../modal/RatingModal";
// import { showAverage } from "../../functions/rating";
// const { Meta } = Card;

// const { TabPane } = Tabs;
// const SingleProduct = ({ product , onStarClick , star}) => {
//   const { title, description, images, _id } = product;

//   return (
//     <>
//       <div className="col-md-7">
//         {images && images.length ? (
//           <Carousel showArrows={true} autoPlay infiniteLoop>
//             {images && images.map((i) => <img src={i.url} key={i.public_id} />)}
//           </Carousel>) : (
//           <Card cover={<img src={Laptop} className="mb-3 card-image" />}></Card>
//         )}

//         <Tabs type="card">
//           <TabPane tab="Description" key="1">
//             {description && description}
//           </TabPane>
//           <TabPane tab="More" key="2">
//             Call use on xxxx xxx xxx to learn more about this product.
//           </TabPane>
//         </Tabs>

//       </div>

//       <div className="col-md-5">
//         <h3 className="p-3" style={{ backgroundColor: "#D4BEE4" }}>{title}</h3>
//         {product && product.ratings && product.ratings.length > 0 ? (
//           showAverage(product)
//         ) : (
//           <div className="text-center pt-1 pb-3">No rating yet</div>
//         )}


//         <Card
//           actions={[
//             <>
//               <ShoppingCartOutlined className="text-success" /> <br />
//               Add to Cart
//             </>,
//             <Link to="/">
//               <HeartOutlined className="text-info" /> <br /> Add to Wishlist
//             </Link>,
//             <RatingModal>
//               <StarRating
//                 name={_id}
//                 numberOfStars={5}
//                 rating={star}
//                 changeRating={onStarClick}
//                 isSelectable={true}
//                 starRatedColor="red"
//               />
//             </RatingModal>,
//           ]}
//         >
//           <ProductListItems product={product} />
//         </Card>
//       </div>
//     </>
//   );
// };

// export default SingleProduct;
import React, { useState } from "react";
import { Card, Tabs, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Laptop from "../../images/laptop.png";
import ProductListItems from "./ProductListItems";
import StarRating from "react-star-ratings";
import RatingModal from "../modal/RatingModal";
import { showAverage } from "../../functions/rating";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist } from "../../functions/user";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const { TabPane } = Tabs;

// this is childrend component of Product page
const SingleProduct = ({ product, onStarClick, star }) => {
  const [tooltip, setTooltip] = useState("Click to add");

  // redux
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { title, images, description, _id } = product;

  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new product to cart
      cart.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem("cart", JSON.stringify(unique));
      // show tooltip
      setTooltip("Added");

      // add to reeux state
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
    }
  };


  const handleAddToWishlist = (e) => {
    e.preventDefault();
    addToWishlist(product._id, user.token)
      .then((res) => {
        console.log("ADDED TO WISHLIST", res.data);
        swal({
          title: "Added to Wishlist!",
          text: `${product.title} has been added to your wishlist.`,
          icon: "success",
          button: "OK",
        });
        navigate("/user/wishlist");
      })
      .catch((err) => {
        console.error("WISHLIST ERROR", err);
        swal({
          title: "Error!",
          text: "Failed to add the product to your wishlist. Please try again.",
          icon: "error",
          button: "OK",
        });
      });
  };
  
  // const handleAddToWishlist = (e) => {
  //   e.preventDefault();
  //   addToWishlist(product._id, user.token).then((res) => {
  //     console.log("ADDED TO WISHLIST", res.data);
  //     toast.success("Added to wishlist");
  //     navigate("/user/wishlist");
  //   });
  // };

  return (
    <>
      <div className="col-md-7 mb-2">
        {images && images.length ? (
          <Carousel showArrows={true} autoPlay infiniteLoop>
            {images && images.map((i) => <img src={i.url} key={i.public_id} />)}
          </Carousel>
        ) : (
          <Card cover={<img src={Laptop} className="mb-3 card-image" />}></Card>
        )}

        <Tabs type="card">
          <TabPane tab="Description" key="1">
            {description && description}
          </TabPane>
          <TabPane tab="More" key="2">
            Call use on xxxx xxx xxx to learn more about this product.
          </TabPane>
        </Tabs>
      </div>

      <div className="col-md-5">
      <h2 className=" p-3 d-none d-md-block" style={{ backgroundColor: "#8174A0" , color:"white"}}>{title}</h2> {/* Visible on large screens */}
         <h6 className=" p-3 d-block d-md-none" style={{ backgroundColor: "#8174A0", color:"white" }}>{title}</h6> {/* Visible on small screens */}


        {product && product.ratings && product.ratings.length > 0 ? (
          showAverage(product)
        ) : (
          <div className="text-center pt-1 pb-3">No rating yet</div>
        )}

        <Card
          actions={[
            <Tooltip title={tooltip}>
              <a onClick={handleAddToCart}>
                <ShoppingCartOutlined className="text-danger" /> <br /> Add to
                Cart
              </a>
            </Tooltip>,
           <a onClick={handleAddToWishlist}>
           <HeartOutlined className="text-info" /> <br /> Add to Wishlist
         </a>,
            <RatingModal>
              <StarRating
                name={_id}
                numberOfStars={5}
                rating={star}
                changeRating={onStarClick}
                isSelectable={true}
                starRatedColor="red"
              />
            </RatingModal>,
          ]}
        >
          <ProductListItems product={product} />
        </Card>
      </div>
    </>
  );
};

export default SingleProduct;