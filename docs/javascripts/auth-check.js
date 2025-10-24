console.log('AUTHCHECK LOADED!');

(function() {
  'use strict';
  
  console.log('AUTH CHECK.JS RUNNING');
  
  // Configuration
  const PROTECTED_PATHS = ['/protected/']; 
  const REQUIRED_ORG = 'LevensteinLab'; 
  
  function isProtectedPage() {
    return PROTECTED_PATHS.some(path => window.location.pathname.startsWith(path));
  }
  
  function checkAuth() {
    console.log('checkAuth called');
    console.log('Current path:', window.location.pathname);
    console.log('Is protected:', isProtectedPage());
    
    if (!isProtectedPage()) {
      console.log('Public page - no auth needed');
      return;
    }
    
    const user = netlifyIdentity.currentUser();
    console.log('Current user:', user);
    
    if (!user) {
      console.log('No user - showing login');
      showAccessDenied('Please log in to view this content.');
      netlifyIdentity.open();
      return;
    }
    
    console.log('User logged in - showing content');
    document.body.style.display = 'block';
  }
  
  function showAccessDenied(message) {
    document.body.style.display = 'block';
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
  netlifyIdentity.on('init', checkAuth);
  } else {
    document.body.style.display = 'block';
  }

  // Check if Identity is already initialized
  if (window.netlifyIdentity) {
    console.log('Netlify Identity found');
    
    // Call checkAuth immediately in case init already happened
    checkAuth();
    
    // Also listen for future events
    netlifyIdentity.on('init', user => {
      console.log('Init event fired, user:', user);
      checkAuth();
    });
    
    netlifyIdentity.on('login', () => {
      console.log('User logged in');
      document.body.style.display = 'block';
    });
    
    netlifyIdentity.on('logout', () => {
      console.log('User logged out');
      window.location.href = '/';
    });
  } else {
    console.error('Netlify Identity not found!');
  }
})();