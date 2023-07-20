import { useState, useEffect, type FC } from "react";

// TODO: The user can add items into the menu.
// An item is comprised of a name, price, group, and an optional image.
// The images are stored locally rather than in google-sheets like the other fields.

const Form: FC<IFormProps> = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [group, setGroup] = useState("");
  const [image, setImage] = useState<string|null>(null);
  return (
    <form onSubmit={e => e.preventDefault()}>
      {/* TODO */}
    </form>
  );
}

const Menu: FC = () => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    // TODO: Fetch items here.
    // TODO: Get all the unique groups here.
    // NOTE: Maybe use SWR instead of useEffect.
  }, []);

  return (
    <div className="">
      <h1 className="">
        Menu Makanan dan Minuman
      </h1>
      {/* TODO */}
      {modal && (
        <div className="">
          <Form />
        </div>
      )}
    </div>
  );
}

export default Menu;

interface IFormProps {
  // TODO
}
