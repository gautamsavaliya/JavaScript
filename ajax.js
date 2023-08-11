function data()
{
    var abc= new XMLHttpRequest();
    abc.onreadystatechange=function()
    {
        if(this.readyState==4 && this.status==200)
        {
            console.log(this.responseText);
        }
        else if(this.readyState ==4 && this.statusText ==404)
        {
            document.getElementById("Demo").innerHTML ="File Not Found"
        }
    };

    xhttp.open('GET' , "https://jsonplaceholder.typicode.com/posts", true);
    xhttp.send();
}