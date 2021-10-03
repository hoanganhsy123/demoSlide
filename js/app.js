// ẨN HẾT
let elementNow = 0;

// Cho slide hiển thị lên
let slides = document.getElementsByClassName('slide');
// hiển thị cho phần tử thứ 0
slides[elementNow].style.display = "block"

function previous(){
  let previousElement;
  let slides = document.getElementsByClassName('slide');
  if(elementNow == 0)
  {
      previousElement = slides.length - 1;
  } else 
  {
      previousElement = elementNow -1;
  }
    slides[elementNow].style.display = "none";
    slides[previousElement].style.display = "block";
    elementNow = previousElement;
  }
  


function next() {
  let nextElement;
  let slides = document.getElementsByClassName('slide');
 
  if(elementNow === slides.length - 1) {
    nextElement = 0;
  } else {
    nextElement = elementNow + 1;
  }

  slides[elementNow].style.display = "none"
  slides[nextElement].style.display = "block"
  elementNow = nextElement;
}
