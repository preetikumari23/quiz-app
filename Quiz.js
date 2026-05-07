
const QB = {

    /* ── WEB DEVELOPMENT ── */
    webdev: {
        easy: [
            {
                q: "What does HTML stand for?",
                o: ["HyperText Markup Language", "HyperLink Text Markup Language", "High Technology Markup Language", "HyperText Modeling Language"],
                a: 0
            },
            {
                q: "What does CSS stand for?",
                o: ["Cascading Style Sheets", "Creative Style Syntax", "Colorful Style System", "Computer Style Sheets"],
                a: 0
            },
            {
                q: "Which HTML tag creates the largest heading?",
                o: ["<h1>", "<h6>", "<header>", "<big>"],
                a: 0
            },
            {
                q: "Which HTML tag is used to create a hyperlink?",
                o: ["<a>", "<link>", "<href>", "<nav>"],
                a: 0
            },
            {
                q: "In CSS, which property changes the text color?",
                o: ["color", "font-color", "text-color", "foreground"],
                a: 0
            },
            {
                q: "What does the 'src' attribute in <img> specify?",
                o: ["The image file URL", "The image size", "The image style", "The image tooltip"],
                a: 0
            }
        ],

        medium: [
            {
                q: "What does DOM stand for?",
                o: ["Document Object Model", "Data Object Module", "Document Order Map", "Dynamic Object Mode"],
                a: 0
            },
            {
                q: "What does HTTP stand for?",
                o: ["HyperText Transfer Protocol", "HyperText Transmission Process", "HyperLink Transfer Protocol", "High-Tech Transfer Protocol"],
                a: 0
            },
            {
                q: "Which JavaScript method adds an element to the END of an array?",
                o: ["push()", "pop()", "shift()", "append()"],
                a: 0
            },
            {
                q: "What does JSON stand for?",
                o: ["JavaScript Object Notation", "JavaScript Online Notation", "Java Standard Object Node", "JavaScript Output Network"],
                a: 0
            },
            {
                q: "Which keyword declares a block-scoped variable in modern JavaScript?",
                o: ["let", "var", "int", "declare"],
                a: 0
            },
            {
                q: "What CSS property value enables Flexbox layout?",
                o: ["display: flex", "float: flex", "position: flex", "flex: block"],
                a: 0
            }
        ],

        hard: [
            {
                q: "What does CORS stand for in web development?",
                o: ["Cross-Origin Resource Sharing", "Cross-Object Routing System", "Client-Origin Response Standard", "Cross-Origin Request State"],
                a: 0
            },
            {
                q: "What is a JavaScript closure?",
                o: [
                    "A function retaining access to its outer scope after that scope has returned",
                    "A method for closing browser windows",
                    "A CSS technique for hiding elements",
                    "A way to end JavaScript execution"
                ],
                a: 0
            },
            {
                q: "What is the key difference between == and === in JavaScript?",
                o: [
                    "=== checks value AND type; == only checks value",
                    "They are identical in all cases",
                    "== checks value and type; === only checks value",
                    "=== is for strings; == is for numbers"
                ],
                a: 0
            },
            {
                q: "What does REST stand for in web development?",
                o: [
                    "Representational State Transfer",
                    "Remote Execution Standard Technology",
                    "Resource Exchange Streaming Technology",
                    "Responsive Element State Transfer"
                ],
                a: 0
            },
            {
                q: "What is the primary purpose of async/await in JavaScript?",
                o: [
                    "Handle async operations in a synchronous-looking way",
                    "Make code run on multiple CPU threads",
                    "Compress JavaScript files automatically",
                    "Enable server-side rendering"
                ],
                a: 0
            },
            {
                q: "What is the Virtual DOM used for in frameworks like React?",
                o: [
                    "A lightweight copy of the real DOM to optimise UI updates",
                    "Creating 3D animations in the browser",
                    "A server-side rendering API",
                    "Storing component state externally"
                ],
                a: 0
            }
        ]
    },

    /* ── MATHEMATICS ── */
    math: {
        easy: [
            {
                q: "What is 15% of 200?",
                o: ["30", "25", "35", "20"],
                a: 0
            },
            {
                q: "What is the square root of 144?",
                o: ["12", "14", "11", "13"],
                a: 0
            },
            {
                q: "What is 7 × 8?",
                o: ["56", "54", "58", "48"],
                a: 0
            },
            {
                q: "How many sides does a hexagon have?",
                o: ["6", "5", "7", "8"],
                a: 0
            },
            {
                q: "What is 2¹⁰ (2 to the power of 10)?",
                o: ["1024", "512", "2048", "256"],
                a: 0
            },
            {
                q: "What is the perimeter of a square with side length 5 cm?",
                o: ["20 cm", "25 cm", "15 cm", "10 cm"],
                a: 0
            }
        ],

        medium: [
            {
                q: "Solve for x: 3x + 7 = 22",
                o: ["x = 5", "x = 7", "x = 4", "x = 6"],
                a: 0
            },
            {
                q: "What is the area of a circle with radius 7? (Use π ≈ 3.14)",
                o: ["153.86", "43.98", "49", "78.54"],
                a: 0
            },
            {
                q: "What is the sum of interior angles in a triangle?",
                o: ["180°", "360°", "270°", "90°"],
                a: 0
            },
            {
                q: "What is log₂(64)?",
                o: ["6", "8", "32", "4"],
                a: 0
            },
            {
                q: "A train travels at 80 km/h for 3.5 hours. How far does it travel?",
                o: ["280 km", "240 km", "315 km", "260 km"],
                a: 0
            },
            {
                q: "What is the median of: 3, 7, 2, 9, 5?",
                o: ["5", "7", "3", "5.2"],
                a: 0
            }
        ],

        hard: [
            {
                q: "What is the derivative of f(x) = x³ + 2x²?",
                o: ["3x² + 4x", "x² + 2x", "3x³ + 4x²", "2x³ + 4x"],
                a: 0
            },
            {
                q: "What is the integral of sin(x) dx?",
                o: ["−cos(x) + C", "cos(x) + C", "−sin(x) + C", "tan(x) + C"],
                a: 0
            },
            {
                q: "What are the roots of x² − 5x + 6 = 0?",
                o: ["x = 2 and x = 3", "x = 1 and x = 6", "x = −2 and x = −3", "x = 2 and x = −3"],
                a: 0
            },
            {
                q: "What is Euler's number (e) approximately equal to?",
                o: ["2.718", "3.141", "1.618", "2.302"],
                a: 0
            },
            {
                q: "In a right triangle, if one angle is 30° and the hypotenuse is 10, what is the side opposite to 30°?",
                o: ["5", "8.66", "10", "4"],
                a: 0
            },
            {
                q: "What is the value of i² where i is the imaginary unit?",
                o: ["−1", "1", "i", "−i"],
                a: 0
            }
        ]
    },

    /* ── GENERAL KNOWLEDGE ── */
    gk: {
        easy: [
            {
                q: "What is the capital of France?",
                o: ["Paris", "London", "Berlin", "Madrid"],
                a: 0
            },
            {
                q: "How many continents are there on Earth?",
                o: ["7", "6", "8", "5"],
                a: 0
            },
            {
                q: "What is the largest planet in our solar system?",
                o: ["Jupiter", "Saturn", "Neptune", "Uranus"],
                a: 0
            },
            {
                q: "Which country built the Great Wall?",
                o: ["China", "India", "Japan", "Russia"],
                a: 0
            },
            {
                q: "What is the chemical formula for water?",
                o: ["H₂O", "CO₂", "O₂", "H₂"],
                a: 0
            },
            {
                q: "In which year did World War II end?",
                o: ["1945", "1944", "1946", "1943"],
                a: 0
            }
        ],

        medium: [
            {
                q: "Who wrote the play 'Romeo and Juliet'?",
                o: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain"],
                a: 0
            },
            {
                q: "Which element has the chemical symbol 'Au'?",
                o: ["Gold", "Silver", "Aluminium", "Argon"],
                a: 0
            },
            {
                q: "What is the approximate speed of light in a vacuum?",
                o: ["299,792 km/s", "150,000 km/s", "3,000 km/s", "1,000,000 km/s"],
                a: 0
            },
            {
                q: "Which organ in the human body produces insulin?",
                o: ["Pancreas", "Liver", "Kidney", "Stomach"],
                a: 0
            },
            {
                q: "In what year was the World Wide Web invented?",
                o: ["1989", "1995", "1983", "2001"],
                a: 0
            },
            {
                q: "Which country has the most time zones?",
                o: ["France", "Russia", "USA", "China"],
                a: 0
            }
        ],

        hard: [
            {
                q: "What is the Schrödinger equation primarily used for?",
                o: [
                    "Describing quantum states of particles",
                    "Calculating gravitational forces",
                    "Modelling electromagnetic waves",
                    "Predicting thermodynamic entropy"
                ],
                a: 0
            },
            {
                q: "What is Avogadro's number?",
                o: ["6.022 × 10²³", "6.022 × 10²⁰", "3.14 × 10²³", "9.81 × 10²³"],
                a: 0
            },
            {
                q: "Who first proposed the heliocentric model of the solar system?",
                o: ["Nicolaus Copernicus", "Galileo Galilei", "Johannes Kepler", "Isaac Newton"],
                a: 0
            },
            {
                q: "What is the approximate half-life of Carbon-14?",
                o: ["5,730 years", "1,000 years", "50,000 years", "14,000 years"],
                a: 0
            },
            {
                q: "The Coriolis effect primarily influences which phenomena?",
                o: ["Cyclones and ocean currents", "Ocean tides", "Mountain formation", "Volcanic eruptions"],
                a: 0
            },
            {
                q: "What is the academic study of flags called?",
                o: ["Vexillology", "Heraldry", "Numismatics", "Toponymy"],
                a: 0
            }
        ]
    }
};

const CAT_LABELS = {
    webdev: "Web Dev",
    math: "Mathematics",
    gk: "General Knowledge",
    mixed: "Mixed"
};

const CAT_ICONS = {
    webdev: "💻",
    math: "🔢",
    gk: "🌍"
};

const DIFF_LABELS = {
    easy: "Easy",
    medium: "Medium",
    hard: "Hard"
};

const OPTION_LABELS = ["A", "B", "C", "D"];

let cfg = {
    cat: "webdev",
    diff: "easy",
    count: "5"
};

let quiz = {
    questions: [],
    idx: 0,
    score: 0,
    answers: []
};


/**
 * Fisher-Yates shuffle — mutates and returns the array.
 * @param {Array} arr
 * @returns {Array}
 */
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/**
 * Escape quiz text before inserting it into HTML templates.
 * This keeps answers like "<h1>" visible instead of parsing them as tags.
 * @param {string} value
 * @returns {string}
 */
function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

/**
 * Hide all screens, then show the one with the given id.
 * Re-triggers the CSS animation on each call.
 * @param {string} id  — element id of the target screen
 */
function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    const el = document.getElementById(id);
    el.style.animation = "none";
    el.classList.add("active");
    requestAnimationFrame(() => { el.style.animation = ""; });
}


/**
 * Activate the clicked pill and deactivate siblings in the group.
 * @param {HTMLElement} el       — the clicked pill
 * @param {string}      groupId  — id of the parent pill-group element
 */
function selectPill(el, groupId) {
    document.querySelectorAll(`#${groupId} .pill`).forEach(p => p.classList.remove("active"));
    el.classList.add("active");
}

/**
 * Activate the clicked count button and deactivate siblings.
 * @param {HTMLElement} el — the clicked count button
 */
function selectCount(el) {
    document.querySelectorAll("#count-group .count-btn").forEach(b => b.classList.remove("active"));
    el.classList.add("active");
}


/**
 * Pull questions for a given category + difficulty,
 * tagging each with _cat and _diff for display purposes.
 *
 * @param {string} cat  — "webdev" | "math" | "gk"
 * @param {string} diff — "easy" | "medium" | "hard" | "all"
 * @returns {Array}
 */
function getCatQuestions(cat, diff) {
    if (diff === "all") {
        return [
            ...(QB[cat].easy || []),
            ...(QB[cat].medium || []),
            ...(QB[cat].hard || [])
        ].map(q => ({ ...q, _cat: cat, _diff: "" }));
    }
    return (QB[cat][diff] || []).map(q => ({ ...q, _cat: cat, _diff: diff }));
}

/**
 * Build a shuffled, trimmed list of questions for the current config.
 * Also shuffles the options within each question and tracks the new
 * correct-answer index.
 *
 * @param {string}       cat   — category key or "mixed"
 * @param {string}       diff  — difficulty key or "all"
 * @param {string|number} count — number of questions or "all"
 * @returns {Array}
 */
function buildQuestions(cat, diff, count) {
    let pool = [];

    if (cat === "mixed") {
        ["webdev", "math", "gk"].forEach(c => pool.push(...getCatQuestions(c, diff)));
    } else {
        pool = getCatQuestions(cat, diff);
    }

    shuffle(pool);

    const maxQ = (count === "all") ? pool.length : Math.min(parseInt(count, 10), pool.length);
    const selected = pool.slice(0, maxQ);

    // Shuffle each question's options and recalculate the correct index
    return selected.map(q => {
        const opts = q.o.map((text, i) => ({ text, origIdx: i }));
        shuffle(opts);
        const correctIdx = opts.findIndex(o => o.origIdx === q.a);
        return { ...q, shuffledOpts: opts, correctIdx };
    });
}


/** Navigate to the settings screen. */
function goToSettings() {
    showScreen("screen-settings");
}

/** Read current settings, build the question pool, and start the quiz. */
function startQuiz() {
    const catEl = document.querySelector("#cat-group  .pill.active");
    const diffEl = document.querySelector("#diff-group .pill.active");
    const cntEl = document.querySelector("#count-group .count-btn.active");

    cfg.cat = catEl ? catEl.dataset.val : "webdev";
    cfg.diff = diffEl ? diffEl.dataset.val : "easy";
    cfg.count = cntEl ? cntEl.dataset.val : "5";

    quiz.questions = buildQuestions(cfg.cat, cfg.diff, cfg.count);

    if (!quiz.questions.length) {
        alert("No questions found for this combination. Please try different settings.");
        return;
    }

    quiz.idx = 0;
    quiz.score = 0;
    quiz.answers = [];

    showScreen("screen-quiz");
    renderQuestion();
}

/** Replay with the same settings. */
function retryQuiz() {
    startQuiz();
}


/** Render the current question (quiz.idx) to the DOM. */
function renderQuestion() {
    const q = quiz.questions[quiz.idx];
    const total = quiz.questions.length;
    const num = quiz.idx + 1;

    // Counter + labels
    document.getElementById("q-current").textContent = num;
    document.getElementById("q-total").textContent = total;
    document.getElementById("q-number-label").textContent = `QUESTION ${num}`;
    document.getElementById("q-text").textContent = q.q;
    document.getElementById("live-score").textContent = quiz.score;

    // Progress bar (based on questions completed so far)
    const pct = (quiz.idx / total) * 100;
    document.getElementById("progress-fill").style.width = pct + "%";

    // Category badge
    const catKey = (q._cat && q._cat !== "") ? q._cat : cfg.cat;
    const catLabel = CAT_LABELS[catKey] || CAT_LABELS[cfg.cat];
    document.getElementById("q-cat-badge").textContent = (CAT_ICONS[catKey] || "🎯") + " " + catLabel;

    // Difficulty badge
    const diffKey = (q._diff && q._diff !== "") ? q._diff : (cfg.diff === "all" ? "" : cfg.diff);
    const diffBadge = document.getElementById("q-diff-badge");
    if (diffKey) {
        diffBadge.textContent = DIFF_LABELS[diffKey] || diffKey;
        diffBadge.className = "badge badge-" + diffKey;
        diffBadge.style.display = "";
    } else {
        diffBadge.style.display = "none";
    }

    // Build option buttons
    const grid = document.getElementById("options-grid");
    grid.innerHTML = "";

    q.shuffledOpts.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";

        const label = document.createElement("span");
        label.className = "option-label";
        label.textContent = OPTION_LABELS[i];

        const text = document.createElement("span");
        text.className = "option-text";
        text.textContent = opt.text;

        btn.append(label, text);
        btn.onclick = () => selectAnswer(i, btn);
        grid.appendChild(btn);
    });

    // Hide Next button until an answer is chosen
    document.getElementById("next-btn").classList.add("hidden");
}


/**
 * Handle the user's answer choice.
 * @param {number}      selectedIdx — index of the chosen option (0-3)
 * @param {HTMLElement} clickedBtn  — the button element the user clicked
 */
function selectAnswer(selectedIdx, clickedBtn) {
    const q = quiz.questions[quiz.idx];
    const buttons = document.querySelectorAll(".option-btn");

    // Disable all buttons to prevent double-answering
    buttons.forEach(b => { b.disabled = true; });

    const isCorrect = (selectedIdx === q.correctIdx);

    if (isCorrect) {
        clickedBtn.classList.add("correct");
        quiz.score++;
    } else {
        clickedBtn.classList.add("wrong");
        // Highlight the actual correct option
        buttons[q.correctIdx].classList.add("reveal");
    }

    // Record this answer for the review section
    quiz.answers.push({
        q: q.q,
        yourAnswer: q.shuffledOpts[selectedIdx].text,
        correctAnswer: q.shuffledOpts[q.correctIdx].text,
        correct: isCorrect
    });

    document.getElementById("live-score").textContent = quiz.score;

    // Show Next button (last question → "See Results")
    const nextBtn = document.getElementById("next-btn");
    nextBtn.textContent = (quiz.idx === quiz.questions.length - 1) ? "See Results 🏆" : "Next →";
    nextBtn.classList.remove("hidden");
}

/** Advance to the next question or show results. */
function nextQuestion() {
    quiz.idx++;
    if (quiz.idx >= quiz.questions.length) {
        showResults();
    } else {
        renderQuestion();
    }
}


/** Calculate scores, animate the ring, and populate the review list. */
function showResults() {
    showScreen("screen-result");

    const total = quiz.questions.length;
    const correct = quiz.score;
    const wrong = total - correct;
    const pct = Math.round((correct / total) * 100);

    // Stats
    document.getElementById("result-pct").textContent = pct + "%";
    document.getElementById("stat-correct").textContent = correct;
    document.getElementById("stat-wrong").textContent = wrong;
    document.getElementById("stat-total").textContent = total;
    document.getElementById("result-sub").textContent = `You answered ${correct} out of ${total} correctly`;

    // Performance rating
    let title, emoji;
    if (pct === 100) { title = "Perfect Score!"; emoji = "🏆"; }
    else if (pct >= 80) { title = "Excellent!"; emoji = "🎉"; }
    else if (pct >= 60) { title = "Good Job!"; emoji = "👍"; }
    else if (pct >= 40) { title = "Keep Practising!"; emoji = "💪"; }
    else { title = "Keep Going!"; emoji = "📚"; }

    document.getElementById("result-title").textContent = emoji + " " + title;

    // Animate the SVG ring (circumference = 2π × 52 ≈ 326.7)
    const circumference = 2 * Math.PI * 52;
    setTimeout(() => {
        document.getElementById("ring-fill").style.strokeDashoffset =
            circumference - (pct / 100) * circumference;
    }, 100);

    // Populate answer review list
    const reviewList = document.getElementById("review-list");
    reviewList.innerHTML = "";

    quiz.answers.forEach((ans, i) => {
        const div = document.createElement("div");
        div.className = "review-item" + (ans.correct ? " got-right" : "");
        div.innerHTML = `
      <div class="review-q">${i + 1}. ${escapeHTML(ans.q)}</div>
      <div class="review-answers">
        ${!ans.correct
                ? `<div class="review-answer your-wrong">✗ Your answer: ${escapeHTML(ans.yourAnswer)}</div>`
                : ""}
        <div class="review-answer correct-one">
          ✓ ${ans.correct ? "Your answer (correct)" : "Correct answer"}: ${escapeHTML(ans.correctAnswer)}
        </div>
      </div>`;
        reviewList.appendChild(div);
    });

    // Reset toggle state
    document.getElementById("review-list").classList.add("hidden");
    document.getElementById("review-arrow").textContent = "▼";
}

/**
 * Toggle the answer review panel open / closed.
 * @param {HTMLElement} btn — the toggle button element
 */
function toggleReview(btn) {
    const list = document.getElementById("review-list");
    const arrow = document.getElementById("review-arrow");
    const isHidden = list.classList.contains("hidden");
    list.classList.toggle("hidden", !isHidden);
    arrow.textContent = isHidden ? "▲" : "▼";
}
