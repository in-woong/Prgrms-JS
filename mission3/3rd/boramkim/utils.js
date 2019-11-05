const AVAILABLE_KEYCODE_ARRAY = [
  8, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 59, 61,
  65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 86, 87, 88, 89, 90,
  96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 109, 110, 111, 190, 191, 192, 188, 219, 220, 221, 222,
]

const isAvailableKeyCode = keyCode => AVAILABLE_KEYCODE_ARRAY.find(item => keyCode === item)
export { isAvailableKeyCode }