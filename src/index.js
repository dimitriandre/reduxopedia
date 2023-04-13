import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./app/layout/Header";
import Counter from "./app/components/Counter";
import DestinationList from "./app/components/DestinationList";
import DestinationFact from "./app/components/DestinationFact";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <Counter />
      <div className="p-4 border text-center">
        <h4 className="text-success">Destination List</h4>
        <DestinationList />
      </div>
      <DestinationFact />
    </Provider>
  </React.StrictMode>
);
