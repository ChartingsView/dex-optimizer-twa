import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import ReactDOM from "react-dom/client";
import { setupStore } from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'
// this manifest is used temporarily for development purposes
const manifestUrl =
  "https://beta.redoubt.online/tonconnect-manifest.json";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/twa/">
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  </TonConnectUIProvider>
);
