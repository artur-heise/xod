export default err => ({
  title: 'Błąd',
  note: err.message,
  solution:
    'The error was not caught, which is a bug. Report the issue to XOD developers.',
});
