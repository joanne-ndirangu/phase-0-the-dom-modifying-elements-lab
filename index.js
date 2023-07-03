// Write your code here!
function removeMainNode(){
    const main = document.querySelector("#main");
    main.remove();
}
removeMainNode();


const newHeader = document.createElement("H1");
newHeader.id = "victory";
newHeader.textContent = "RON is the champion";
document.body.append(newHeader);

