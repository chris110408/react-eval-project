export function clearFix () {
  return `
        zoom: 1;
        &:before,
        &:after {
            content: " ";
            display: table;
            clear: both;
            visibility: hidden;
            font-size: 0;
            height: 0;
        }
  `
}
