export const INCORRECT_CREDENTIALS = {
  title: 'Nieprawidłowa nazwa użytkownika lub hasło',
  // TODO: button with dircet URL for password recovery
  solution:
    'Upewnij się, że używasz tych samych danych logowania co w witrynie https://xod.io. ' +
    'Jeśli nie pamiętasz hasła, otwórz witrynę, aby je odzyskać',
};

export const SERVICE_UNAVAILABLE = {
  title: 'Usługa jest niedostępna',
  note: 'Nie udało się wykonać żądania do serwera XOD.',
  // TODO: button “Open XOD site”
  solution:
    'Sprawdź, czy masz połączenie z internetem i czy witryna ' +
    'https://xod.io jest dozwolona przez serwer proxy lub zaporę sieciową.',
};

export const LOG_IN_TO_CONTINUE = {
  title: 'Zaloguj się, aby kontynuować',
  // TODO: parametrize action
  note: 'Aby wykonać tę czynność, musisz zalogować się na konto XOD.',
};

export const USERNAME_NEEDED_FOR_LITERAL = {
  title: 'Nie zalogowano',
  note:
    'Program używa literału `=XOD_USERNAME`. Zaloguj się, aby działał poprawnie.',
  solution: 'Otwórz panel konta, aby podać login i hasło lub utworzyć konto.',
};
