function uData(){
        var userName = document.getElementById("usER").value;
        var PassWord = document.getElementById("paSS").value;
        if(userName=="admin" && PassWord=="user"){
            alert("Logged in.")
            window.open("Main/index.html","_self");
        }
        else{
            alert("Wrong Creds.")
        }
};