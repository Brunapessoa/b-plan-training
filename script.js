let addButton = document.getElementsByClassName('addButton');
let inputExercise = document.getElementsByClassName('inputExercise');
let inputWeight = document.getElementsByClassName('inputWeight');
let inputReps = document.getElementsByClassName('inputReps');

for (let index = 0; index < addButton.length; index ++) {
    addButton[index].addEventListener('click', addExercise);
}


// let tableExercises = document.getElementsByClassName('tableExercises');

function addExercise(event) {
    let workoutId = event.target.parentElement.id;
    let workoutIndex = 0;
    if (workoutId == 'workoutA') {
        workoutIndex = 0;
    } else if (workoutId == 'workoutB') {
        workoutIndex = 1;
    } else if (workoutId == 'workoutC') {
        workoutIndex = 2;
    }

    let divWorkout = event.target.parentElement;  //pai do elemento clicado - botao clicado 

    let tableElement = divWorkout.firstElementChild;
    
    let tbodyElement = tableElement.lastElementChild; // acessando o tbody

    let exercisesList = inputExercise[workoutIndex].value; 
    let weightsList = inputWeight[workoutIndex].value;
    let repsList = inputReps[workoutIndex].value;
    // recebem o index indicado no início da funcao, para povoar a tabela correta

    let exercise = exercisesList;
    let weight = weightsList;
    let reps = repsList;

    let exerciseItem = document.createElement('tr');
        exerciseItem.id = 'trElement';
        exerciseItem.innerHTML = `<td>${exercise}</td><td>${weight}</td><td>${reps}</td><td><button class='delButton'>remover</button></td>`;
        console.log(exerciseItem);      

        tbodyElement.appendChild(exerciseItem);
        
        inputExercise[workoutIndex].value = '';
        inputWeight[workoutIndex].value = '';
        inputReps[workoutIndex].value = '';
        
        // Delete Button:
        let delButton = document.getElementsByClassName('delButton');
        
        if (delButton.length > 0) {
            
            let butItem;
            for(let index = 0; index < delButton.length; index++) {
                // adiciona a funcao delExercise em todos os botões que forem criados
                butItem = delButton[index];
            }          
            butItem.addEventListener('click', delExercise);
        }
        function delExercise(event) {
            let butElement = event.target.parentElement;
            // o event.target já é o elemento do botão que foi clicado
            // aqui, esta subindo um degrau da hierarquia, para acessar o td onde está o button
            
            let trElement = butElement.parentElement;
            // aqui está subindo uma hierarquia, para acessar o tr, onde está o td, onde esta o button;
            
            let tbodyElement = trElement.parentElement;
            // acessando o tbody, que é pai do tr
            
            tbodyElement.removeChild(trElement);
        }

}

    