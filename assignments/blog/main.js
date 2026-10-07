window.onload = setupFunction;


let postCount = 0;

function setupFunction() {
  
    document.getElementById("topico").innerHTML = "Welcome to the Forum";
}

function postFunction() {
  
    let message = document.getElementById("message").value;

    if (postCount === 0) {
        document.getElementById("topic").innerHTML = message;
    } else if (postCount === 1) {
        document.getElementById("reply1").innerHTML = message;
    } else if (postCount === 2) {
        document.getElementById("reply2").innerHTML = message;   
    }else if (postCount === 3) {
        document.getElementById("reply3").innerHTML = message;   
    }else if (postCount === 4) {
        document.getElementById("reply4").innerHTML = message;   
    }else if (postCount === 5) {
        document.getElementById("reply5").innerHTML = message;   
    }else if (postCount === 6) {
        document.getElementById("reply6").innerHTML = message;   
    }

    document.getElementById("message").value = "";

    postCount++;
}

function ChangeImage() {
    let image = document.getElementById("img01");
    image.src = "pic/cake.png";
}
function clearFunction() {
 
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";

  
    document.getElementById("message").value = "";

    
    postCount = 0;
}