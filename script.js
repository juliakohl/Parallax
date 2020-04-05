var gradients=["moonlit-asteroid", "jshine", "cool-sky", "harvey", "amin"];

function getGradient(){
    random = Math.random() * gradients.length;
    gradient = gradients[Math.floor(random)];
    return gradient;
}

$('#par-bg-1').addClass(getGradient());