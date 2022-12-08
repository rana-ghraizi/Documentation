function clearInput(){
    document.getElementById('name').value="";
    document.getElementById('surname').value="";
    document.getElementById('city').value="";

}
function confirmation (){
    if (confirm('Are you sure you want to clear the fields?')){
        clearInput();
        alert('Fields cleared');
    } else {
        alert('Canceled');
    }
}