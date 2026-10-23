export const TRANSPILING = 'Przetwarzanie kodu…';
export const SUCCES = 'Gotowe';
export const INTRODUCTION =
  'Tutaj zobaczysz komunikaty kompilatora, narzędzia wgrywającego, debuggera i innych narzędzi.';

export const CHECKING_DEPENDENCIES = 'Sprawdzanie zależności Arduino…';
export const CHECKING_DEPENDENCIES_SUCCESS =
  'Wszystkie zależności Arduino są już zainstalowane';
export const INSTALLING_DEPENDENCIES = 'Instalowanie zależności Arduino…';
export const INSTALLING_DEPENDENCIES_SUCCESS =
  'Wszystkie zależności Arduino zostały pomyślnie zainstalowane';

export const UPDATING_ARDUINO_DEPENDECIES = 'Aktualizowanie pakietów Arduino…';
export const UPDATING_ARDUINO_DEPENDECIES_SUCCESS =
  'Wszystkie pakiety Arduino zostały pomyślnie zaktualizowane';

export const WASM_NO_RUNTIME_FOUND = 'Nie można pobrać adresu URL skryptu środowiska uruchomieniowego WASM';
export const WASM_BINARY_NOT_FOUND = 'Nie można pobrać adresu URL pliku binarnego WASM';

export const WASM_BUILDING_ERROR = `Wygenerowany kod C++ zawiera błędy. Przyczyną może być nieprawidłowa implementacja węzła
lub niezgodność płytki z kodem środowiska uruchomieniowego XOD. Oryginalny komunikat
kompilatora znajduje się powyżej. Popraw błędy C++, aby kontynuować. Jeśli uważasz, że to błąd,
zgłoś go twórcom XOD.`;

export const WASM_NETWORK_ERROR =
  'Błąd sieci: nie można kompilować w chmurze. Sprawdź połączenie z internetem.';
export const WRONG_AUTHORIZATION_TOKEN =
  'Nieprawidłowy token autoryzacyjny. Wyloguj się, zaloguj ponownie i spróbuj jeszcze raz.';
export const COMPILATION_LIMIT_EXCEEDED = 'Przekroczono limit kompilacji w chmurze.';
export const COMPILATION_SERVICE_OFFLINE =
  'Usługa kompilacji w chmurze jest tymczasowo niedostępna. Spróbuj ponownie później.';

export const TABTEST_GENERATING_CODE = 'Generowanie kodu C++…';
export const TABTEST_BUILDING = 'Budowanie…';
export const TABTEST_RUNNING = 'Uruchamianie testu tabelarycznego…';
export const TABTEST_ABORTED = 'Test został przerwany przez użytkownika';

export const SIMULATION_GENERATING_CODE = 'Generowanie kodu C++ do symulacji…';
export const SIMULATION_BUILDING = 'Budowanie…';
export const SIMULATION_RUNNING = 'Uruchamianie symulacji…';
export const SIMULATION_LAUNCHED = 'Uruchomiono symulację';
export const SIMULATION_ABORTED = 'Symulacja została przerwana przez użytkownika';

export const DO_NOT_USE_TETHERING_INTERNET_IN_BROWSER = {
  title: 'Połączenie sieciowe nie jest dostępne w przeglądarce',
  note:
    'Udostępnianie połączenia internetowego wymaga funkcji systemu operacyjnego niedostępnych w przeglądarce.',
  solution:
    'Zainstaluj desktopową wersję XOD IDE, aby uzyskać dostęp do wszystkich funkcji.',
};

export const LOG_COPIED = {
  title: `Skopiowano`,
};
export const LOG_COPY_NOT_SUPPORTED = {
  title: 'Nieobsługiwana przeglądarka',
  solution:
    'Zainstaluj desktopową wersję IDE albo użyj najnowszej wersji Google Chrome lub Firefox.',
};
export const logCopyError = error => ({
  title: `Nie można skopiować dziennika`,
  note: error.message,
  solution: 'Zgłoś problem twórcom XOD.',
});

export const logSaveError = error => ({
  title: `Nie można zapisać dziennika`,
  note: error.message,
  solution: 'Zgłoś problem twórcom XOD.',
});
