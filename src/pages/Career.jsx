const Career = () => {
    return ( 
        <>
           {/*<!--Preloader-->*/} 
    <div class="preloader">
        <div class="spinner"></div>
    </div>

    {/*<!-- Mainmenu-Area -->*/}
    <nav class="navbar mainmenu-area" data-spy="affix" data-offset-top="197">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div id="search-box" class="collapse">
                        <form action="#">
                            <input type="search" class="form-control" placeholder="What do you want to know?" />
                        </form>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <div class="navbar-header smoth">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mainmenu">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span> 
                        </button>
                        <a class="navbar-brand" href="#home-area"><img src="images/logo.png" alt="" /></a>
                    </div>
                    <div class="collapse navbar-collapse navbar-right" id="mainmenu">
                       
                        <ul class="nav navbar-nav primary-menu">
                            <li class="active"><a href="index.html">Home</a></li>
                            <li><a href="index.html">Services</a></li>
                            <li><a href="index.html">projects</a></li>
                            <li><a href="index.html">Products</a></li>
                            <li><a href="index.html">csr</a></li>
                            <li><a href="#Career">Career</a></li>
                            <li><a href="#contact-area">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    {/*<!--Mainmenu-Area-->*/}
      {/*<!--Header-Area-->*/}
      <header class="header-area" id="home-area">
        <div class="vcenter">
           
        </div>
        <div class="smoth">
            <a href="#about-area" class="scrolldown"><i class="icofont icofont-bubble-down"></i></a>
        </div>
    </header>
    {/*<!--Header-Area-->*/}

    
    {/*<!--About-Area-->*/}
    <section class="section-padding" id="Career">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-5 col-md-offset-1 wow fadeInUp">
                    <div class="page-title">
                        <h2> Careers at DCP</h2>
                    </div>
                    <div class="panel-group accordion1" id="accordion">
                        <div class="panel">
                            <a data-toggle="collapse" data-parent="#accordion" aria-expanded="true" href="#collapse1">Finance Manager </a>
                            <div id="collapse1" class="collapse in ">
                                <div class="text-body">The senior finance officer is responsible for applying accepted accounting principles and procedures to analyze financial information, prepare accurate and timely financial reports and statements and ensure appropriate accounting control procedures.
                                        <a href="https://drive.google.com/file/d/1CVh_QPd4GOnPlwJ2SeYXzsXbzrOJyzd-/view?usp=sharing" class="read-more">Click here for Requirements</a>
                                </div>
                            </div>
                        </div>
                        <div class="panel">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Graduate Trainee Technology and Innovation Development </a>
                            <div id="collapse2" class="collapse">
                                <div class="text-body">The holder of the office will assist in leading people in product and service development related to computer communication technology and systems’ automation as well as manage the company branding and all branding materials design and creation. Also, as is necessary, assist in the aspect of business development as directed by supervisor.
                                        <a href="https://drive.google.com/file/d/0Bz1k9bKqn26MZHAyQnoyYUdCVlMwRElxaFBSUWROUHBlT2ww/view?usp=sharing" class="read-more">Click here for Requirements</a>
                                </div>
                            </div>
                        </div>
                        <div class="panel">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Office Support Service </a>
                            <div id="collapse3" class="collapse">
                                <div class="text-body">The Office Assistant/ Cleaner is responsible for the general cleanliness of the entire building and provides administrative, clerical and secretarial support to others in the office to enable the efficient running of the offices.
                                        <a href="https://drive.google.com/file/d/1w_Dou5FVe87QwI_HIM1tx0-qwUUPDXA-/view?usp=sharing" class="read-more">Click here for Requirements</a>
                                </div>
                            </div>
                        </div>
                        <div class="panel">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">Teamlead Management Consulting</a>
                            <div id="collapse4" class="collapse">
                                <div class="text-body">To represent the company and head projects ensuring complete delivery on project time line and within scope and finance.
                                        <a href="https://drive.google.com/file/d/1QDnU8vCDQKTSb4fKunl6CeDcWqH-JMeQ/view?usp=sharing" class="read-more">Click here for Requirements</a>
                                </div>
                            </div>
                        </div>
                        <div class="panel">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">Intern I Technology and Innovation Development </a>
                            <div id="collapse5" class="collapse">
                                <div class="text-body">The holder of the office will assist in product and service development related to computer communication technology and systems’ automation as well as manage the company branding and all branding materials design and creation.                                
                                    <a href="https://drive.google.com/file/d/1TKX6nVm6YUga79n8f9I4m60oY-fffa1Z/view?usp=sharing" class="read-more">Click here for Requirements</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*<!--About-Area-->*/}

    {/* Footer-Area */}
    <div className="row">
        <div className="col-xs-12">
            <p className="copyright">
                Copyright &copy; {new Date().getFullYear()} All rights reserved | Discovery Cycle Professionals
            </p>
        </div>
    </div>
    {/*<!--Footer-Area-->*/}   

   

    {/*<!--Vendor-JS-->*/}
    <script src="js/vendor/jquery-1.12.4.min.js"></script>
    <script src="js/vendor/bootstrap.min.js"></script>
     {/*<!--Plugin-JS-->*/}
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/appear.js"></script>
    <script src="js/bars.js"></script>
    <script src="js/waypoints.min.js"></script>
    <script src="js/counterup.min.js"></script>
    <script src="js/easypiechart.min.js"></script>
    <script src="js/mixitup.min.js"></script>
    <script src="js/contact-form.js"></script>
    <script src="js/scrollUp.min.js"></script>
    <script src="js/magnific-popup.min.js"></script>
    <script src="js/wow.min.js"></script>
     {/*<!--Main-active-JS-->*/}
    <script src="js/main.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDXZ3vJtdK6aKAEWBovZFe4YKj1SGo9V20&callback=initMap"></script>
    <script src="js/maps.js"></script>
        </>
     );
}
 
export default Career;