function sortLeftRightTopBottom(a, b)
{
  return a.y - b.y || a.x - b.x;
}

const currentPage = figma.currentPage;

const currentPageNodes = currentPage.findChildren(node => node.type === "FRAME");

currentPageNodes.sort(sortLeftRightTopBottom);

var i = 1;

for(const node of currentPageNodes) {
  node.name = ""+i;

  i++;
}

figma.notify(`Renamed slides: `+currentPageNodes.length);

figma.closePlugin();
