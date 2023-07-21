import { useState, type FC } from "react";
import Input from "../../components/Input";

const Form: FC<IFormProps> = props => {
  const { group, onSubmit } = props;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  return (
    <form onSubmit={e => {
      e.preventDefault();
      onSubmit(name, price);
    }}>
      <Input 
        id="name" 
        label="Nama" 
        value={name} 
        setValue={setName} />
      <Input 
        isNumber 
        id="price" 
        label="Harga" 
        value={price} 
        setValue={v => setPrice(parseFloat(v) || 0)} />
      <Input 
        id="group" 
        label="Tipe" 
        value={group} />
      <button 
        type="submit"
        className="">
        Tambah
      </button>
    </form>
  );
}

export default Form;

interface IFormProps {
  group: string
  onSubmit: (name: string, price: number) => void
}
