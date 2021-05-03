import Contact from "../Contact";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      {contacts.length ? (
        <ul className={styles["contact-list"]}>
          {contacts.map(({ id, name, number }) => {
            return (
              <Contact
                key={id}
                id={id}
                name={name}
                number={number}
                onDeleteContact={onDeleteContact}
              />
            );
          })}
        </ul>
      ) : (
        <p>Nothing to see here</p>
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
