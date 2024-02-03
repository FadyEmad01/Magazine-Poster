function openImage(src) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex='99999';

    const modalImage = document.createElement('img');
    modalImage.src = src;
    modalImage.style.maxWidth = '80%';
    modalImage.style.maxHeight = '80%';

    modal.onclick = function() {
        document.body.removeChild(modal);
    };

 
    modal.appendChild(modalImage);
  
    document.body.appendChild(modal);
}

var aud = document.querySelectorAll(".myAudio");
function playAudio(index){
    for( var i = 0; i < aud.length; i++){
       if(i !== index){
        aud[i].pause();
       }
    }
    if(aud[index].paused){
        aud[index].play();
    }else{
        aud[index].pause();
    }
    
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))