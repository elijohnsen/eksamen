import React from "react";

const Footer3 = () => {
  return (
    <footer className="bg-green-200 ">
      <div className="mycontainer  pb-4 ">
        <menu className="flex  md:items-center lg:items-start lg:justify-between lg:space-x-16 xl:space-x-36">
          <div className="w-1/2 lg:flex md:w-8/12 lg:w-6/12  justify-between whitespace-nowrap">
            <ol className="space-y-1 pb-4">
              <h3 className="font-bold">Services</h3>
              <li>email marketing</li>
              <li>campaigns</li>
              <li>branding</li>
              <li>offline</li>
            </ol>

            <ol className="space-y-1">
              <h3 className="font-bold">Services</h3>
              <li>email marketing</li>
              <li>campaigns</li>
              <li>branding</li>
              <li>offline</li>
            </ol>
          </div>
          <div className="w-1/2 md:flex justify-evenly lg:justify-between md:w-10/12 lg:w-6/12   whitespace-nowrap">
            <ol className="space-y-1 pb-4 md:pb-0">
              <img
                src="/logo-placeholder.webp"
                className="w-1/2 lg:w-4/6 xl:w-5/12"
              />
              {/*<h3 className="font-bold">Services</h3>
                <li className="">email marketing</li>
                <li>campaigns</li>
                <li>branding</li>
                <li>offline</li>*/}
            </ol>

            <ol className="space-y-1">
              <h3 className="font-bold">Services</h3>
              <li>email marketing</li>
              <li>campaigns</li>
              <li>branding</li>
              <li>offline</li>
            </ol>
          </div>
        </menu>
      </div>
    </footer>
  );
};

export default Footer3;
