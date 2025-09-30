const chart = document.querySelector("#chart");
const BAR_WIDTH = 20; 

for (let i = 10; i <= 100; i += 10) {
    const bar = document.createElementNS("http://www.w3.org/2000/svg","rect");
    bar.setAttribute("x", (i / 10 - 1) * (BAR_WIDTH + 5)); 
    bar.setAttribute("y", `${100 - i}%`);
    bar.setAttribute("width", BAR_WIDTH);
    bar.setAttribute("height", `${i}%`);
    bar.setAttribute("fill", "blue");
    chart.appendChild(bar);
}