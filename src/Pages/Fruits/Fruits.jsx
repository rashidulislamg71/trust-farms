/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import Fruits_products from "./../../Components/Fruits_products/Fruits_products";
import { GlobalContext } from "../../Components/GlobalContext/GlobalContext";

const Fruits = () => {
  const { products } = useContext(GlobalContext);
  return (
    <div id="fruits">
      <Fruits_products />
    </div>
  );
};

export default Fruits;
