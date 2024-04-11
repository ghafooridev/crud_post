export const randomId = (): string => {
  return new Date().getTime().toString(36);
};
