import React, { useState } from "react";
import CardEdit from "../components/CardEdit";
import CardInput from "../components/CardInput";
import Table from "../components/Table";

function Home({ cards, setCards }) {
  const [useEdit, setUseEdit] = useState(false);
  const [cardid, setCardid] = useState(0);

  return (
    <div className="flex flex-col justify-center align-middle">
      <h1 className="text-4xl">Card Editor</h1>
      <Table
        cards={cards}
        setCards={setCards}
        useEdit={useEdit}
        setUseEdit={setUseEdit}
        setCardid={setCardid}
      />

      {useEdit ? (
        <CardEdit
          cards={cards}
          setCards={setCards}
          cardid={cardid}
          setUseEdit={setUseEdit}
        />
      ) : (
        <CardInput cards={cards} setCards={setCards} />
      )}
      {/* <CardEdit cards={cards} setCards={setCards} />
      <CardInput cards={cards} setCards={setCards} /> */}
    </div>
  );
}

export default Home;
