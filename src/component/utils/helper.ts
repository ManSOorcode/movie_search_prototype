export const trunctactHandler = (title: string, truncateLimit: number) => {
  const truncate = title.slice(0, truncateLimit);
  const lastIndexOf = truncate.lastIndexOf(" ");
  const finalValue = truncate.slice(0, lastIndexOf) + "...";
  return title.length < truncateLimit
    ? title
    : lastIndexOf !== -1
    ? finalValue
    : `${truncate + "..."}`;
};
