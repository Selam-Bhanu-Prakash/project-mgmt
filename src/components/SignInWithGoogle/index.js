import { GoogleLogin } from 'react-google-login';

const TestComp = () => {
    const handleGoogleLoginSuccess = (response) => {
        // Handle successful sign-in
        const { tokenId } = response;
        // Send the token to your backend server for further authentication and user management
        console.info(tokenId)
      };
      
      const handleGoogleLoginFailure = (error) => {
        // Handle sign-in failure
        console.error('Google sign-in error:', error);
      };
      
  return (
    <div>
      <h1>Sign In With Google</h1>
      <GoogleLogin
  clientId="999993824939-cucvk00c60tn84tkp7u8tdjccbhb9auj.apps.googleusercontent.com"
  buttonText="Sign in with Google"
  onSuccess={handleGoogleLoginSuccess}
  onFailure={handleGoogleLoginFailure}
  cookiePolicy={'single_host_origin'}
/>

    </div>
  );
};

export default TestComp;
