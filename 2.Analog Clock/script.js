// for hour hand
// 12hours = 360 degrees
// 1 hour = 30 degrees
// nh=30n
//60min=30
// 1min=1/2*n
// 30n+n/2   --1

// fpr min hand
// 60min= 360 degrees
// 1min = 6
// nmin = 6n  --2

//for sec hand
// 60sec = 360 degrees
// nsec = 6n --3

let hour_hand=document.querySelector('.hour-hand')
let min_hand=document.querySelector('.min-hand')
let sec_hand=document.querySelector('.sec-hand')
let dh=document.querySelector('.dh')
let dm=document.querySelector('.dm')
let ds=document.querySelector('.ds')

setInterval(() => {
    let time = new Date();
    let h=time.getHours();
    let m=time.getMinutes();
    let s=time.getSeconds();
    let hrotation=30*h+h/2;
    let mrotation=6*m;
    let srotation=6*s;
    hour_hand.style.transform=`rotate(${hrotation}deg)`;
    min_hand.style.transform=`rotate(${mrotation}deg)`;
    sec_hand.style.transform=`rotate(${srotation}deg)`;
    dh.innerHTML = (h > 12 ? h - 12 : h) < 10 ? '0' + (h > 12 ? h - 12 : h) : (h > 12 ? h - 12 : h);
    dm.innerHTML=m<10?'0'+m:m;
    ds.innerHTML=s<10?'0'+s:s;

})