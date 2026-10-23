export const PATCH_FOR_NODE_IS_MISSING = 'Patch for this node is missing.';

export const libInstalled = (libName, version) => ({
  title: `Zainstalowano pomyślnie`,
  note: `Wersja ${version} biblioteki ${libName} jest teraz dostępna w przeglądarce projektu.`,
});

export const CLIPBOARD_RECURSION_PASTE_ERROR = {
  title: 'Nie można wkleić elementu do samego siebie',
  note:
    'Próbujesz dodać węzeł do jego własnej implementacji. To niedozwolone.',
  persistent: false,
};
export const clipboardMissingPatchPasteError = missingPatches => ({
  title: 'Nieprawidłowe wklejenie',
  note: `Schowek zawiera odwołania do brakujących patchy: ${missingPatches}.`,
  solution:
    'Najpierw dodaj do projektu wskazane lokalne patche, patche typów niestandardowych, ' +
    'oraz biblioteki innych firm.',
});

export const LIB_SUGGESTER_TYPE_TO_BEGIN =
  'Wpisz właściciel/nazwa-biblioteki, aby ją znaleźć';

export const LIB_SUGGESTER_NOTHING_FOUND = 'Nie znaleziono biblioteki';

export const NO_PATCH_TO_TRANSPILE = {
  title: 'Nie otwarto żadnego patcha',
  solution: 'Otwórz patch i spróbuj ponownie wgrać program',
  persistent: false,
};

export const SIMULATION_ALREADY_RUNNING = {
  title: 'Symulacja jest już uruchomiona',
  solution: 'Zatrzymaj bieżącą symulację i spróbuj ponownie',
  persistent: true,
};

export const SIMULATION_STOPPED_BY_CLOSING_TAB = {
  title: 'Symulacja zatrzymana',
  note: 'Zamknięto kartę debuggera.',
  persistent: false,
};
