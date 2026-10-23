import * as R from 'ramda';
import { HOTKEY, ELECTRON_ACCELERATOR, COMMAND } from './constants';
import { isMacOS } from './browser';

const rawItems = {
  file: {
    label: 'Plik',
  },
  newProject: {
    label: 'Nowy projekt...',
    command: COMMAND.NEW_PROJECT,
  },
  openProject: {
    label: 'Otwórz projekt...',
    command: COMMAND.OPEN_PROJECT,
  },
  openTutorialProject: {
    label: 'Otwórz projekt samouczka',
  },
  save: {
    label: 'Zapisz',
    command: COMMAND.SAVE,
  },
  saveAs: {
    label: 'Zapisz jako...',
    command: COMMAND.SAVE_AS,
  },
  saveCopyAs: {
    label: 'Zapisz kopię jako...',
    command: COMMAND.SAVE_COPY_AS,
  },
  switchWorkspace: {
    label: 'Zmień obszar roboczy...',
  },
  importProject: {
    label: 'Importuj projekt...',
  },
  exportProject: {
    label: 'Eksportuj projekt...',
  },
  newPatch: {
    label: 'Nowy patch...',
    command: COMMAND.ADD_PATCH,
  },
  addLibrary: {
    label: 'Dodaj bibliotekę...',
  },
  publish: {
    label: 'Opublikuj bibliotekę...',
  },
  exit: {
    label: 'Zakończ',
  },

  edit: {
    label: 'Edycja',
  },
  undo: {
    label: 'Cofnij',
    command: COMMAND.UNDO,
  },
  redo: {
    label: 'Ponów',
    command: COMMAND.REDO,
  },
  cut: {
    label: 'Wytnij',
    role: 'cut',
    command: COMMAND.CUT,
  },
  copy: {
    label: 'Kopiuj',
    command: COMMAND.COPY,
    role: 'copy',
  },
  paste: {
    label: 'Wklej',
    command: COMMAND.PASTE,
    role: 'paste',
  },
  selectall: {
    label: 'Zaznacz wszystko',
    command: COMMAND.SELECT_ALL,
  },
  projectPreferences: {
    label: 'Ustawienia projektu',
  },
  insertComment: {
    label: 'Wstaw komentarz',
  },
  insertNode: {
    label: 'Wstaw węzeł...',
    command: COMMAND.INSERT_NODE,
  },
  splitLinksToBuses: {
    label: 'Zamień zaznaczone połączenia na magistrale',
    command: COMMAND.MAKE_BUS,
  },

  deploy: {
    label: 'Wgraj',
  },
  showCodeForArduino: {
    label: 'Pokaż kod dla Arduino',
  },
  showCodeWithDebug: {
    label: 'Pokaż kod z diagnostyką',
  },
  uploadToArduino: {
    label: 'Wgraj do Arduino...',
    command: COMMAND.UPLOAD,
  },
  connectSerial: {
    label: 'Połącz przez port szeregowy...',
  },
  updatePackages: {
    label: 'Aktualizuj pakiety i narzędzia Arduino...',
  },
  runSimulation: {
    label: 'Symuluj',
  },

  view: {
    label: 'Widok',
  },
  toggleHelp: {
    label: 'Pokaż/ukryj pasek pomocy',
    command: COMMAND.TOGGLE_HELP,
  },
  toggleDebugger: {
    label: 'Pokaż/ukryj panel wgrywania',
    command: COMMAND.TOGGLE_DEBUGGER,
  },
  toggleAccountPane: {
    label: 'Pokaż/ukryj panel konta',
  },
  toggleProjectBrowser: {
    label: 'Pokaż/ukryj przeglądarkę projektu',
  },
  toggleInspector: {
    label: 'Pokaż/ukryj inspektor',
  },
  panToOrigin: {
    label: 'Przesuń do początku',
    command: COMMAND.PAN_TO_ORIGIN,
  },
  panToCenter: {
    label: 'Wyśrodkuj widok',
    command: COMMAND.PAN_TO_CENTER,
  },

  help: {
    label: 'Pomoc',
  },
  documentation: {
    label: 'Dokumentacja',
  },
  shortcuts: {
    label: 'Skróty klawiszowe',
  },
  forum: {
    label: 'Forum',
  },
};

const containsCmd = R.contains('command');

// :: String -> String
const unfoldCmdOrCtrl = R.ifElse(
  () => isMacOS(),
  R.replace(/CmdOrCtrl/gi, 'command'),
  R.replace(/CmdOrCtrl/gi, 'ctrl')
);

/**
 * Filters OS-specific hotkeys.
 *
 * E.G.,
 * `['ctrl+a', 'command+a']`
 * will become ['ctrl+a'] on Windows / Linux
 * and ['command+a'] on MacOS
 *
 * But in case there are only 'ctrl+a' hotkey defined
 * it will be left untouched on MacOS.
 *
 * :: String|[String] -> [String]
 */
export const filterOsHotkeys = R.compose(
  R.map(unfoldCmdOrCtrl),
  R.ifElse(
    () => isMacOS(),
    R.when(R.any(containsCmd), R.filter(containsCmd)),
    R.reject(containsCmd)
  ),
  R.unless(R.is(Array), R.of)
);

const assignHotkeys = menuItem =>
  R.when(
    R.prop('command'),
    R.merge({
      hotkey: R.compose(filterOsHotkeys, R.propOr([], menuItem.command))(
        HOTKEY
      ),
      accelerator: ELECTRON_ACCELERATOR[menuItem.command],
    }),
    menuItem
  );

export const items = R.compose(
  // separator item is secial and sould not have `key` or hotkey-related props
  R.assoc('separator', { type: 'separator' }),
  R.map(assignHotkeys),
  R.mapObjIndexed((menuItem, key) => R.assoc('key', key, menuItem))
)(rawItems);

/** add click handler to menu item */
export const onClick = R.flip(R.assoc('click'));

/** add children items to menu item */
export const submenu = R.flip(R.assoc('submenu'));

/** returns hotkeys key map with filtered OS specific key mapping */
export const getOsSpecificHotkeys = () => R.map(filterOsHotkeys, HOTKEY);
