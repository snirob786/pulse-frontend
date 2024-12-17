/**
 * Generates a random hexadecimal color code.
 * @returns {string} Random hex color code (e.g., #a1b2c3).
 */
export const generateRandomHexColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
