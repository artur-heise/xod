export const INCORRECT_CREDENTIALS = {
  title: 'Nieprawidłowa nazwa użytkownika lub hasło',
  // TODO: button with dircet URL for password recovery
  solution:
    'Make sure you use the same credentials as on https://xod.io site. ' +
    'If you forgot the password, open the site to recover',
};

export const SERVICE_UNAVAILABLE = {
  title: 'Usługa jest niedostępna',
  note: 'Failed to complete a request to the XOD server.',
  // TODO: button “Open XOD site”
  solution:
    'Make sure your internet connection is up and ' +
    'https://xod.io site is allowed by your proxy or firewall.',
};

export const LOG_IN_TO_CONTINUE = {
  title: 'Zaloguj się, aby kontynuować',
  // TODO: parametrize action
  note: 'The action requires that you are signed in into your XOD account.',
};

export const USERNAME_NEEDED_FOR_LITERAL = {
  title: 'Nie zalogowano',
  note:
    'The program uses the `=XOD_USERNAME` literal. You should log in to make it work.',
  solution: 'Open the Account sidebar to enter your login/password or sign up.',
};
