setInterval(() => {
        d = new Date();
        htime = d.getHours();
        mtime = d.getMinutes();
        stime = d.getSeconds();
        //formula for each rotation

        // (360/12hr)and (60min/30)
        hrotation = 30 * htime + mtime / 2; 

        //(360/60min)
        mrotation = 6 * mtime;  
        
        //(360/60sec)
        srotation = 6 * stime;

        //movement of hands
        hour.style.transform = `rotate(${hrotation}deg)`;
        minute.style.transform = `rotate(${mrotation}deg)`;
        second.style.transform = `rotate(${srotation}deg)`;
    }, 1000);