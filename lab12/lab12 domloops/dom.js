const btn = document.getElementById('change-btn');
btn.addEventListener('click', () => {
  const h = document.getElementById('page-title');
  if (h) h.innerText = 'New Title — updated!';
});
