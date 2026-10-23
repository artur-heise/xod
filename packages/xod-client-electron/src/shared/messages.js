import composeMessage from './composeMessage';

export const CODE_TRANSPILED =
  'Projekt został przetworzony. Wyszukiwanie urządzenia...';
export const PORT_FOUND =
  'Wykryto port z podłączonym Arduino. Instalowanie łańcuchów narzędzi...';
export const TOOLCHAIN_INSTALLED = 'Narzędzia zostały zainstalowane. Kompilowanie...';
export const CLOUD_TOOLCHAIN_INSTALLED =
  'Narzędzia zostały zainstalowane. Kompilowanie kodu w chmurze...';
export const CODE_COMPILED = 'Kod skompilowano pomyślnie. Wgrywanie...';

export const ENUMERATING_PORTS = 'Wyszukiwanie...';
export const ENUMERATING_BOARDS = 'Wczytywanie listy obsługiwanych płytek...';
export const NO_PORTS_FOUND = 'Nie znaleziono podłączonych płytek.';

export const SAVE_ALL_FAILED = {
  title: 'Nie udało się zapisać projektu.',
};
export const SAVE_ALL_SUCCEED = {
  title: 'Zapisano pomyślnie!',
};

export const DEBUG_SESSION_STOPPED_ON_TAB_CLOSE = {
  title: 'Sesja debugowania została zatrzymana',
  note: 'Zamknięto kartę debuggera.',
  persistent: false,
};
export const DEBUG_LOST_CONNECTION = 'Utracono połączenie z urządzeniem.';

export const updateAvailableMessage = version =>
  composeMessage(
    'Dostępna aktualizacja',
    `Dostępna jest nowa wersja XOD\u00A0IDE: ${version}`,
    'Pobierz i zainstaluj',
    true
  );

export const compilationBegun = boardName =>
  `Rozpoczynanie kompilacji kodu dla płytki ${boardName}`;

export const dontForgetToChangeProjectName = (
  oldProjectName,
  suggestedProjectName
) => ({
  title: 'Nazwa projektu różni się teraz od nazwy pliku',
  note: `Nazwa projektu to nadal \`${oldProjectName}\`. Jeśli zamierzasz rozwijać go jako osobny projekt, warto zmienić nazwę tak, aby odpowiadała nowej nazwie pliku \`${suggestedProjectName}\`.`,
  solution: 'Wybierz Edycja → Ustawienia projektu, aby zaktualizować ustawienia.',
  persistent: true,
});
