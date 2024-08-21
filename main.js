

function spin() {
    var a = Math.random() * 4 + 1
    var b = Math.floor(a)
    var loc1 = 'img/bottle' + b + '.png'
    document.querySelectorAll("#bottle")[0].src = loc1
    if(b==1){
        document.querySelector("#pwon").innerHTML = "Player 1 Wins"
        document.querySelector("#pwon2").innerHTML = "Player 1 Wins"
    }
    else if(b==2){
        document.querySelector("#pwon").innerHTML = "Player 2 Wins"
        document.querySelector("#pwon2").innerHTML = "Player 2 Wins"
    }
    else if(b==3){
        document.querySelector("#pwon").innerHTML = "Player 3 Wins"
        document.querySelector("#pwon2").innerHTML = "Player 3 Wins"
    }
    else if(b==4){
        document.querySelector("#pwon").innerHTML = "Player 4 Wins"
        document.querySelector("#pwon2").innerHTML = "Player 4 Wins"
    }
}