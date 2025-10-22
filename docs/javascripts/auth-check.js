(function() {
  'use strict';
  
  // Configuration
  const PROTECTED_PATHS = ['/protected/']; // Add your protected paths
  const REQUIRED_ORG = 'LevensteinLab'; // Change this!
  
  // Check if current page is protected
  function isProtectedPage() {
    return PROTECTED_PATHS.some(path => window.location.pathname.startsWith(path));
  }
  
  // Check authentication and org membership
  function checkAuth() {
    if (!isProtectedPage()) {
      return; // Public page, no check needed
    }
    
    const user = netlifyIdentity.currentUser();
    
    if (!user) {
      // Not logged in - show login modal
      showAccessDenied('Please log in to view this content.');
      netlifyIdentity.open();
      return;
    }
    
    // Check GitHub organization membership
    checkOrgMembership(user);
  }
  
  // Verify user is in required GitHub org
  async function checkOrgMembership(user) {
    try {
      // Call our Netlify function to verify org membership
      const response = await fetch('/.netlify/functions/check-org-membership');
      const data = await response.json();
      
      if (!data.isMember) {
        showAccessDenied(`You must be a member of the ${REQUIRED_ORG} organization to view this content.`);
      } else {
        // User is authenticated and authorized - show content
        document.body.style.display = 'block';
      }
    } catch (error) {
      console.error('Error checking org membership:', error);
      showAccessDenied('Error verifying access. Please try again.');
    }
  }
  
  // Show access denied message
  function showAccessDenied(message) {
    document.body.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; height: 100vh; font-family: system-ui;">
        <div style="text-align: center; max-width: 500px; padding: 2rem;">
          <h1>🔒 Access Denied</h1>
          <p>${message}</p>
          <button onclick="netlifyIdentity.open()" style="
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            background: #0066cc;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
          ">Log In</button>
        </div>
      </div>
    `;
  }
  
  // Hide content initially on protected pages
  if (isProtectedPage()) {
    document.body.style.display = 'none';
  }
  
  // Initialize when Netlify Identity loads
  if (window.netlifyIdentity) {
    netlifyIdentity.on('init', checkAuth);
    netlifyIdentity.on('login', () => {
      console.log('User logged in');
      window.location.reload();
    });
    netlifyIdentity.on('logout', () => {
      console.log('User logged out');
      window.location.href = '/';
    });
  }
})();