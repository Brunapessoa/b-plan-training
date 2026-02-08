let addButton = document.getElementsByClassName('addButton');
let inputExercise = document.getElementsByClassName('inputExercise');
let inputWeight = document.getElementsByClassName('inputWeight');
let inputReps = document.getElementsByClassName('inputReps');

for (let index = 0; index < addButton.length; index++) {
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
    } else if (workoutId == 'workoutD') {
        workoutIndex = 3;
    } else if (workoutId == 'workoutE') {
        workoutIndex = 4;
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
    let editBtn = '<button class="editButton">Edit</button>';
    let removeBtn = '<img src="images/trash-solid-full.png" class="delButton">';

    //let removeBtn = '<button class="delButton"><img src="images/trash-solid-full.png" class="delButton"></button>';

    let exerciseElement = document.createElement('tr');
    exerciseElement.innerHTML = `<td>${exerciseItem}</td><td>${weightItem}</td><td>${repsItem}</td><td>${editBtn}</td><td>${removeBtn}</td>`;

    tbodyElement.appendChild(exerciseElement);

    let trElements = divWorkout.getElementsByTagName('tr');
    if (exerciseElement) {
        for (let i = 0; i < trElements.length; i++) {
            trElements[i].id = workoutId + `${(i)}`;
        }
    }

    inputExercise[workoutIndex].value = '';
    inputWeight[workoutIndex].value = '';
    inputReps[workoutIndex].value = '';

    let exercisesList = JSON.parse(localStorage.getItem(workoutId)) || [];

    const newExercise = {
        exercise: exerciseItem,
        weights: weightItem,
        reps: repsItem
    }
    exercisesList.push(newExercise);

    localStorage.setItem(workoutId, JSON.stringify(exercisesList));

    // Delete Button:
    let delButton = tbodyElement.getElementsByClassName('delButton');

    if (delButton.length > 0) {

        let removeBtn;
        for (let index = 0; index < delButton.length; index++) {
            // adiciona a funcao delExercise em todos os botões que forem criados
            removeBtn = delButton[index];
        }
        removeBtn.addEventListener('click', delExercise);
    }

    let editButton = document.getElementsByClassName('editButton');

    if (editButton.length > 0) {

        let editBtn;
        for (let i = 0; i < editButton.length; i++) {
            editBtn = editButton[i];
            editBtn.addEventListener('click', editExercise);
        }
    }
}

function updateWorkout(workout, tableWorkout) {
    const exercisesOfTable = JSON.parse(localStorage.getItem(workout)) || [];

    const tableExercises = document.getElementById(tableWorkout);

    let exercise;
    let weights;
    let reps;
    let editBtn = '<button class="editButton">Edit</button>';
    let removeBtn = '<img src="images/trash-solid-full.png" class="delButton">';
    
    //let removeBtn = '<button class="delButton"><img src="images/trash-solid-full.png" class="trashImg"></button>';

    for (let i = 0; i < exercisesOfTable.length; i++) {
        exercise = exercisesOfTable[i].exercise;
        weights = exercisesOfTable[i].weights;
        reps = exercisesOfTable[i].reps;

        let exerciseElement = document.createElement('tr');
        exerciseElement.innerHTML = `<td>${exercise}</td><td>${weights}</td><td>${reps}</td><td>${editBtn}</td><td>${removeBtn}</td>`;

        tableExercises.appendChild(exerciseElement);
    }

    let trElements = tableExercises.getElementsByTagName('tr');

    if (exercisesOfTable) {
        for (let i = 0; i < trElements.length; i++) {
            trElements[i].id = workout + `${(i)}`;
        }
    }

    let delButton = tableExercises.getElementsByClassName('delButton');

    if (delButton.length > 0) {

        let removeBtn;
        for (let i = 0; i < delButton.length; i++) {
            // adiciona a funcao delExercise em todos os botões que forem criados
            removeBtn = delButton[i];
            removeBtn.addEventListener('click', delExercise);
        }
    }

    let editButton = tableExercises.getElementsByClassName('editButton')

    if (editButton.length > 0) {

        let editBtn;
        for (let i = 0; i < editButton.length; i++) {
            editBtn = editButton[i];
            editBtn.addEventListener('click', editExercise);
        }
    }
}

function editExercise(event) {
    let editButtonElemet = event.target;
    editButtonElemet.disabled = true;


    let buttonParentElement = event.target.parentElement;

    let saveButton = document.createElement('button');
    saveButton.className = 'saveButton';
    saveButton.innerText = 'Save';

    buttonParentElement.appendChild(saveButton);

    saveButton.addEventListener('click', saveExercise)


    let trElement = buttonParentElement.parentElement;

    let exerciseNameElement = trElement.firstElementChild;

    let exerciseName = exerciseNameElement.innerText;
    exerciseNameElement.innerText = '';

    let textAreaExerciseName = document.createElement('textarea');
    textAreaExerciseName.innerText = exerciseName;

    exerciseNameElement.appendChild(textAreaExerciseName);

    let weightsElement = exerciseNameElement.nextElementSibling;

    let weights = weightsElement.innerText;
    weightsElement.innerText = '';

    let textareaWeights = document.createElement('textarea');
    textareaWeights.innerText = weights;

    weightsElement.appendChild(textareaWeights);

    let repsElement = weightsElement.nextElementSibling;

    let reps = repsElement.innerText;
    repsElement.innerText = '';

    let texteareaReps = document.createElement('textarea');
    texteareaReps.innerText = reps;

    repsElement.appendChild(texteareaReps)
}

function saveExercise(event) {

    let tdButtonParentElement = event.target.parentElement;

    let trParentElement = tdButtonParentElement.parentElement;

    let textareaExerciseName = trParentElement.getElementsByTagName('textarea')[0];
    let textareaWeights = trParentElement.getElementsByTagName('textarea')[1];
    let texteareaReps = trParentElement.getElementsByTagName('textarea')[2];

    let tdNameExercise = textareaExerciseName.parentElement;
    let tdWeights = textareaWeights.parentElement;
    let tdReps = texteareaReps.parentElement;

    tdNameExercise.innerHTML = textareaExerciseName.value;
    tdWeights.innerHTML = textareaWeights.value;
    tdReps.innerHTML = texteareaReps.value;


    let workoutId = trParentElement.id.slice(0, 8);
    let exerciseId = trParentElement.id.slice(8);



    let exercisesListEdited = JSON.parse(localStorage.getItem(workoutId)) || [];

    let exerciseEdited = {
        exercise: textareaExerciseName.value,
        weights: textareaWeights.value,
        reps: texteareaReps.value
    }

    exercisesListEdited[exerciseId] = exerciseEdited;

    localStorage.setItem(workoutId, JSON.stringify(exercisesListEdited));


    let editButton = tdButtonParentElement.firstElementChild;
    editButton.disabled = false;

    let saveButton = editButton.nextElementSibling;

    tdButtonParentElement.removeChild(saveButton);
}


function onLoadExercises() {

    updateWorkout('workoutA', 'tableA');
    updateWorkout('workoutB', 'tableB');
    updateWorkout('workoutC', 'tableC');
    updateWorkout('workoutD', 'tableD');
    updateWorkout('workoutE', 'tableE');

}

function delExercise(event) {
    let butElement = event.target.parentElement;

    let trButElement = butElement.parentElement;

    let tbodyElement = trButElement.parentElement;

    tbodyElement.removeChild(trButElement);

    let tableId = tbodyElement.id;
    let workoutId = '';
    if (tableId == 'tableA') {
        workoutId = 'workoutA';
    } else if (tableId == 'tableB') {
        workoutId = 'workoutB';
    } else if (tableId == 'tableC') {
        workoutId = 'workoutC';
    } else if (tableId == 'tableD') {
        workoutId = 'workoutD';
    } else if (tableId == 'tableE') {
        workoutId = 'workoutE';
    }

    let exercisesList = JSON.parse(localStorage.getItem(workoutId));

    let idTrButElement = trButElement.id;

    let strIdExercise = idTrButElement.slice(8, 9);
    // pega apenas o número da strind do id
    let numIdExercise = Number(strIdExercise) - 1;

    exercisesList.splice(numIdExercise, 1);


    localStorage.setItem(workoutId, JSON.stringify(exercisesList));

    // proximo passo descobri qual linha está o botao clicado

    let tableElement = tbodyElement.parentElement;
    // elemento pai do tbody;
    let divWorkout = tableElement.parentElement;

    let trElements = divWorkout.getElementsByTagName('tr');
    if (trElements) {
        for (let i = 0; i < trElements.length; i++) {
            trElements[i].id = workoutId + `${(i)}`;
        }
    }
}

window.onload = onLoadExercises;

