export function clearCookie(res) {
  res.clearCookie('token');
}

export function validateRegisterInput(email, password) {
  // Validate email and password with regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Invalid email';
  }
  if (password.length < 6) {
    return 'Password must be at least 6 characters';
  }
  return null;
}
