import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  return (
    <div className={styles["filter"]}>
      <label className={styles["filter-label"]}>
        Find contacts by name
        <input
          type="text"
          className={styles["filter-input"]}
          value={value}
          placeholder="Input name"
          onChange={onChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Filter;
