window.onload = function() {
  location.hash = 'myPage';
  loadPage();
};

window.onhashchange = loadPage;


function loadPage() {
  var hash = (location.hash).slice(1, location.hash.length);
  if (hash != '') {
    var template = document.getElementById(hash);
    document.getElementById('wrapper').innerHTML = template.innerHTML;
  } else {
    document.getElementById('wrapper').innerHTML = '';
  }
}

function makeActive(li) {
  var liActive = document.getElementsByClassName('active');
  for (var i = 0; i < liActive.length; i++) {
    liActive[i].classList.remove('active');
  }
  li.classList.add('active');
}

function changeTextArea(val){
  var span = document.getElementById("commentChg");
  if (val.length > 20){
    val = val.split(' ');
    val.push('\n');
    val = val.join(' ');
    span.innerHTML = val;
  }
  else{
    span.innerHTML = val;
  }
}

function showPhoto() {
  document.getElementById('mainPhComm').style.display = 'block';
}

function checkArea(val) {
  if (!val){
    document.getElementById('mainPhComm').style.display = 'none';
  }
}
