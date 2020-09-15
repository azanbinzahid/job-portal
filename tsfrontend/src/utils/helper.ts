export function truncate(str: string) {
  return str.length > 200 ? str.substring(0, 180) + "..." : str;
}

export function searchQuery(params: String[], filterName: String) {
  let query = "";
  if (params !== [""]) {
    params.forEach((p) => {
      if (p === "?" || p === "" || p.split("=")[0] === filterName) {
      } else {
        query = query + "&" + p;
      }
    });
  }
  if (query[0] !== "?") {
    query = "?" + query;
  }

  query = "/jobs/" + query;

  return query;
}

export const capitalize = (s: String) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export function pluralize(word: string): string {
  if (!word) {
    return "";
  }
  const isPluralAlready =
    word.endsWith("ies") ||
    word.endsWith("es") ||
    (!word.endsWith("us") && word.endsWith("s"));
  if (isPluralAlready) {
    return word;
  }
  if (word.endsWith("y") && !word.endsWith("ay")) {
    return `${word.substring(0, word.length - 1)}ies`;
  }
  return word.endsWith("us") ? `${word}es` : `${word}s`;
}
