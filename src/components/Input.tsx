import { Fragment, type FC } from "react";

const Input: FC<IInputProps> = props => {
  const { id, label, isNumber, value, setValue } = props;
  return (
    <Fragment>
      <label 
        htmlFor={id} 
        className="text-gray-700 text-xs mb-0.5">
        {label}
      </label>
      <input 
        id={id} 
        type={isNumber ? "number" : "text"}
        size={30}
        className="border border-gray-200 rounded-lg px-2 py-1 text-sm focus:outline-none mb-4" 
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
