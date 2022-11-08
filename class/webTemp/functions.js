function toCelcius(){
   let input = document.getElementById("temp").value;
   let celcius = (input - 32) * 5/9;
   document.getElementById("result").innerText = celcius;
}

function showGeno(){
    if(document.getElementById('geno').style.display != 'none'){
        document.getElementById('geno').style.display = 'none';
    }
    else {
        document.getElementById('geno').style.display = 'inline';
    }
}

function growGeno() {
    document.getElementById('geno').style.height = Number(document.getElementById('geno').style.height) +  50
}

function shrinkGeno() {
    document.getElementById('geno').style.height = document.getElementById('geno').style.height - 50
}