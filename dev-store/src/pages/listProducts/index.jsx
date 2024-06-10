import React from "react";
import { BiStar } from "react-icons/bi";
import styles from "./listProducts.module.css";
import { BASE_URL_API } from "../../Api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const ListProducts = () => {
  const star = [];
  for(let i  = 0; i < 5; i++){
    star.push(i);
  }
  const [data, setData] = useState([]);

  const listDataProducts = async () => { 
    const res = await fetch(`${BASE_URL_API}/products`);
    const response = await res.json();  
    setData(response);
  };

  useEffect(() => {
    listDataProducts();
  }, []);

  return (
    <>
      
        <div className={styles.container}>
          <div className={styles.list_products}>
            {data.map((item, index) => {
              return (
                <div key={index} className={styles.list_items}>
                  <Link to ={`/ProductsId/${item.id}`} className={styles.link}>
                    <img src={item.image} alt="" width={200} />   
                    <h2>{item.title}</h2>
                    <br />
                    <div className={styles.evaluations}>
                      {star.map((index)=>(<BiStar key ={index} className={styles.star} />))}
                      <span><strong>{item.rating.rate}</strong></span>
                      <h4> Avaliacoes {item.rating.count}</h4>
                    </div>
                    <br />
                    <button className={styles.btn_info}><span> Mais informacoes</span></button>
                  </Link>
                </div>
              );  
            })}
          </div>
      </div>
    </>
  );
};
