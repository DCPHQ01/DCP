import React, { Suspense, lazy } from 'react';
import serviceData from '../components/serviceData';
const ServiceCard = lazy(() => import("../components/ServiceCard"));
const Test = lazy(() => import("../components/Test"));

const Service = () => {
   
    return (
      <>
        {/* Services Section */}
        <section className="py-16" id="service-area">
          <div className="container mx-auto xl:px-16 px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Our Services</h2>
            </div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <Suspense fallback={<div className="animate-pulse bg-gray-200 h-48 rounded-lg" />}>
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
        <section className="section-padding bg-gray-100" id="skill-area">
          <div className="container mx-auto px-4">
            <div className="w-full mx-auto">
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold">Our Core Competencies</h2>
                <p className="mt-2">
                  DCP works with multiple Consultants, Associates, Virtual Support, Academics, Bureaucrats and Professionals.
                </p>
              </div>
              <Suspense fallback={<div className="animate-pulse bg-gray-200 h-48 rounded-lg" />}>
                <Test />
              </Suspense>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default React.memo(Service);