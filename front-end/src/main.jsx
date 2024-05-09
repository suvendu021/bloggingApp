import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { AppStore } from "./components/Redux/AppStore.jsx";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={AppStore}>
    <App />
    <Toaster />
  </Provider>
);
