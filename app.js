setTimeout(()=>{
    setInterval(()=>{
        document.getElementById('message').innerText = ((new Date()).getTime().toString().slice(-6,-3));
    },1000);
},(new Date()).getTime()%1000);