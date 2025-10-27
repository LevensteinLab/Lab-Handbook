// docs/js/auth0-init.js
(async () => {
  // Replace these with your Auth0 values
  const AUTH0_DOMAIN = "dev-qq2slevwutfjfzc5.us.auth0.com";        // e.g. dev-abc123.us.auth0.com
  const AUTH0_CLIENT_ID = "HZr5Xg1FKTFPJCwV9enos4g8YzqumU4R";

  // Hide body until we authorize
  document.documentElement.style.visibility = "hidden";

  const auth0 = await createAuth0Client({
    domain: AUTH0_DOMAIN,
    client_id: AUTH0_CLIENT_ID,
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  });

  // Handle redirect back from Auth0
  if (window.location.search.includes("code=") && window.location.search.includes("state=")) {
    try {
      await auth0.handleRedirectCallback();
      window.history.replaceState({}, document.title, window.location.pathname);
    } catch (err) {
      console.error("Error handling redirect callback", err);
    }
  }

  const isAuthenticated = await auth0.isAuthenticated();

  if (!isAuthenticated) {
    // If page is not public, redirect into login. Decide: protect specific paths or whole site.
    const PROTECTED_PATHS = ["/protected/"];
    const path = window.location.pathname;

    const isProtected = PROTECTED_PATHS.some(p => path.startsWith(p));
    if (isProtected) {
      // start login flow
      await auth0.loginWithRedirect({
        authorizationParams: {
          redirect_uri: window.location.origin
        }
      });
      // loginWithRedirect will redirect the browser away; no further code here
      return;
    } else {
      // public page — show content
      document.documentElement.style.visibility = "";
      return;
    }
  }

  // Authenticated: optionally get user info
  const user = await auth0.getUser();
  console.log("Auth0 user:", user);

  // Show content now that the user is authenticated and (server-side) the rule will ensure org membership
  document.documentElement.style.visibility = "";
})();
