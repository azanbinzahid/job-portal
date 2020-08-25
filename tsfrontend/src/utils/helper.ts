export function truncate(str: string) {
  return str.length > 200 ? str.substring(0, 180) + "..." : str;
}
