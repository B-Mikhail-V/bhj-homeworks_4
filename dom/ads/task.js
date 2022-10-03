const advArr = document.querySelectorAll(".rotator__case")

function setInt() {
    const bb = 6;
for(let i = 0; i <= bb; i++) {
    console.log(advArr[i % 6]);
}
    
}

setInterval(() => setInt(), 1000);