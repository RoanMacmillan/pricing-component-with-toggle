

const monthly = document.querySelectorAll('.monthly-price');
const annually = document.querySelectorAll('.annual-price');




document.getElementById('toggle-btn').addEventListener('click', function togglefunction(e) {

    if (e.target.checked) {
        monthly.forEach(element => element.setAttribute('hidden', true));
        annually.forEach(element => element.removeAttribute('hidden'));
      } else {
        monthly.forEach(element => element.removeAttribute('hidden'));
        annually.forEach(element => element.setAttribute('hidden', true));

}

});
