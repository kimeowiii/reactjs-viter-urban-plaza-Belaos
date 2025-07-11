import React from "react";
import { FaChild, FaParking, FaWifi } from "react-icons/fa";
import CardService from "../../../partials/CardService";

const Services = () => {
  return (
    <>
      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CardService
              Icon={FaParking}
              title={"Ample Parking"}
              description={
                "Secure parking with 2000+ spaces across 5 levels, including EV charging stations."
              }
            />
            <CardService
              Icon={FaWifi}
              title={"Free WiFi"}
              description={
                " High-speed internet access throughout the mall with no login required."
              }
            />
            <CardService
              Icon={FaChild}
              title={"Kids Zone"}
              description={
                "Supervised play area with trained staff so you can shop worry-free."
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
