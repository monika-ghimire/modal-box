

 function modalOpen()
 {
    var modal=document.getElementById('modal');
    var contentedHolder=document.getElementById('contentedHolder')
  
    if (modal.style.display === 'none') {
        modal.style.display = 'block';
        contentedHolder.style.background='gainsboro'
      } else {
        modal.style.display = 'none';
        contentedHolder.style.background='none'
      }
 }
 window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      contentedHolder.style.background='none'
    }
    if(event.target==contentedHolder)
    {
        modal.style.display = "none";
        contentedHolder.style.background='none'
    }
  }