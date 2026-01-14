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
    // capturando o id do elemento pai do botão clicado
    let workoutIndex = 0;
    if (workoutId == 'workoutA') {
        workoutIndex = 0;
    } else if (workoutId == 'workoutB') {
        workoutIndex = 1;
    } else if (workoutId == 'workoutC') {
        workoutIndex = 2;
    }

    let divWorkout = event.target.parentElement;  
    //pai do elemento clicado - botao clicado 

    let tableElement = divWorkout.firstElementChild;
    // acessando a tabela correspondente ao botão clicado
    
    let tbodyElement = tableElement.lastElementChild; // acessando o tbody

    let exercises = inputExercise[workoutIndex].value; 
    let weights = inputWeight[workoutIndex].value;
    let reps = inputReps[workoutIndex].value;
    // recebem o index indicado no início da funcao, para povoar a tabela correta

    let exerciseItem = exercises;
    let weightItem = weights;
    let repsItem = reps;
    let editBtn = '<button>Edit</button>'; 
    let removeBtn = '<button class="delButton">Remove</button>';


    let exerciseElement = document.createElement('tr');
        exerciseElement.id = 'trElement';
        exerciseElement.innerHTML = `<td>${exerciseItem}</td><td>${weightItem}</td><td>${repsItem}</td><td>${editBtn}</td><td>${removeBtn}</td>`;
        console.log(exerciseElement);      

        tbodyElement.appendChild(exerciseElement);
        
        inputExercise[workoutIndex].value = '';
        inputWeight[workoutIndex].value = '';
        inputReps[workoutIndex].value = '';
        
        let exercisesList = JSON.parse(localStorage.getItem(workoutId)) ||[];

        const newExercise = {
            exercise: exerciseItem,
            wheigths: weightItem,
            reps: repsItem
        }
        exercisesList.push(newExercise);

        console.log(exercisesList);
        
        localStorage.setItem(workoutId, JSON.stringify(exercisesList));




        

        // Delete Button:
        let delButton = document.getElementsByClassName('delButton');
        
        if (delButton.length > 0) {
            
            let removeBtn;
            for(let index = 0; index < delButton.length; index++) {
                // adiciona a funcao delExercise em todos os botões que forem criados
                removeBtn = delButton[index];
            }          
            removeBtn.addEventListener('click', delExercise);
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
            localStorage.removeItem(newExercise);
        }
}

    