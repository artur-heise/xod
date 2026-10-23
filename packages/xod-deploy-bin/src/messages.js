const librariesMissing = libraryNames =>
  libraryNames.length
    ? `Najpierw zainstaluj następujące biblioteki: ${libraryNames}`
    : null;

const librariesInstalled = libraryNames =>
  libraryNames.length
    ? `Biblioteki ${libraryNames} zostały pomyślnie zainstalowane`
    : null;

const packagesMissing = packageNames =>
  packageNames.length
    ? `Najpierw zainstaluj następujące pakiety: ${packageNames}`
    : null;

const packagesInstalled = packageNames =>
  packageNames.length
    ? `Pakiet „${packageNames}” został pomyślnie zainstalowany`
    : null;

export default {
  ARDUINO_DEPENDENCIES_MISSING: ({
    libraries,
    libraryNames,
    packages,
    packageNames,
  }) => ({
    title: 'Brak zależności Arduino',
    solution: [librariesMissing(libraryNames), packagesMissing(packageNames)]
      .filter(a => !!a)
      .join('\r\n'),
    button: 'Pobierz i zainstaluj',
    data: { libraries, packages, packageNames },
    persistent: true,
  }),

  ARDUINO_DEPENDENCIES_INSTALLED: ({ libraryNames, packageNames }) => ({
    title: 'Zależności Arduino zostały zainstalowane',
    note: [librariesInstalled(libraryNames), packagesInstalled(packageNames)]
      .filter(a => !!a)
      .join('\r\n'),
    solution: 'Możesz teraz wgrać program',
    persistent: true,
  }),

  ARDUINO_CLI_NOT_FOUND: ({ path, isDev }) => ({
    title: 'Nie znaleziono arduino-cli',
    note: path
      ? `Próbowano znaleźć arduino-cli w ścieżce: ${path}`
      : 'Próbowano znaleźć arduino-cli w zmiennej $PATH',
    solution: isDev
      ? 'W trybie deweloperskim `arduino-cli` musi być dostępny w zmiennej $PATH lub wskazany przez zmienną środowiskową $XOD_ARDUINO_CLI'
      : 'To błąd aplikacji. Zgłoś go twórcom XOD.',
  }),

  ARDUINO_CLI_EXITED_WITH_CODE: ({ path, message, stdout, stderr }) => ({
    title: 'arduino-cli zakończył działanie z błędem',
    note: [message, stderr, stdout].filter(s => s !== '').join(' '),
    solution: `Sprawdź konfigurację arduino-cli: ${path}`,
  }),

  ARDUINO_PACKAGES_UPDATED: () => ({
    title: 'Wszystkie pakiety Arduino zostały zaktualizowane',
    persistent: true,
  }),

  COMPILE_TOOL_ERROR: ({ message }) => ({
    title: 'Kompilacja nie powiodła się',
    note: `Polecenie: ${message}`,
    solution:
      'Wygenerowany kod C++ zawiera błędy. Przyczyną może być nieprawidłowa implementacja węzła lub niezgodność płytki z kodem środowiska uruchomieniowego XOD. Oryginalny komunikat kompilatora znajduje się powyżej. Popraw błędy C++, aby kontynuować. Jeśli uważasz, że to błąd, zgłoś go twórcom XOD.',
  }),

  UPLOAD_TOOL_ERROR: ({ message }) => ({
    title: 'Wgrywanie nie powiodło się',
    note: `Polecenie: ${message}`,
    solution:
      'Upewnij się, że płytka jest podłączona, kabel działa, wybrano prawidłowy model płytki i port wgrywania, sterowniki są zainstalowane, a opcje wgrywania (jeśli występują) odpowiadają specyfikacji płytki.',
  }),

  UPLOADED_SUCCESSFULLY: () => ({
    title: 'Wgrano pomyślnie',
  }),

  UPDATE_INDEXES_ERROR_BROKEN_FILE: ({ pkgPath, error }) => ({
    title: 'Indeks pakietów jest uszkodzony',
    note: `Błąd: ${error}`,
    solution: `Sprawdź poprawność odpowiedniego adresu URL w "${pkgPath}/extra.txt" i ponownie spróbuj zaktualizować indeksy`,
  }),

  UPDATE_INDEXES_ERROR_NO_CONNECTION: ({ pkgPath, error }) => ({
    title: 'Nie można zaktualizować indeksów',
    note: error,
    solution: `Sprawdź połączenie z internetem oraz poprawność adresów URL w "${pkgPath}/extra.txt", a następnie spróbuj ponownie`,
  }),
};
