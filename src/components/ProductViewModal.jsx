import {
  Button,
  Dialog,
  DialogPanel,
  DialogBackdrop,
  DialogTitle,
} from "@headlessui/react";
import { Divider } from "@mui/material";
import Status from "./Status";
import { MdDone, MdClose } from "react-icons/md";

const ProductViewModal = ({ isOpen, setIsOpen, product, isAvailable }) => {
  const {
    productId,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice,
  } = product;

  function close() {
    setIsOpen(false);
  }

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={close}
      __demoMode
    >
      <DialogBackdrop className="fixed inset-0 bg-gray-500/25" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="relative w-full transform overflow-hidden rounded-lg bg-white shadow-xl transition-all md:w-[620px]"
          >
            {image && (
              <div className="flex aspect-[3/2] justify-center">
                <img className="h-full w-full" src={image} alt={productName} />
              </div>
            )}
            {/* product name */}
            <div className="px-6 pt-10 pb-2">
              <DialogTitle
                as="h1"
                className="mb-4 leading-6 font-semibold text-gray-800 sm:text-2xl lg:text-3xl"
              >
                {productName}
              </DialogTitle>

              <div className="space-y-2 pb-4 text-gray-700">
                <div className="flex items-center justify-between">
                  {/* price */}
                  {specialPrice ? (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-700 line-through">
                        ${Number(price).toFixed(2)}
                      </span>
                      <span className="text-xl font-bold text-slate-700">
                        ${Number(specialPrice).toFixed(2)}
                      </span>
                    </div>
                  ) : (
                    <div>
                      <span className="text-xl font-bold text-slate-700">
                        ${Number(price).toFixed(2)}
                      </span>
                    </div>
                  )}
                  {/* product status */}
                  {isAvailable ? (
                    <Status
                      text="In Stock"
                      icon={MdDone}
                      bg="bg-teal-200"
                      color="text-teal-900"
                    />
                  ) : (
                    <Status
                      text="Out-Of-Stock"
                      icon={MdClose}
                      bg="bg-rose-200"
                      color="text-rose-900"
                    />
                  )}
                </div>
                <Divider />
                <p>{description}</p>
              </div>
              <div className="mb-2 flex justify-end">
                <button
                  onClick={close}
                  className="cursor-pointer rounded-lg border px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-200"
                >
                  Close
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductViewModal;
