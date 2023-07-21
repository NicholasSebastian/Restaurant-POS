import { createContext, useState, useContext } from "react";
import type { FC, PropsWithChildren, Dispatch, SetStateAction } from "react";

type Order = Array<IOrderItem>

const OrderContext = createContext<IOrderContext>(undefined as never);
const useOrders = () => useContext(OrderContext);

const OrderProvider: FC<PropsWithChildren> = props => {
  const { children } = props;
  const [orders, setOrders] = useState<Array<Order>>([]);
  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrderContext.Provider>
  );
}

export { OrderProvider }
export default useOrders;

interface IOrderContext {
  orders: Array<Order>
  setOrders: Dispatch<SetStateAction<Array<Order>>>
}

interface IOrderItem {
  name: string
  amount: number
  description: string
}
