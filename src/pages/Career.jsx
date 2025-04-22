
const Career = () => {
    return ( 
        <>
                                <div className="relative w-full h-[60vh]">
                        {/* Background Image */}
                        <img
                            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                            alt="Careers at DCP"
                            className="absolute w-full h-full object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/70" />

                        {/* Text Content */}
                        <div className="relative z-10 flex items-center h-full px-8 md:px-16">
                            <div className="w-full md:w-1/2 text-white space-y-6 animate-fade-in-down">
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                Join DCP
                            </h1>
                            <p className="text-lg md:text-xl">
                                We’re continually seeking exceptional individuals who think differently and drive impact.
                                When opportunities to join our dynamic consulting team become available, they will be posted here.
                            </p>
                            </div>
                        </div>

                        </div>
                        <section className="available-career">
                            
                        <div className="w-full py-12 px-8 md:px-16">
                            <h3 className="text-3xl font-bold mb-4">Recent Opportunities</h3>
                            <p className="text-gray-600 text-lg">No jobs currently available</p>
                        </div>
                        </section>
        </>
    );
}
 
export default Career;