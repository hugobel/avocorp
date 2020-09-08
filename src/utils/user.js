export const getUserLabelColor = (status) => {
  if (status === "Deceased") return "red";
  if (status === "Presumed dead") return "orange";
  return "olive";
};
