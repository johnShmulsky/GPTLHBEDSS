export const ConvertToTimeString = (unixTimeStamp) => {
  const date = new Date(unixTimeStamp * 1000);
  const hours = date.getHours().toString().padStart(2, "0");
  const miniutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${miniutes}`;
};
