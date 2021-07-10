
const btnAddTask = document.querySelector('.OpenCloseForm')
const form = document.querySelector('.addtask')
const btn = document.querySelector('.js-openform')

const btnPrimary = document.querySelector('.js-btn-primary')    //phim submit
const btnSecondary = document.querySelector('.js-btn-secondary')    //phim cancel

const listWork = document.querySelector('.js-list-work')
const textCenter = document.querySelector('.js-text-center')
const nameItem = document.querySelector('.nameitem')
const level = document.querySelector('.js-level')
const levelDanger = document.querySelector('.js-level-danger')
const btnWarning = document.querySelector('.js-btn-warning')    //phim edit
const btnDanger = document.querySelector('.js-btn-danger')  //phim delete
const inputtaskName = document.querySelector('.js-form-control-task')
const levelWork = document.querySelector('.js-level-work')


function openForm(){
    
        if(btnAddTask.classList.value.indexOf('open') === -1){
            
            btnAddTask.classList.add('open');
        }else{
            btnAddTask.classList.remove('open');
          
        }
}



function handleNewName(){
    nameItem.disabled = true
    textCenter.classList.remove('disable')
    levelDanger.classList.remove('disable')
}

function resetData(){
    textCenter.classList.remove('js-text-center')
    textCenter.classList.add('disable')
    textCenter.querySelector('.js-text-center').innerHTML = '0'

    levelDanger.classList.remove('js-level-danger')
    levelDanger.classList.add('desable')
    levelDanger.querySelector('.js-level-danger').innerHTML = ' '
}

function inPutName(){
    nameWork = taskName.target.value
    nameItem.querySelector('.nameitem').innerHTML = nameWork
} 

function addTask(){
    levelwork = levelWork.value
    levelDanger.querySelector('.js-level-danger').innerHTML = nameWork
    
    
}
function deleteItem(){

}

btn.addEventListener('click', openForm)
inputtaskName.addEventListener('input', inPutName)
btnPrimary.addEventListener('click', addTask)
btnDanger.addEventListener('click', )

