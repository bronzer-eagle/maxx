window.onload = function() {
  if (location.hash == ''){
    location.hash = 'myPage';
    loadPage();
  }
  else{
    loadPage();
  }
};

window.onhashchange = loadPage;

function editImgs() {
  var imgs = document.getElementsByTagName('img');
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute('onclick', 'openModal(this)');
  }
}

function openModal(img) {
  var imgContainer = document.getElementById('imgContainer');
  imgContainer.innerHTML = '';
  modalWindow.style.display = 'block';
  var localImg = img.cloneNode(true);
  imgContainer.appendChild(localImg);
}

function closeModal() {
  modalWindow.style.display = 'none';
}

function openChat() {
  location.hash = 'chatWindow';
}


function loadPage() {
  var hash = (location.hash).slice(1, location.hash.length);
  if (hash != '') {
    var template = document.getElementById(hash);
    document.getElementById('wrapper').innerHTML = template.innerHTML;
  } else {
    document.getElementById('wrapper').innerHTML = '';
  }
    getFriendsNews();
    var modalWindow = document.getElementById('modalWindow');
    document.body.appendChild(modalWindow);
    editImgs();
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

function getFriendsNews() {
  var news = document.getElementById('rightSideComents').innerHTML;
  var rightSide = document.getElementById('rightSide');
  rightSide.innerHTML = news;
}
