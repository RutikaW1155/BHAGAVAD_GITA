/*document.addEventListener('DOMContentLoaded', async () => {
    const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f795c6b565msh74bd51e70863ca1p171c76jsn5145a30d5c0c',
            'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const chapters = await response.json();
        displayChapters(chapters);
    } catch (error) {
        console.error('Error fetching chapters:', error);
    }
});

function displayChapters(chapters) {
    const container = document.getElementById('chaptersContainer');
    chapters.forEach(chapter => {
        const chapterElement = document.createElement('div');
        chapterElement.classList.add('box');
        chapterElement.innerHTML = `
            <h2 class="chap">Chapter ${chapter.chapter_number}</h2>
            <h3 class="ch">${chapter.name_transliterated}</h3>
            <p class="p">${chapter.chapter_summary.slice(0, 150)}...</p>
            
        `;
        container.appendChild(chapterElement);
    });
}








document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const chapterId = urlParams.get('chapter');

    if (chapterId) {
        const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterId}/verses/`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'f795c6b565msh74bd51e70863ca1p171c76jsn5145a30d5c0c',
                'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const verses = await response.json();
            displayVerses(verses);
        } catch (error) {
            console.error('Error fetching verses:', error);
            document.getElementById('versesContainer').innerHTML = '<p>Failed to fetch verses.</p>';
        }
    } else {
        document.getElementById('versesContainer').innerHTML = '<p>No chapter ID provided.</p>';
    }
});

function displayVerses(verses) {
    const container = document.getElementById('versesContainer');
    verses.forEach(verse => {
        const verseElement = document.createElement('div');
        verseElement.classList.add('verse');
        verseElement.innerHTML = `
            <h2>Verse ${verse.verse_number}</h2>
            <p class="sanskrit">${verse.slok}</p>
            <p class="translation">${verse.tej}</p>
            <p class="transliteration">${verse.transliteration}</p>
        `;
        container.appendChild(verseElement);
    });
}
*/

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const chapterId = urlParams.get('chapter');

    if (chapterId) {
        console.log(`Fetching chapter and verses for chapter ID: ${chapterId}`);
        await fetchAndDisplayChapterWithVerses(chapterId);
    } else {
        console.log('Fetching all chapters');
        await fetchAndDisplayChapters();
    }
});

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'f795c6b565msh74bd51e70863ca1p171c76jsn5145a30d5c0c',
        'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
    }
};

async function fetchAndDisplayChapters() {
    const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18';
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const chapters = await response.json();
        console.log('Fetched chapters:', chapters);
        displayChapters(chapters);
    } catch (error) {
        console.error('Error fetching chapters:', error);
        document.getElementById('contentContainer').innerHTML = '<p>Failed to fetch chapters.</p>';
    }
}

function displayChapters(chapters) {
    const container = document.getElementById('contentContainer');
    if (!container) {
        console.error('Content container not found!');
        return;
    }
    container.innerHTML = ''; // Clear existing content

    chapters.forEach(chapter => {
        const chapterElement = document.createElement('div');
        chapterElement.classList.add('box');
        chapterElement.innerHTML = `
            <h2 class="chap">Chapter ${chapter.chapter_number}</h2>
            <h3 class="ch">${chapter.name_transliterated}</h3>
            <p class="p">${chapter.chapter_summary.slice(0, 150)}...</p>
            <a href="?chapter=${chapter.chapter_number}">Read More</a>
        `;
        container.appendChild(chapterElement);
    });
}

async function fetchAndDisplayChapterWithVerses(chapterId) {
    const chapterUrl = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterId}/`;
    const versesUrl = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterId}/verses/`;

    try {
        console.log(`Fetching chapter details from: ${chapterUrl}`);
        const chapterResponse = await fetch(chapterUrl, options);
        if (!chapterResponse.ok) {
            throw new Error(`Failed to fetch chapter: HTTP status ${chapterResponse.status}`);
        }
        const chapter = await chapterResponse.json();
        console.log('Fetched chapter:', chapter);

        console.log(`Fetching verses from: ${versesUrl}`);
        const versesResponse = await fetch(versesUrl, options);
        if (!versesResponse.ok) {
            throw new Error(`Failed to fetch verses: HTTP status ${versesResponse.status}`);
        }
        const verses = await versesResponse.json();
        console.log('Fetched verses:', verses);

        displayChapterWithVerses(chapter, verses);
    } catch (error) {
        console.error('Error fetching chapter or verses:', error);
        document.getElementById('contentContainer').innerHTML = '<p>Failed to fetch chapter or verses.</p>';
    }
}

function displayChapterWithVerses(chapter, verses) {
    const container = document.getElementById('contentContainer');
    if (!container) {
        console.error('Content container not found!');
        return;
    }
    container.innerHTML = ''; // Clear existing content

    // Display Chapter Info
    const chapterElement = document.createElement('div');
    chapterElement.classList.add('box');
    chapterElement.innerHTML = `
        <h2 class="chap">Chapter ${chapter.chapter_number}</h2>
        <h3 class="ch">${chapter.name_transliterated}</h3>
        <p class="p">${chapter.chapter_summary}</p>
    `;
    container.appendChild(chapterElement);

    // Display Verses
 /*   verses.forEach(verse => {
        const verseElement = document.createElement('div');
        verseElement.classList.add('verse');
        verseElement.innerHTML = `
            <h2>Verse ${verse.verse_number}</h2>
            <p class="sanskrit">${verse.slok}</p>
            <p class="translation">${verse.tej}</p>
            <p class="transliteration">${verse.transliteration}</p>
        `;
        container.appendChild(verseElement);
    });
    */
// Assuming verses is an array containing verse objects
verses.forEach(verse => {
    const verseElement = document.createElement('div');
    verseElement.classList.add('verse');
    
    // Create and append verse number and text
    const verseNumberElement = document.createElement('h2');
    verseNumberElement.textContent = ` Verse ${verse.verse_number}`;
    verseElement.appendChild(verseNumberElement);
    
    const verseTextElement = document.createElement('p');
    verseTextElement.classList.add('sanskrit');
    verseTextElement.textContent = verse.text;
    verseElement.appendChild(verseTextElement);

    // Create a section for translations
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
    verseElement.appendChild(translationsSection);

    // Create a section for commentaries
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
    verseElement.appendChild(commentariesSection);

    // Append the verse element to the container
    container.appendChild(verseElement);
});


    
}
