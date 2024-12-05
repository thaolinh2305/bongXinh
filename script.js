const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})

// Function to detect mobile device
function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Function to set viewport for mobile devices
function setViewportForMobile() {
    if (isMobile()) {
        // Update the viewport meta tag to limit zoom or scale
        var viewport = document.querySelector("meta[name='viewport']");
        if (viewport) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
        }
    }
}

// Call the function to set viewport on page load
setViewportForMobile();