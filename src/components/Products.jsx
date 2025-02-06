import React from 'react'
import Product from './Product'

function Products() {
    var products = [
      {
        title: "arqitel",
        description:
          "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
        live: true,
        case: false,
      },
      {
        title: "ttl",
        description:
          "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
        live: true,
        case: true,
      },
      {
        title: "arqitel",
        description:
          "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
        live: true,
        case: true,
      },
      {
        title: "arqitel",
        description:
          "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
        live: true,
        case: false,
      },
      {
        title: "arqitel",
        description:
          "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
        live: true,
        case: false,
      },
      {
        title: "arqitel",
        description:
          "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
        live: true,
        case: false,
      },
    ];
  return (
    <div className='mt-32'>
      {products.map((val, idx) => (
        <Product val={val} />
      ))}
    </div>
  );
}

export default Products
