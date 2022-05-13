const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// select tab content item
function selectItem(e){
    removeBorder();
    removeShow();

    // Add new border
    this.classList.add('tab-border');
    
    // Grab current tab content
    var contentId = '#' + this.id + '-content';
    const currentTabContent = document.querySelector(contentId);

    currentTabContent.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for all tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));