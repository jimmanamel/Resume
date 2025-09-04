import { FiPhoneCall } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";
import { useMediaQueryContext } from "../../MediaQueryContext";
import ComingSoonPlaceholder from "../ComingSoon/ComingSoonPlaceholder";
import "./Contact.scss";

const Contact = () => {
  const { isDesktop } = useMediaQueryContext();

  return (
    <div className="contacts">
      <div className="contacts__top">
        <div className="contacts__form-wrapper">
          <h2 className="contacts__title">
            Get in <span>touch!</span>
          </h2>
          <p className="contacts__subtitle">
            Shoot a message and I'll respond as soon as possible.
          </p>

          <form
            method="post"
            action="https://formsubmit.co/9e7c76c7f41bfc1fae02361b85542d4a"
            encType="multipart/form-data"
            className="contacts__form"
          >
            <input type="text" name="Name" placeholder="Name" required />
            <input type="email" name="Email" placeholder="Email" required />
            <textarea
              name="YourMessage"
              placeholder="Type your message"
              required
            />
            <input
              type="hidden"
              name="_blacklist"
              value="spammy pattern, banned term, phrase"
            />
            <button type="submit" className="contacts__submit">
              Shoot
            </button>
          </form>
        </div>

        <div className="contacts__visual">
          <ComingSoonPlaceholder />
        </div>
      </div>

      <div className="contacts__bottom">
        <div className="contacts__info">
          <FiPhoneCall size={isDesktop ? 40 : 20} />
          <div>
            <p className="contacts__label">Phone</p>
            <p className="contacts__text">860651595</p>
          </div>
        </div>

        <div className="contacts__separator" />

        <div className="contacts__info">
          <IoMailOpenOutline size={isDesktop ? 45 : 22} />
          <div>
            <p className="contacts__label">Email</p>
            <p className="contacts__text">jimmanamel@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
