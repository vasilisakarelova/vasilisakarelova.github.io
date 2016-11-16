(function () {
  const title = document.title;

  document.addEventListener('blur', ev => {
    document.title = 'I miss you :(';
    console.log(ev.target);
  })

  document.addEventListener('focus', ev => {
    document.title = title;
    console.log(ev.target);
  });

})();
