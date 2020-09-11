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

  return query;
}
