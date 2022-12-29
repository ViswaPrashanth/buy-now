import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from './styles'

// const products = [
//   {
//     id: 1,
//     name: "Shoes",
//     description: "Running shoes.",
//     price: "₹100",
//     image: "https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg"
//   },
//   {
//     id: 2,
//     name: "Macbook",
//     description: "Apple Macbook.",
//     price: "₹200",
//     image:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400"
//   },
// ];

const Products = ({products, onAddToCart}) => {
    const classes = useStyles();
  return (
    <main className={classes.content}>
        <div className={classes.toolbar}/>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart}/>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
