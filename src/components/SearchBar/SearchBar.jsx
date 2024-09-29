import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";
import searchIcon from "../../assets/search.svg";

const SearchBar = ({ onSearchBtn }) => {
  const onSubmit = (values, actions) => {
    onSearchBtn(values.query);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        query: "",
      }}
      onSubmit={onSubmit}
    >
      <Form className={css.searchBar}>
        <Field name="query" className={css.searchInput} />
        <button className={css.searchBtn} type="submit">
          <img className={css.searchBtnIcon} src={searchIcon}></img>
        </button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
