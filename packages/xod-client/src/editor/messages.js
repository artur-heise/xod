export const PATCH_FOR_NODE_IS_MISSING = 'Patch for this node is missing.';

export const libInstalled = (libName, version) => ({
  title: `Installed successfully`,
  note: `${libName} version ${version} is now available in your project browser.`,
});

export const CLIPBOARD_RECURSION_PASTE_ERROR = {
  title: 'Nie można wkleić elementu do samego siebie',
  note:
    'You’re trying to add a node into its own implementation. That’s forbidden.',
  persistent: false,
};
export const clipboardMissingPatchPasteError = missingPatches => ({
  title: 'Nieprawidłowe wklejenie',
  note: `The clipboard contains references to missing patches: ${missingPatches}.`,
  solution:
    'First, bring the referred local patches, custom type patches, ' +
    'and third-party libraries to the project.',
});

export const LIB_SUGGESTER_TYPE_TO_BEGIN =
  'Type owner/libname to find a library';

export const LIB_SUGGESTER_NOTHING_FOUND = 'No library found';

export const NO_PATCH_TO_TRANSPILE = {
  title: 'Nie otwarto żadnego patcha',
  solution: 'Open a patch to upload and try again',
  persistent: false,
};

export const SIMULATION_ALREADY_RUNNING = {
  title: 'Symulacja jest już uruchomiona',
  solution: 'Stop the current simulation and try again',
  persistent: true,
};

export const SIMULATION_STOPPED_BY_CLOSING_TAB = {
  title: 'Symulacja zatrzymana',
  note: 'You closed the debugger tab.',
  persistent: false,
};
