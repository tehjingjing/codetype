// All game categories and corresponding vocabulary lists
const CATEGORIES = [
  {
    id: 'js',
    name: 'JavaScript',
    icon: '⬡',
    color: '#f7df1e',
    desc: 'Variables, methods, concepts',
    words: [
      {w:'const',h:'block-scoped constant declaration'},
      {w:'typeof',h:'returns type of a value as string'},
      {w:'undefined',h:'variable declared but not assigned'},
      {w:'prototype',h:'object from which others inherit'},
      {w:'closure',h:'function retaining its outer scope'},
      {w:'callback',h:'function passed as an argument'},
      {w:'promise',h:'represents a future async value'},
      {w:'async',h:'marks a function as asynchronous'},
      {w:'await',h:'pauses execution until promise resolves'},
      {w:'destructuring',h:'extract values from arrays or objects'},
      {w:'spread',h:'expands iterable into individual elements'},
      {w:'hoisting',h:'declarations moved to top of scope'},
      {w:'event',h:'action triggering a listener response'},
      {w:'forEach',h:'iterates over each array element'},
      {w:'filter',h:'returns elements passing a test'},
      {w:'reduce',h:'accumulates array into a single value'},
      {w:'fetch',h:'makes HTTP requests, returns promise'},
      {w:'localStorage',h:'persists key-value data in browser'},
      {w:'querySelector',h:'selects first matching DOM element'},
      {w:'addEventListener',h:'attaches handler to DOM event'},
      {w:'let',h:'block-scoped variable declaration'},
      {w:'this',h:'refers to current execution context'},
      {w:'arrow',h:'short anonymous function syntax'},
      {w:'setTimeout',h:'executes code after a delay'},
      {w:'sessionStorage',h:'temporary browser key-value storage'}
    ]
  },
  {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    color: '#4b8bbe',
    desc: 'Syntax, builtins, concepts',
    words: [
      {w:'lambda',h:'anonymous single-expression function'},
      {w:'comprehension',h:'concise way to create lists or dicts'},
      {w:'decorator',h:'wraps a function to extend behavior'},
      {w:'generator',h:'yields values one at a time lazily'},
      {w:'enumerate',h:'adds index to an iterable'},
      {w:'dictionary',h:'key-value mapping data structure'},
      {w:'isinstance',h:'checks if object is of a type'},
      {w:'inheritance',h:'subclass derives from parent class'},
      {w:'exception',h:'error raised during execution'},
      {w:'virtualenv',h:'isolated Python environment'},
      {w:'recursion',h:'function calling itself'},
      {w:'unpacking',h:'assign iterable values to variables'},
      {w:'dataclass',h:'auto-generates boilerplate class methods'},
      {w:'pathlib',h:'object-oriented filesystem paths'},
      {w:'asyncio',h:'library for async concurrent code'},
      {w:'module',h:'importable code file or library'},
      {w:'tuple',h:'immutable sequence of elements'},
      {w:'set',h:'unordered collection of unique items'},
      {w:'try',h:'begins exception handling block'},
      {w:'import',h:'load external module or package'},
      {w:'yield',h:'returns value from generator function'},
      {w:'super',h:'access methods from parent class'},
      {w:'pickle',h:'serializes and deserializes Python objects'},
      {w:'regex',h:'regular expression for pattern matching'},
      {w:'threading',h:'library for multi-thread execution'}
    ]
  },
  {
    id: 'webdev',
    name: 'Web Dev',
    icon: '🌐',
    color: '#e44d26',
    desc: 'HTML, CSS, HTTP terms',
    words: [
      {w:'flexbox',h:'1D CSS layout model'},
      {w:'viewport',h:'visible area of the browser window'},
      {w:'responsive',h:'adapts layout to screen size'},
      {w:'specificity',h:'CSS rule priority ranking'},
      {w:'cascade',h:'order CSS rules are applied'},
      {w:'semantic',h:'HTML conveying meaning, not style'},
      {w:'accessibility',h:'usable by people with disabilities'},
      {w:'websocket',h:'persistent two-way connection'},
      {w:'CORS',h:'cross-origin resource sharing policy'},
      {w:'REST',h:'stateless HTTP API design style'},
      {w:'middleware',h:'code between request and response'},
      {w:'bundler',h:'combines modules into fewer files'},
      {w:'grid',h:'two-dimensional CSS layout system'},
      {w:'fallback',h:'alternative style when property fails'},
      {w:'mediaquery',h:'applies styles based on device conditions'},
      {w:'doctype',h:'declares document type to browser'},
      {w:'hyperlink',h:'clickable navigation link'},
      {w:'form',h:'collects user input on web page'},
      {w:'cookie',h:'small data stored on client browser'},
      {w:'cdn',h:'content delivery network for static assets'},
      {w:'minify',h:'reduce file size by removing extra characters'},
      {w:'hover',h:'CSS state when cursor hovers over element'},
      {w:'transition',h:'smooth animation for style changes'},
      {w:'transform',h:'modify position, size or shape of element'},
      {w:'pseudo-class',h:'selector for special element states'}
    ]
  },
  {
    id: 'cs',
    name: 'CS Concepts',
    icon: '🧠',
    color: '#7c6fff',
    desc: 'Algorithms, data structures',
    words: [
      {w:'recursion',h:'a function that calls itself'},
      {w:'Big-O',h:'notation for algorithm complexity'},
      {w:'linked-list',h:'nodes connected by pointers'},
      {w:'binary-tree',h:'each node has at most two children'},
      {w:'hashing',h:'maps data to fixed-size values'},
      {w:'stack',h:'last in, first out structure'},
      {w:'queue',h:'first in, first out structure'},
      {w:'memoization',h:'cache results of function calls'},
      {w:'polymorphism',h:'same interface, different behavior'},
      {w:'abstraction',h:'hiding complexity behind interface'},
      {w:'inheritance',h:'derive properties from parent class'},
      {w:'encapsulation',h:'bundle data and methods together'},
      {w:'array',h:'ordered collection of elements'},
      {w:'iterator',h:'traverse elements in a collection'},
      {w:'graph',h:'nodes connected by edges'},
      {w:'sorting',h:'process to arrange data in order'},
      {w:'searching',h:'find target item in data set'},
      {w:'bitwise',h:'operations on individual binary bits'},
      {w:'heap',h:'tree-based priority queue structure'},
      {w:'hashmap',h:'key-value lookup using hash function'},
      {w:'deque',h:'double-ended queue for fast add and remove'},
      {w:'binary-search',h:'fast search on sorted data'},
      {w:'bubble-sort',h:'simple adjacent element swapping sort'},
      {w:'depth-first',h:'traverse tree by exploring as far as possible'},
      {w:'breadth-first',h:'traverse tree level by level'}
    ]
  },
  {
    id: 'git',
    name: 'Git / DevOps',
    icon: '⎇',
    color: '#f05032',
    desc: 'Commands and concepts',
    words: [
      {w:'commit',h:'snapshot of staged changes'},
      {w:'branch',h:'parallel line of development'},
      {w:'merge',h:'integrate changes from another branch'},
      {w:'rebase',h:'move commits onto another base'},
      {w:'stash',h:'temporarily shelve uncommitted changes'},
      {w:'cherry-pick',h:'apply a specific commit'},
      {w:'pull-request',h:'propose changes for review'},
      {w:'pipeline',h:'automated CI/CD workflow'},
      {w:'container',h:'isolated runtime environment'},
      {w:'clone',h:'copy repository to local machine'},
      {w:'fetch',h:'download remote updates without merge'},
      {w:'push',h:'upload local commits to remote repo'},
      {w:'tag',h:'mark specific commit version'},
      {w:'fork',h:'create personal copy of a repository'},
      {w:'workflow',h:'sequence of development operations'},
      {w:'remote',h:'link to online repository server'},
      {w:'checkout',h:'switch branch or restore file state'},
      {w:'reset',h:'undo commits or staged changes'},
      {w:'revert',h:'create new commit to reverse changes'},
      {w:'conflict',h:'overlapping edits from different branches'},
      {w:'stage',h:'mark changes ready for commit'},
      {w:'log',h:'view history of all commits'},
      {w:'diff',h:'show differences between file versions'},
      {w:'docker',h:'tool to build and run containers'},
      {w:'deploy',h:'release project to production server'}
    ]
  },
  {
    id: 'java',
    name: 'Java',
    icon: '☕',
    color: '#e76f00',
    desc: 'Java programming keywords',
    words: [
      {w:'public',h:'public access modifier'},
      {w:'class',h:'blueprint for objects'},
      {w:'static',h:'belongs to the class'},
      {w:'void',h:'no return value'},
      {w:'return',h:'send back a value'},
      {w:'int',h:'integer data type'},
      {w:'string',h:'sequence of characters'},
      {w:'boolean',h:'true or false value'},
      {w:'if',h:'conditional statement'},
      {w:'else',h:'alternative condition'},
      {w:'while',h:'repeats code while condition true'},
      {w:'break',h:'exits a loop or switch statement'},
      {w:'continue',h:'skips to next loop iteration'},
      {w:'private',h:'private access modifier'},
      {w:'protected',h:'access for class and subclasses'},
      {w:'final',h:'value or reference cannot be changed'},
      {w:'extends',h:'create subclass from parent class'},
      {w:'implements',h:'follow rules of an interface'},
      {w:'interface',h:'contract for class methods'},
      {w:'throws',h:'declare possible exceptions'},
      {w:'try',h:'start exception handling block'},
      {w:'catch',h:'handle caught runtime exceptions'},
      {w:'package',h:'organize related Java classes'},
      {w:'import',h:'include external class or package'},
      {w:'this',h:'reference current class instance'}
    ]
  },
  {
    id: 'cpp',
    name: 'C / C++',
    icon: '⚙️',
    color: '#659ad2',
    desc: 'C & C++ coding keywords',
    words: [
      {w:'include',h:'include header file'},
      {w:'define',h:'define a macro'},
      {w:'struct',h:'custom structure'},
      {w:'pointer',h:'memory pointer'},
      {w:'malloc',h:'dynamic memory allocation'},
      {w:'free',h:'release allocated memory'},
      {w:'printf',h:'standard print output'},
      {w:'scanf',h:'standard input scan'},
      {w:'int',h:'integer data type'},
      {w:'float',h:'floating point type'},
      {w:'char',h:'character data type'},
      {w:'void',h:'no return value'},
      {w:'if',h:'conditional statement'},
      {w:'else',h:'else condition'},
      {w:'for',h:'for loop structure'},
      {w:'while',h:'while loop structure'},
      {w:'return',h:'return function value'},
      {w:'class',h:'object oriented class'},
      {w:'public',h:'public access modifier'},
      {w:'private',h:'private access modifier'},
      {w:'const',h:'define unchangeable value'},
      {w:'namespace',h:'avoid name conflicts in code'},
      {w:'template',h:'create generic reusable code'},
      {w:'bool',h:'boolean true or false type'},
      {w:'extern',h:'declare variable from another file'}
    ]
  },
];

// Difficulty settings: time limit and score multiplier
const DIFF_CONFIG = {
  easy:   { time: 60, label: 'Easy · 60s',   scoreMult: 1 },
  medium: { time: 45, label: 'Medium · 45s',  scoreMult: 1.5 },
  hard:   { time: 30, label: 'Hard · 30s',    scoreMult: 2 },
};

// Store currently selected difficulty
let selectedDiff = 'easy';
// Get container for category cards
const catGrid = document.getElementById('cat-grid');

// Dynamically generate category cards on page load
CATEGORIES.forEach(cat => {
  const card = document.createElement('div');
  card.className = 'cat-card';
  card.style.setProperty('--cat-color', cat.color);
  card.innerHTML = `
    <span class="cat-icon">${cat.icon}</span>
    <div class="cat-name">${cat.name}</div>
    <div class="cat-desc">${cat.desc}</div>
    <div class="cat-count">${cat.words.length} words</div>`;
  // Start game when clicking category card
  card.addEventListener('click', () => startGame(cat));
  catGrid.appendChild(card);
});

// Difficulty button click event
document.getElementById('diff-row').addEventListener('click', e => {
  const btn = e.target.closest('.diff-btn');
  if(!btn) return;
  // Remove active state from all buttons
  document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedDiff = btn.dataset.diff;
});

// ========== Game Global Variables ==========
let currentCat = null; // Current selected category
let wordQueue = []; // Shuffled word list for current round
let wordIndex = 0; // Current word index
let totalTime = 30; // Total countdown time
let timeLeft = 30; // Time remaining
let timerInterval = null; // Timer interval ID
let gameActive = false; // Game running state
let hits = 0, misses = 0, score = 0, startTime = null;
let missedWords = []; // Store incorrectly typed words
let wpmHistory = []; // Record WPM over time for chart
let lastWpmCheck = 0; // Timestamp for periodic WPM record

// Fisher-Yates shuffle algorithm
function shuffle(arr) {
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}

// Switch between different game screens
function showScreen(id) {
  ['screen-select','screen-game','screen-result'].forEach(s =>
    document.getElementById(s).classList.toggle('active', s===id));
}

// Initialize and start a new game round
function startGame(cat) {
  currentCat = cat;
  wordQueue = shuffle(cat.words);
  wordIndex = 0;
  hits = 0; misses = 0; score = 0;
  missedWords = []; wpmHistory = [];
  gameActive = false;
  startTime = null;

  const diff = DIFF_CONFIG[selectedDiff];
  totalTime = diff.time;
  timeLeft = diff.time;

  // Reset all HUD elements
  document.getElementById('game-cat-label').textContent = cat.icon + '  ' + cat.name;
  document.getElementById('game-cat-label').style.color = cat.color;
  document.getElementById('hud-time').textContent = totalTime + 's';
  document.getElementById('hud-wpm').textContent = '0';
  document.getElementById('hud-acc').textContent = '100%';
  document.getElementById('hud-score').textContent = '0';
  document.getElementById('timer-fill').style.width = '100%';
  document.getElementById('timer-fill').style.background = 'var(--acc)';
  document.getElementById('feedback-strip').innerHTML = '';

  showScreen('screen-game');
  renderWord();
  renderQueue();
  document.getElementById('type-input').value = '';
  document.getElementById('type-input').focus();

  // 3-2-1-GO countdown before game starts
  const cd = document.getElementById('countdown');
  const cnNum = document.getElementById('cn-num');
  cd.classList.remove('hidden');
  let count = 3;
  cnNum.textContent = count;
  const cdInterval = setInterval(() => {
    count--;
    if(count === 0) {
      cnNum.textContent = 'GO!';
      setTimeout(() => {
        cd.classList.add('hidden');
        gameActive = true;
        startTime = Date.now();
        timerInterval = setInterval(tick, 100);
        document.getElementById('type-input').focus();
      }, 400);
      clearInterval(cdInterval);
    } else {
      cnNum.textContent = count;
      cnNum.classList.remove('cn');
      void cnNum.offsetWidth;
      cnNum.classList.add('cn');
    }
  }, 800);
}

// Main game timer logic, runs every 100ms
function tick() {
  if(!gameActive) return;
  // Calculate remaining time
  timeLeft = Math.max(0, totalTime - (Date.now() - startTime) / 1000);
  const pct = timeLeft / totalTime * 100;
  document.getElementById('timer-fill').style.width = pct + '%';
  // Change progress bar color based on remaining time
  if(pct < 25) document.getElementById('timer-fill').style.background = 'var(--miss)';
  else if(pct < 50) document.getElementById('timer-fill').style.background = 'var(--warn)';
  document.getElementById('hud-time').textContent = Math.ceil(timeLeft) + 's';

  // Calculate current WPM
  const elapsed = (Date.now() - startTime) / 60000;
  const currentWpm = elapsed > 0 ? Math.round(hits / elapsed) : 0;
  document.getElementById('hud-wpm').textContent = currentWpm;

  // Record WPM every 5 seconds
  if(Date.now() - lastWpmCheck > 5000) {
    wpmHistory.push(currentWpm);
    lastWpmCheck = Date.now();
  }
  // End game when time runs out
  if(timeLeft <= 0) endGame();
}

// Render current target word and split into single letters
function renderWord() {
  if(wordIndex >= wordQueue.length) {
    wordQueue = shuffle(currentCat.words);
    wordIndex = 0;
  }
  const entry = wordQueue[wordIndex];
  const target = document.getElementById('word-target');
  const hint   = document.getElementById('word-hint');
  const prog   = document.getElementById('word-progress');

  target.innerHTML = '';
  entry.w.split('').forEach((ch, i) => {
    const span = document.createElement('span');
    span.className = 'letter' + (i===0?' active':' pending');
    span.textContent = ch === ' ' ? '\u00a0' : ch;
    span.dataset.i = i;
    target.appendChild(span);
  });

  hint.textContent = entry.h ? '// ' + entry.h : '';
  prog.textContent = `word ${wordIndex+1} of ${wordQueue.length}`;
}

// Render preview of next 5 upcoming words
function renderQueue() {
  const row = document.getElementById('queue-row');
  row.innerHTML = '';
  for(let i=1; i<=5; i++) {
    const idx = (wordIndex + i) % wordQueue.length;
    const el = document.createElement('div');
    el.className = 'queue-word' + (i===1?' next':'');
    el.textContent = wordQueue[idx].w;
    row.appendChild(el);
  }
}

const typeInput = document.getElementById('type-input');

// Listen for Enter / Space to submit current word
typeInput.addEventListener('keydown', e => {
  if(!gameActive) return;
  if(e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    submitWord();
  }
});

// Real-time input detection & letter status update
typeInput.addEventListener('input', () => {
  if(!gameActive) return;
  const typed = typeInput.value;
  const target = wordQueue[wordIndex % wordQueue.length].w;
  const letters = document.querySelectorAll('.letter');

  letters.forEach((el, i) => {
    if(i < typed.length) {
      const ch = target[i] || '';
      el.classList.remove('active','pending','correct','wrong');
      el.classList.add(typed[i] === ch ? 'correct' : 'wrong');
    } else if(i === typed.length) {
      el.classList.remove('correct','wrong','pending');
      el.classList.add('active');
    } else {
      el.classList.remove('correct','wrong','active');
      el.classList.add('pending');
    }
  });
});

// Submit current typed word and judge result
function submitWord() {
  const typed  = typeInput.value.trim();
  const target = wordQueue[wordIndex % wordQueue.length].w;
  if(!typed) return;

  const diff = DIFF_CONFIG[selectedDiff];
  const correct = typed === target;

  if(correct) {
    hits++;
    const elapsed = (Date.now() - startTime) / 1000;
    const wpm = Math.round(hits / (elapsed / 60));
    score += Math.round((target.length * 10 + wpm) * diff.scoreMult);
    flashInput('correct-flash');
    addFeedback('✓ ' + target, 'correct');
  } else {
    misses++;
    missedWords.push({ typed, correct: target });
    flashInput('wrong-flash');
    addFeedback('✗ ' + target, 'wrong');
  }

  // Calculate accuracy
  const total = hits + misses;
  const acc = total > 0 ? Math.round(hits/total*100) : 100;
  document.getElementById('hud-acc').textContent = acc + '%';
  document.getElementById('hud-score').textContent = score;

  // Move to next word
  wordIndex++;
  typeInput.value = '';
  renderWord();
  renderQueue();
}

// Add temporary flash effect to input box on correct/wrong submission
function flashInput(cls) {
  typeInput.classList.remove('correct-flash','wrong-flash');
  void typeInput.offsetWidth;
  typeInput.classList.add(cls);
  setTimeout(() => typeInput.classList.remove(cls), 300);
}

// Add floating feedback badge (correct / wrong)
function addFeedback(text, type) {
  const strip = document.getElementById('feedback-strip');
  const badge = document.createElement('div');
  badge.className = 'fb-badge ' + type;
  badge.textContent = text;
  strip.insertBefore(badge, strip.firstChild);
  // Keep maximum 4 feedback badges
  while(strip.children.length > 4) strip.removeChild(strip.lastChild);
}

// End game and show result page
function endGame() {
  gameActive = false;
  clearInterval(timerInterval);
  typeInput.blur();

  // Calculate final WPM and accuracy
  const elapsed = Math.max((Date.now() - startTime) / 60000, 0.01);
  const finalWpm = Math.round(hits / elapsed);
  const total = hits + misses;
  const acc = total > 0 ? Math.round(hits/total*100) : 100;

  // Set result page text content
  document.getElementById('res-title').textContent =
    acc >= 90 ? '🏆 Excellent!' : acc >= 70 ? '👍 Nice run!' : '💪 Keep practicing!';
  document.getElementById('res-sub').textContent =
    currentCat.icon + '  ' + currentCat.name + ' · ' + DIFF_CONFIG[selectedDiff].label;
  document.getElementById('res-wpm').textContent  = finalWpm;
  document.getElementById('res-acc').textContent  = acc + '%';
  document.getElementById('res-score').textContent = score;
  document.getElementById('res-words').textContent = total;

  // Draw WPM history bar chart
  wpmHistory.push(finalWpm);
  const chart = document.getElementById('wpm-chart');
  chart.innerHTML = '';
  const maxWpm = Math.max(...wpmHistory, 1);
  wpmHistory.forEach(v => {
    const bar = document.createElement('div');
    bar.className = 'bar-seg';
    bar.style.height = Math.round(v/maxWpm*46) + 'px';
    bar.title = v + ' WPM';
    chart.appendChild(bar);
  });

  // Show missed words list
  const missedList = document.getElementById('missed-list');
  missedList.innerHTML = '';
  document.getElementById('missed-block').style.display = missedWords.length ? '' : 'none';
  missedWords.slice(0,15).forEach(m => {
    const el = document.createElement('span');
    el.className = 'missed-word';
    el.textContent = m.correct;
    el.title = 'You typed: ' + m.typed;
    missedList.appendChild(el);
  });

  showScreen('screen-result');
}

// Back button: return to category selection
document.getElementById('btn-back').addEventListener('click', () => {
  gameActive = false; clearInterval(timerInterval);
  document.getElementById('countdown').classList.add('hidden');
  showScreen('screen-select');
});

// Retry current category
document.getElementById('btn-retry').addEventListener('click', () => startGame(currentCat));

// Return to category selection page
document.getElementById('btn-cats').addEventListener('click', () => {
  gameActive = false; clearInterval(timerInterval);
  showScreen('screen-select');
});