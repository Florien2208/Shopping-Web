import { formatPrice } from "@/app/utils/formatPrice";
import { trancateText } from "@/app/utils/trancateText";
import { Rating } from "@mui/material";
import Image from "next/image";

interface productCardProps {
  data: any;
}

const ProductsCard: React.FC<productCardProps> = ({ data }) => {
  const productRating =
    data.reviews.reduce((acc:number, item:any) => item.rating + acc,0) / data.reviews.length;
  return (
    <div className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm">
      <div className="flex items-center w-full gap-1">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            fill
            src={data.images[0].image}
            alt={data.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-4">{trancateText(data.name)}</div>
        <div>
          <Rating value={productRating} readOnly />
        </div>
        <div> {data.reviews.length}reviews</div>
        <div className="font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductsCard;
