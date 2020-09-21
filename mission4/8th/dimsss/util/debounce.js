let settimeoutId;

export default function debounce(callback) {
  if (settimeoutId) {
    clearTimeout(settimeoutId);
  }

  settimeoutId = setTimeout(() => {
    callback(); 
  }, 500);
}
