import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ListProducts } from './pages/listProducts';
import { ProductsId } from './pages/productsId/';
import styles from './App.module.css'
function App() {
 
  return (
    <>
    <div className={styles.header}>
      <h1>Dev-<strong style={{color:"#000"}}>STORE</strong></h1>
    </div>
    <BrowserRouter>
     <Routes>
      <Route index element ={<ListProducts />} />
      <Route path='/ProductsId/:id' element={<ProductsId />} />
      </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
