

const monthly = document.querySelectorAll('.monthly-price');
const annually = document.querySelectorAll('.annual-price');




document.getElementById('toggle-btn').addEventListener('change', function togglefunction(e) {

    if (e.target.checked) {
        monthly.forEach(element => element.classList.toggle('add'));
        annually.forEach(element => element.classList.toggle('remove'));
    
} else {

        monthly.forEach(element => element.classList.toggle('add'));
        annually.forEach(element => element.classList.toggle('remove'));

}

});
