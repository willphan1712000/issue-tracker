// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://70ccffb9cb19d71b50c2775d0fb6bb2c@o4508344958976000.ingest.us.sentry.io/4508344960745473",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
