For production :

go to /src/pages/AdminPanel.jsx

go to /src/pages/Login.jsx

go to /src/pages/Register.jsx

// Define backend URL based on the environment
const backendURL = process.env.NODE_ENV === 'production'
  ? 'https://your-production-url.com'  // Production URL
  : 'http://localhost:5050';           // Development URL

change production url