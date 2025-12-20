let addButton = document.getElementById('addButton');
let inputExercise = document.getElementById('inputExercise');
let inputWeight = document.getElementById('inputWeight');
let inputReps = document.getElementById('inputReps');

addButton.addEventListener('click', addExercise);

let tableExercises = document.getElementById('tableExercises');

function addExercise() {
    let exercisesList = inputExercise.value;
    let weightsList = inputWeight.value;
    let repsList = inputReps.value;

    let exercise = exercisesList;
    let weight = weightsList;
    let reps = repsList;

    let exerciseItem = document.createElement('tr');
        exerciseItem.id = 'trElement';
        exerciseItem.innerHTML = `<td>${exercise}</td><td>${weight}</td><td>${reps}</td><td><button class='delButton'>remover</button></td>`;
        console.log(exerciseItem);      

        tableExercises.appendChild(exerciseItem);
        
        inputExercise.value = '';
        inputWeight.value = '';
        inputReps.value = '';
        
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

    