const myButton = document.querySelector('button');

let modo = 'black';

myButton.addEventListener('click', () => {
  const theme = document.getElementsByClassName('theme');

  if (modo === 'black') {
    document.body.style.backgroundColor = 'rgba(255, 255, 255, 1)';

    for (let i = 0; i < theme.length; i++) {
      theme[i].classList.add('theme-on');
      console.log('Inserted theme');
    }
    modo = 'white';
  } else {
    document.body.style.backgroundColor = 'rgba(30, 30, 30, 1)';

    const theme_on = document.getElementsByClassName('theme-on');
    const size_theme_on = theme_on.length;

    for (let i = 0; i < size_theme_on; i++) {
      theme[i].classList.remove('theme-on');
      console.log('removed theme');
    }
    modo = 'black';
  }
});
