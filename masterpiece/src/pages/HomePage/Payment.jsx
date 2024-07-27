import shipped from "../../assets/shipped.png";
import paymentMethod from "../../assets/paymentMethod.png";
import callCenter from "../../assets/callCenter.png";

export function Payment() {
  return (
    <>
      <div className="flex flex-wrap justify-between ml-4 md:ml-16 md:mr-16 mt-10 border-red-100">
        {/* card 1 */}
        <div>
          <div className="transform transition duration-300 hover:scale-110 rounded-lg shadow-lg p-3 h-[220px] w-[350px] hover:shadow-xl bg-[#F0F2FF] m-6">
            <div className="rounded-lg overflow-hidden">
              <img
                src={shipped}
                alt="Description of image"
                className="w-28 h-full object-contain mx-auto mt-1"
              />
            </div>

            <div className="px-5 pt-2 flex flex-col">
              <h2 className="font-semibold text-[#1F49B6] mx-auto mt-2 text-3xl">
                Shipping
              </h2>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div>
          <div className="transform transition duration-300 hover:scale-110 rounded-lg shadow-lg p-3  h-[220px] w-[350px] hover:shadow-xl bg-[#F0F2FF] m-6">
            <div className=" rounded-lg overflow-hidden">
              <img
                src={paymentMethod}
                alt="Description of image"
                className="w-28 h-full object-contain mx-auto mt-3"
              />
            </div>

            <div className="px-5 pt-2 flex flex-col">
              <h2 className="font-semibold text-[#1F49B6] mx-auto mt-2 text-3xl">
                Payment
              </h2>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div>
          <div className="transform transition duration-300 hover:scale-110 rounded-lg shadow-lg p-3 h-[220px] w-[350px] hover:shadow-xl bg-[#F0F2FF] m-6">
            <div className="rounded-lg overflow-hidden">
              <img
                src={callCenter}
                alt="Description of image"
                className="w-28 h-full object-contain mx-auto mt-3"
              />
            </div>

            <div className="px-5 pt-2 flex flex-col">
              <h2 className="font-semibold text-[#1F49B6] mx-auto mt-2 text-3xl">
                Call Center
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
