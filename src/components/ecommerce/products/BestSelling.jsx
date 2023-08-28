import productImg from "../../../assets/images/product1.png";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const bestSellingProducts = [
  {
    id: 101,
    name: "Branded T-Shirts",
    img: productImg,
    date: "24 Apr 2023",
    price: 29.5,
    orders: 52,
    stock: 510,
    amount: 1798,
  },
  {
    id: 102,
    name: "Branded T-Shirts",
    img: productImg,
    date: "24 Apr 2023",
    price: 29.5,
    orders: 52,
    stock: 0,
    amount: 1798,
  },
  {
    id: 103,
    name: "Branded T-Shirts",
    img: productImg,
    date: "24 Apr 2023",
    price: 29.5,
    orders: 52,
    stock: 510,
    amount: 1798,
  },
  {
    id: 104,
    name: "Branded T-Shirts",
    img: productImg,
    date: "24 Apr 2023",
    price: 29.5,
    orders: 52,
    stock: 0,
    amount: 1798,
  },
  {
    id: 105,
    name: "Branded T-Shirts",
    img: productImg,
    date: "24 Apr 2023",
    price: 29.5,
    orders: 52,
    stock: 510,
    amount: 1798,
  },
];

function BestSelling() {
  return (
    <section className="py-6 flex gap-6">
      <div className="bg-[#fff] lg:w-[50%] ">
        <div className="flex justify-between items-center border-b p-4">
          <p className="text-md font-semibold text-slate-600">
            Best Selling Products
          </p>
          <p className="bold text-slate-600">
            <span className="text-slate-800 uppercase  font-semibold">
              sort by:{" "}
            </span>
            Today
          </p>
        </div>
        <div className="">
          <table className=" text-[#878a99] w-full text-sm">
            <tbody>
              {bestSellingProducts.map(
                ({ id, name, img, date, price, orders, stock, amount }) => (
                  <tr key={id} className="hover:bg-slate-100 border-b mb-4">
                    <td className="p-4">
                      <div className="flex gap-4 justify-start items-center">
                        <img
                          src={img}
                          alt=""
                          className="h-14 p-2 bg-slate-100 rounded-md"
                        />
                        <div>
                          <p className="text-slate-700 font-semibold">{name}</p>
                          <p>{date}</p>
                        </div>
                      </div>
                    </td>

                    <td className="pr-8">
                      <p className="text-slate-700 font-[400]">${price}</p>
                      <p>Price</p>
                    </td>
                    <td className="pr-4">
                      <p className="text-slate-700 font-[400]">{orders}</p>
                      <p>Orders</p>
                    </td>
                    <td>
                      <p className="text-slate-700 font-[400]">
                        {stock > 0 ? (
                          stock
                        ) : (
                          <span className="bg-red-200 text-red-600 text-[11px] px-1">
                            Out of stock
                          </span>
                        )}
                      </p>
                      <p>Stock</p>
                    </td>
                    <td>
                      <p className="text-slate-600 font-[400]">${amount}</p>
                      <p className="text-[13px] font-[400] ">Amount</p>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        <div className="flex text-slate-400 text-sm justify-between items-center p-4">
          <p>
            Showing <span className="font-semibold">5</span> of{" "}
            <span className="font-semibold">25</span> Results
          </p>
          <div className="flex justify-center items-center gap-1">
            <button className="border p-1 rounded-md hover:bg-slate-100 duration-300">
              <BsArrowLeft />
            </button>
            <button className="border py-[2px] px-[7px] rounded-md hover:bg-slate-100 duration-300">
              1
            </button>
            <button className="border py-[2px] px-[7px] rounded-md bg-blue-600  text-slate-100 duration-300">
              2
            </button>
            <button className="border py-[2px] px-[7px] rounded-md hover:bg-slate-100 duration-300">
              3
            </button>
            <button className="border p-1 rounded-md hover:bg-slate-100 duration-300">
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#fff] lg:w-[50%] ">
        <div className="flex justify-between items-center border-b p-4">
          <p className="text-md font-semibold text-slate-600">Top Sellers</p>
          <p className=" text-slate-600">Report</p>
        </div>
        <div className="">
          <table className=" text-[#878a99] w-full text-sm">
            <tbody>
              {bestSellingProducts.map(
                ({ id, name, img, date, price, orders, stock, amount }) => (
                  <tr key={id} className="hover:bg-slate-100 border-b mb-4">
                    <td className="p-4">
                      <div className="flex gap-4 justify-start items-center">
                        <img
                          src={img}
                          alt=""
                          className="h-14 p-2 bg-slate-100 rounded-md"
                        />
                        <div>
                          <p className="text-slate-700 font-semibold">{name}</p>
                          <p>{date}</p>
                        </div>
                      </div>
                    </td>

                    <td className="pr-8">
                      <p className="text-slate-700 font-[400]">${price}</p>
                      <p>Price</p>
                    </td>
                    <td className="pr-4">
                      <p className="text-slate-700 font-[400]">{orders}</p>
                      <p>Orders</p>
                    </td>
                    <td>
                      <p className="text-slate-700 font-[400]">
                        {stock > 0 ? (
                          stock
                        ) : (
                          <span className="bg-red-200 text-red-600 text-[11px] px-1">
                            Out of stock
                          </span>
                        )}
                      </p>
                      <p>Stock</p>
                    </td>
                    <td>
                      <p className="text-slate-600 font-[400]">${amount}</p>
                      <p className="text-[13px] font-[400] ">Amount</p>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        <div className="flex text-slate-400 text-sm justify-between items-center p-4">
          <p>
            Showing <span className="font-semibold">5</span> of{" "}
            <span className="font-semibold">25</span> Results
          </p>
          <div className="flex justify-center items-center gap-1">
            <button className="border p-1 rounded-md hover:bg-slate-100 duration-300">
              <BsArrowLeft />
            </button>
            <button className="border py-[2px] px-[7px] rounded-md hover:bg-slate-100 duration-300">
              1
            </button>
            <button className="border py-[2px] px-[7px] rounded-md bg-blue-600  text-slate-100 duration-300">
              2
            </button>
            <button className="border py-[2px] px-[7px] rounded-md hover:bg-slate-100 duration-300">
              3
            </button>
            <button className="border p-1 rounded-md hover:bg-slate-100 duration-300">
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSelling;
