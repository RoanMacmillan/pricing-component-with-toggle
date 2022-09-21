

const monthly = document.querySelectorAll('.monthly-price');
const annually = document.querySelectorAll('.annual-price');




document.getElementById('toggle-btn').addEventListener('click', function togglefunction(e) {

    if (e.target.checked) {
        monthly.forEach(element => element.classList.toggle('remove'));
        annually.forEach(element => element.classList.toggle('add'));
    
} else {

        monthly.forEach(element => element.classList.toggle('remove'));
        annually.forEach(element => element.classList.toggle('add'));

}

});
