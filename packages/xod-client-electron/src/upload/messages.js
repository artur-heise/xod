export default {
  CLOUD_COMPILE_UNSPUPPORTED: ({ boardName }) => ({
    title: 'Kompilacja w chmurze nie jest obsługiwana',
    note: `Kompilacja w chmurze nie obsługuje jeszcze płytki ${boardName}.`,
    solution: 'Spróbuj skompilować kod na własnym komputerze',
  }),
};
