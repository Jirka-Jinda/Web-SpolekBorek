function ShowMore()
{
    var cards = document.getElementsByClassName('card');
    for (let index = 3; index < cards.length; index++) {
        const element = cards[index];
        element.style.display = 'block';
    }
}