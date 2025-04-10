function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch (e) {
    document.getElementById('display').value = 'Error';
  }
}

// 🌗 Toggle Dark Mode (default)
function toggleDarkMode() {
  const modeButton = document.getElementById('modeToggle');

  // Remove theme classes first
  document.body.classList.remove('theme-light', 'theme-dark', 'theme-neon', 'theme-galaxy');

  // Toggle dark-theme class
  document.body.classList.toggle('dark-theme');

  // Change button text
  if (document.body.classList.contains('dark-theme')) {
    modeButton.textContent = '☀️ Light Mode';
  } else {
    modeButton.textContent = '🌙 Dark Mode';
  }
}

// 🎨 Theme Selector
function changeTheme() {
  const theme = document.getElementById('themeSelector').value;

  // Remove dark-theme and all theme classes
  document.body.classList.remove('dark-theme', 'theme-light', 'theme-dark', 'theme-neon', 'theme-galaxy');

  // Apply selected theme class
  if (theme === 'light') {
    document.body.classList.add('theme-light');
  } else if (theme === 'dark') {
    document.body.classList.add('theme-dark');
  } else if (theme === 'neon') {
    document.body.classList.add('theme-neon');
  } else if (theme === 'galaxy') {
    document.body.classList.add('theme-galaxy');
  }
}
function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch (e) {
    document.getElementById('display').value = 'Error';
  }
}

// 🌈 Theme Switcher Only
function changeTheme() {
  const theme = document.getElementById('themeSelector').value;

  document.body.classList.remove('theme-light', 'theme-dark', 'theme-neon', 'theme-galaxy');
  document.body.classList.add(`theme-${theme}`);
}
