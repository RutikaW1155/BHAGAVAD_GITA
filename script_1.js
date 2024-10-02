document.addEventListener('DOMContentLoaded', () => {
    fetch('https://bhagavadgitaapi.in/slok/1/1/?api_key=YOUR_API_KEY')
        .then(response => response.json())
        .then(data => {
            document.getElementById('sanskrit').innerText = data.slok;
            document.getElementById('translation').innerText = data.tej.author + ':' + data.tej.ht;
            document.getElementById('transliteration').innerText = data.transliteration;
        })
        .catch(error => console.error('Error fetching data:', error));
});
