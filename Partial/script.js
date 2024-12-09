function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.add('hidden'));

    const activeTab = document.getElementById(tabId);
    activeTab.classList.remove('hidden');
}

function openProject(projectName) {
    const action = prompt(`You clicked on ${projectName}. Do you want to view the Source Code or the Website?`);
    if (action) {
        alert(`You chose to view the ${action}.`);
    }
}
