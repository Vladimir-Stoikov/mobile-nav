const tools = document.querySelectorAll('.tool');
const nav = document.querySelectorAll('.image');

tools.forEach(tool => {
  tool.addEventListener('click', () => {
    tools.forEach(tool => tool.classList.remove('focus'));
    focusActive(tool.textContent);
    tool.classList.add('focus');
  });
});

function focusActive(id) {
  nav.forEach(img => img.classList.remove('active'));
  const newActive = document.getElementById(`${id.toLowerCase()}`);
  newActive.classList.add('active');
}
