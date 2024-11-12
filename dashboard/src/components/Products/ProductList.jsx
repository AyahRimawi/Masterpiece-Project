import React from "react";

const ProductList = ({ products, onSelectProduct }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <ul className="divide-y divide-gray-200">
        {products.map((product) => (
          <li key={product._id}>
            <div
              className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer"
              onClick={() => onSelectProduct(product)}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-primary truncate">
                  {product.name}
                </p>
                <div className="ml-2 flex-shrink-0 flex">
                  <p
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      product.approvalStatus === "Approved"
                        ? "bg-green-100 text-green-800"
                        : product.approvalStatus === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.approvalStatus}
                  </p>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="flex items-center text-sm text-gray-500">
                    {product.category} - {product.subCategory}
                  </p>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  <p>Seller: {product.seller.name}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
