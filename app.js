setInterval(()=>{
    document.getElementById('message').innerText = ((new Date()).getTime().toString().slice(-6,-3));
},1000);