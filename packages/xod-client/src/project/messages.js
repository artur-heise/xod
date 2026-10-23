import { LINK_ERRORS as LE } from '../editor/constants';

export const SUCCESSFULLY_PUBLISHED = {
  title: 'Biblioteka została opublikowana',
};

export const LINK_ERRORS = {
  [LE.SAME_DIRECTION]: {
    title: 'Nieprawidłowe połączenie',
    note: 'Nie można łączyć pinów o tym samym kierunku.',
    solution:
      'Połącz wejście (pin u góry) z wyjściem (pin na dole).',
    persistent: false,
  },
  [LE.INCOMPATIBLE_TYPES]: {
    title: 'Niezgodne typy pinów',
    note: `Brak niejawnej konwersji typu wyjściowego na typ wejściowy.`,
    solution: 'Znajdź węzeł konwertujący typ i umieść go pomiędzy pinami.',
    persistent: false,
  },
};

export const PROJECT_NAME_NEEDED_FOR_LITERAL = {
  title: 'Nie ustawiono nazwy projektu',
  note: 'Program używa literału `=XOD_PROJECT`.',
  solution: 'Ustaw nazwę projektu w Ustawieniach projektu i spróbuj ponownie.',
};

export const PROJECT_NAME_NEEDED_TO_GENERATE_APIKEY = {
  title: 'Nie ustawiono nazwy projektu',
  note: 'Aby wygenerować nowy token API, nazwa projektu nie może być pusta.',
  solution: 'Ustaw nazwę projektu w Ustawieniach projektu i spróbuj ponownie.',
};

export const CANT_GET_TOKEN_WITHOUT_APIKEY = {
  title: 'Nie ustawiono klucza API',
  note:
    'Program używa literału `=XOD_TOKEN`. Aby działał poprawnie, projekt musi mieć ustawiony klucz API XOD Cloud.',
  solution:
    'Otwórz Ustawienia projektu, aby wygenerować nowy klucz API lub wpisać istniejący.',
};

// For server responses:
// 400 — bad API key
// 404 — revoked/invalid API key
export const CANT_GET_TOKEN_BECAUSE_OF_WRONG_APIKEY = {
  title: 'Nieprawidłowy klucz API',
  note:
    'Program używa literału `=XOD_TOKEN`. Klucz API został unieważniony lub ma nieprawidłowy format.',
  solution:
    'Otwórz Ustawienia projektu, aby wygenerować nowy klucz API lub wpisać istniejący.',
};

export const cantCloneNoPatchFound = patchPath => ({
  title: 'Nie można skopiować patcha',
  note: `Nie znaleziono patcha o ścieżce „${patchPath}” w projekcie`,
});
