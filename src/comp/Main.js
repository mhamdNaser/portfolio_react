import React from "react"


class Main extends React.Component{
    render(){
        return(
        <div className="col-lg-12 flex-grow-1 ms-5">
            <div  id="home" className="row vh-100 ms-4 ps-4 align-items-center">
                <div className="col-lg-2"></div>
                <div className="col-lg-4">
                    <div class="container-fluid">
                        <img src="./image/mhamd.png" className="img-fluid my-photo" alt=""/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div class="container">
                        <h1>Muhammed Nasser Edden</h1>
                        <p> <strong>Full Stack Web Developer </strong><br/> interface design, programming and development
                            I started working as a graphic designer and reached an acceptable level in it, but my tendency was to programming the 
                            web and its applications <br/>
                        </p>
                    </div>
                </div>
            </div>

            
            <div  id="Education" className="row vh-100 align-items-center justify-content-center">
                <div className="col-lg-8">
                    <div class="container-fluid">
                        <div class="container m-5">
                            <h2>Education</h2>
                            <p>My great passion in the field of information technology made me seek to complete my study in the field of 
                                artificial intelligence <br/><br/>
                                And when the Orange Academy opened the door for registration, I applied in the first batch, but I didn't get a chance
                                Now I am a member of the Orange Programming Academy family and the Simplon family 
                            </p>
                        </div>
                    </div>
                    <div className="container-fluid edu-photo">
                        <div className="card">
                            <img src="./image/aut.jpg" alt=""/>
                            <div className="container-text">
                                <h4><b>AUT</b></h4> 
                                <p>Artifical Intelligence</p> 
                            </div>
                        </div>
                        <div className="card">
                            <img src="./image/Orange-Logo.png" alt=""/>
                            <div className="container-text">
                                <h4><b>Orange Academy</b></h4> 
                                <p>FullStack Web Devoloper</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  id="Project" className="container">
                <div className="container content">
                    <div className="container p-3">
                        <h2>Project</h2>
                        <p>Here is project wirefram , mockup and Portfolio</p>
                    </div>
                    <div className="container-fluid fram-box">
                        <div className="container edu-photo">
                            <div className="card">
                                <img src="./image/project2.PNG" alt=""/>
                                <div className="container-text">
                                    <h4><b>Portfolio</b></h4> 
                                    <a href="/" target="_blank">My Portfolio </a>
                                </div>
                            </div>
                            <div className="card">
                                <img src="./image/project1.PNG" alt=""/>
                                <div className="container-text">
                                    <h4><b>Antique Shop</b></h4> 
                                    <a href="/"  target="_blank">wireframe  </a>
                                    <a href="/"  target="_blank">mockup  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  id="Skills" className="container">
                <div className="container content">
                    <div className="container p-3">
                        <h2>My Skills</h2>
                    </div>
                    <div className="skills">
                        <ul>
                        <h3>Soft Skills</h3>
                        <li>Communication skill</li>
                        <li>Driving skill</li>
                            <li>Teamwork skill</li>
                            <li>Flexibility and adaptability to changes</li>
                            <li>Time management skill</li>
                            <li>Problem solving skill</li>
                        </ul>
                        <ul>
                            <h3>Software Skills</h3>
                            <div className="icon">
                                <img src="./image/html.png" alt="html icon"/>
                                <img src="./image/css.png" alt="css icon"/>
                                <img src="./image/sass.png" alt="sass icon"/>
                                <img src="./image/boot.png" alt="boot icon"/>
                            </div>
                        </ul>
                    </div>
                    
                </div>
            </div>

            
            <div className="footer-mobile">
                <div className="container icon-style">
                    <a href="/" target="_blank"><i className="fa fa-github-square"></i></a>
                    <a href="/" target="_blank"><i className="fa fa-linkedin-square"></i></a>
                    <a href="/" target="_blank"><i className="fa fa-twitter-square"></i></a>
                </div>
                <p>Phone : +962-776830893 <br/>mhamd.naser.edden@gmail.com</p>
            </div>
        </div>
        );
        
    }
}

export default Main;