document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
})

const video1 = document.getElementById('projectvideo1');
const video2 = document.getElementById('projectvideo2');
const video3 = document.getElementById('projectvideo3');
const video4 = document.getElementById('projectvideo4');

const videolist = [video1, video2, video3, video4];

videolist.forEach(function(video){
    video.addEventListener('mouseover', function() {
        video.play();
    });
    video.addEventListener('mouseout', function() {
        video.pause();
    });
})

document.getElementById('contant_form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('success_message').style.display = 'block';
    this.reset();
    setTimeout(() => {
        document.getElementById('success_message').style.display = 'none';
    },3000);
})