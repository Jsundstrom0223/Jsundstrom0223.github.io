function hiThere() {
 
    let name = prompt("What's your name?", "Gill");
    alert(`Hi, ${name}!`);
    let answer = confirm("Would you like to be on time?");
    
}

function startQuestions() {
    let newEl = document.querySelector('input[name="time"]:checked');
    let timeClaim = +newEl.id + 10;

    if (timeClaim <= 50) {
      alert(`A likely story. Let's call it ${timeClaim}`)
    }
    else {
      alert("Oof.");
    };
}