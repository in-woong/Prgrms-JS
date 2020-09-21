export default function generateRandomStr() {
  return Math.random().toString(36).substr(2,22);
}
