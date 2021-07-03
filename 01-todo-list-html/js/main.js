
const btnAddTask = document.querySelector('.OpenCloseForm')
const OCForm = document.querySelector('.addtask')
const btn = document.querySelector('.js-openform')



function openForm(){
    const btn = document.querySelector('.btn');
    if(btn.classList.value.indexOf('open') === -1){
        btn.classList.add('open');
    }else{
        btn.classList.remove('open');

    }
    
}
btn.addEventListener('click', openForm)

