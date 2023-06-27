import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./assets/notfound_image.jpeg";

//const Product = ({ fields }) => {
const Product = ({ url, name, price }) => {
  /* const array = fields;
  const image = fields.image[0].url;
  const name = fields.name;
  const price = fields.price;
 */

  console.log(name, price, url);
  return (
    <article className="product">
      <img src={url} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};

Product.propTypes = {
  url: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  name: "default name",
  price: 3.0,
  url: defaultImage,
};

export default Product;
