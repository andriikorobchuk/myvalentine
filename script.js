let currentReason = 1;
const totalReasons = 10;

const reasons = {
  1: { title:"Reason 1", text:"You make me smile every day, from the moment i woke up to the moment i am going to bed💕", gif:"happy-cat.gif" },
  2: { title:"Reason 2", text:"Your hugs are the warmest, they make me soft and hard at the same time.....)))) 💖", gif:"cat-kiss.gif" },
  3: { title:"Reason 3", text:"You can bite me everywhere you want, i realy like it and i want to eat your booty 🥰", gif:"cute-cat-couple.gif" },
  4: { title:"Reason 4", text:"You can talk as much as you want when you with me, i listen to your every word, even when you are going crazy))) 😄", gif:"cats-love.gif" },
  5: { title:"Reason 5", text:"You look amazing every day, i know you are the witch but can't prove it yet 💘", gif:"sillycat.gif" },
  6: { title:"Reason 6", text:"You can always rely on me, you can even use me as a boxer bag )) i like it when you hard with me", gif:"cat-smacking-other-cat-cat.gif" },
  7: { title:"Reason 7", text:"I admire that you as autistic as i am, we are perfect togeather )))))", gif:"cat-boner-dick.gif" },
  8: { title:"Reason 8", text:"I can buy you food anytime you want, and feed you) you can even eat me 🥰", gif:"attention.gif" },
  9: { title:"Reason 9", text:"You are so special and i know how to make you feel spacial 💖", gif:"raeswae-cat.gif" },
  10:{ title:"Reason 10", text:"Because i am your biggest fan and YOU ARE SO FUCKING HOT AND INTERESTING to me💓", gif:"i-love-you.gif" }
};

// NAVIGATION
function goTo(id){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function showReasonsList(){ goTo('reasons'); }

// TYPING EFFECT
function typeText(el, text, speed){
  el.innerHTML = "";
  let i = 0;
  const interval = setInterval(()=>{
    el.innerHTML += text[i++];
    if(i >= text.length) clearInterval(interval);
  }, speed);
}

// OPEN REASON
function openReason(n){
  currentReason = n;
  typeText(document.getElementById('reason-title'), reasons[n].title, 60);
  typeText(document.getElementById('reason-text'), reasons[n].text, 28);

  const media = document.querySelector('#reason-detail .media');
  media.innerHTML = `<img src="${reasons[n].gif}" style="max-width:260px; border-radius:12px;">`;

  goTo('reason-detail');
}

// NEXT BUTTON
function nextReason(){
  if(currentReason === totalReasons) goTo('question');
  else goTo('reasons');
}

// NO BUTTON ESCAPE
const noBtn = document.getElementById('no');
noBtn.addEventListener('mouseenter', ()=>{
  noBtn.style.position = 'fixed';
  noBtn.style.left = Math.random() * (window.innerWidth - noBtn.offsetWidth) + 'px';
  noBtn.style.top = Math.random() * (window.innerHeight - noBtn.offsetHeight) + 'px';
});

// FLOATING HEARTS
function spawnHeart(){
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerText = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (3 + Math.random() * 2) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

// FINAL YES
function yes(){
  document.body.innerHTML = `<div class="screen active final"><div class="final-text" id="finalText"></div></div>`;
  for(let i = 0; i < 3000; i++){
    setTimeout(()=>{
      const h = document.createElement('div');
      h.className = 'fill-heart';
      h.innerText = '❤️';
      h.style.left = Math.random() * 100 + 'vw';
      h.style.top  = Math.random() * 100 + 'vh';
      h.style.fontSize = (12 + Math.random() * 28) + 'px';
      document.body.appendChild(h);
    }, i * 5);
  }
  setTimeout(()=>{
    const finalText = "i love you my sweety pie <3";
    const el = document.getElementById('finalText');
    let i = 0;
    const t = setInterval(()=>{
      el.innerHTML += finalText[i++];
      if(i >= finalText.length){
        clearInterval(t);
        el.classList.add('heartbeat');
      }
    }, 70);
  }, 2500);
  setInterval(spawnHeart, 50);
}
