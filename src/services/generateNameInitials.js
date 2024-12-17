/**
 * Generates initials from a full name.
 * @param {string} fullName - The full name (e.g., "John Doe").
 * @returns {string} The initials (e.g., "JD").
 */
export const getNameInitials = (fullName) => {
  if (!fullName) return "";
  return fullName
    .split(" ") // Split the full name into an array of words
    .filter((word) => word.trim().length > 0) // Filter out empty spaces
    .map((word) => word[0].toUpperCase()) // Get the first letter of each word and convert it to uppercase
    .join(""); // Combine the initials into a string
};
