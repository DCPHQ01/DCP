
const Career = () => {
    return ( 
        <>
            <div className="relative w-full h-[60vh]">
                {/* Background Image */}
                <img
                    src="../images/Join_Us.png"
                    alt="Careers at DCP"
                    className="absolute w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70" />

                {/* Text Content */}
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="w-full md:w-1/2 text-white text-center space-y-6 animate-fade-in-down">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            More than just a career
                        </h1>
                        <p className="text-lg md:text-lg">
                            We’re searching for forward-thinking individuals who are passionate about making a difference. Join our dynamic consulting team and be part of a global network dedicated to creating impactful solutions.
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