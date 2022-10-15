export const createKanjivg = async (ch) => {
  const fix = (code) => {
    const s = "000000" + code.toString(16).toLowerCase();
    return s.substring(s.length - 5);
  };
  const url = "https://kanjivg.tagaini.net/kanjivg/kanji/" + fix(ch.charCodeAt(0)) + ".svg";
  const xml = await (await fetch(url)).text();
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.innerHTML = xml;
  return svg;
};
