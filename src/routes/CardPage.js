import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import Card from "../components/Card";

function CardPage({ state, dispatch }) {
  const { pageId } = useParams();

  useEffect(() => {
    dispatch({
      type: "page-left",
      id: Number(pageId),
    });
  }, [pageId, dispatch]);

  return (
    <div>
      {pageId >= state.cards.length || pageId < 0 || isNaN(pageId) ? (
        <h1>There is nothing here!</h1>
      ) : (
        <div>
          <h1 className="text-4xl">Card Viewer</h1>
          <Card pageId={pageId} state={state} dispatch={dispatch} />
          {pageId >= 1 && (
            <NavLink
              to={`/${Number(pageId) - 1}`}
              className="shadow-xl px-4 py-1 bg-blue-500 rounded-full mr-2"
            >
              Previous Card
            </NavLink>
          )}
          {Number(pageId) === state.cards.length - 1 ? (
            <NavLink
              to="/0"
              className="shadow-xl px-4 py-1 bg-blue-500 rounded-full ml-2"
            >
              Go to Start
            </NavLink>
          ) : (
            <NavLink
              to={`/${Number(pageId) + 1}`}
              className="shadow-xl px-4 py-1 bg-blue-500 rounded-full ml-2"
            >
              Next Card
            </NavLink>
          )}
        </div>
      )}
    </div>
  );
}

export default CardPage;
