document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is running!');

    // Change the color of the heading when clicked
    const heading = document.querySelector('h1');
    heading.addEventListener('click', () => {
        heading.style.color = heading.style.color === 'blue' ? 'green' : 'blue';
    });

    // Display an alert when the paragraph is clicked
    const paragraph = document.querySelector('p');
    paragraph.addEventListener('click', () => {
        alert('You clicked the paragraph!');
    });

    // Update text content of the paragraph after 2 seconds
    setTimeout(() => {
        paragraph.textContent = 'The content has been updated after 2 seconds!';
    }, 2000);
});
