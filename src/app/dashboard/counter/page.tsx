import { ShoppingCart } from "@/shopping-cart";
import { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Counter Page',
 description: 'Un simple contador de productos en el carrito de compras',
};

export default function CounterPage() {

  const count = 20;

  return (
    <div className="flex flex-col items-center v-full h-full justify-center">
      <span>Productos en el carrito de compras</span>

      <ShoppingCart value={count} />

    </div>
  );
}
