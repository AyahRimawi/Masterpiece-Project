import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductApproval = ({ selectedProduct, onAction, onImageClick }) => {
  const [reason, setReason] = useState("");
  const [variantImageIndices, setVariantImageIndices] = useState({});

  const handleAction = (action) => {
    if (action === "reject" && !reason.trim()) {
      alert("Please provide a reason for rejection");
      return;
    }
    onAction(action, selectedProduct._id, reason);
    setReason("");
  };

  if (!selectedProduct) {
    return (
      <div className="bg-white shadow sm:rounded-lg p-6">
        <p className="text-gray-500">Select a product to view actions</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow sm:rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">
        Product Actions
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Selected Product: {selectedProduct.name}
      </p>

      {/* Product Details */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">
          Product Details
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          <p>Category: {selectedProduct.category}</p>
          <p>Subcategory: {selectedProduct.subCategory}</p>
          <p>Description: {selectedProduct.description}</p>
          <p>Status: {selectedProduct.approvalStatus}</p>
        </div>

        {/* Images Section */}
        {selectedProduct.variants && selectedProduct.variants.length > 0 && (
          <div className="mt-4 space-y-4">
            {selectedProduct.variants.map((variant, variantIndex) => {
              const currentImageIndex = variantImageIndices[variant._id] || 0;
              return (
                <div key={variant._id} className="border rounded-lg p-4">
                  <h4 className="text-sm font-medium mb-2">{variant.color}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Main Image */}
                    {variant.overviewPicture && (
                      <div
                        className="relative cursor-pointer group"
                        onClick={() => onImageClick(variant.overviewPicture)}
                      >
                        <img
                          src={variant.overviewPicture}
                          alt="Main"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 rounded-lg transition-opacity" />
                      </div>
                    )}

                    {/* Additional Images Gallery */}
                    {variant.images && variant.images.length > 0 && (
                      <div className="relative h-48">
                        <img
                          src={variant.images[currentImageIndex]}
                          alt="Gallery"
                          className="w-full h-full object-cover rounded-lg cursor-pointer"
                          onClick={() =>
                            onImageClick(variant.images[currentImageIndex])
                          }
                        />
                        {variant.images.length > 1 && (
                          <>
                            <button
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all"
                              onClick={(e) => {
                                e.stopPropagation();
                                setVariantImageIndices((prev) => ({
                                  ...prev,
                                  [variant._id]:
                                    (currentImageIndex -
                                      1 +
                                      variant.images.length) %
                                    variant.images.length,
                                }));
                              }}
                            >
                              <ChevronLeft size={20} />
                            </button>
                            <button
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all"
                              onClick={(e) => {
                                e.stopPropagation();
                                setVariantImageIndices((prev) => ({
                                  ...prev,
                                  [variant._id]:
                                    (currentImageIndex + 1) %
                                    variant.images.length,
                                }));
                              }}
                            >
                              <ChevronRight size={20} />
                            </button>
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-sm">
                              {currentImageIndex + 1} / {variant.images.length}
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Variants */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Variants</h3>
        <div className="space-y-2">
          {selectedProduct.variants?.map((variant, index) => (
            <div
              key={index}
              className="text-sm text-gray-600 bg-gray-50 p-2 rounded"
            >
              <p>Color: {variant.color}</p>
              <p>Size: {variant.size.join(", ")}</p>
              <p>Price: {variant.price} JD</p>
              <p>Quantity: {variant.quantity}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-4">
        {selectedProduct.approvalStatus === "Pending" && (
          <>
            <button
              onClick={() => handleAction("approve")}
              className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Approve Product
            </button>
            <button
              onClick={() => handleAction("reject")}
              className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Reject Product
            </button>
          </>
        )}
        <button
          onClick={() => handleAction("delete")}
          className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Delete Product
        </button>
        <div>
          <label
            htmlFor="reason"
            className="block text-sm font-medium text-gray-700"
          >
            Reason for action
          </label>
          <textarea
            id="reason"
            name="reason"
            rows={3}
            className="shadow-sm focus:ring-black focus:border-black mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
            placeholder="Enter reason for action"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ProductApproval;
