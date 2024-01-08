function showAlert (title,text){
const alertTitle = document.getElementById('alert-title')
const alertText = document.getElementById('alert-text')
const alert = document.getElementById('customAlert')
    alertTitle.innerText = title;
    alertText.innerText = text
   alert.style.display = 'flex';
}
function closeAlert(){
    const alert = document.getElementById('customAlert')
    alert.style.display = 'none'
}