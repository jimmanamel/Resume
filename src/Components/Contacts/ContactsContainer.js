import "./Contacts.scss";
import { useLoadScript } from "@react-google-maps/api";
import MapComponent from "./MapComponent";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";
import { useMediaQueryContext } from "../../MediaQueryContext";

const ContactsContainer = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "", // Add your API key
  });

  const { isDesktop } = useMediaQueryContext();
  return (
    <div className="contactsContainer">
      <div className="contactsContainer__contactsTop">
        <div className="contactsContainer__formHolder">
          <div className="contactsContainer__heading">
            Get in&nbsp;<p>touch!</p>
          </div>
          <p className="contactsContainer__subHeading">
            Shoot a message I will respond as soon as possible
          </p>
          <form
            method="post"
            action="https://formsubmit.co/jimmanamel@gmail.com"
            enctype="multipart/form-data"
          >
            <div className="contactsContainer__form">
              <input type="text" name="Name" placeholder="Name" />
              <input type="email" name="Email" placeholder="Email" />
              <input
                type="text"
                name="YourMessage"
                placeholder="Type your message"
              />
              <input type="hidden" name="_blacklist" value="spammy pattern, banned term, phrase"></input>
              <button
                className="contactsContainer__button"
                name="shoot"
                type="submit "
              >
                Shoot
              </button>
            </div>
          </form>
        </div>
        {isLoaded ? <MapComponent /> : null}
      </div>
      <span className="contactsContainer__contactsBottom">
        <FiPhoneCall size={isDesktop ? 40 : 20} />
        <div className="contactsContainer__phoneHolder">
          <p>Phone</p>
          <p>860651595</p>
        </div>
        <div class="contactsContainer__borderSeparator" />
        <IoMailOpenOutline size={isDesktop ? 45 : 22} />
        <div className="contactsContainer__emailHolder">
          <p>Email</p>
          <p>jimmanamel@gmail.com</p>
        </div>
      </span>
    </div>
  );
};

export default ContactsContainer;
