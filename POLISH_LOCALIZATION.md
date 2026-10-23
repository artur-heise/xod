# XOD IDE — Polish localization (Windows)

This archive contains the original XOD source tree with an initial Polish localization
of the desktop IDE's user-facing interface.

## What has been translated

- Main application menus (File, Edit, Deploy, View, Help).
- Common project creation and editing dialogs.
- Search prompts for nodes and libraries.
- Inspector, patch documentation, color picker, account panel, serial console,
  deployment/debugger labels, and common error/notification messages.

The translations are applied to the original source strings so they do not alter
XOD identifiers, node names, project formats, protocol values, or generated Arduino
code. Technical names such as `patch`, `pin`, Arduino, API, and XOD Cloud are retained
where that is clearer or safer for compatibility.

## Important status

This is a **source localization**, not a verified Windows executable. This repository
uses an old toolchain (the root `package.json` specifies Node.js 12.16.3, Yarn workspaces,
and legacy native dependencies). The source archive did not include `node_modules`,
and this environment does not have Yarn installed or network access to fetch dependencies.
Consequently, a Windows package could not be built or runtime-tested here.

Some text may still remain in English, particularly text supplied by third-party
components, external compiler/toolchain output, documentation, community libraries,
and dynamically loaded node descriptions. The project does not currently have a
central localization framework or a language selector; this patch translates existing
source literals and leaves the existing application architecture intact.

## Build on Windows

1. Install the Node.js version specified by `.nvmrc` / `package.json` (Node 12.16.3)
   and a compatible Yarn Classic release.
2. Open a terminal in the repository root.
3. Run `yarn install` (or the repository's documented bootstrap procedure if required).
4. Run `yarn bootstrap`.
5. Build the Electron app: `yarn build:electron`.
6. Package it for Windows using the repository's electron-builder configuration.
   Check `packages/xod-client-electron/package.json` for the configured targets and
   signing/publishing settings before running electron-builder.

The provided `build-windows-polish.cmd` is a convenience script; it does not bypass
missing dependencies and should be run in a configured Windows development environment.
