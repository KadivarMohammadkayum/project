import React from 'react';
import Banner from '../../Pages/Banner';

const TermsAndConditions = () => {
  return (
    <>
      <section>
        <Banner title='Terms And Condtions' page={'Terms And Condtions'} />
        <div className="p-6 bg-gray-100">
          <div className="container mx-auto space-y-10">
            <h2 className='font-semibold text-4xl'>Terms And Condtions</h2>
            {/* Section 1 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Section 1: Introduction</h2>
              <p className="text-gray-700">
                Welcome to our e-commerce website. By accessing or using our website, you agree to comply with and be bound by these terms and conditions. Please read them carefully. If you do not agree with any part of these terms, you may not use our website.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Section 2: User Responsibilities</h2>
              <p className="text-gray-700">
                As a user of this website, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
              </p>
              <p className="text-gray-700 mt-2">

                Our website and its content are provided on an "as is" basis without warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted or error-free. In no event shall we be liable for any damages of any kind arising from the use of this website.
              </p>
            </div>

            {/* Section 3 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Section 3: GST</h2>
              <p className="text-gray-700 mb-3">
                Upon Your purchase of product(s) eligible for business purchases, You may be able to avail the benefits of GST input tax credit. Accordingly, at your request, an invoice containing the GSTIN as provided by You ("Tax Invoice") shall be issued to You by the Seller(s) selling such products.
              </p>
              <p className="text-gray-700">
                GST invoice will have, inter alia, the following details printed on it: -GSTIN associated with your registered business, as provided by you
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Section 4: Charges</h2>
              <p className="text-gray-700">
                Clostich may charge a nominal fee for browsing and buying on the Platform. Clostich reserves the right to change its Fee Policy from time to time. In particular, Clostich may at its sole discretion introduce new services/fees and modify some or all of the existing services/fees offered on the Platform. In such an event, Clostich reserves the right to introduce fees for the new services offered or amend/introduce fees for existing/new services, as the case may be. Changes to the Fee Policy shall be posted on the Platform and such changes shall automatically become effective immediately after they are posted on the Platform. Unless otherwise stated, all fees shall be quoted in Indian Rupees. You shall be solely responsible for compliance of all applicable laws including those in India for making payments to Clostich Internet Private Limited.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default TermsAndConditions;
