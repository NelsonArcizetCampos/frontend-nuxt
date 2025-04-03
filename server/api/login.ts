export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const PASSWORD = String(config.PASSWORD ?? '');
  const SECRET_TOKEN = String(config.public?.SECRET_TOKEN ?? '');

  try {
    // Read the password from the request body
    const { password } = await readBody<{ password: string }>(event);

    if (!password) {
      return {
        statusCode: 400,
        message: 'Password not provided.',
      };
    }

    // Verify the password
    if (password === PASSWORD) {
      // Set the token in the cookie
      setCookie(event, 'auth_token', SECRET_TOKEN, {
        httpOnly: false, // To protect against XSS attacks
        secure: process.env.NODE_ENV === 'production', // Only HTTPS in production
        sameSite: 'lax', // Prevent sending in cross-site contexts
        path: '/', // Available throughout the application
      });

      // Return success message
      return {
        statusCode: 200,
        message: 'Login successful!',
      };
    } else {
      return {
        statusCode: 401,
        message: 'Invalid password.',
      };
    }
  } catch (error) {
    console.error('Error during login:', error);
    return {
      statusCode: 500,
      message: 'Internal server error.',
    };
  }
});
