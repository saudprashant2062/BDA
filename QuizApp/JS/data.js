// Quiz Questions Data
const quizData = {
    javascript: {
        name: "JavaScript",
        icon: "fab fa-js",
        color: "yellow",
        questions: {
            easy: [
                {
                    question: "What does 'DOM' stand for?",
                    options: ["Document Object Model", "Data Object Model", "Digital Oriented Method", "Document Orientation Model"],
                    correct: 0
                },
                {
                    question: "Which symbol is used for single-line comments in JavaScript?",
                    options: ["//", "/*", "#", "<!--"],
                    correct: 0
                },
                {
                    question: "What is the correct way to declare a variable in JavaScript?",
                    options: ["variable x = 5", "let x = 5", "dim x = 5", "int x = 5"],
                    correct: 1
                },
                {
                    question: "Which method is used to parse a string to an integer?",
                    options: ["parseInt()", "parseInteger()", "toInteger()", "convertInt()"],
                    correct: 0
                },
                {
                    question: "What does '===' operator do?",
                    options: ["Assigns value", "Compares value only", "Compares value and type", "None of the above"],
                    correct: 2
                },
                {
                    question: "Which keyword is used to declare a constant?",
                    options: ["var", "let", "const", "constant"],
                    correct: 2
                },
                {
                    question: "What is the output of: typeof null?",
                    options: ["null", "undefined", "object", "boolean"],
                    correct: 2
                },
                {
                    question: "How do you create a function in JavaScript?",
                    options: ["function myFunction()", "def myFunction()", "create myFunction()", "func myFunction()"],
                    correct: 0
                },
                {
                    question: "Which method adds an element to the end of an array?",
                    options: ["push()", "add()", "append()", "insert()"],
                    correct: 0
                },
                {
                    question: "What is the correct way to write an array?",
                    options: ["var colors = (1:'red', 2:'green')", "var colors = 'red', 'green'", "var colors = ['red', 'green']", "var colors = {red, green}"],
                    correct: 2
                }
            ],
            medium: [
                {
                    question: "What is a closure in JavaScript?",
                    options: ["A function inside another function", "A way to close the browser", "A type of loop", "A CSS property"],
                    correct: 0
                },
                {
                    question: "What does the 'this' keyword refer to?",
                    options: ["The global object", "The current object", "The parent object", "It depends on context"],
                    correct: 3
                },
                {
                    question: "Which method is used to remove the last element from an array?",
                    options: ["pop()", "remove()", "delete()", "shift()"],
                    correct: 0
                },
                {
                    question: "What is the difference between 'let' and 'var'?",
                    options: ["No difference", "let is block-scoped, var is function-scoped", "var is newer", "let can't be reassigned"],
                    correct: 1
                },
                {
                    question: "What does the spread operator (...) do?",
                    options: ["Multiplies numbers", "Expands iterables", "Creates objects", "Deletes properties"],
                    correct: 1
                },
                {
                    question: "What is event bubbling?",
                    options: ["Creating events", "Events propagating from child to parent", "Deleting events", "Stopping events"],
                    correct: 1
                },
                {
                    question: "What is a Promise in JavaScript?",
                    options: ["A guarantee", "An object representing eventual completion of async operation", "A loop type", "A variable type"],
                    correct: 1
                },
                {
                    question: "What does 'use strict' do?",
                    options: ["Makes code faster", "Enforces stricter parsing and error handling", "Compresses code", "Nothing"],
                    correct: 1
                },
                {
                    question: "What is the purpose of the 'map()' method?",
                    options: ["Creates a new array with results of calling a function", "Filters an array", "Reduces array to single value", "Sorts an array"],
                    correct: 0
                },
                {
                    question: "What is destructuring in JavaScript?",
                    options: ["Breaking code", "Unpacking values from arrays or objects", "Deleting variables", "Creating functions"],
                    correct: 1
                }
            ],
            hard: [
                {
                    question: "What is the output of: console.log(0.1 + 0.2 === 0.3)?",
                    options: ["true", "false", "undefined", "NaN"],
                    correct: 1
                },
                {
                    question: "What is the event loop in JavaScript?",
                    options: ["A for loop", "A mechanism handling async callbacks", "A type of array", "A DOM method"],
                    correct: 1
                },
                {
                    question: "What is hoisting?",
                    options: ["Moving declarations to top during compilation", "Lifting heavy objects", "A CSS property", "A database operation"],
                    correct: 0
                },
                {
                    question: "What is the difference between call() and apply()?",
                    options: ["No difference", "call() takes arguments separately, apply() as array", "apply() is faster", "call() is deprecated"],
                    correct: 1
                },
                {
                    question: "What is a WeakMap?",
                    options: ["A broken Map", "A Map with weak key references", "A small Map", "An array"],
                    correct: 1
                },
                {
                    question: "What does Object.freeze() do?",
                    options: ["Stops code execution", "Prevents modification of object properties", "Deletes object", "Copies object"],
                    correct: 1
                },
                {
                    question: "What is the Temporal Dead Zone?",
                    options: ["A timezone", "Time between hoisting and initialization", "A bug", "A deprecated feature"],
                    correct: 1
                },
                {
                    question: "What is memoization?",
                    options: ["Remembering passwords", "Caching function results", "A type of loop", "A design pattern"],
                    correct: 1
                },
                {
                    question: "What is the purpose of Symbol in JavaScript?",
                    options: ["Mathematical operations", "Creating unique identifiers", "String operations", "Number formatting"],
                    correct: 1
                },
                {
                    question: "What is a generator function?",
                    options: ["Creates HTML", "Function that can pause and resume execution", "Generates random numbers", "Creates objects"],
                    correct: 1
                }
            ]
        }
    },
    html: {
        name: "HTML",
        icon: "fab fa-html5",
        color: "orange",
        questions: {
            easy: [
                {
                    question: "What does HTML stand for?",
                    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
                    correct: 0
                },
                {
                    question: "Which tag is used to create a hyperlink?",
                    options: ["<link>", "<a>", "<href>", "<url>"],
                    correct: 1
                },
                {
                    question: "Which tag is used for the largest heading?",
                    options: ["<h6>", "<heading>", "<h1>", "<head>"],
                    correct: 2
                },
                {
                    question: "What is the correct HTML for creating a checkbox?",
                    options: ["<input type='check'>", "<checkbox>", "<input type='checkbox'>", "<check>"],
                    correct: 2
                },
                {
                    question: "Which tag is used to define an unordered list?",
                    options: ["<ol>", "<ul>", "<list>", "<li>"],
                    correct: 1
                },
                {
                    question: "What is the correct HTML for inserting an image?",
                    options: ["<img src='image.jpg'>", "<image src='image.jpg'>", "<picture>image.jpg</picture>", "<img href='image.jpg'>"],
                    correct: 0
                },
                {
                    question: "Which HTML attribute specifies an alternate text for an image?",
                    options: ["title", "alt", "src", "longdesc"],
                    correct: 1
                },
                {
                    question: "Which tag is used to define a paragraph?",
                    options: ["<para>", "<p>", "<paragraph>", "<text>"],
                    correct: 1
                },
                {
                    question: "What is the correct HTML for making a text bold?",
                    options: ["<bold>", "<b>", "<strong>", "Both <b> and <strong>"],
                    correct: 3
                },
                {
                    question: "Which tag is used to create a line break?",
                    options: ["<break>", "<lb>", "<br>", "<newline>"],
                    correct: 2
                }
            ],
            medium: [
                {
                    question: "What is the purpose of the <meta> tag?",
                    options: ["Create metadata", "Display text", "Create links", "Add images"],
                    correct: 0
                },
                {
                    question: "Which HTML5 element defines navigation links?",
                    options: ["<navigation>", "<nav>", "<navigate>", "<links>"],
                    correct: 1
                },
                {
                    question: "What is the correct HTML for making a drop-down list?",
                    options: ["<list>", "<dropdown>", "<select>", "<input type='list'>"],
                    correct: 2
                },
                {
                    question: "Which attribute is used to define inline styles?",
                    options: ["class", "style", "styles", "font"],
                    correct: 1
                },
                {
                    question: "What is semantic HTML?",
                    options: ["HTML with meaning", "Fast HTML", "Compressed HTML", "Encrypted HTML"],
                    correct: 0
                },
                {
                    question: "Which HTML5 element is used for playing video files?",
                    options: ["<movie>", "<video>", "<media>", "<film>"],
                    correct: 1
                },
                {
                    question: "What does the <canvas> element do?",
                    options: ["Displays text", "Creates drawings via JavaScript", "Shows images", "Creates tables"],
                    correct: 1
                },
                {
                    question: "Which attribute makes an input field required?",
                    options: ["validate", "required", "mandatory", "needed"],
                    correct: 1
                },
                {
                    question: "What is the purpose of the <figure> element?",
                    options: ["Display numbers", "Group media content with caption", "Create shapes", "Mathematical operations"],
                    correct: 1
                },
                {
                    question: "Which HTML element defines footer for a document?",
                    options: ["<bottom>", "<footer>", "<end>", "<section>"],
                    correct: 1
                }
            ],
            hard: [
                {
                    question: "What is the difference between <article> and <section>?",
                    options: ["No difference", "<article> is self-contained, <section> groups related content", "Only styling", "<section> is deprecated"],
                    correct: 1
                },
                {
                    question: "What does the 'data-*' attribute do?",
                    options: ["Sends data to server", "Stores custom data in HTML elements", "Validates data", "Creates databases"],
                    correct: 1
                },
                {
                    question: "What is the purpose of 'defer' attribute in <script>?",
                    options: ["Delays loading", "Executes script after HTML parsing", "Makes script async", "Nothing"],
                    correct: 1
                },
                {
                    question: "What is the difference between 'async' and 'defer' in script loading?",
                    options: ["No difference", "async doesn't guarantee order, defer does", "defer is faster", "async is deprecated"],
                    correct: 1
                },
                {
                    question: "What is the purpose of <template> tag?",
                    options: ["Create layouts", "Hold HTML content not rendered on load", "Design templates", "Nothing special"],
                    correct: 1
                },
                {
                    question: "What does the 'contenteditable' attribute do?",
                    options: ["Makes content deletable", "Makes element editable by user", "Protects content", "Validates content"],
                    correct: 1
                },
                {
                    question: "What is the Shadow DOM?",
                    options: ["Dark theme", "Encapsulated DOM tree", "Hidden elements", "Deprecated feature"],
                    correct: 1
                },
                {
                    question: "What is the purpose of <slot> in Web Components?",
                    options: ["Create animations", "Define placeholder for content", "Store data", "Create forms"],
                    correct: 1
                },
                {
                    question: "What does 'preload' do in <link> tag?",
                    options: ["Nothing", "Tells browser to download resource in advance", "Delays loading", "Caches forever"],
                    correct: 1
                },
                {
                    question: "What is ARIA in HTML?",
                    options: ["A framework", "Accessibility attributes", "A CSS property", "A JavaScript library"],
                    correct: 1
                }
            ]
        }
    },
    css: {
        name: "CSS",
        icon: "fab fa-css3",
        color: "blue",
        questions: {
            easy: [
                {
                    question: "What does CSS stand for?",
                    options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
                    correct: 0
                },
                {
                    question: "Which property is used to change the background color?",
                    options: ["color", "bgcolor", "background-color", "bg-color"],
                    correct: 2
                },
                {
                    question: "How do you select an element with id 'header'?",
                    options: [".header", "#header", "header", "*header"],
                    correct: 1
                },
                {
                    question: "Which property is used to change text color?",
                    options: ["text-color", "font-color", "color", "text"],
                    correct: 2
                },
                {
                    question: "How do you make text bold in CSS?",
                    options: ["font-weight: bold", "text-style: bold", "font: bold", "text-weight: bold"],
                    correct: 0
                },
                {
                    question: "Which property is used to change font size?",
                    options: ["text-size", "font-size", "text-style", "size"],
                    correct: 1
                },
                {
                    question: "How do you add a border in CSS?",
                    options: ["border: 1px solid black", "border-style: solid", "outline: 1px", "border-width: 1px"],
                    correct: 0
                },
                {
                    question: "Which property controls text alignment?",
                    options: ["align", "text-align", "alignment", "text-position"],
                    correct: 1
                },
                {
                    question: "How do you select elements with class 'container'?",
                    options: ["#container", ".container", "container", "*container"],
                    correct: 1
                },
                {
                    question: "Which property adds space inside an element?",
                    options: ["margin", "padding", "spacing", "border"],
                    correct: 1
                }
            ],
            medium: [
                {
                    question: "What is the CSS Box Model?",
                    options: ["A design pattern", "Content, padding, border, margin", "A framework", "A layout system"],
                    correct: 1
                },
                {
                    question: "What does 'position: relative' do?",
                    options: ["Positions relative to parent", "Positions relative to normal position", "Fixed position", "Absolute position"],
                    correct: 1
                },
                {
                    question: "What is Flexbox used for?",
                    options: ["Animations", "Flexible layouts", "Text formatting", "Colors"],
                    correct: 1
                },
                {
                    question: "What does 'z-index' control?",
                    options: ["Font size", "Stacking order of elements", "Position", "Color depth"],
                    correct: 1
                },
                {
                    question: "What is a CSS pseudo-class?",
                    options: ["Fake class", "Special state of element (:hover)", "Class without style", "JavaScript class"],
                    correct: 1
                },
                {
                    question: "What does 'display: none' do?",
                    options: ["Makes transparent", "Removes from layout", "Hides but keeps space", "Nothing"],
                    correct: 1
                },
                {
                    question: "What is the difference between 'visibility: hidden' and 'display: none'?",
                    options: ["No difference", "visibility keeps space, display removes from layout", "display is faster", "visibility is deprecated"],
                    correct: 1
                },
                {
                    question: "What does '@media' do?",
                    options: ["Adds media files", "Creates responsive designs", "Plays videos", "Nothing"],
                    correct: 1
                },
                {
                    question: "What is CSS Grid?",
                    options: ["A framework", "Two-dimensional layout system", "Image gallery", "Table alternative"],
                    correct: 1
                },
                {
                    question: "What does 'calc()' function do?",
                    options: ["Nothing", "Performs calculations for property values", "Creates calculators", "Validates values"],
                    correct: 1
                }
            ],
            hard: [
                {
                    question: "What is CSS specificity?",
                    options: ["Code speed", "How browser decides which CSS rules apply", "File size", "Color depth"],
                    correct: 1
                },
                {
                    question: "What is a CSS preprocessor?",
                    options: ["JavaScript library", "Tool that extends CSS (SASS, LESS)", "CSS validator", "Browser tool"],
                    correct: 1
                },
                {
                    question: "What is the BEM methodology?",
                    options: ["Block Element Modifier naming convention", "Browser Extension Module", "Basic Element Model", "Best Experience Method"],
                    correct: 0
                },
                {
                    question: "What does 'will-change' property do?",
                    options: ["Nothing", "Hints browser about upcoming changes for optimization", "Changes colors", "Animates elements"],
                    correct: 1
                },
                {
                    question: "What is CSS Custom Properties (CSS Variables)?",
                    options: ["JavaScript in CSS", "Reusable values defined with --", "Invalid CSS", "CSS framework"],
                    correct: 1
                },
                {
                    question: "What is the difference between 'em' and 'rem'?",
                    options: ["No difference", "em relative to parent, rem relative to root", "rem is deprecated", "em is faster"],
                    correct: 1
                },
                {
                    question: "What is Critical CSS?",
                    options: ["Important styles", "Above-the-fold CSS for fast rendering", "Error handling", "CSS bugs"],
                    correct: 1
                },
                {
                    question: "What does 'content-visibility' do?",
                    options: ["Shows/hides content", "Controls rendering of off-screen content", "Sets opacity", "Nothing"],
                    correct: 1
                },
                {
                    question: "What is CSS containment?",
                    options: ["Container queries", "Isolates element's layout/paint/size", "Wrapping text", "Nothing special"],
                    correct: 1
                },
                {
                    question: "What is the purpose of '@layer' in CSS?",
                    options: ["Creates layers", "Manages cascade layers for specificity", "3D effects", "Animation layers"],
                    correct: 1
                }
            ]
        }
    },
    python: {
        name: "Python",
        icon: "fab fa-python",
        color: "indigo",
        questions: {
            easy: [
                {
                    question: "What is the correct file extension for Python files?",
                    options: [".python", ".py", ".pt", ".pyt"],
                    correct: 1
                },
                {
                    question: "How do you create a variable in Python?",
                    options: ["var x = 5", "int x = 5", "x = 5", "variable x = 5"],
                    correct: 2
                },
                {
                    question: "Which function is used to output text in Python?",
                    options: ["echo()", "print()", "console.log()", "output()"],
                    correct: 1
                },
                {
                    question: "How do you create a comment in Python?",
                    options: ["//", "/*", "#", "<!--"],
                    correct: 2
                },
                {
                    question: "What data type is the value: 'Hello World'?",
                    options: ["int", "string", "float", "boolean"],
                    correct: 1
                },
                {
                    question: "Which keyword is used to create a function?",
                    options: ["function", "def", "func", "define"],
                    correct: 1
                },
                {
                    question: "How do you create a list in Python?",
                    options: ["list = {1,2,3}", "list = (1,2,3)", "list = [1,2,3]", "list = <1,2,3>"],
                    correct: 2
                },
                {
                    question: "What is the output of: print(2 ** 3)?",
                    options: ["6", "8", "9", "5"],
                    correct: 1
                },
                {
                    question: "Which operator is used for floor division?",
                    options: ["/", "//", "%", "div"],
                    correct: 1
                },
                {
                    question: "How do you start a for loop in Python?",
                    options: ["for x in range(5):", "for (x = 0; x < 5; x++)", "foreach x in range(5)", "loop x in 5"],
                    correct: 0
                }
            ],
            medium: [
                {
                    question: "What is a lambda function?",
                    options: ["Named function", "Anonymous function", "Class method", "Built-in function"],
                    correct: 1
                },
                {
                    question: "What does 'self' represent in Python classes?",
                    options: ["Current instance", "Parent class", "Method name", "Variable"],
                    correct: 0
                },
                {
                    question: "What is list comprehension?",
                    options: ["Sorting lists", "Creating lists from iterables concisely", "Comparing lists", "Deleting lists"],
                    correct: 1
                },
                {
                    question: "What is the difference between append() and extend()?",
                    options: ["No difference", "append adds element, extend adds iterable", "extend is faster", "append is deprecated"],
                    correct: 1
                },
                {
                    question: "What does the 'pass' statement do?",
                    options: ["Skips iteration", "Null operation placeholder", "Passes variable", "Returns value"],
                    correct: 1
                },
                {
                    question: "What is a decorator in Python?",
                    options: ["UI element", "Function that modifies another function", "Class attribute", "Loop type"],
                    correct: 1
                },
                {
                    question: "What is the purpose of __init__ method?",
                    options: ["Deletes object", "Constructor/initializer", "Main function", "Imports module"],
                    correct: 1
                },
                {
                    question: "What does 'yield' keyword do?",
                    options: ["Returns value", "Creates generator", "Stops function", "Imports module"],
                    correct: 1
                },
                {
                    question: "What is the difference between '==' and 'is'?",
                    options: ["No difference", "== compares values, is compares identity", "is is faster", "== is deprecated"],
                    correct: 1
                },
                {
                    question: "What is a tuple?",
                    options: ["Mutable list", "Immutable sequence", "Dictionary", "Set"],
                    correct: 1
                }
            ],
            hard: [
                {
                    question: "What is the Global Interpreter Lock (GIL)?",
                    options: ["Security feature", "Mutex preventing multiple threads executing Python bytecode", "Compiler", "Debugger"],
                    correct: 1
                },
                {
                    question: "What is metaclass in Python?",
                    options: ["Parent class", "Class of a class", "Abstract class", "Interface"],
                    correct: 1
                },
                {
                    question: "What is the difference between @staticmethod and @classmethod?",
                    options: ["No difference", "staticmethod doesn't receive class/instance, classmethod receives class", "classmethod is faster", "staticmethod is deprecated"],
                    correct: 1
                },
                {
                    question: "What is monkey patching?",
                    options: ["Bug fixing", "Dynamically modifying class/module at runtime", "Code optimization", "Testing method"],
                    correct: 1
                },
                {
                    question: "What is the purpose of __slots__?",
                    options: ["Nothing special", "Restricts attributes and saves memory", "Creates slots", "Debugging tool"],
                    correct: 1
                },
                {
                    question: "What is a context manager?",
                    options: ["File manager", "Object managing resources with __enter__ and __exit__", "Memory manager", "Process manager"],
                    correct: 1
                },
                {
                    question: "What is the difference between deep copy and shallow copy?",
                    options: ["No difference", "deep copy recursively copies, shallow copies references", "shallow is faster always", "deep is deprecated"],
                    correct: 1
                },
                {
                    question: "What is asyncio used for?",
                    options: ["File I/O", "Asynchronous programming", "Synchronization", "Threading"],
                    correct: 1
                },
                {
                    question: "What is the purpose of __new__ method?",
                    options: ["Initializes object", "Creates new instance", "Deletes object", "Copies object"],
                    correct: 1
                },
                {
                    question: "What is MRO (Method Resolution Order)?",
                    options: ["Method ranking", "Order in which base classes are searched", "Optimization technique", "Debugging tool"],
                    correct: 1
                }
            ]
        }
    },
    general: {
        name: "General Knowledge",
        icon: "fas fa-globe",
        color: "green",
        questions: {
            easy: [
                {
                    question: "What is the capital of France?",
                    options: ["London", "Berlin", "Paris", "Madrid"],
                    correct: 2
                },
                {
                    question: "How many continents are there?",
                    options: ["5", "6", "7", "8"],
                    correct: 2
                },
                {
                    question: "What is the largest ocean on Earth?",
                    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                    correct: 3
                },
                {
                    question: "Who painted the Mona Lisa?",
                    options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"],
                    correct: 1
                },
                {
                    question: "What is the smallest country in the world?",
                    options: ["Monaco", "Vatican City", "Malta", "San Marino"],
                    correct: 1
                },
                {
                    question: "How many days are in a leap year?",
                    options: ["364", "365", "366", "367"],
                    correct: 2
                },
                {
                    question: "What is the largest planet in our solar system?",
                    options: ["Earth", "Mars", "Jupiter", "Saturn"],
                    correct: 2
                },
                {
                    question: "What is H2O commonly known as?",
                    options: ["Oxygen", "Hydrogen", "Water", "Carbon Dioxide"],
                    correct: 2
                },
                {
                    question: "How many colors are in a rainbow?",
                    options: ["5", "6", "7", "8"],
                    correct: 2
                },
                {
                    question: "What is the fastest land animal?",
                    options: ["Lion", "Cheetah", "Leopard", "Tiger"],
                    correct: 1
                }
            ],
            medium: [
                {
                    question: "In which year did World War II end?",
                    options: ["1943", "1944", "1945", "1946"],
                    correct: 2
                },
                {
                    question: "What is the currency of Japan?",
                    options: ["Yuan", "Won", "Yen", "Ringgit"],
                    correct: 2
                },
                {
                    question: "Who wrote 'Romeo and Juliet'?",
                    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                    correct: 1
                },
                {
                    question: "What is the smallest bone in the human body?",
                    options: ["Femur", "Stapes", "Radius", "Tibia"],
                    correct: 1
                },
                {
                    question: "Which planet is known as the Red Planet?",
                    options: ["Venus", "Mars", "Mercury", "Jupiter"],
                    correct: 1
                },
                {
                    question: "What is the longest river in the world?",
                    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                    correct: 1
                },
                {
                    question: "Who invented the telephone?",
                    options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Benjamin Franklin"],
                    correct: 1
                },
                {
                    question: "What is the hardest natural substance on Earth?",
                    options: ["Gold", "Iron", "Diamond", "Platinum"],
                    correct: 2
                },
                {
                    question: "How many bones are in the adult human body?",
                    options: ["186", "206", "226", "246"],
                    correct: 1
                },
                {
                    question: "What is the largest mammal in the world?",
                    options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
                    correct: 1
                }
            ],
            hard: [
                {
                    question: "What year was the United Nations founded?",
                    options: ["1943", "1944", "1945", "1946"],
                    correct: 2
                },
                {
                    question: "What is the chemical symbol for Gold?",
                    options: ["Go", "Gd", "Au", "Ag"],
                    correct: 2
                },
                {
                    question: "Who was the first person to walk on the moon?",
                    options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
                    correct: 1
                },
                {
                    question: "In which year did the Titanic sink?",
                    options: ["1910", "1911", "1912", "1913"],
                    correct: 2
                },
                {
                    question: "What is the smallest prime number?",
                    options: ["0", "1", "2", "3"],
                    correct: 2
                },
                {
                    question: "Which element has the atomic number 1?",
                    options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
                    correct: 1
                },
                {
                    question: "What is the speed of light in vacuum (approximately)?",
                    options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
                    correct: 0
                },
                {
                    question: "Who developed the theory of relativity?",
                    options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Nikola Tesla"],
                    correct: 1
                },
                {
                    question: "What is the largest desert in the world?",
                    options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
                    correct: 3
                },
                {
                    question: "How many keys does a standard piano have?",
                    options: ["76", "88", "92", "100"],
                    correct: 1
                }
            ]
        }
    }
};