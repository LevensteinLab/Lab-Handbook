const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Get user from Netlify Identity context
  const { user } = context.clientContext;
  
  if (!user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Not authenticated', isMember: false })
    };
  }

  // Configuration - UPDATE THIS!
  const REQUIRED_ORG = 'LevensteinLab';
  
  // Get user's GitHub access token from Identity
  const githubToken = user.app_metadata?.provider_token;
  const githubUsername = user.user_metadata?.user_name;
  
  if (!githubToken || !githubUsername) {
    return {
      statusCode: 400,
      body: JSON.stringify({ 
        error: 'GitHub information not available',
        isMember: false 
      })
    };
  }
  
  try {
    // Check if user is a member of the organization
    const response = await fetch(
      `https://api.github.com/orgs/${REQUIRED_ORG}/memberships/${githubUsername}`,
      {
        headers: {
          'Authorization': `token ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Netlify-Function'
        }
      }
    );
    
    // 204 = is a member, 404 = not a member, 302 = requester not authorized
    const data = await response.json();
    const isMember = data.state === 'active';
        
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        isMember,
        org: REQUIRED_ORG,
        user: githubUsername
      })
    };
  } catch (error) {
    console.error('Error checking org membership:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to check organization membership',
        isMember: false
      })
    };
  }
};