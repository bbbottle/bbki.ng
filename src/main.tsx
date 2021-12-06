import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { ReloadPrompt } from "@/components";
import App from "./app";
import "./main.css";
import { getEnv } from "@/utils";

Sentry.init({
  dsn: "https://6c48bed663f24c78ad9ccb5754854b85@o1084530.ingest.sentry.io/6094373",
  integrations: [new Integrations.BrowserTracing()],
  release: "0.0.1",
  environment: getEnv(),
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <ReloadPrompt />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
