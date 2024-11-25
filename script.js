function applyColorOverlay(imageId, color) {
  const overlay = document.getElementById(`overlay-${imageId}`);
  overlay.style.backgroundColor = color;
}

function resetOverlay(imageId) {
  const overlay = document.getElementById(`overlay-${imageId}`);
  overlay.style.backgroundColor = 'transparent';
}

function filterImages() {
  const query = document.getElementById('searchBox').value.toLowerCase();
  const panels = document.querySelectorAll('.panel');
  
  panels.forEach(panel => {
    const name = panel.dataset.name;
    if (name.includes(query)) {
      panel.style.display = 'block';
    } else {
      panel.style.display = 'none';
    }
  });
}
