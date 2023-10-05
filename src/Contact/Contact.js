import { Fragment } from "react"
import './Contact.css'

const Contact=()=>{
    return(
        <Fragment>
            
            <div className="contactContainer">
                <div className="contactLeft">
                <h3 className="contactHeader">Contact Me</h3>
                <div className="contactData">
                    <p>Email : jimmanamel@gmail.com</p>
                    <p>Phone : +91-8606651595</p>
                    <address>
                        Manamel House,<br/>
                        Nedumkunnam P.O,<br/>
                        Kottayam District,<br/>
                        Kerala, India<br/>
                        PIN : 686542
                    </address>
                    </div>
                </div>
                <div className="contactRight">
                    <div>
                        <input id="Name" type="text" value="Name"/>
                        <input id="Email" type="email" value="Email"/>
                    </div>
                    <div>
                        <input id="Message" type="text" value="Message"/>
                    </div>
                    <div>
                        <input id="submitButton" type="submit" value="Submit"/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Contact