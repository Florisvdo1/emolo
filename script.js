// Data for emojis categorized with Dutch names
const emojiData = {
  activiteiten: [
    { char: '⚽', name: 'voetbal' },
    { char: '🏀', name: 'basketbal' },
    { char: '🏈', name: 'amerikaans voetbal' },
    { char: '🎾', name: 'tennis' },
    { char: '🏐', name: 'volleybal' },
    { char: '🏉', name: 'rugby' },
    { char: '🎱', name: 'biljart' },
    { char: '🏓', name: 'tafeltennis' },
    { char: '🏸', name: 'badminton' },
    { char: '🥅', name: 'doelnet' },
    { char: '🏒', name: 'ijshockey' },
    { char: '🏏', name: 'cricket' },
    { char: '⛳', name: 'golf' },
    { char: '🏹', name: 'boogschieten' },
    { char: '🎣', name: 'vissen' },
    { char: '🤿', name: 'duiken' },
    { char: '🥊', name: 'boksen' },
    { char: '🥋', name: 'vechtsport' },
    { char: '⛸️', name: 'schaatsen' },
    { char: '🥌', name: 'curling' },
    // ... Add more activity emojis to reach at least 300 total emojis across all categories
  ],
  eten: [
    { char: '🍎', name: 'appel' },
    { char: '🍌', name: 'banaan' },
    { char: '🍇', name: 'druiven' },
    { char: '🍓', name: 'aardbei' },
    { char: '🍉', name: 'watermeloen' },
    { char: '🍍', name: 'ananas' },
    { char: '🥭', name: 'mango' },
    { char: '🍔', name: 'hamburger' },
    { char: '🍟', name: 'patat' },
    { char: '🍕', name: 'pizza' },
    { char: '🌭', name: 'hotdog' },
    { char: '🥪', name: 'sandwich' },
    { char: '🌮', name: 'taco' },
    { char: '🍣', name: 'sushi' },
    { char: '🥗', name: 'salade' },
    { char: '🍿', name: 'popcorn' },
    { char: '🍩', name: 'donut' },
    { char: '🍪', name: 'koekje' },
    { char: '🎂', name: 'taart' },
    { char: '🍰', name: 'gebak' },
    // ... Add more food emojis
  ],
  reizen: [
    { char: '✈️', name: 'vliegtuig' },
    { char: '🚗', name: 'auto' },
    { char: '🚢', name: 'schip' },
    { char: '🚆', name: 'trein' },
    { char: '🚲', name: 'fiets' },
    { char: '🚌', name: 'bus' },
    { char: '🚁', name: 'helikopter' },
    { char: '🚀', name: 'raket' },
    { char: '⛵', name: 'zeilboot' },
    { char: '🚉', name: 'station' },
    { char: '🏖️', name: 'strand' },
    { char: '🏝️', name: 'eiland' },
    { char: '🏞️', name: 'nationaal park' },
    { char: '🌇', name: 'zonsondergang' },
    { char: '🗽', name: 'vrijheidsbeeld' },
    { char: '🗼', name: 'eiffeltoren' },
    // ... Add more travel emojis
  ],
  weer: [
    { char: '☀️', name: 'zon' },
    { char: '🌤️', name: 'zon met wolken' },
    { char: '⛅', name: 'bewolkt' },
    { char: '🌧️', name: 'regen' },
    { char: '⛈️', name: 'onweer' },
    { char: '🌨️', name: 'sneeuw' },
    { char: '🌩️', name: 'bliksem' },
    { char: '🌪️', name: 'tornado' },
    { char: '🌈', name: 'regenboog' },
    { char: '❄️', name: 'sneeuwvlok' },
    { char: '☔', name: 'paraplu' },
    { char: '💧', name: 'druppel' },
    { char: '🌊', name: 'golf' },
    // ... Add more weather emojis
  ],
  dieren: [
    { char: '🐶', name: 'hond' },
    { char: '🐱', name: 'kat' },
    { char: '🐭', name: 'muis' },
    { char: '🐹', name: 'hamster' },
    { char: '🐰', name: 'konijn' },
    { char: '🦊', name: 'vos' },
    { char: '🐻', name: 'beer' },
    { char: '🐼', name: 'panda' },
    { char: '🐨', name: 'koala' },
    { char: '🐯', name: 'tijger' },
    { char: '🦁', name: 'leeuw' },
    { char: '🐮', name: 'koe' },
    { char: '🐷', name: 'varken' },
    { char: '🐸', name: 'kikker' },
    { char: '🐵', name: 'aap' },
    { char: '🐔', name: 'kip' },
    { char: '🐧', name: 'pinguïn' },
    { char: '🐦', name: 'vogel' },
    { char: '🐤', name: 'kuiken' },
    { char: '🦆', name: 'eend' },
    // ... Add more animal emojis
  ],
  emoties: [
    { char: '😀', name: 'lachend gezicht' },
    { char: '😁', name: 'grijnzend gezicht' },
    { char: '😂', name: 'gezicht met tranen van vreugde' },
    { char: '🤣', name: 'rollend op de grond van het lachen' },
    { char: '😊', name: 'glimlachend gezicht' },
    { char: '😢', name: 'huilend gezicht' },
    { char: '😡', name: 'boos gezicht' },
    { char: '😍', name: 'verliefd gezicht' },
    { char: '😎', name: 'coole emoji' },
    { char: '🤔', name: 'nadenkend gezicht' },
    { char: '😴', name: 'slapend gezicht' },
    { char: '😷', name: 'ziek gezicht' },
    { char: '🤒', name: 'koorts' },
    { char: '🤕', name: 'gewond gezicht' },
    { char: '😇', name: 'engel gezicht' },
    { char: '🥳', name: 'feestend gezicht' },
    { char: '😤', name: 'triomfantelijk gezicht' },
    { char: '😱', name: 'schreeuwend van angst' },
    { char: '😭', name: 'hard huilend gezicht' },
    { char: '🤮', name: 'kotsend gezicht' },
    // ... Add more emotion emojis
  ],
  objecten: [
    { char: '💻', name: 'laptop' },
    { char: '🖥️', name: 'computer' },
    { char: '🖨️', name: 'printer' },
    { char: '⌨️', name: 'toetsenbord' },
    { char: '🖱️', name: 'muis' },
    { char: '📱', name: 'mobiele telefoon' },
    { char: '📞', name: 'telefoon' },
    { char: '🎥', name: 'camera' },
    { char: '📺', name: 'televisie' },
    { char: '⏰', name: 'wekker' },
    { char: '🕰️', name: 'klok' },
    { char: '💡', name: 'lamp' },
    { char: '🔦', name: 'zaklamp' },
    { char: '📖', name: 'boek' },
    { char: '📚', name: 'boeken' },
    { char: '🛏️', name: 'bed' },
    { char: '🚿', name: 'douche' },
    { char: '🚽', name: 'toilet' },
    { char: '🧴', name: 'fles' },
    { char: '🧹', name: 'bezem' },
    // ... Add more object emojis
  ],
  symbolen: [
    { char: '❤️', name: 'rood hart' },
    { char: '💛', name: 'geel hart' },
    { char: '💚', name: 'groen hart' },
    { char: '💙', name: 'blauw hart' },
    { char: '💜', name: 'paars hart' },
    { char: '🖤', name: 'zwart hart' },
    { char: '⭐', name: 'ster' },
    { char: '🌟', name: 'glinsterende ster' },
    { char: '🔥', name: 'vuur' },
    { char: '💧', name: 'druppel' },
    { char: '🎵', name: 'muzieknoot' },
    { char: '🎶', name: 'muzieknoten' },
    { char: '⚠️', name: 'waarschuwing' },
    { char: '❌', name: 'kruisje' },
    { char: '✅', name: 'vinkje' },
    { char: '❓', name: 'vraagteken' },
    { char: '❗', name: 'uitroepteken' },
    { char: '💲', name: 'dollar' },
    { char: '💯', name: 'honderd' },
    { char: '🔞', name: '18+' },
    // ... Add more symbol emojis
  ],
  mensen: [
    { char: '👶', name: 'baby' },
    { char: '🧒', name: 'kind' },
    { char: '👦', name: 'jongen' },
    { char: '👧', name: 'meisje' },
    { char: '🧑', name: 'persoon' },
    { char: '👨', name: 'man' },
    { char: '👩', name: 'vrouw' },
    { char: '👴', name: 'oude man' },
    { char: '👵', name: 'oude vrouw' },
    { char: '👮‍♂️', name: 'politieagent' },
    { char: '👮‍♀️', name: 'politieagente' },
    { char: '👷‍♂️', name: 'bouwvakker' },
    { char: '👷‍♀️', name: 'bouwvakster' },
    { char: '💂‍♂️', name: 'wacht' },
    { char: '💂‍♀️', name: 'wachtster' },
    { char: '🕵️‍♂️', name: 'detective' },
    { char: '🕵️‍♀️', name: 'detective vrouw' },
    { char: '👩‍⚕️', name: 'dokter' },
    { char: '👨‍⚕️', name: 'dokter man' },
    { char: '👩‍🍳', name: 'kok' },
    // ... Add more people emojis
  ],
  feestdagen: [
    { char: '🎉', name: 'feest' },
    { char: '🎊', name: 'confetti' },
    { char: '🎂', name: 'verjaardagstaart' },
    { char: '🎁', name: 'cadeau' },
    { char: '🎃', name: 'pompoen' },
    { char: '🕯️', name: 'kaars' },
    { char: '🧨', name: 'vuurwerk' },
    { char: '🎆', name: 'vuurwerkshow' },
    { char: '🎇', name: 'sterretje' },
    { char: '🎄', name: 'kerstboom' },
    { char: '🎅', name: 'kerstman' },
    { char: '🤶', name: 'mevrouw kerstman' },
    { char: '🕎', name: 'menora' },
    { char: '🧧', name: 'rode envelop' },
    { char: '🥂', name: 'proosten' },
    { char: '🥳', name: 'feest gezicht' },
    // ... Add more holiday emojis
  ],
  vervoermiddelen: [
    { char: '🚗', name: 'auto' },
    { char: '🚕', name: 'taxi' },
    { char: '🚙', name: 'suv' },
    { char: '🚌', name: 'bus' },
    { char: '🚎', name: 'trolleybus' },
    { char: '🏎️', name: 'raceauto' },
    { char: '🚓', name: 'politieauto' },
    { char: '🚑', name: 'ambulance' },
    { char: '🚒', name: 'brandweerwagen' },
    { char: '🚐', name: 'minibus' },
    { char: '🚚', name: 'vrachtwagen' },
    { char: '🚜', name: 'tractor' },
    { char: '🚲', name: 'fiets' },
    { char: '🛴', name: 'step' },
    { char: '🛵', name: 'scooter' },
    { char: '🚂', name: 'locomotief' },
    { char: '🚤', name: 'motorboot' },
    { char: '🛥️', name: 'jacht' },
    { char: '✈️', name: 'vliegtuig' },
    { char: '🚁', name: 'helikopter' },
    // ... Add more transportation emojis
  ],
  planten: [
    { char: '🌵', name: 'cactus' },
    { char: '🎄', name: 'kerstboom' },
    { char: '🌲', name: 'dennenboom' },
    { char: '🌳', name: 'boom' },
    { char: '🌴', name: 'palmboom' },
    { char: '🌱', name: 'zaailing' },
    { char: '🌿', name: 'blad' },
    { char: '☘️', name: 'klaver' },
    { char: '🍀', name: 'klavertje vier' },
    { char: '🍁', name: 'esdoornblad' },
    { char: '🍄', name: 'paddenstoel' },
    { char: '🌾', name: 'rijstplant' },
    { char: '💐', name: 'boeket' },
    { char: '🌷', name: 'tulp' },
    { char: '🌹', name: 'roos' },
    { char: '🌺', name: 'hibiscus' },
    { char: '🌸', name: 'kersenbloesem' },
    { char: '🌼', name: 'bloem' },
    { char: '🌻', name: 'zonnebloem' },
    // ... Add more plant emojis
  ],
  // Continue adding more categories and emojis to reach at least 300 emojis in total
};

// List of category names
let categories = Object.keys(emojiData);
let currentCategoryIndex = 0;

// Variables for drag-and-drop functionality
let draggedEmoji = null;
let draggedEmojiClone = null;
let currentDroppable = null;

// Variables for auto-scrolling
let autoScrollInterval = null;
const scrollThreshold = 50;
const scrollSpeed = 10;

// Initialize the application
function init() {
  try {
    // Load the default emoji category
    loadEmojis(categories[currentCategoryIndex]);

    // Update live time every second
    updateLiveTime();
    setInterval(updateLiveTime, 1000);

    // Initialize placeholders
    initializePlaceholders();

    // Initialize event listeners
    addGlobalEventListeners();
  } catch (error) {
    logError('init', 'Failed to initialize the application.', { error });
  }
}

// Function to initialize placeholders
function initializePlaceholders() {
  document.querySelectorAll('.add-placeholder-button').forEach(button => {
    button.addEventListener('click', handleAddPlaceholder);
  });

  document.querySelectorAll('.emoji-placeholder').forEach(placeholder => {
    makePlaceholderDroppable(placeholder);
  });
}

// Function to handle adding a new placeholder
function handleAddPlaceholder() {
  const sector = this.closest('.sector');
  const placeholdersContainer = sector.querySelector('.placeholders');
  const time = this.previousElementSibling.getAttribute('data-time');
  const currentPlaceholders = placeholdersContainer.querySelectorAll('.placeholder-container').length;

  if (currentPlaceholders < 5) {
    // Create new placeholder
    const newPlaceholderContainer = document.createElement('div');
    newPlaceholderContainer.classList.add('placeholder-container');

    const placeholder = document.createElement('div');
    placeholder.classList.add('emoji-placeholder');
    placeholder.setAttribute('data-time', time);
    placeholder.setAttribute('data-empty', 'true');
    makePlaceholderDroppable(placeholder);

    const addButton = document.createElement('button');
    addButton.classList.add('add-placeholder-button');
    addButton.setAttribute('aria-label', 'Voeg placeholder toe');
    addButton.addEventListener('click', handleAddPlaceholder);

    newPlaceholderContainer.appendChild(placeholder);
    newPlaceholderContainer.appendChild(addButton);
    placeholdersContainer.appendChild(newPlaceholderContainer);
  } else {
    alert('Maximum aantal placeholders bereikt voor deze sectie.');
  }
}

// Function to make placeholders droppable
function makePlaceholderDroppable(placeholder) {
  placeholder.addEventListener('touchstart', handlePlaceholderTouchStart, false);
  placeholder.addEventListener('touchmove', handlePlaceholderTouchMove, false);
  placeholder.addEventListener('touchend', handlePlaceholderTouchEnd, false);

  placeholder.addEventListener('mousedown', handlePlaceholderMouseDown, false);
}

// Handle touch start on placeholder
function handlePlaceholderTouchStart(e) {
  if (this.textContent && !this.hasAttribute('data-empty')) {
    e.preventDefault();
    draggedEmoji = this;
    draggedEmojiClone = this.cloneNode(true);
    draggedEmojiClone.classList.add('dragging-clone');
    document.body.appendChild(draggedEmojiClone);
    const touch = e.touches[0];
    updateDraggedEmojiPosition(touch);
    initAutoScroll();
    // Vibrate on pick up
    if (navigator.vibrate) navigator.vibrate(50);
  }
}

// Handle touch move on placeholder
function handlePlaceholderTouchMove(e) {
  if (!draggedEmojiClone) return;
  e.preventDefault();
  const touch = e.touches[0];
  updateDraggedEmojiPosition(touch);
  autoScroll(touch.clientY);

  const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
  if (!elementBelow) return;

  const droppableBelow = elementBelow.closest('.emoji-placeholder');

  if (currentDroppable !== droppableBelow) {
    if (currentDroppable) {
      currentDroppable.classList.remove('highlight');
    }
    currentDroppable = droppableBelow;
    if (currentDroppable) {
      currentDroppable.classList.add('highlight');
    }
  }
}

// Handle touch end on placeholder
function handlePlaceholderTouchEnd(e) {
  if (draggedEmojiClone) {
    e.preventDefault();
    const touch = e.changedTouches[0];
    const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
    const droppableBelow = elementBelow.closest('.emoji-placeholder');

    if (droppableBelow && droppableBelow !== this) {
      // Swap emojis
      const temp = droppableBelow.textContent;
      droppableBelow.textContent = this.textContent;
      this.textContent = temp;

      // Update data-empty attributes
      updateEmptyAttribute(droppableBelow);
      updateEmptyAttribute(this);
    } else {
      // Remove emoji
      this.textContent = '';
      this.setAttribute('data-empty', 'true');
    }

    if (currentDroppable) {
      currentDroppable.classList.remove('highlight');
      currentDroppable = null;
    }

    draggedEmojiClone.remove();
    draggedEmojiClone = null;
    stopAutoScroll();
    // Vibrate on drop
    if (navigator.vibrate) navigator.vibrate(50);
  }
}

// Similar functions for mouse events
function handlePlaceholderMouseDown(e) {
  if (this.textContent && !this.hasAttribute('data-empty')) {
    e.preventDefault();
    draggedEmoji = this;
    draggedEmojiClone = this.cloneNode(true);
    draggedEmojiClone.classList.add('dragging-clone');
    document.body.appendChild(draggedEmojiClone);
    updateDraggedEmojiPosition(e);
    initAutoScroll();
    document.addEventListener('mousemove', handlePlaceholderMouseMove, false);
    document.addEventListener('mouseup', handlePlaceholderMouseUp, false);
  }
}

function handlePlaceholderMouseMove(e) {
  if (!draggedEmojiClone) return;
  e.preventDefault();
  updateDraggedEmojiPosition(e);
  autoScroll(e.clientY);

  const elementBelow = document.elementFromPoint(e.clientX, e.clientY);
  if (!elementBelow) return;

  const droppableBelow = elementBelow.closest('.emoji-placeholder');

  if (currentDroppable !== droppableBelow) {
    if (currentDroppable) {
      currentDroppable.classList.remove('highlight');
    }
    currentDroppable = droppableBelow;
    if (currentDroppable) {
      currentDroppable.classList.add('highlight');
    }
  }
}

function handlePlaceholderMouseUp(e) {
  if (draggedEmojiClone) {
    e.preventDefault();
    const elementBelow = document.elementFromPoint(e.clientX, e.clientY);
    const droppableBelow = elementBelow.closest('.emoji-placeholder');

    if (droppableBelow && droppableBelow !== this) {
      // Swap emojis
      const temp = droppableBelow.textContent;
      droppableBelow.textContent = this.textContent;
      this.textContent = temp;

      // Update data-empty attributes
      updateEmptyAttribute(droppableBelow);
      updateEmptyAttribute(this);
    } else {
      // Remove emoji
      this.textContent = '';
      this.setAttribute('data-empty', 'true');
    }

    if (currentDroppable) {
      currentDroppable.classList.remove('highlight');
      currentDroppable = null;
    }

    draggedEmojiClone.remove();
    draggedEmojiClone = null;
    stopAutoScroll();
    document.removeEventListener('mousemove', handlePlaceholderMouseMove, false);
    document.removeEventListener('mouseup', handlePlaceholderMouseUp, false);
  }
}

// Function to update data-empty attribute
function updateEmptyAttribute(element) {
  if (element.textContent.trim() === '') {
    element.setAttribute('data-empty', 'true');
  } else {
    element.removeAttribute('data-empty');
  }
}

// Function to load emojis
function loadEmojis(category) {
  try {
    const emojiGrid = document.getElementById('emoji-grid');
    emojiGrid.innerHTML = ''; // Clear existing emojis
    const emojis = emojiData[category];

    // Create and append emoji items
    emojis.forEach(emojiObj => {
      const emojiItem = createEmojiItem(emojiObj.char, emojiObj.name);
      emojiGrid.appendChild(emojiItem);
    });

    // Update the category name display
    const categoryNameDisplay = document.getElementById('category-name');
    categoryNameDisplay.textContent = category.charAt(0).toUpperCase() + category.slice(1);
  } catch (error) {
    logError('loadEmojis', 'Failed to load emojis for category.', { category, error });
  }
}

// Function to create an emoji item
function createEmojiItem(emojiChar, emojiName) {
  const emojiItem = document.createElement('div');
  emojiItem.classList.add('emoji-item');
  emojiItem.textContent = emojiChar;
  emojiItem.dataset.name = emojiName.toLowerCase();

  // Make the emoji draggable
  emojiItem.setAttribute('draggable', 'true');

  // Touch event listeners for drag-and-drop
  emojiItem.addEventListener('touchstart', handleDragStart, false);
  emojiItem.addEventListener('touchmove', handleDragMove, false);
  emojiItem.addEventListener('touchend', handleDragEnd, false);

  // Mouse event listeners for desktop
  emojiItem.addEventListener('mousedown', handleMouseDown, false);

  return emojiItem;
}

// Drag-and-Drop Event Handlers for Emojis
function handleDragStart(e) {
  try {
    e.preventDefault();
    e.stopPropagation();
    draggedEmoji = e.target;
    draggedEmojiClone = draggedEmoji.cloneNode(true);
    draggedEmojiClone.classList.add('dragging-clone');
    document.body.appendChild(draggedEmojiClone);

    // Position the clone at the touch point
    const touch = e.touches[0];
    updateDraggedEmojiPosition(touch);

    // Initialize auto-scrolling
    initAutoScroll();

    // Vibrate on pick up
    if (navigator.vibrate) navigator.vibrate(50);
  } catch (error) {
    logError('handleDragStart', 'Failed during drag start.', { error });
  }
}

function handleDragMove(e) {
  try {
    if (!draggedEmojiClone) return;

    e.preventDefault();
    e.stopPropagation();
    const touch = e.touches[0];
    updateDraggedEmojiPosition(touch);

    // Get the element under the touch point
    const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
    if (!elementBelow) return;

    const droppableBelow = elementBelow.closest('.emoji-placeholder');

    if (currentDroppable !== droppableBelow) {
      if (currentDroppable) {
        currentDroppable.classList.remove('highlight');
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) {
        currentDroppable.classList.add('highlight');
      }
    }

    // Auto-scroll when near the edge
    autoScroll(touch.clientY);
  } catch (error) {
    logError('handleDragMove', 'Failed during drag move.', { error });
  }
}

function handleDragEnd(e) {
  try {
    if (!draggedEmojiClone) return;

    e.preventDefault();
    e.stopPropagation();
    const touch = e.changedTouches[0];
    const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
    const droppableBelow = elementBelow.closest('.emoji-placeholder');

    if (droppableBelow) {
      // Place the emoji in the placeholder
      droppableBelow.textContent = draggedEmoji.textContent;
      droppableBelow.classList.remove('highlight');
      droppableBelow.removeAttribute('data-empty');
      // Vibrate on drop
      if (navigator.vibrate) navigator.vibrate(50);
    }

    if (currentDroppable) {
      currentDroppable.classList.remove('highlight');
      currentDroppable = null;
    }

    draggedEmojiClone.remove();
    draggedEmojiClone = null;
    draggedEmoji = null;

    // Stop auto-scrolling
    stopAutoScroll();
  } catch (error) {
    logError('handleDragEnd', 'Failed during drag end.', { error });
  }
}

// Mouse Event Handlers for Desktop Support
function handleMouseDown(e) {
  try {
    e.preventDefault();
    e.stopPropagation();
    draggedEmoji = e.target;
    draggedEmojiClone = draggedEmoji.cloneNode(true);
    draggedEmojiClone.classList.add('dragging-clone');
    document.body.appendChild(draggedEmojiClone);

    // Position the clone at the mouse point
    updateDraggedEmojiPosition(e);

    // Initialize auto-scrolling
    initAutoScroll();

    // Mouse move and up handlers
    document.addEventListener('mousemove', handleMouseMove, false);
    document.addEventListener('mouseup', handleMouseUp, false);
  } catch (error) {
    logError('handleMouseDown', 'Failed during mouse down.', { error });
  }
}

function handleMouseMove(e) {
  try {
    if (!draggedEmojiClone) return;

    e.preventDefault();
    e.stopPropagation();
    updateDraggedEmojiPosition(e);

    const elementBelow = document.elementFromPoint(e.clientX, e.clientY);
    if (!elementBelow) return;

    const droppableBelow = elementBelow.closest('.emoji-placeholder');

    if (currentDroppable !== droppableBelow) {
      if (currentDroppable) {
        currentDroppable.classList.remove('highlight');
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) {
        currentDroppable.classList.add('highlight');
      }
    }

    // Auto-scroll when near the edge
    autoScroll(e.clientY);
  } catch (error) {
    logError('handleMouseMove', 'Failed during mouse move.', { error });
  }
}

function handleMouseUp(e) {
  try {
    if (!draggedEmojiClone) return;

    e.preventDefault();
    e.stopPropagation();
    const elementBelow = document.elementFromPoint(e.clientX, e.clientY);
    const droppableBelow = elementBelow.closest('.emoji-placeholder');

    if (droppableBelow) {
      // Place the emoji in the placeholder
      droppableBelow.textContent = draggedEmoji.textContent;
      droppableBelow.classList.remove('highlight');
      droppableBelow.removeAttribute('data-empty');
    }

    if (currentDroppable) {
      currentDroppable.classList.remove('highlight');
      currentDroppable = null;
    }

    draggedEmojiClone.remove();
    draggedEmojiClone = null;
    draggedEmoji = null;

    // Stop auto-scrolling
    stopAutoScroll();

    document.removeEventListener('mousemove', handleMouseMove, false);
    document.removeEventListener('mouseup', handleMouseUp, false);
  } catch (error) {
    logError('handleMouseUp', 'Failed during mouse up.', { error });
  }
}

// Update the position of the dragged emoji clone
function updateDraggedEmojiPosition(event) {
  try {
    const x = event.clientX || (event.touches && event.touches[0].clientX);
    const y = event.clientY || (event.touches && event.touches[0].clientY);
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Position the clone under the cursor/finger
    draggedEmojiClone.style.left = `${x + scrollLeft}px`;
    draggedEmojiClone.style.top = `${y + scrollTop}px`;
  } catch (error) {
    logError('updateDraggedEmojiPosition', 'Failed to update dragged emoji position.', { error });
  }
}

// Auto-scroll functions
function initAutoScroll() {
  if (autoScrollInterval) return;
  autoScrollInterval = setInterval(() => {}, 20); // Placeholder, actual scrolling happens in autoScroll()
}

function autoScroll(pointerY) {
  const viewportHeight = window.innerHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - viewportHeight;

  if (pointerY < scrollThreshold && scrollTop > 0) {
    // Scroll up
    window.scrollBy(0, -scrollSpeed);
  } else if (pointerY > viewportHeight - scrollThreshold && scrollTop < maxScroll) {
    // Scroll down
    window.scrollBy(0, scrollSpeed);
  }
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
  autoScrollInterval = null;
}

// Event listeners for category navigation
document.getElementById('prev-category').addEventListener('click', () => navigateCategory('prev'));
document.getElementById('next-category').addEventListener('click', () => navigateCategory('next'));

// Function to navigate categories
function navigateCategory(direction) {
  try {
    if (direction === 'prev') {
      currentCategoryIndex = (currentCategoryIndex - 1 + categories.length) % categories.length;
    } else if (direction === 'next') {
      currentCategoryIndex = (currentCategoryIndex + 1) % categories.length;
    }
    const newCategory = categories[currentCategoryIndex];
    loadEmojis(newCategory);
  } catch (error) {
    logError('navigateCategory', 'Failed to navigate categories.', { direction, error });
  }
}

// Emoji search functionality
const emojiSearchInput = document.getElementById('emoji-search-input');
emojiSearchInput.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  filterEmojis(searchTerm);
});

function filterEmojis(searchTerm) {
  const emojis = document.querySelectorAll('.emoji-item');
  emojis.forEach(emoji => {
    if (emoji.dataset.name.includes(searchTerm)) {
      emoji.style.display = 'flex';
    } else {
      emoji.style.display = 'none';
    }
  });
}

// Huiswerk Button Toggle Functionality
const huiswerkButton = document.querySelector('.huiswerk-button');
huiswerkButton.addEventListener('click', () => {
  try {
    huiswerkButton.classList.toggle('active');

    if (huiswerkButton.classList.contains('active')) {
      // Add thumbs-up animation
      const thumbSpan = document.createElement('span');
      thumbSpan.textContent = '👍';
      thumbSpan.classList.add('thumb-animation');
      huiswerkButton.appendChild(thumbSpan);

      setTimeout(() => {
        thumbSpan.remove();
      }, 2000); // Remove after 2 seconds
    }
  } catch (error) {
    logError('huiswerkButton', 'Failed to toggle Huiswerk button.', { error });
  }
});

// Update live time display
function updateLiveTime() {
  try {
    const liveTimeElement = document.getElementById('live-time');
    const now = new Date();
    liveTimeElement.textContent = now.toLocaleTimeString('nl-NL', { hour12: false });
  } catch (error) {
    logError('updateLiveTime', 'Failed to update live time.', { error });
  }
}

// Reset Button Functionality
document.getElementById('reset-button').addEventListener('click', () => {
  try {
    // Clear emojis from placeholders
    const placeholders = document.querySelectorAll('.emoji-placeholder');
    placeholders.forEach(placeholder => {
      placeholder.textContent = '';
      placeholder.setAttribute('data-empty', 'true');
    });

    // Reset Huiswerk button
    huiswerkButton.classList.remove('active');

    // Reset day rating
    ratingButtons.forEach(button => {
      button.classList.remove('selected');
    });
  } catch (error) {
    logError('resetButton', 'Failed to reset planner.', { error });
  }
});

// Day Rating System
const ratingButtons = document.querySelectorAll('.rating-button');
ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    try {
      ratingButtons.forEach(btn => {
        btn.classList.remove('selected');
      });
      button.classList.add('selected');
    } catch (error) {
      logError('ratingButton', 'Failed to select rating.', { button, error });
    }
  });
});

// Error Logging Function
function logError(eventType, message, details = {}) {
  console.error(`Error [${eventType}]: ${message}`, details);
}

// Initialize the application
init();
