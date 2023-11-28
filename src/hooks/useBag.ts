import { Dish, useBagStore } from "@/store/useBagStore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useBag = () => {
  const [deliveryMode, setDeliveryMode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [amount, setAmount] = useState(1);
  const {
    state: { bag },
    actions: { setBagStoreState },
  } = useBagStore();

  const addProductToBag = (amount: number, dish: Dish) => {
    const index = bag.findIndex((p) => p.dish === dish.dish);
    const bagCopy = bag;
    if (index === -1) {
      toast.success(`${dish.dish} adicionada a sua sacola! 😊`);
      return setBagStoreState("bag", [
        ...bag,
        {
          img: dish.img,
          amount,
          dish: dish.dish,
          price: dish.price,
          id: dish.id,
        },
      ]);
    }

    bagCopy[index].amount = bagCopy[index].amount + amount;
    toast.success(`Mais ${amount} ${dish.dish} na sua sacola! 😊`);
    return setBagStoreState("bag", bagCopy);
  };

  const updateAmountDishes = (dish: string, increment?: boolean) => {
    const index = bag.findIndex((p) => p.dish === dish);
    const bagCopy = bag;
    bagCopy[index].amount = increment
      ? bagCopy[index].amount + 1
      : bagCopy[index].amount - 1;

    if (bagCopy[index].amount === 0)
      return setBagStoreState(
        "bag",
        bagCopy.filter((d) => d.dish !== dish),
      );

    sumTotalPrice();
    setBagStoreState("bag", bagCopy);
  };

  const removeDish = (id: number) => {
    setBagStoreState(
      "bag",
      bag.filter((d) => d.id !== id),
    );
  };

  const sumTotalPrice = () => {
    const sumPrices = bag.reduce(
      (sum, dish) => sum + dish.price * dish.amount,
      0,
    );
    setTotalPrice(sumPrices);
  };

  useEffect(() => {
    sumTotalPrice();
  }, [bag]);

  return {
    amount,
    deliveryMode,
    paymentMethod,
    totalPrice,
    setAmount,
    addProductToBag,
    setDeliveryMode,
    setPaymentMethod,
    updateAmountDishes,
    removeDish,
  };
};
