import { useState, useEffect } from "react";
import styles from "./productsId.module.css";
import { BASE_URL_API } from "../../Api";
import {Link, useParams } from "react-router-dom";

export const ProductsId = () => {
  const [loaded, setLoaded] = useState(false);
  const [itemId, setItemId] = useState([]);
  const { id } = useParams();

  const getItemId = async () => {
    setLoaded(true);
    const res = await fetch(`${BASE_URL_API}/products/${id}`);
    const response = await res.json();
    setLoaded(false);
    setItemId(response);
  };
  useEffect(() => {
    getItemId();
  }, []);

  return (
    <>
      {loaded && <h3>Aguarde ...</h3>}
      <div className={styles.btn}>
      <button className={styles.go_back} onClick={() => window.location.href = '/'}>Voltar</button>
      </div>
      <ul className={styles.ul}>
        <div className={styles.info}>
          <img src={itemId.image} alt="" width={200} />
          <h2>{itemId.title}</h2><br/>
          <strong>{itemId.price}</strong>
          <br/>
          <p>{itemId.description}</p>
          <h3>{itemId.category}</h3>
        </div>
      </ul>
    </>
  );
};
