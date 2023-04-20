const inputEl = document.querySelector(".input");
const downloadBtnEl = document.querySelector(".downloadBtn");
const clearBtnEl = document.querySelector(".clearBtn");

downloadBtnEl.addEventListener("click", (event) =>{
    event.preventDefault();
    downloadBtnEl.innerText = "Downloading...";
    fetchURL(inputEl.value);
});
clearBtnEl.addEventListener("click", () =>{
    inputEl.value = "";
});
// async function fetchURL(url){
//     try{
//         const data = await fetch(url)
//         const blob = await data.blob()
//         const fileUrl = URL.createObjectURL(blob)
//         const aTagEl = document.createElement("a");
//         aTagEl.href = fileUrl;
//         aTagEl.download = "YourFile";
//         document.body.appendChild(aTagEl);
//         aTagEl.click();
//         URL.revokeObjectURL(fileUrl);
//         aTagEl.remove();
//         downloadBtnEl.innerText = "Download";
//     }catch{
//         alert("Failed to download....");
//         downloadBtnEl.innerText = "Download";
//     }
// }

async function fetchURL(url){
    if (!url) {
        alert("First paste the URL");
        return;
    }
    try{
        const data = await fetch(url)
        const blob = await data.blob()
        const fileUrl = URL.createObjectURL(blob)
        const aTagEl = document.createElement("a");
        aTagEl.href = fileUrl;
        aTagEl.download = "YourFile";
        document.body.appendChild(aTagEl);
        aTagEl.click();
        URL.revokeObjectURL(fileUrl);
        aTagEl.remove();
        downloadBtnEl.innerText = "Download";
    }catch{
        alert("Failed to download....");
        downloadBtnEl.innerText = "Download";
    }
}
