function generateUniqueUsername(baseName) {
  const sanitizedBaseName = baseName.toLowerCase().trim().replace(/\s+/g, "_");
  const randomSuffix = Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit number

  return `${sanitizedBaseName}_${randomSuffix}`;
}

export default generateUniqueUsername;
