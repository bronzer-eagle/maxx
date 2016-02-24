window.onload = function() {   //check hash, if '', load myPage temp
  if (location.hash == ''){
    location.hash = 'myPage';
  }
  else{
    loadPage();
  }
};

window.onhashchange = loadPage; //call func for loading templates

// ================================================

function editImgs() {  //add func for modal window to all imgs
  var imgs = document.getElementsByTagName('img');
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute('onclick', 'openModal(this)');
  }
}


// =================================================

function openModal(img) {   //open modal window
  var imgContainer = document.getElementById('imgContainer');
  imgContainer.innerHTML = '';
  modalWindow.style.display = 'block';
  var localImg = img.cloneNode(true);
  imgContainer.appendChild(localImg);
}

function closeModal() {
  modalWindow.style.display = 'none';
}

// ====================================================

function openChat() {  //change hash to loaf chat window
  location.hash = 'chatWindow';
}

// =====================================================


function loadPage() {  //check hash and load a template
  var hash = (location.hash).slice(1, location.hash.length);
  if (hash != '') {
    var path = '../templates/' + hash + '.html'
    var template = getTemplate(path);
    document.getElementById('wrapper').innerHTML = template;
    makeActiveLi(hash);
  } else {
    document.getElementById('wrapper').innerHTML = '';
  }
    getFriendsNews();
    var modalWindow = document.getElementById('modalWindow');
    document.body.appendChild(modalWindow);
    editImgs();
}

function makeActiveLi(hash) {console.log(hash);  //make an active li
  var liActive = document.getElementsByClassName('active');
  for (var i = 0; i < liActive.length; i++) {
    liActive[i].classList.remove('active');
  }
  document.getElementById(hash).classList.add('active');
}

//============================================================

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


//===========================================================

function getFriendsNews() {
  var news = document.getElementById('rightSideComents').innerHTML;
  var rightSide = document.getElementById('rightSide');
  rightSide.innerHTML = news;
}

// ===========================================================

function getTemplate(path) {  //get temp by hash (path)
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path, false);
  xhr.send();
  if (xhr.status != 200) {
    document.getElementById('wrapper').innerHTML = '<h1>404</h1>';
  }
  else {
    return xhr.responseText;
  }
}

function loadImg(path) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/img', false);
  xhr.send(path);
  if (xhr.status != 200) {
    document.getElementById('wrapper').innerHTML = '<h1>404</h1>';
  }
  else {
    console.log(xhr.responseText);
  }
}

// ===========================================================

function createMessage() {
  var mess = document.getElementById('newMessage').value;
  if(mess != '' &&  mess != undefined && mess[0] != '\n'){
    var miniMessage = document.createElement('div');
    miniMessage.classList.add('miniMessage');
    var photoDate = document.createElement('div');
    photoDate.classList.add('photoDate');
    var friendPhoto = document.createElement('div');
    friendPhoto.classList.add('friendPhoto');
    var img = document.createElement('img');
    img.src = 'img/hulk.jpg';
    var date = document.createElement('span');
    date.classList.add('date');
    date.innerHTML = (new Date()).getHours() + ':'+(new Date()).getMinutes();
    var minMessage = document.createElement('span');
    minMessage.classList.add('minMessage');
    minMessage.innerHTML = mess;

    friendPhoto.appendChild(img);
    photoDate.appendChild(friendPhoto);
    photoDate.appendChild(date);
      miniMessage.appendChild(photoDate);
      miniMessage.appendChild(minMessage);
      document.getElementsByClassName('wall')[0].appendChild(miniMessage);
      document.getElementById('newMessage').value = '';
      document.getElementById('newMessage').focus();
      return false;
  }

}
