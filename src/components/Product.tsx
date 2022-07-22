import React, { useEffect, useState } from "react";
import axios from "axios";
import IProduct from "../../interfaces/IProduct";
const Product = () => {
  const [allProducts, setAllProducts] = useState<IProduct[]>();

  useEffect(() => {
    const getAllProducts = async () => {
      //     // indispensable quand on veut utiliser async/await dans un useEffect
      let url: string = `http://localhost:8000/api/products`;

      const { data } = await axios.get(url, {
        withCredentials: true,
      });
      setAllProducts(data);
    };
    getAllProducts();
  }, []);

  return (
    <div className="collection">
      <div className="collection__title">Voici mes produits </div>
      <div className="collection__contenaire">
        {/* map de la base de données */}
        {allProducts &&
          allProducts.map(
            ({ id, productImage, productName, productTheme, productDesc }) => (
              <div className="collection__contenaire__firstCard" key={id}>
                <div>
                  <img
                    className="collection__contenaire__firstCard__image"
                    src={productImage}
                    alt="savon artisanal"
                  />
                </div>

                <div className="collection__contenaire__firstCard__paragraph">
                  <p> {productName}</p>
                  <p> {productTheme}</p>
                  <p> {productDesc}</p>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Product;
