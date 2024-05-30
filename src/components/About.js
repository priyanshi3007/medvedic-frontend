import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Form from "./Form";
import Pres from "./Pres";



export default function About() {
    const [open, setOpen] = useState(false);
    const [prescription,setprescription]=useState(false);
    const [data,setData]=useState([]);
     
    const { user , loginWithRedirect,isAuthenticated,logout} = useAuth0();

console.log("current user",user);

    return (
        <div className="body1">
            {!prescription &&<>
            <header>
                <ul className="nav-bar1">
                    <li className="nav1">Home</li>
                    <li className="nav1">About</li>
                    <li className="nav1">Contact us</li>
                   {isAuthenticated&&<h3>hello {user.name}</h3>}
                    {isAuthenticated ? (<button className="start1" onClick={(e)=>logout()}>logout</button>):
                    (<button className="start1" onClick={(e)=>loginWithRedirect()}>login</button>)
                    }
                </ul>
                <div className="title1">
                    <br></br><br></br><br></br>
                        <h1>MEDVEDIC</h1>
                        <p>Unpacking Ayurveda is a New Luxury.</p>
                        <button className="start1" onClick={()=>setOpen(true)}> Get Started </button>
                        <Form open={open} setOpen={setOpen} data={data} setData={setData} setprescription={setprescription}/>
                </div>
                <div className="header-image1">
                    <img src= "IMG_20240406_165043_611" alt=""/>
                </div>
            </header>

            <div className="welcome1">
                <h2>Welcome To Medvedic</h2>
            </div>
            
            <div className="section1">
                <section className="section-1">
                    <button className="section-1-item" onClick={()=>setOpen(true)}>
                        <div className="items-details">
                            <p>Diagnose yourself</p>
                        </div>
                        <img src="medical-checkup.png" alt=""/>
                    </button>
                    <Form open={open} setOpen={setOpen} data={data} setData={setData} setprescription={setprescription}/>
                    <div className="section-1-item">
                        <div className="items-details">
                            <p>Consult a specialist</p>
                        </div>
                        <img src="doctor.png" alt=""/>
                    </div>
                    <div className="section-1-item">
                        <div className="items-details">
                            <p>View past prescriptions</p>
                        </div>
                        <img src="health-check.png" alt=""/>
                    </div>
                </section>
            </div>
            
            <section className="ayurveda1">
                <div className="ayu1">
                    <h2>WHY MEDVEDIC ?</h2>
                    <br></br>
                    <p><em>At Medvedic, we believe in the age-old wisdom of Ayurveda, which harnesses the natural healing
                            properties of
                            herbs to promote holistic well-being. Explore our curated selection of Ayurvedic herbs, each carefully
                            chosen
                            for its unique therapeutic benefits. From Ashwagandha for stress relief to Turmeric for its
                            anti-inflammatory
                            properties, our herbs are sourced for purity and potency. Unlock the secrets of Ayurveda and embark on a
                            journey towards a healthier, balanced life.</em></p>
                </div>
            </section>

            <section className="ayurvedic-herbs1">
                <div className="ayurvedic-herbs-image1">
                    <img src="tea.png" alt="Ayurvedic Herbs"/>
                </div>
                <div className="ayurvedic-herbs-info1">
                    <h2>Ayurvedic Herbs</h2>
                    <p>Explore a wide range of Ayurvedic herbs and supplements for holistic wellness.</p>
                    <a href="ayurvedic_medicines.html" className="cta-button">Browse Herbs</a>
                </div>
            </section>

            <section className="diet-chart1">
                <div className="diet-chart-info1">
                    <h2>Customized Diet Plans</h2>
                    <p>Discover personalized Ayurvedic diet plans tailored to your dosha and health goals.</p>
                    <a href="diet_plans.html" className="cta-button">Explore Diet Plans</a>
                </div>
                <div className="diet-chart-image1">
                    <img src="diet.png" alt="Diet Chart"/>
                </div>
            </section>

            <section className="yoga-exercise1">
                <div className="yoga-exercise-image1">
                    <img src="yoga-pose.png" alt="Yoga Exercise"/>
                </div>
                <div className="yoga-exercise-info1">
                    <h2>Yoga for Well-being</h2>
                    <p>Explore a collection of yoga exercises to enhance your physical and mental health.</p>
                    <a href="yoga_exercises.html" className="cta-button">Explore Yoga Exercises</a>
                </div>
            </section>

            <section className="diet-chart1">
                <div className="diet-chart-info1">
                    <h2>Home Remedies</h2>
                    <p>Discover personalized Ayurvedic diet plans tailored to your dosha and health goals.</p>
                    <a href="diet_plans.html" className="cta-button">Explore remedies</a>
                </div>
                <div className="diet-chart-image1">
                    <img src="homeopathy.png" alt="Diet Chart"/>
                </div>
            </section>
                
            <footer className="footer1">
                <div className="top1">&copy; 2024 MEDVEDIC</div>
                <div className="bottom1">
                    <div className="website1">
                        <div className="webname1">MEDVEDIC</div>
                            <div className="webabout1">All in one Ayurveda</div>
                    </div>
                    <div className="creator1">
                        <div className="creatorhead1">Creators</div>
                        <div className="creatorname1">
                            <div className="name1">Ashutosh Tripathi </div>
                            <div className="name1">Ram Krishna Dwvedi</div>
                            <div className="name1">Priyanshi Garg</div>
                            
                        </div>
                    </div>
                    <div className="contact1">
                        <div className="conracthead1">Contact Us</div>
                        <div className="contactdetail1">
                            <div className="num1">+91 123456789</div>
                            <div className="MEDVEDIC@gmail.com" ></div>
                        </div>
                    </div>
                </div>
            </footer>
            </>}
            {prescription && <Pres data={data}/>}
        </div>
    )
}