/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react";

// React icons
import { RiShoppingCartFill } from "react-icons/ri";
import { BiSolidCommentEdit } from "react-icons/bi";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import { TbCurrencyTaka } from "react-icons/tb";

// Fruits img
import Apricot from "..//..//assets/Images/Fruits/Apricot.png";
import Apple from "..//..//assets/Images/Fruits/Apple.png";
import Blackberry from "..//..//assets/Images/Fruits/Blackberry.png";
import Boysenberry from "..//..//assets/Images/Fruits/Boysenberry.png";
import cherry2 from "..//..//assets/Images/Fruits/cherry2.png";
import Dates from "..//..//assets/Images/Fruits/Dates.png";
import green_guava from "..//..//assets/Images/Fruits/green-guava.png";
import mango from "..//..//assets/Images/Fruits/Mango.png";
import Oranges from "..//..//assets/Images/Fruits/Oranges.png";
import Pears from "..//..//assets/Images/Fruits/Pears.png";
import Pomegranate from "..//..//assets/Images/Fruits/Pomegranate.png";
import red_guava from "..//..//assets/Images/Fruits/red_guava.png";
import strawberry from "..//..//assets/Images/Fruits/strawberry.png";

//Vegetabes img
import Beets from "..//../assets/Images/Vegetabes img/Beets.png";
import Capsicum from "..//../assets/Images/Vegetabes img/Capsicum.png";
import carrots from "..//../assets/Images/Vegetabes img/carrots.png";
import Green_Cauliflower from "..//../assets/Images/Vegetabes img/Green_Cauliflower.png";
import Green_peas from "..//../assets/Images/Vegetabes img/Green_peas.png";
import Onion from "..//../assets/Images/Vegetabes img/Onion.png";
import potato from "..//../assets/Images/Vegetabes img/potato.png";
import Puishak from "..//../assets/Images/Vegetabes img/Puishak.png";
import Red_Vegetabe from "..//../assets/Images/Vegetabes img/Red Vegetabes.png";
import Red_cabbage from "..//../assets/Images/Vegetabes img/Red_cabbage.png";
import Spinach from "..//../assets/Images/Vegetabes img/Spinach.png";
import Tomatoes from "..//../assets/Images/Vegetabes img/Tomatoes.png";

//Sweet Alart
import Swal from "sweetalert2";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../Firebase/Firebase.Config";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [user] = useAuthState(auth); // Login user information
  const navigate = useNavigate();

  const [cart, setCart] = useState([]); //Add To Cart State
  const [loading, setLoading] = useState(true); // State to manage loading state

  /** Product fo Fruits list  state **/
  const [products, setProducts] = useState([
    {
      url: Apple,
      name: "Apple",

      weight: "KG",
      price: 300,
      commentIcon: BiSolidCommentEdit,
      takaIcon: TbCurrencyTaka,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      loveIcon2: IoIosHeartEmpty,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
    {
      url: strawberry,
      name: "Strawberry",
      weight: "kg",
      price: 460,
      commentIcon: BiSolidCommentEdit,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      loveIcon2: IoIosHeartEmpty,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
    {
      url: Apricot,
      name: "Apricot",

      weight: "kg",
      price: 560,
      commentIcon: BiSolidCommentEdit,
      loveIcon2: IoIosHeartEmpty,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
    {
      url: Blackberry,
      name: "Blackberry",

      weight: "kg",
      price: 760,
      commentIcon: BiSolidCommentEdit,
      loveIcon2: IoIosHeartEmpty,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
    // {
    //   url: Boysenberry,
    //   name: "Boysenberry",

    //   weight: "kg",
    //   price: 800,
    //   commentIcon: BiSolidCommentEdit,
    //   loveIcon2: IoIosHeartEmpty,
    //   cartIcon: RiShoppingCartFill,
    //   loveIcon: IoMdHeart,
    //   shearIcon: IoShareSocial,
    //   addToCartBtn: "Add To Cart",
    // },
    {
      url: cherry2,
      name: "Cherry",

      weight: "kg",
      price: 996,
      commentIcon: BiSolidCommentEdit,
      loveIcon2: IoIosHeartEmpty,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
    {
      url: Dates,
      name: "Dates",

      weight: "kg",
      price: 2040,
      commentIcon: BiSolidCommentEdit,
      loveIcon2: IoIosHeartEmpty,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
    {
      url: green_guava,
      name: "Green Guava",

      weight: "kg",
      price: 150,
      commentIcon: BiSolidCommentEdit,
      loveIcon2: IoIosHeartEmpty,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
    {
      url: mango,
      name: "Mango",

      weight: "kg",
      price: 360,
      commentIcon: BiSolidCommentEdit,
      loveIcon2: IoIosHeartEmpty,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
    {
      url: Oranges,
      name: "Oranges",

      weight: "kg",
      price: 520,
      commentIcon: BiSolidCommentEdit,
      loveIcon2: IoIosHeartEmpty,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
    {
      url: Pears,
      name: "Pears",

      weight: "kg",
      price: 360,
      commentIcon: BiSolidCommentEdit,
      loveIcon2: IoIosHeartEmpty,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
    {
      url: Pomegranate,
      name: "Pomegranate",

      weight: "kg",
      price: 630,
      commentIcon: BiSolidCommentEdit,
      loveIcon2: IoIosHeartEmpty,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
    {
      url: red_guava,
      name: "Red_Guava",

      weight: "kg",
      price: 399,
      commentIcon: BiSolidCommentEdit,
      loveIcon2: IoIosHeartEmpty,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
  ]);

  const [vegetables, setVegetables] = useState([
    {
      url: Beets,
      name: "Beetroot",
      weight: "KG",
      price: 120,
      commentIcon: BiSolidCommentEdit,
      takaIcon: TbCurrencyTaka,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      loveIcon2: IoIosHeartEmpty,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
    {
      url: Tomatoes,
      name: "Tomatoe",
      weight: "KG",
      price: 60,
      commentIcon: BiSolidCommentEdit,
      takaIcon: TbCurrencyTaka,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      loveIcon2: IoIosHeartEmpty,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
    {
      url: Capsicum,
      name: "Capsicum",
      weight: "KG",
      price: 100,
      commentIcon: BiSolidCommentEdit,
      takaIcon: TbCurrencyTaka,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      loveIcon2: IoIosHeartEmpty,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
    {
      url: carrots,
      name: "Carrots",
      weight: "KG",
      price: 70,
      commentIcon: BiSolidCommentEdit,
      takaIcon: TbCurrencyTaka,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      loveIcon2: IoIosHeartEmpty,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
    {
      url: Green_Cauliflower,
      name: "Green Cauliflower",
      weight: "KG",
      price: 95,
      commentIcon: BiSolidCommentEdit,
      takaIcon: TbCurrencyTaka,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      loveIcon2: IoIosHeartEmpty,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
    {
      url: Green_peas,
      name: "Green peas",
      weight: "KG",
      price: 45,
      commentIcon: BiSolidCommentEdit,
      takaIcon: TbCurrencyTaka,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      loveIcon2: IoIosHeartEmpty,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
    {
      url: Onion,
      name: "Onion",
      weight: "KG",
      price: 110,
      commentIcon: BiSolidCommentEdit,
      takaIcon: TbCurrencyTaka,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      loveIcon2: IoIosHeartEmpty,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
    {
      url: potato,
      name: "Potato",
      weight: "KG",
      price: 70,
      commentIcon: BiSolidCommentEdit,
      takaIcon: TbCurrencyTaka,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      loveIcon2: IoIosHeartEmpty,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
    {
      url: Puishak,
      name: "Puishak",
      weight: "KG",
      price: 50,
      commentIcon: BiSolidCommentEdit,
      takaIcon: TbCurrencyTaka,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      loveIcon2: IoIosHeartEmpty,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
    {
      url: Red_Vegetabe,
      name: "Red_Vegetabe",
      weight: "KG",
      price: 40,
      commentIcon: BiSolidCommentEdit,
      takaIcon: TbCurrencyTaka,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      loveIcon2: IoIosHeartEmpty,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
    {
      url: Red_cabbage,
      name: "Red Cabbage",
      weight: "KG",
      price: 90,
      commentIcon: BiSolidCommentEdit,
      takaIcon: TbCurrencyTaka,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      loveIcon2: IoIosHeartEmpty,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
    {
      url: Spinach,
      name: "Spinach",
      weight: "KG",
      price: 105,
      commentIcon: BiSolidCommentEdit,
      takaIcon: TbCurrencyTaka,
      cartIcon: RiShoppingCartFill,
      loveIcon: IoMdHeart,
      loveIcon2: IoIosHeartEmpty,
      shearIcon: IoShareSocial,
      addToCartBtn: "Add To Cart",
    },
  ]);

  /** All Functionality**/
  //Add to Cart Function
  const addToCartHandler = (data, index) => {
    setCart([...cart, { ...data, quantity: 1, sold: 0 }]);
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Added a New Item Cart `,
      showConfirmButton: false,
      timer: 1500,
      width: 360,
    });
  };

  // if the user has, then they can do cart items. without the user can't cart items.
  const addToCartWithCondition = (product, index) => {
    if (user) {
      addToCartHandler(product, index);
    } else {
      navigate("/login"); // Redirect to the login page
    }
  };

  //Show item Number to cart Icon
  const count = () => {
    return cart.length;
  };

  //Quantity Increment and Decrement Fuction
  // Increment function
  const Increment = (index) => {
    const updatedCart = cart.map((item, idx) =>
      idx === index
        ? {
            ...item,
            quantity: item.quantity + 1,
            price: (item.price / item.quantity) * (item.quantity + 1),
          }
        : item
    );
    setCart(updatedCart);
  };

  // Decrement function
  const Decrement = (index) => {
    const updatedCart = cart.map((item, idx) =>
      idx === index && item.quantity > 1
        ? {
            ...item,
            quantity: item.quantity - 1,
            price: (item.price / item.quantity) * (item.quantity - 1),
          }
        : item
    );
    setCart(updatedCart);
  };

  // Total pirce
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // Total Quantity
  const totalQuantity = cart.reduce((quan, i) => quan + i.quantity, 0);

  let deliveryCharge;
  //Delivery Charge Logic

  if (totalQuantity < 1) {
    deliveryCharge = 0;
  } else if (totalQuantity < 6) {
    deliveryCharge = 100;
  } else if (totalQuantity <= 10) {
    deliveryCharge = 200;
  } else if (totalQuantity <= 20) {
    deliveryCharge = 350;
  } else if (totalQuantity <= 30) {
    deliveryCharge = 450;
  } else {
    deliveryCharge = 600;
  }

  // Calculate the payable total price including delivery charge
  const payableTotalPrice = totalPrice + deliveryCharge;

  // Delete single cart item
  const deleteCartItem = (index) => {
    const updatedCart = cart.filter((_, idx) => idx !== index);
    setCart(updatedCart);
  };

  // Delete all Cart item
  const clearCart = () => {
    setCart([]);
  };

  // Product Loved Function
  const toggleLoveHandler = (index) => {
    const updateProductLove = [...products];
    // An item of "loved" has been added to your object. Since it is an object
    updateProductLove[index].loved = !updateProductLove[index].loved;
    setProducts(updateProductLove);
  };

  //Vegetables Loved Function
  const toggleLoveHandler2 = (index) => {
    const updateVegetabelsLove = [...vegetables];
    // An item of "loved" has been added to your object. Since it is an object
    updateVegetabelsLove[index].loved = !updateVegetabelsLove[index].loved;
    setProducts(updateVegetabelsLove);
  };
 // if the user has, then can do Love items. without the user can't Love items.
  const toggleLoveHandlerWithCondation = (index) => {
    if (user) {
      toggleLoveHandler2(index);
      toggleLoveHandler(index);
    } else {
      navigate("/login");
    }
  };

  // Loading Function
  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Set loading to false after 2 seconds (adjust as needed)

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, []);

  const contextValue = {
    products,
    vegetables,
    cart,
    addToCartWithCondition,
    toggleLoveHandlerWithCondation,
    count,
    Increment,
    Decrement,
    deliveryCharge,
    totalPrice,
    payableTotalPrice,
    totalQuantity,
    deleteCartItem,
    clearCart,
    user,
    loading,
  };

  return (
    <>
      <GlobalContext.Provider value={contextValue}>
        {children}
      </GlobalContext.Provider>
    </>
  );
};

// const useTheme = () => {
//     return useContext(GlobalContext);
// };

export { GlobalContext, GlobalProvider };
