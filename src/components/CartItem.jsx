import { useDispatch } from "react-redux";
import { removeItem, updateCartAmount } from "../features/cart/cartSlice";


const CartItem = ({ cartItem }) => {
  const { id, title, price, image, amount } =
    cartItem;

  const dispatch = useDispatch();

  return (
    <article
      key={id}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      <img
        src={`${image}`}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      <div className="sm:ml-16 sm:w-48">
        <h3 className="capitalize font-medium text-accent-content">{title}</h3>
      </div>
      <div className="sm:ml-12">
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text text-accent-content">Amount</span>
          </label>
          <input
            name="number"
            id="amount"
            className="mt-2 input input-bordered input-sm w-full max-w-xs text-accent-content"
            value={amount}
            onChange={(event) => dispatch(updateCartAmount({ id: id, amount: event.target.value }))}
          />
        </div>
        <button type="button"
          className="btn-primary-full"
          onClick={() => dispatch(removeItem(id))}
        >
          eliminar
        </button>
      </div>

      <p className="font-medium sm:ml-auto text-accent-content">${(price * amount).toFixed(2)}</p>
    </article>
  );
};

export default CartItem;
