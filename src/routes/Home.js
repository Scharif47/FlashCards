import React, { useState } from "react";
import CardEdit from "../components/CardEdit";
import CardInput from "../components/CardInput";
import Table from "../components/Table";

function Home({ state, dispatch }) {
  const [useEdit, setUseEdit] = useState(false);
  const [cardid, setCardid] = useState(0);

  return (
    <div className="flex flex-col justify-center align-middle">
      <h1 className="text-4xl">Card Editor</h1>
      <Table
        state={state}
        dispatch={dispatch}
        useEdit={useEdit}
        setUseEdit={setUseEdit}
        setCardid={setCardid}
      />

      {useEdit ? (
        <CardEdit
          dispatch={dispatch}
          cardid={cardid}
          setUseEdit={setUseEdit}
        />
      ) : (
        <CardInput 
        dispatch={dispatch}
        />
      )}

    </div>
  );
}

export default Home;
