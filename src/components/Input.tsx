import { Fragment, type FC } from "react";

const Input: FC<IInputProps> = props => {
  const { id, label, isNumber, value, setValue } = props;
  return (
    <Fragment>
      <label 
        htmlFor={id} 
        className="">
        {label}
      </label>
      <input 
        id={id} 
        type={isNumber ? "number" : "text"}
        className="" 
        value={value} 
        onChange={e => setValue ? setValue(e.target.value) : undefined}
        disabled={!setValue} />
    </Fragment>
  );
}

export default Input;

interface IInputProps {
  id: string
  label: string
  value: any
  setValue?: (value: string) => void
  isNumber?: boolean
}
