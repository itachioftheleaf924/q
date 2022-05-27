function sov(){
    let a = parseInt (document.getElementById('1').value);
    let b = parseInt (document.getElementById('2').value);
    let c = parseInt (document.getElementById('3').value);

    document.getElementById('otp').value = (-b+Math.sqrt(b*b-(4*a*c)))/2*a

    document.getElementById('otp2').value = (-b-Math.sqrt(b*b-(4*a*c)))/2*a


    
}