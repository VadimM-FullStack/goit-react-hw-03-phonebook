import PropTypes from "prop-types";

const Contact = ({ id, name, number, onDeleteContact }) => (
  <li name={name} number={number}>
    {name}:<span>{number}</span>
    <button
      type="button"
      onClick={() => {
        onDeleteContact(id);
      }}
    >
      Delete
    </button>
  </li>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};

export default Contact;
