// Assignment 1 | COMP1073 Client-Side JavaScript

/* Word Pools
-------------------------------------------------- */
const wordPools = {
    nouns1: ["dog", "cat", "rabbit", "bird", "elephant"],
    verbs: ["jumps", "runs", "flies", "swims", "dances"],
    adjectives: ["happy", "fast", "silly", "brave", "curious"],
    nouns2: ["car", "tree", "house", "mountain", "river"],
    settings: ["in the forest", "on the beach", "in the city", "on the moon", "in a castle"],
};

/* Selected Words
-------------------------------------------------- */
const selectedWords = {
    noun1: "",
    verb: "",
    adjective: "",
    noun2: "",
    setting: "",
};

/* Utility Functions
-------------------------------------------------- */
// Get a random word from an array
const getRandomWord = (array) => array[Math.floor(Math.random() * array.length)];

/* Event Handlers
-------------------------------------------------- */
// Update selected word and display it
const handleWordSelection = (type, elementId) => {
    // Ensure the type exists in the wordPools
    if (!wordPools[type]) {
        console.error(`Invalid word type: ${type}`);
        return;
    }

    // Update the selected word and display it in the corresponding element
    selectedWords[type] = getRandomWord(wordPools[type]);
    const element = document.getElementById(elementId);

    if (element) {
        element.textContent = selectedWords[type];
    } else {
        console.error(`Element with ID '${elementId}' not found.`);
    }
};

// Create and display the user-created story
const showStory = () => {
    const { noun1, verb, adjective, noun2, setting } = selectedWords;

    // Check if all words are selected
    if (!noun1 || !verb || !adjective || !noun2 || !setting) {
        document.getElementById("story").textContent =
            "Please select a word for each category to complete your story!";
        return;
    }

    // Create the story and display it
    const story = `${noun1} ${verb} a ${adjective} ${noun2} ${setting}.`;
    document.getElementById("story").textContent = story;
};

// Create and display a random story
const showRandomStory = () => {
    const randomStory = `${getRandomWord(wordPools.nouns1)} ${getRandomWord(wordPools.verbs)} a ${getRandomWord(
        wordPools.adjectives
    )} ${getRandomWord(wordPools.nouns2)} ${getRandomWord(wordPools.settings)}.`;
    document.getElementById("story").textContent = randomStory;
};

// Display student ID and name
const displayStudentId = () => {
    const studentIdElement = document.getElementById("studentId");
    if (studentIdElement) {
        studentIdElement.textContent = "Student ID: 200564553 - Anthony Burgic";
    } else {
        console.error("Element with ID 'studentId' not found.");
    }
};

/* Event Listeners
-------------------------------------------------- */
// Attach event listeners for buttons
const setupEventListeners = () => {
    const eventMappings = [
        { buttonId: "noun1", type: "nouns1", outputId: "choosenNoun1" },
        { buttonId: "verb", type: "verbs", outputId: "choosenVerb" },
        { buttonId: "adjective", type: "adjectives", outputId: "choosenAdjective" },
        { buttonId: "noun2", type: "nouns2", outputId: "choosenNoun2" },
        { buttonId: "setting", type: "settings", outputId: "choosenSetting" },
    ];

    // Attach event listeners for word selection buttons
    eventMappings.forEach(({ buttonId, type, outputId }) => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener("click", () => handleWordSelection(type, outputId));
        } else {
            console.error(`Button with ID '${buttonId}' not found.`);
        }
    });

    // Attach event listeners for story buttons
    const playbackButton = document.getElementById("playback");
    if (playbackButton) {
        playbackButton.addEventListener("click", showStory);
    } else {
        console.error("Button with ID 'playback' not found.");
    }

    const randomButton = document.getElementById("random");
    if (randomButton) {
        randomButton.addEventListener("click", showRandomStory);
    } else {
        console.error("Button with ID 'random' not found.");
    }
};

/* Initialize page setup */
window.addEventListener("load", () => {
    displayStudentId();
    setupEventListeners();
});
