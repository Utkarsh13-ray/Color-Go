function showNoSupport(){
    const body=document.querySelector('body');
    const msg=document.createElement('p');
    msg.classList,add('error');
    msg.innerHTML="Your browser does not support the extension";
    body.appendChild(msg);
}

function dropper(){
    const eyedropper=new EyeDropper();
    const btn=document.querySelector('.btn');
    const pick=document.querySelector('.pick');
    const container=document.querySelector('.color');
    const hexInfo=document.querySelector('.cvalue');
    const rgb=document.querySelector('.c-rgb');
    const hsl=document.querySelector('.c-hsl');

    function showResult(hex='#FFFFFF'){
        container.style.backgroundColor=hex;
        hexInfo.innerText=hex;
        hex2rgb(hex);
        hex2hsl(hex);
        updateswatch(hex);
    }
  
    function hex2rgb(hex) {
        rgb.innerText=['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
      }
      function hex2hsl(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    
        var r = parseInt(result[1], 16);
        var g = parseInt(result[2], 16);
        var b = parseInt(result[3], 16);
    
        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
    
        if(max == min){
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
    
        s = s*100;
        s = Math.round(s);
        l = l*100;
        l = Math.round(l);
        h = Math.round(360*h);
         hsl.innerText=[h + ', ' + s + '%, ' + l + '%'];}
    function openDropper(){
        eyedropper.open()
          .then(res=>{
            if(res && res.sRGBHex){
                showResult(res.sRGBHex);
            }
          })
          .catch(err=>{
            console.log(err);
          })
    }

    btn.addEventListener('click',openDropper);
    pick.addEventListener('click',openDropper);


}


function updateswatch(hex){
    let s1=document.querySelector('.swatch1');
    let s2=document.querySelector('.swatch2');
    let s3=document.querySelector('.swatch3');
    let s4=document.querySelector('.swatch4');
    let s5=document.querySelector('.swatch5');
    let s6=document.querySelector('.swatch6');
    let s7=document.querySelector('.swatch7');
    let s8=document.querySelector('.swatch8');
    
    s8.style.backgroundColor=s7.style.backgroundColor;
    s7.style.backgroundColor=s6.style.backgroundColor;
    s6.style.backgroundColor=s5.style.backgroundColor;
    s5.style.backgroundColor=s4.style.backgroundColor;
    s4.style.backgroundColor=s3.style.backgroundColor;
    s3.style.backgroundColor=s2.style.backgroundColor;
    s2.style.backgroundColor=s1.style.backgroundColor;
    s1.style.backgroundColor=hex;
}

function init(){
    if(window.EyeDropper){
        dropper();
    }else{
        showNoSupport();
    }
}

init();
console.log('hii');