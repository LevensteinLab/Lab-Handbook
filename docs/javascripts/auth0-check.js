console.log("Auth0 check loaded");

(async () => {
  const protectedPaths = ["/protected/"];

  const isProtected = protectedPaths.some(path =>
    window.location.pathname.startsWith(path)
  );

  if (!isProtected) return;

  const auth0 = await createAuth0Client({
    domain: "dev-qq2slevwutfjfzc5.auth0.com",
    client_id: "HZr5Xg1FKTFPJCwV9enos4g8YzqumU4R",
    redirect_uri: window.location.origin,
  });

  // Handle redirect back from Auth0
  if (window.location.search.includes("code=") && window.location.search.includes("state=")) {
    await auth0.handleRedirectCallback();
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  const isAuthenticated = await auth0.isAuthenticated();

  if (!isAuthenticated) {
    document.body.innerHTML = `
      <div style="text-align:center; margin-top: 100px;">
        <h1>🔒 Access Restricted</h1>
        <p>You must log in to view this page.</p>
        <button id="login-btn">Log In</button>
      </div>
    `;
    document.getElementById("login-btn").onclick = () => auth0.loginWithRedirect();
    return;
  }

  // Show content
  document.body.style.display = "block";

  const user = await auth0.getUser();
  console.log("Logged in as", user);

  // Add a logout button
  const logoutBtn = document.createElement("button");
  logoutBtn.textContent = "Log Out";
  logoutBtn.style = "position:fixed;top:10px;right:10px;";
  logoutBtn.onclick = () => auth0.logout({ returnTo: window.location.origin });
  document.body.appendChild(logoutBtn);
})();
