import { useState, type FC } from "react";
import Input from "../../components/Input";

const Form: FC<IFormProps> = props => {
  const { group, onSubmit } = props;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  return (
    <form 
      className="bg-white rounded-lg flex flex-col py-5 px-6 shadow"
      onClick={e => e.stopPropagation()}
      onSubmit={e => {
        e.preventDefault();
        onSubmit(name, price);
      }}>
      <h1 className="text-center font-semibold mb-2">Tambah ke Menu</h1>
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
        className="bg-blue-500 text-white text-sm rounded-lg py-2">
        Simpan
      </button>
    </form>
  );
}

export default Form;

interface IFormProps {
  group: string
  onSubmit: (name: string, price: number) => void
}
