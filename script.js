function hiThere() {
 
    let name = prompt("What's your name?", "Gill");
    alert(`Hi ${name}`);
    let answer = confirm("Would you like to be on time?");
    if (answer) {startQuestions()}
}

function startQuestions() {
    let timeclaim = +prompt("On average, how long does it take you to get ready (from '0% ready' to 'ready to walk out the door'?", 20) + 10;

    alert(`A likely story. Let's call it ${timeclaim}`);

}