const Product = () => {
    return (
        <>
            <section className="section-padding" id="Product-Area">
                <div className="container-fluid">
                    <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <div className="page-title text-center">
                            <h1 className="title">Products</h1>
                        </div>
                    </div>
                </div>
                <div className="products-grid">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="feature-box wow fadeInUp" data-wow-delay="1.2s">
                            <h4>DCP Defense Suite (DDS)</h4>
                            <p>Today's evolving business climate continues to expose institutions and organisations to new frontiers in both physical and cyber security. DDS provides tailor-made security solutions to identify and eliminate complex threats while preserving the state and operation of critical infrastructure. This is accomplished by a customised application.</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="feature-box wow fadeInUp" data-wow-delay="1.2s">
                            <h4>DCP Fraud & Forensic Analytics Solution (FFAS)</h4>
                            <p>DCP's in-depth understanding of forensic accounting and fraud examination provides our clients with easy tracking and recovery of lost assets. It is a complete suite that x-rays a variety of financial transactions and fraud schemes, including Capital Markets Fraud, etc.</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="feature-box wow fadeInUp" data-wow-delay="0.6s">
                            <h4>DCP Investment Facilitation & Trade Management</h4>
                            <p>DCP’s customised IFTM assists investors and businesses looking to establish, expand, or relocate to Nigeria by providing them with unique local insights from an international perspective. Based on our experience and established cooperation with relevant government agencies and key umbrella government organisations such as the Association of Local Governments of Nigeria (ALGON) and the Nigeria Governors' Forum (NGF), we offer valuable assistance.</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="feature-box wow fadeInUp" data-wow-delay="0.4s">
                            <h4>DCP Revenue System Optimisation (RSO)</h4>
                            <p>Sustained revenue growth is critical to any institution's overall performance. As government revenue dwindles and emphasis shifts to self-sustenance, severe pressure due to insufficient allocations has created the need for administrators to systematically review all possible sources of revenue growth. We help our clients increase income by looking inwards to determine and exploit existing and potential sources of revenue.</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="feature-box wow fadeInUp" data-wow-delay="0.2s">
                            <h4>DCP e-GES</h4>
                            <p>DCP's e-Government Enterprise Solutions (e-GES) is a unique tool that provides Government Agencies and Management with real-time revenue figures, process and operations statistics, time details, as well as online intelligence records and office productivity data. It accomplishes this by automating new operations as the resident transaction application while simultaneously interfacing with any existing government transaction applications.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Product;
