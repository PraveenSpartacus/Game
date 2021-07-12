document.addEventListener('load',()=>{
    var message = document.getElementById('message');
    setTimeout(()=>{
        setInterval(()=>{
            message.innerText = ((new Date()).getTime().toString());
        },1000);
    },(new Date()).getTime()%1000);
});