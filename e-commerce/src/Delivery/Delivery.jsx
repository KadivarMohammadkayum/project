import React from 'react';
import Banner from '../Pages/Banner';

const Delivery = () => {
  return (
    <>
      <Banner title='Delivery' page={'Delivery'} />
      <section>
        <div className="p-6 bg-gray-100">
          <div className="container mx-auto space-y-10">
            {/* Delivery Information Section */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>
              <p className="text-gray-700 mb-4">
                We aim to deliver your products within the time frame specified at the time of order. Delivery times may vary depending on the delivery location and the availability of the products. You will receive an email confirmation once your order has been shipped. and your Boxes are amply sized and your items are well-protected.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Standard delivery: 3-5 business days</li>
                <li>Express delivery: 1-2 business days</li>
                <li>International delivery: 7-14 business days</li>
              </ul>
            </div>

            {/* Shipping Rates Section */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Shipping Rates</h2>
              <p className="text-gray-700 mb-4">
                Shipping fees include handling and packing fees as well as postage costs. Handling fees are fixed, whereas transport fees vary according to total weight of the shipment. We advise you to group your items in one order. We cannot group two distinct orders placed separately, and shipping fees will apply to each of them. Your package will be dispatched at your own risk, but special care is taken to protect fragile objects.
              </p>
            </div>

            {/* Tracking Your Order Section */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Tracking Your Order</h2>
              <p className="text-gray-700 mb-4">
                Once your order has been shipped, you will receive a confirmation email with a tracking number. You can use this number to track your order on our website or the carrier's website. and  Packages are generally dispatched within 2 days after receipt of payment and are shipped via UPS with tracking and drop-off without signature. If you prefer delivery by UPS Extra with required signature, an additional cost will be applied, so please contact us before choosing this method. Whichever shipment choice you make, we will provide you with a link to track your package online.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default Delivery;
