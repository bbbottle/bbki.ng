import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { Router } from "react-router-dom";
import { RouterHistory } from "@sentry/react/dist/reactrouter";
import { createBrowserHistory } from "history";
import { ReloadPrompt } from "@/components";
import App from "./app";
import "./main.css";
import { getEnv } from "@/utils";

const history = createBrowserHistory();

Sentry.init({
  dsn: "https://6c48bed663f24c78ad9ccb5754854b85@o1084530.ingest.sentry.io/6094373",
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: ["localhost", "bbki.ng", /^\//],
      routingInstrumentation: Sentry.reactRouterV5Instrumentation(
        history as RouterHistory
      ),
    }),
  ],
  release: "0.0.1",
  environment: getEnv(),
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <ReloadPrompt />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
