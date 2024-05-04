function init(){
    let boxes = document.getElementsByName("text_box");
    let box_dom = boxes[0];
    box_dom.addEventListener("input", ()=>{
        console.log(box_dom.value);
        if (box_dom.value === 'python2024'){
            alert("2nd part is: Y");
            box_dom.value = '';
        }
    })
    let hidden_box = document.getElementById("hidden_box");
    let call_back = ()=>{
        alert("4th part is: END");
        hidden_box.removeEventListener("mouseleave", call_back);
    }
    hidden_box.addEventListener("mouseleave", call_back);
}