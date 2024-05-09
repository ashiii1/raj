import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]">
      <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div className="col-span-1">
          <h1 className="w-full text-3xl font-bold text-orange-500">YumEats</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="mt-6">
            
            <form className="flex items-center">
              <input
                type="email"
                className="bg-gray-800 text-gray-300 rounded-l px-4 py-2 focus:outline-none"
                placeholder="Email address"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-r">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-between mt-6">
          <div className="flex flex-col">
            <h6 className="font-medium text-[#9b9b9b] underline">Orders and support</h6>
            <ul>
              <li>Contact us</li>
              <li>FAQs</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Order history</li>
              <li>Check gift card balance</li>
              <li>Terms and conditions</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h6 className="font-medium text-[#9b9b9b] underline">Services</h6>
            <ul>
              <li>Live assistance</li>
              <li>Corporate gifts</li>
              <li>Facial Appointments</li>
              <li>Click and Collect</li>
              <li>Video consultation</li>
              <li>Location preferences</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h6 className="font-medium text-[#9b9b9b] underline">Shipping:</h6>
            <p>Hong Kong, SAR</p>
            <h6 className="font-medium text-[#9b9b9b] underline">Language:</h6>
            <ul>
              <li>繁體中文</li>
              <li>English</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-500 mt-6 pt-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h6 className="font-medium text-[#9b9b9b] underline">Sustainability</h6>
            <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
          </div>
          <div className="flex flex-col">
            <h6 className="font-medium text-[#9b9b9b] underline">About</h6>
            <ul>
              <li>Our story</li>
              <li>Foundation</li>
              <li>Careers</li>
              <li>Privacy policy</li>
              <li>Accessibility</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h6 className="font-medium text-[#9b9b9b] underline">Social media</h6>
            <ul>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>WeChat</li>
              <li>Weibo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
