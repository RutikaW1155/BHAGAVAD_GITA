const verses = [
    {
        id: 1,
        verse_number: 1,
        chapter_number: 1,
        text: "धृतराष्ट्र उवाच धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः। मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय।।1.1।।",
        translations: [
            {
                id: 7,
                description: "1.1 The King Dhritarashtra asked: \"O Sanjaya! What happened on the sacred battlefield of Kurukshetra, when my people gathered against the Pandavas?\"",
                author_name: "Shri Purohit Swami",
                language: "english"
            }
        ],
        commentaries: [
            {
                id: 2,
                description: "।।1.1।। सम्पूर्ण गीता में यही एक मात्र श्लोक अन्ध वृद्ध राजा धृतराष्ट्र ने कहा है। शेष सभी श्लोक संजय के कहे हुए हैं...",
                author_name: "Swami Chinmayananda",
                language: "hindi"
            }
        ]
    }
    // Add more verses as needed
];

const verseList = document.getElementById('verse-list');
const versePage = document.getElementById('verse-page');
const mainPage = document.getElementById('main-page');
const verseContent = document.getElementById('verse-content');
const backButton = document.getElementById('back-button');

function displayVerseList() {
    verses.forEach(verse => {
        const verseBox = document.createElement('div');
        verseBox.classList.add('verse-box');
        verseBox.textContent = `Chapter ${verse.chapter_number}, Verse ${verse.verse_number}`;
        verseBox.addEventListener('click', () => displayVerseContent(verse.id));
        verseList.appendChild(verseBox);
    });
}

function displayVerseContent(id) {
    const verse = verses.find(v => v.id === id);
    if (verse) {
        verseContent.innerHTML = '';

        const verseNumberElement = document.createElement('h2');
        verseNumberElement.textContent = `Chapter ${verse.chapter_number}, Verse ${verse.verse_number}`;
        verseContent.appendChild(verseNumberElement);
        
        const verseTextElement = document.createElement('p');
        verseTextElement.classList.add('sanskrit');
        verseTextElement.textContent = verse.text;
        verseContent.appendChild(verseTextElement);

        const translationsSection = document.createElement('div');
        translationsSection.classList.add('translations');
        
        const translationsHeader = document.createElement('h3');
        translationsHeader.textContent = 'Translations';
        translationsSection.appendChild(translationsHeader);

        verse.translations.forEach(translation => {
            const translationElement = document.createElement('div');
            translationElement.classList.add('translation');

            const translationTextElement = document.createElement('p');
            translationTextElement.textContent = translation.description;
            translationElement.appendChild(translationTextElement);

            const translationAuthorElement = document.createElement('p');
            translationAuthorElement.classList.add('author');
            translationAuthorElement.textContent = `Author: ${translation.author_name} (Language: ${translation.language})`;
            translationElement.appendChild(translationAuthorElement);

            translationsSection.appendChild(translationElement);
        });
        verseContent.appendChild(translationsSection);

        const commentariesSection = document.createElement('div');
        commentariesSection.classList.add('commentaries');

        const commentariesHeader = document.createElement('h3');
        commentariesHeader.textContent = 'Commentaries';
        commentariesSection.appendChild(commentariesHeader);

        verse.commentaries.forEach(commentary => {
            const commentaryElement = document.createElement('div');
            commentaryElement.classList.add('commentary');

            const commentaryTextElement = document.createElement('p');
            commentaryTextElement.textContent = commentary.description;
            commentaryElement.appendChild(commentaryTextElement);

            const commentaryAuthorElement = document.createElement('p');
            commentaryAuthorElement.classList.add('author');
            commentaryAuthorElement.textContent = `Author: ${commentary.author_name} (Language: ${commentary.language})`;
            commentaryElement.appendChild(commentaryAuthorElement);

            commentariesSection.appendChild(commentaryElement);
        });
        verseContent.appendChild(commentariesSection);

        mainPage.style.display = 'none';
        versePage.style.display = 'block';
    }
}

backButton.addEventListener('click', () => {
    mainPage.style.display = 'block';
    versePage.style.display = 'none';
});

displayVerseList();
