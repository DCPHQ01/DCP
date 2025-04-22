import  serviceData  from '../components/serviceData';
import ServiceCard from "../components/ServiceCard";
import Test from "../components/Test";

const Service = () => {
    return (
      <>
        {/* Services Section */}
        <section className="py-16" id="service-area">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Services</h2>
            </div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {serviceData.map((service) => (
                <ServiceCard
                  key={service.id}
                  image={service.image}
                  title={service.title}
                  services={service.services}
                />
              ))}
            </div>
          </div>
        </section>
  
        {/* Core Competencies Section */}
        <section className="section-padding bg-gray-100" id="skill-area">
          <div className="container mx-auto px-4">
            <div className="w-full mx-auto">
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold wow fadeInUp">Our Core Competencies</h2>
                <p className="mt-2 wow fadeInUp">
                  DCP works with multiple Consultants, Associates, Virtual Support, Academics,
                  Bureaucrats and Professionals.
                </p>
              </div>
              <div>
                <Test />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Service;