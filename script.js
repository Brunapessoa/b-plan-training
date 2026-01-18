let addButton = document.getElementsByClassName('addButton');
let inputExercise = document.getElementsByClassName('inputExercise');
let inputWeight = document.getElementsByClassName('inputWeight');
let inputReps = document.getElementsByClassName('inputReps');
let workoutA = document.getElementById('workoutA');


for (let index = 0; index < addButton.length; index ++) {
    addButton[index].addEventListener('click', addExercise);
}


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
        exerciseElement.innerHTML = `<td>${exerciseItem}</td><td>${weightItem}</td><td>${repsItem}</td><td>${editBtn}</td><td>${removeBtn}</td>`;
        // console.log(exerciseElement);      

        tbodyElement.appendChild(exerciseElement);

        let trElements = divWorkout.getElementsByTagName('tr');
        if(exerciseElement) {
            for(let i = 0; i < trElements.length; i++) {
                trElements[i].id = workoutId +`${(i)}`;
            }
            console.log(trElements);
        }
        
        
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

        //console.log(exercisesList);
        
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
        
        
}

function delExercise(event) {
    let butElement = event.target.parentElement;
    // o event.target já é o elemento do botão que foi clicado
    // aqui, esta subindo um degrau da hierarquia, para acessar o td onde está o button
    
    let trButElement = butElement.parentElement;
    // aqui está subindo uma hierarquia, para acessar o tr, onde está o td, onde esta o button;
    
    let tbodyElement = trButElement.parentElement;
    // acessando o tbody, que é pai do tr
    
    tbodyElement.removeChild(trButElement);

    let tableId = tbodyElement.id;
    let workoutId = '';
    if(tableId == 'tableA') {
        workoutId = 'workoutA';
    } else if (tableId == 'tableB') {
        workoutId = 'workoutB';
    } else if (tableId == 'tableC') {
        workoutId = 'workoutC';
    }

    let exercisesList = JSON.parse(localStorage.getItem(workoutId));
    // console.log(exercisesList);
    let idTrButElement = trButElement.id;
    // console.log(idTrButElement);
    // idTrButElement é uma string de 9 letras: workoutA4 
    let strIdExercise = idTrButElement.slice(8, 9); 
    // pega apenas o número da strind do id
    let numIdExercise = Number(strIdExercise)-1;
    // -1 para pegar o elemento na ordem do array
    
    // console.log(numIdExercise);
    
    // exercisesList => [ hgfjhsdghsd, fkdhkfs, dskjhfjksdh, fksdjhfkjhsd]
    // quero apagar o segundo elemento = 1
    // ??????
    exercisesList.splice(numIdExercise, 1);
    console.log(exercisesList);

    localStorage.setItem(workoutId, JSON.stringify(exercisesList));
    



    // for(let i = 0; i < exercisesList.length; i++){
        

    // }

    // proximo passo descobri qual linha está o botao clicado

        // let tdParentBtn = event.target.parentElement;
        // elemento pai do botão que foi clicado;
        // let trParentTdBtn = tdParentBtn.parentElement; 
        // elemento pai do td onde está o botão; 
        // let tbodParentTr = trParentTdBtn.parentElement
        
        let tableElement = tbodyElement.parentElement;
        // elemento pai do tbody;
        let divWorkout = tableElement.parentElement;
        
        let trElements = divWorkout.getElementsByTagName('tr');
        if(trElements) {
            for(let i = 0; i < trElements.length; i++) {
                trElements[i].id = workoutId +`${(i)}`;
            }
        }
        //console.log(trElements);
    
    
}

    