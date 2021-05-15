module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter component name...',
  },
  {
    type: 'select',
    name: 'folder',
    message: 'Select screen folder...',
    choices: [
      'Login',
      'Register',
      'Home',
      'BookDetail',
      //ADD MORE SCREENS
    ],
  },
];
