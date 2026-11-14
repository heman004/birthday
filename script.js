/* ===== EDIT THIS PART ===== */
const CFG = {
  name: "Dharsuu",           // her name
  fromName: "Heman",     // your name
  scratchMessage: "Happy Birthday, Partner! 🫂🥰",
  quiz: [
    {q:"Namma first meet pannathu enga?", o:["College","Beach","Temple","Online"], a:0},
    {q:"Enakku romba pudicha food enna?", o:["Biryani","Dosa","Pizza","Ice cream"], a:0},
    {q:"Naan unna first time enna solli koopten?", o:["Chellam","Kutty","Baby","Pappu"], a:1},
    {q:"Unakku pudicha color enna?", o:["Pink","Blue","Black","Red"], a:0}
  ],
  quizEnd: "Ella answer-um correct ah? Super! 🥳 Un gift 6 PM-ku ready – seekiram vaa! (Idha un real surprise message ah maathunga)",
reasons: [
  "Un sirippu en naal-ah azhaga aakkum",
  "Naan sad ah irukkum pothu nee purinjukkuva",
  "Nee en best friend-um kooda",
  "Un kovam kooda cute-a irukku",
  "Nee irukkura edam la naan comfortable ah feel pannuven",
  "Un kural ketta ennoda tension pogum",
  "Nee ennai maathunna vitham",
  "Nee yaaraiyum vida unique",
  "Nee pesum bodhu naan time-ah maranthuruven",
  "Un kannu la oru kind-ness theriyuthu",
  "Nee en kooda irukkum bodhu ellam easy-ah thonum",
  "Un smile-ah paartha naal full-ah happy-ah pogum",
  "Nee en secrets-ah safe-ah vechuruka",
  "Nee thappu pannaalum sorry kekka thayangala",
  "Un care pannura vitham romba special",
  "Nee en mela vachirukkura nambikkai",
  "Nee sollura jokes kooda en face-la smile varavaikkum",
  "Nee yaarukkum help pannura nalla manasu",
  "Un voice message kekkura pothu relaxing-ah irukku",
  "Nee en kanavugalukku support pannura",
  "Naan fall aana pothu nee thookki vittuvaa",
  "Nee en mistakes-ah judge pannama accept pannuva",
  "Un ninaivu thaan en favourite memory",
  "Nee irukkura varaikkum naan thaniya illa nu thonum",
  "Un kitta pesum bodhu naan naan-ah irukken",
  "Nee en mela kaatura anbu pure-ah irukku",
  "Nee en life-la vantha pinnaal ellame better-ah aachu",
  "Un handwriting kooda azhagu",
  "Nee sollura advice-la oru love irukku",
  "Nee en bad days-ah good days-ah maathuva",
  "Un laughter contagious-ah irukku",
  "Nee en kooda silly-ah irukka thayangala",
  "Nee en favourite person",
  "Un presence-eh enakku peace",
  "Nee en achievements-ah en vida adhigama celebrate pannuva",
  "Nee en kooda late night-ah pesuvathu enakku pidikkum",
  "Un kitta irundhu naan neraya katrukitten",
  "Nee en weaknesses-ah ariyum, aana kuraiya sollama irukka",
  "Nee en kooda sernthu sirikkum nimidangal enakku pidikkum",
  "Un perai paartha kooda smile varum",
  "Nee en motivation",
  "Nee en kooda irukkum bodhu bayam illa",
  "Un hug romba comfort-ah irukkum",
  "Nee ennai ennaikkum kai vida maatta nu theriyum",
  "Un opinion enakku romba mukkiyam",
  "Nee enakkaga neram ottukura vitham",
  "Nee en feelings-ah seriously edukkura",
  "Un kitta sollama irukka mudiyaathu",
  "Nee en kooda irukkum bodhu time fast-ah pogum",
  "Nee en mela kovam vandhaalum udane sari aayiduva",
  "Un cuteness-ku alavae illa",
  "Nee en kanavai purinjukkura oru aal",
  "Nee en kooda travel pannanum nu aasai",
  "Un style enakku romba pidikkum",
  "Nee en problems-ah solve pannura vitham",
  "Nee thaan en first call-ku porutham",
  "Nee en kooda sernthu seiyum plans ellam special",
  "Un kitta irundhu varum msgs-ah naan wait pannuven",
  "Nee en thoughts-la eppavum irukka",
  "Un kural-la irukkura sweetness",
  "Nee en kooda sandai pottaalum miss pannuven",
  "Nee en ugly side-ah paartha pinnaalum irukka",
  "Un kitta pesina pinnaal manasu light-ah aagum",
  "Nee en life-oda best decision",
  "Nee en kooda irukkum bodhu naan confident-ah feel pannuven",
  "Un kitta thaan naan full-ah open-ah pesuven",
  "Nee en weird jokes-ah purinjukkura",
  "Nee en success-ku pinnaadi irukkura silent support",
  "Un kitta irundhu naan sabarathai katrukkitten",
  "Nee en kooda irukkum bodhu ellame colourful-ah theriyum",
  "Un care-ku naan thaan thanks sollanum",
  "Nee en kooda food share pannura vitham",
  "Nee thaan en comfort zone",
  "Un typing seyyum bodhu varra 'typing...' kooda excitement thaan",
  "Nee en kooda irukkum bodhu naan kavalai marandhuruven",
  "Un kitta irundhu varra every small gesture-um special",
  "Nee en kooda music share pannura vitham",
  "Un taste enakku romba pidikkum",
  "Nee en kooda irukkum bodhu naan better person-ah aaguren",
  "Nee thaan en happy place",
  "Un kannu paartha pothu sollama puriyum",
  "Nee en kooda silent-ah irundhaalum awkward-ah illa",
  "Nee en tough times-la en pakkam nindrava",
  "Un kitta irundhu varum surprise-gal enakku pidikkum",
  "Nee en kooda sirikkum bodhu en problems maranthuruven",
  "Nee en kooda irukkum bodhu naan nijama sirikkiren",
  "Un hardworking nature enakku inspiration",
  "Nee en kooda neraya memories create pannirukka",
  "Nee thaan en day-oda highlight",
  "Un kitta pesaama oru naal kooda poga maatten",
  "Nee en kooda irukkum bodhu naan safe-ah feel pannuven",
  "Un attitude-um enakku pidikkum",
  "Nee en kooda sernthu kanavu kaanum bodhu azhagu",
  "Nee en kitta ethuvum maraikkala",
  "Un vaarthaigal en manasukku marundhu",
  "Nee en life-la irukkurathu en luck",
  "Nee en kooda irukkum bodhu ellame possible-ah theriyum",
  "Un love-ku naan thagudhi-ah irukkanum nu ninaippen",
  "Nee thaan en today, en tomorrow, en always",
  "Nee en kooda irukkum bodhu naan complete-ah feel pannuven",
  "Naan unna romba love pannuren, adhukku reason venaama? Nee nee-ah irukka, adhu pothum 💖"
],
  letters: [
    {t:"Open when you miss me 🥺", m:" Na una paka mudiyatha thoorathula lam engaum illa ne kupta na vanthurven seriya itha lam nianchi feel panatha na eppaum unkuda than iruken unnoda mansula seriya ne miss pandra mathirir feel pananum pothu than na innum unaku nerukkama iruken mansala.. 💖"},
    {t:"Open when you're sad 😢", m:" Nee ethuku papa ipo feel pandra etha ninachi feel pandra carrier ah love ah illa life ah ipo ne oru edathula work pandra 2 year munnadi unaku theyriyathu 2 year apram na inge work panuven nu unaku apo theyriyathu athu mathirir than papa ellam unaku pudichathu panitu iru ne ninaikira mathiri life maralam or else ne ninachatha vdave nalla maralam. positive ah mattum think panu na eppaum un kudave irupen ella sutuvation la um.. love you peda.. 🫶"},
    {t:"Open when you're happy 😄", m:" Ithula solla ethum illa because na pray pandrathu nee epaum happy ya irukanum nu than  but ella nramum yarnalum happy ya iruka mudiyathu la ella feelings um kandippa varum antha mathriri time la just ne oru small break eduthu epo la nee happy ya irunthiye sirichiye atha lam ninachi paru  entha mathirir feel ah irunthalum poirum...unoda smile enaku romba pudikum so ne enakaga achum siricha face oda irukanum puriuthaa.. 🎉"},
    {t:"Open when you can't sleep 🌙", m:" Enaku theyrium nee etha ninachi thoonkama irupa nu kandippa oru nal nee appa amma va nalla pathuppa neeum nanum marriage panipom.. seriya oru nal ithulam kandippa nadakum but ne ipo thoonkuna than athulam nadakum yen na ipo crt ah time thoonki sapda thana healthy ya iruka mudium apram ne ninachathula unala panna mudium unaku thookam varla lonely ethavthu feel pandra apdina enaku msg panu seriya yen na nee tour engayachum po porom apdina motho nal night thookam varathu paru antha mathirir mattum than thoonkama irukanum excitment la mathapadi feel pani lam thonkama iruka kudathu..😴"},
    {t:"Open when you're angry 😤", m:" Nee kovama irunthalum alaga than irupa apdinu lam solla matten seriya but nee kovama irukum pothu unna inum kovapaduthanum nu thonum like na oru sila visayam sonna udane kovapaduva neeum nanum oru thadava theppakulathula chicken rice saptom atha sonne unaku tension erum enaku kongam happy ya irukum una kadupethurathula intha mathirir sinna sinna kovam enaku pudikum athunala nee kovama iruntha enaku pudikum.. nee itha open pananthum ninaipa na kovama irukum pothu en al epdi la enna samathanapaduthuan nu solirkan pola ithula apdinu apdi lam kedayatha unoda kovam kuda enaku pudikum athu than inge na solla vanthen vera  box paru byeeeee.. love you ra pisssiii...😜"},
    {t:"Open when you feel lonely 🫂", m:" Haii da chellam yen papa thaniya feel pandra na unkdua thana iruken un pakathula iruntha mattum unkuda iruken nu illa da papa puriutha ne ninaikira oru oru second um na unakulla than iruken nee na enaku avlo pudikum apdi irukum pthu unna epdi thaniya iruka vitruven pisi ithu love pandra vara than seriya sikiram ye una marriage panikiren unkudave irupen... 🤗"},
    {t:"Open when you need a smile 😊", m:"Namma first meet nyabagam irukka? sharmila akka marriage la irunthu than namma pesa arambichom  apo antha time la epdi irunthom atha nianchi paru \nAdhula nee pesunadhu, nee sirichadhu, ellam nenachu paaru.\nUn photo oru thadava paaru, nee evlo azhagu nu theriyum.\nIppo sirichiya? Sirichaa dhaan nee en girl.\nUn sirippu dhaan enakku periya gift 😍"},
    {t:"Open when you're hungry 🍕", m:"Phone eduthu un favourite food order pannu.\nBill en kanakku la, next time naan direct ah vandhu treat tharen.\nDiet ellam innaiku vittudu, happy ah saappidu.\nSaappidum pothu enna nenachuko, naan un kooda dhaan.\nNalla saappidu, aprom kandippa call pannu 😋"},
    {t:"Open on a bad day ☁️", m:" ne down ah irukum pothu ne ethachum office la panirpa la atha think panni paru like ne achieve panna ethavthu ne office la ye chatgpt use pani app la nerya changes panirka itha neeye enta solirka enga sir enna paratnaru na intha app la ivvlo change panirken ethum theyriyathu nu solitu ivlo panirken. Unku theyrium seirya nee bayapdura ethum theyriayla ethum varala apdinu unakum ellam theyrium ne ellam panna mudium like fail avama panna mudiaythu seriya ella time um ellarum jeika mudiyathu neeum oru nal jeipa yarkudaum unna comapre panikatha nee vera avanga vera.. unoda journey thani.. intha journey la unaku eppaum na support ah irupen.. not just a boy friend like a friend, father, gaudian, everything... "}
  ]
};

/* ===== Helpers ===== */
const $ = s => document.querySelector(s);

function show(id) {
  document.querySelectorAll('.screen').forEach(e => e.classList.remove('on'));
  $('#s-' + id).classList.add('on');
  window.scrollTo(0, 0);
}

document.addEventListener('click', e => {
  const b = e.target.closest('[data-go]');
  if (b) show(b.dataset.go);
});

$('#menuTitle').textContent = 'Happy Birthday ' + CFG.name + ' 🧡';
$('#underText').textContent = CFG.scratchMessage;

function confetti(n = 40) {
  const em = ['🎉', '💖', '✨', '🎈', '🌸'];
  for (let i = 0; i < n; i++) {
    const s = document.createElement('span');
    s.className = 'conf';
    s.textContent = em[i % em.length];
    s.style.left = Math.random() * 100 + 'vw';
    s.style.animationDelay = Math.random() * 1.2 + 's';
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 4500);
  }
}


/* ===== Scratch card ===== */
(function () {
  const c = $('#cv'), x = c.getContext('2d');
  let done = false, drawing = false;

  function size() {
    const r = c.getBoundingClientRect();
    c.width = r.width;
    c.height = r.height;
    x.fillStyle = '#d9a441';
    x.fillRect(0, 0, c.width, c.height);
    x.fillStyle = '#fff8';
    x.font = '700 20px Nunito, sans-serif';
    x.textAlign = 'center';
    x.fillText('Scratch here ✨', c.width / 2, c.height / 2 + 6);
  }
  size();

  function pos(e) {
    const r = c.getBoundingClientRect();
    return [e.clientX - r.left, e.clientY - r.top];
  }

  function scratch(e) {
    if (!drawing || done) return;
    const [px, py] = pos(e);
    x.globalCompositeOperation = 'destination-out';
    x.beginPath();
    x.arc(px, py, 25, 0, 7);
    x.fill();
    check();
  }

  function check() {
    const d = x.getImageData(0, 0, c.width, c.height).data;
    let t = 0;
    for (let i = 3; i < d.length; i += 16) if (d[i] === 0) t++;
    if (t / (d.length / 16) > 0.45) {
      done = true;
      c.style.display = 'none';
      confetti();
      $('#enter').style.display = 'inline-block';
    }
  }

  c.addEventListener('pointerdown', e => { drawing = true; scratch(e); });
  c.addEventListener('pointermove', scratch);
  window.addEventListener('pointerup', () => drawing = false);
  $('#enter').onclick = () => show('menu');
})();


/* ===== Quiz ===== */
// (function () {
//   let i = 0, score = 0;

//   function render() {
//     if (i >= CFG.quiz.length) {
//       $('#qText').parentElement.style.display = 'none';
//       const e = $('#qEnd');
//       e.style.display = 'block';
//       e.innerHTML = '<h3>Score: ' + score + ' / ' + CFG.quiz.length + '</h3><p>' + CFG.quizEnd + '</p>';
//       confetti(60);
//       return;
//     }
//     const q = CFG.quiz[i];
//     $('#qCount').textContent = 'Question ' + (i + 1) + ' of ' + CFG.quiz.length;
//     $('#qText').textContent = q.q;
//     const o = $('#qOpts');
//     o.innerHTML = '';
//     q.o.forEach((t, k) => {
//       const b = document.createElement('button');
//       b.textContent = t;
//       b.onclick = () => {
//         o.querySelectorAll('button').forEach(z => z.disabled = true);
//         if (k === q.a) {
//           b.classList.add('right');
//           score++;
//         } else {
//           b.classList.add('wrong');
//           o.children[q.a].classList.add('right');
//         }
//         setTimeout(() => { i++; render(); }, 1100);
//       };
//       o.appendChild(b);
//     });
//   }
//   render();
// })();


/* ===== Reasons ===== */
(function () {
  let n = 0;
  const r = CFG.reasons;
  const heart = $('#heart');
  const colors = ['#ffffff', '#ff3b3b', '#ff8a3d', '#f5b942', '#a855f7', '#3b82f6', '#2dd4bf', '#c2185b'];

  heart.onclick = () => {
    $('#reason').textContent = r[n % r.length];
    n++;
    $('#rCount').textContent = 'Reason ' + n;
    heart.style.color = colors[n % colors.length];
    if (n % r.length === 0) confetti(25);
  };
})();


/* ===== Letters ===== */
CFG.letters.forEach(l => {
  const b = document.createElement('button');
  b.className = 'env';
  b.innerHTML = '<strong></strong><div class="letter"></div>';
  b.querySelector('strong').textContent = l.t;
  b.querySelector('.letter').textContent = l.m + '  — ' + CFG.fromName;
  b.onclick = () => b.classList.toggle('open');
  $('#lettersBox').appendChild(b);
});