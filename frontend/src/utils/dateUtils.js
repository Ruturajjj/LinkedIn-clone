import { format, isValid, parseISO } from "date-fns";

export const formatDate = (dateString) => {
  if (!dateString) return "Present";  // guard clause for "", null, undefined

  const date = parseISO(dateString);
  return isValid(date) ? format(date, "MMM, yyyy") : "Present";
};
