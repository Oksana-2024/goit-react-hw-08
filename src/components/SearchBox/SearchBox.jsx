import { selectSearchFilter } from "../../redux/filters/selectors";
import { changeSearchFilter } from "../../redux/filters/slice";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectSearchFilter);
  return (
    <div className={s.searchBox}>
      <p className={s.text}>Find contacts by name or number</p>
      <input
        className={s.searchInput}
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeSearchFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
