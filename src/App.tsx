import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import WhatsappButton from "./components/feature/WhatsappButton";


function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <AppRoutes />
        <WhatsappButton />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
