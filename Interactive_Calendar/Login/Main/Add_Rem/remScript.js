function diplayData(){
    var remin = document.getElementById("Rname").value;
    var date = document.getElementById("Rdate").value;
    var mon = document.getElementById("Rmon").value;
    var year = document.getElementById("Ryr").value;
    var text = date+" "+mon+": "+" "+remin
    var listnode = document.getElementById("rem");
    var liNode = document.createElement("LI");
    var txtNode =  document.createTextNode(text);

    liNode.appendChild(txtNode);
    listnode.appendChild(liNode);
}