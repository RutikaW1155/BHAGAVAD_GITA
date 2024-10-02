document.addEventListener('DOMContentLoaded', async () => {
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
            <div class="verses">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17" height="17" viewBox="0 0 24 24">
                    <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
                </svg>
                <span class="mb-0.5">${chapter.verses_count} Verses</span>
            </div>
        `;
        chapterElement.addEventListener('click', () => {
            window.location.href = `chapter.html?chapter=${chapter.chapter_number}`;
        });
        container.appendChild(chapterElement);
    });
}


