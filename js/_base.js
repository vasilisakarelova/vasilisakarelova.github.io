(function () {
  const title = document.title;

  window.addEventListener('blur', () => {
    document.title = 'Мiss you :(';
  })

  window.addEventListener('focus', () => {
    document.title = title;
  });
})();
