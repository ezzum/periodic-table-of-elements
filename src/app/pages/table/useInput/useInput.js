import { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchElement } from "../../../redux/actions";

function useInput(initValue) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(initValue);

  const onChange = (event) => {
    setValue(event.target.value);
    dispatch(SearchElement(event.target.value));
  };

  return {
    value,
    onChange,
  };
}

export default useInput;
