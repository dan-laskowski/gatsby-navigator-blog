const truncate = (str, no_words) =>
  str.split(" ").length > no_words
    ? str.split(" ").splice(0, no_words).join(" ") + "..."
    : str;

export default truncate;
