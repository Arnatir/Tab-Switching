// Wait for the DOM content to be fully loaded before executing the script
window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    // Select all tab elements, the parent container, and all tab content elements
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    // Function to hide tab content starting from index 'a'
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    // Hide all tab contents except the first one
    hideTabContent(1);

    // Function to show tab content at index 'b'
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    // Listen for click events on the tab container
    info.addEventListener('click', function(event) {
        let target = event.target;
        // Check if the clicked element is a tab
        if(target && target.classList.contains('info-header-tab')) {
            // Loop through the tab elements to find the clicked tab's index
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    // Hide all tab contents and show the selected tab's content
                    hideTabContent(0);
                    showTabContent(i);
                    break; // Exit the loop since we found the clicked tab
                }
            }
        }
    });

});
