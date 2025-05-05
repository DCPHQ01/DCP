import React, { Suspense, lazy } from 'react';
import serviceData from '../components/serviceData';
import { useEffect } from 'react';


const ServiceCard = lazy(() => import("../components/ServiceCard"));
const Test = lazy(() => import("../components/Test"));

const Service = () => {

  useEffect(() => {
    document.title = "Services | DCP";
  }, []);

  return (
    <>
      {/* Services Section */}
      <section className="py-16" id="service-area">
        <div className="container mx-auto xl:px-16 px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Suspense fallback={
              <div className="col-span-full flex justify-center">
                <div className="animate-pulse bg-gray-200 h-48 w-full max-w-xs rounded-lg" />
              </div>
            }>
              {serviceData.map((service) => (
                <ServiceCard
                  key={service.id}
                  image={service.image}
                  title={service.title}
                  services={service.services}
                />
              ))}
            </Suspense>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="py-16 bg-gray-100" id="skill-area">
        <div className="container mx-auto xl:px-16 px-4 sm:px-6">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-2">Our Core Competencies</h2>
            <p className="text-base mb-6">
              DCP works with multiple Consultants, Associates, Virtual Support, Academics, Bureaucrats and Professionals.
            </p>
          </div>

          <Suspense fallback={
            <div className="flex justify-center">
              <div className="animate-pulse bg-gray-200 h-48 w-full max-w-xs rounded-lg" />
            </div>
          }>
            <div className="flex flex-wrap justify-center gap-6">
              <Test />
            </div>
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default React.memo(Service);
