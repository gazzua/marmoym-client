export const w320 = (content) => {
  return `
    @media (max-width: 479px) {
      ${content}
    }`;
}