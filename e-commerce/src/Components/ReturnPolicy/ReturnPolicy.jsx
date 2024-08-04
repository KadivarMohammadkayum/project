import React from 'react';
import Banner from '../../Pages/Banner';

const ReturnPolicy = () => {
  return (
    <>
      <Banner title='Return Policy' page={'Return Policy'} />
      <section>
        <div className="p-6 bg-gray-100">
          <div className="container mx-auto space-y-10">
            <h2 className='font-semibold text-4xl'>Order Cancellation and Return Policy</h2>
            {/* Section 1 */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 shadow-lg rounded-lg">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold">Exchanges and returns</h2>
                <p className="text-gray-500 mt-5">Returns is a scheme provided by respective sellers directly under this policy in terms of which the option of exchange, replacement and/ or refund is offered by the respective sellers to you. All products listed under a particular category may not have the same returns policy. For all products, the returns/replacement policy provided on the product page shall prevail over the general returns policy. Do refer the respective item's applicable return/replacement policy on the product page for any exceptions to this returns policy and the table below</p>
              </div>

            </div>

            {/* Section 2 */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 shadow-lg rounded-lg">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold">Return Process</h2>
                <p className="text-gray-500 mt-5">The customer can choose to cancel an order any time before it's dispatched. The order cannot be canceled once it’s out for delivery. However, the customer may choose to reject it at the doorstep.</p>
                <p className="text-gray-500 mt-5">The time window for cancellation varies based on different categories and the order cannot be canceled once the specified time has passed.</p>
              </div>

            </div>

            {/* Section 3 */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 shadow-lg rounded-lg">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold">Refund Policy</h2>
                <p className="text-gray-500 mt-5">Get your money back quickly</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default ReturnPolicy;
