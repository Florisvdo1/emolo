// Data for emojis categorized with names
const emojiData = {
  activiteiten: [
    { char: '🏃‍♂️', name: 'running man' },
    { char: '🏃‍♀️', name: 'running woman' },
    { char: '🚴‍♂️', name: 'man biking' },
    { char: '🚴‍♀️', name: 'woman biking' },
    { char: '🏊‍♂️', name: 'man swimming' },
    { char: '🏊‍♀️', name: 'woman swimming' },
    { char: '🏋️‍♂️', name: 'man lifting weights' },
    { char: '🏋️‍♀️', name: 'woman lifting weights' },
    { char: '🤸‍♂️', name: 'man cartwheeling' },
    { char: '🤸‍♀️', name: 'woman cartwheeling' },
    { char: '⛹️‍♂️', name: 'man bouncing ball' },
    { char: '⛹️‍♀️', name: 'woman bouncing ball' },
    // ... Add more activity emojis as needed
  ],
  emoties: [
    { char: '😀', name: 'grinning face' },
    { char: '😁', name: 'beaming face with smiling eyes' },
    { char: '😂', name: 'face with tears of joy' },
    { char: '🤣', name: 'rolling on the floor laughing' },
    { char: '😊', name: 'smiling face with smiling eyes' },
    { char: '😢', name: 'crying face' },
    { char: '😡', name: 'pouting face' },
    { char: '😍', name: 'smiling face with heart-eyes' },
    { char: '😎', name: 'smiling face with sunglasses' },
    { char: '🤔', name: 'thinking face' },
    { char: '😴', name: 'sleeping face' },
    { char: '😷', name: 'face with medical mask' },
    // ... Add more emotion emojis as needed
  ],
  eten_en_drinken: [
    { char: '🍎', name: 'red apple' },
    { char: '🍌', name: 'banana' },
    { char: '🍇', name: 'grapes' },
    { char: '🍕', name: 'pizza' },
    { char: '🍔', name: 'hamburger' },
    { char: '🍟', name: 'french fries' },
    { char: '🌭', name: 'hot dog' },
    { char: '🍣', name: 'sushi' },
    { char: '🍰', name: 'shortcake' },
    { char: '🎂', name: 'birthday cake' },
    { char: '🍩', name: 'doughnut' },
    { char: '☕', name: 'hot beverage' },
    { char: '🍺', name: 'beer mug' },
    { char: '🍷', name: 'wine glass' },
    // ... Add more food and drink emojis as needed
  ],
  dieren: [
    { char: '🐶', name: 'dog face' },
    { char: '🐱', name: 'cat face' },
    { char: '🐭', name: 'mouse face' },
    { char: '🐹', name: 'hamster face' },
    { char: '🐰', name: 'rabbit face' },
    { char: '🦊', name: 'fox face' },
    { char: '🐻', name: 'bear face' },
    { char: '🐼', name: 'panda face' },
    { char: '🐨', name: 'koala' },
    { char: '🐯', name: 'tiger face' },
    { char: '🦁', name: 'lion face' },
    { char: '🐮', name: 'cow face' },
    { char: '🐷', name: 'pig face' },
    { char: '🐸', name: 'frog face' },
    { char: '🐵', name: 'monkey face' },
    // ... Add more animal emojis as needed
  ],
  reizen_en_plaatsen: [
    { char: '🚗', name: 'automobile' },
    { char: '🚕', name: 'taxi' },
    { char: '🚙', name: 'sport utility vehicle' },
    { char: '🚌', name: 'bus' },
    { char: '🚑', name: 'ambulance' },
    { char: '🚒', name: 'fire engine' },
    { char: '🚜', name: 'tractor' },
    { char: '✈️', name: 'airplane' },
    { char: '🚀', name: 'rocket' },
    { char: '⛵', name: 'sailboat' },
    { char: '🗽', name: 'Statue of Liberty' },
    { char: '🗼', name: 'Tokyo tower' },
    { char: '🏰', name: 'castle' },
    { char: '🏯', name: 'Japanese castle' },
    { char: '🏖️', name: 'beach with umbrella' },
    { char: '🌇', name: 'sunset' },
    { char: '🌃', name: 'night with stars' },
    // ... Add more travel and places emojis as needed
  ],
  sport_en_spel: [
    { char: '⚽', name: 'soccer ball' },
    { char: '🏀', name: 'basketball' },
    { char: '🏈', name: 'american football' },
    { char: '⚾', name: 'baseball' },
    { char: '🎾', name: 'tennis' },
    { char: '🏐', name: 'volleyball' },
    { char: '🏉', name: 'rugby football' },
    { char: '🎱', name: 'pool 8 ball' },
    { char: '🏓', name: 'ping pong' },
    { char: '🏸', name: 'badminton' },
    { char: '🥅', name: 'goal net' },
    { char: '🏒', name: 'ice hockey' },
    { char: '🏹', name: 'bow and arrow' },
    { char: '🎯', name: 'direct hit' },
    { char: '🎲', name: 'game die' },
    { char: '♟️', name: 'chess pawn' },
    // ... Add more sports and game emojis as needed
  ],
  objecten: [
    { char: '💻', name: 'laptop computer' },
    { char: '🖥️', name: 'desktop computer' },
    { char: '🖨️', name: 'printer' },
    { char: '⌨️', name: 'keyboard' },
    { char: '🖱️', name: 'computer mouse' },
    { char: '📱', name: 'mobile phone' },
    { char: '📞', name: 'telephone receiver' },
    { char: '🎥', name: 'movie camera' },
    { char: '📷', name: 'camera' },
    { char: '📺', name: 'television' },
    { char: '⏰', name: 'alarm clock' },
    { char: '🕰️', name: 'mantelpiece clock' },
    { char: '💡', name: 'light bulb' },
    { char: '🔦', name: 'flashlight' },
    { char: '📖', name: 'open book' },
    { char: '📚', name: 'books' },
    { char: '🛏️', name: 'bed' },
    { char: '🚿', name: 'shower' },
    // ... Add more object emojis as needed
  ],
  symbolen: [
    { char: '❤️', name: 'red heart' },
    { char: '💛', name: 'yellow heart' },
    { char: '💚', name: 'green heart' },
    { char: '💙', name: 'blue heart' },
    { char: '💜', name: 'purple heart' },
    { char: '🖤', name: 'black heart' },
    { char: '⭐', name: 'star' },
    { char: '🌟', name: 'glowing star' },
    { char: '🔥', name: 'fire' },
    { char: '💧', name: 'droplet' },
    { char: '🎵', name: 'musical note' },
    { char: '🎶', name: 'musical notes' },
    { char: '⚠️', name: 'warning' },
    { char: '❌', name: 'cross mark' },
    { char: '✅', name: 'check mark button' },
    { char: '❓', name: 'question mark' },
    { char: '❗', name: 'exclamation mark' },
    // ... Add more symbol emojis as needed
  ],
  vlaggen: [
    { char: '🇳🇱', name: 'flag of Netherlands' },
    { char: '🇧🇪', name: 'flag of Belgium' },
    { char: '🇩🇪', name: 'flag of Germany' },
    { char: '🇫🇷', name: 'flag of France' },
    { char: '🇬🇧', name: 'flag of United Kingdom' },
    { char: '🇺🇸', name: 'flag of United States' },
    { char: '🇪🇸', name: 'flag of Spain' },
    { char: '🇮🇹', name: 'flag of Italy' },
    { char: '🇯🇵', name: 'flag of Japan' },
    { char: '🇨🇳', name: 'flag of China' },
    { char: '🇦🇺', name: 'flag of Australia' },
    { char: '🇧🇷', name: 'flag of Brazil' },
    // ... Add more flag emojis as needed
  ],
  weer_en_natuur: [
    { char: '☀️', name: 'sun' },
    { char: '🌤️', name: 'sun behind small cloud' },
    { char: '⛅', name: 'sun behind cloud' },
    { char: '🌧️', name: 'cloud with rain' },
    { char: '⛈️', name: 'cloud with lightning and rain' },
    { char: '🌨️', name: 'cloud with snow' },
    { char: '🌩️', name: 'cloud with lightning' },
    { char: '🌪️', name: 'tornado' },
    { char: '🌈', name: 'rainbow' },
    { char: '❄️', name: 'snowflake' },
    { char: '☔', name: 'umbrella with rain drops' },
    { char: '💧', name: 'droplet' },
    { char: '🌊', name: 'water wave' },
    { char: '🍂', name: 'fallen leaf' },
    { char: '🌻', name: 'sunflower' },
    { char: '🌼', name: 'blossom' },
    { char: '🌳', name: 'deciduous tree' },
    { char: '🌵', name: 'cactus' },
    { char: '🌴', name: 'palm tree' },
    // ... Add more weather and nature emojis as needed
  ],
  mensen: [
    { char: '👶', name: 'baby' },
    { char: '🧒', name: 'child' },
    { char: '👦', name: 'boy' },
    { char: '👧', name: 'girl' },
    { char: '🧑', name: 'person' },
    { char: '👱‍♂️', name: 'blond-haired man' },
    { char: '👱‍♀️', name: 'blond-haired woman' },
    { char: '👨', name: 'man' },
    { char: '👩', name: 'woman' },
    { char: '🧓', name: 'older person' },
    { char: '👴', name: 'old man' },
    { char: '👵', name: 'old woman' },
    { char: '👮‍♂️', name: 'policeman' },
    { char: '👮‍♀️', name: 'policewoman' },
    { char: '👷‍♂️', name: 'construction worker man' },
    { char: '👷‍♀️', name: 'construction worker woman' },
    { char: '💂‍♂️', name: 'guardsman' },
    { char: '💂‍♀️', name: 'guardswoman' },
    // ... Add more people emojis as needed
  ],
  feestdagen_en_vieringen: [
    { char: '🎉', name: 'party popper' },
    { char: '🎊', name: 'confetti ball' },
    { char: '🎂', name: 'birthday cake' },
    { char: '🎁', name: 'wrapped gift' },
    { char: '🎃', name: 'jack-o-lantern' },
    { char: '🕯️', name: 'candle' },
    { char: '🧨', name: 'firecracker' },
    { char: '🎆', name: 'fireworks' },
    { char: '🎇', name: 'sparkler' },
    { char: '🧧', name: 'red envelope' },
    { char: '🎄', name: 'Christmas tree' },
    { char: '🎅', name: 'Santa Claus' },
    { char: '🤶', name: 'Mrs. Claus' },
    { char: '🕎', name: 'menorah' },
    // ... Add more holiday and celebration emojis as needed
  ],
  transportmiddelen: [
    { char: '🚗', name: 'automobile' },
    { char: '🚕', name: 'taxi' },
    { char: '🚙', name: 'sport utility vehicle' },
    { char: '🚌', name: 'bus' },
    { char: '🚎', name: 'trolleybus' },
    { char: '🏎️', name: 'racing car' },
    { char: '🚓', name: 'police car' },
    { char: '🚑', name: 'ambulance' },
    { char: '🚒', name: 'fire engine' },
    { char: '🚐', name: 'minibus' },
    { char: '🚚', name: 'delivery truck' },
    { char: '🚛', name: 'articulated lorry' },
    { char: '🚜', name: 'tractor' },
    { char: '🚲', name: 'bicycle' },
    { char: '🛴', name: 'kick scooter' },
    { char: '🛵', name: 'motor scooter' },
    { char: '🚂', name: 'locomotive' },
    { char: '🚁', name: 'helicopter' },
    { char: '🛩️', name: 'small airplane' },
    // ... Add more transportation emojis as needed
  ],
  // You can continue adding more categories and emojis as needed
};

// Rest of your script.js code...

// [The rest of your JavaScript code remains unchanged]
// Ensure that all functions and event listeners are properly defined
// and the application initializes correctly with the updated emojiData.

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
