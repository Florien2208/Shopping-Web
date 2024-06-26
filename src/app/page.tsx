import Container from "./components/Container";

import HomeBanner from "./components/HomeBanner";
import ProductsCard from "./components/products/ProductsCard";
import { products } from "./utils/product";
import { trancateText } from "./utils/trancateText";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div><HomeBanner/></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">{
          (products.map((product: any)=>{
            return <ProductsCard data={product}/>
          }))
          }</div>
      </Container>
    </div>
  );
}
