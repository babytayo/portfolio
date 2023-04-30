function hamburgerMenu() {
  let list = document.getElementById("navMenu");
  if (list.style.display == "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}

//Readmore btns onclick function
function myfunction1() {
  let readMore = document.getElementById("read1");
  if (readMore.style.display == "block") {
    readMore.style.display = "none";
  } else {
    readMore.style.display = "block";
  }
}

function myfunction2() {
  let readMore2 = document.getElementById("read2");
  if (readMore2.style.display == "block") {
    readMore2.style.display = "none";
  } else {
    readMore2.style.display = "block";
  }
}

function myfunction3() {
  let readMore3 = document.getElementById("read3");
  if (readMore3.style.display == "block") {
    readMore3.style.display = "none";
  } else {
    readMore3.style.display = "block";
  }
}

//whatsapp me
function whatsapp() {
  window.location.href = "https://wa.me/07066156225?text=urlencodedtext";
}
