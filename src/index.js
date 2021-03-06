let moreProfile = document.getElementById('more-profile');
toggleShowLink();

function showMoreProfile() {
    moreProfile.style.display = 'block';
    toggleShowLink();
}

function hideMoreProfile() {
    moreProfile.style.display = 'none';
    toggleShowLink();
}

function toggleShowLink() {
    const link = document.getElementById('profile').getElementsByTagName('a')[0];
    const display = moreProfile.style.display;
    if (display === 'block') {
        link.innerText = 'Show less';
        link.onmousedown = () => hideMoreProfile();
    } else {
        link.innerText = 'Show more';
        link.onmousedown = () => showMoreProfile();
    }
}
