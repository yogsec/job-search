// DOM Elements
let jobRoleSelect, locationSelect, searchBtn, copyBtn, shareBtn, dorkOutput, resultsSection, toast;

// Initialize Tom Select
function initTomSelect() {
    const roles = getJobRoles();
    const locations = getLocations();
    
    const roleOptions = roles.map(role => ({ value: role, text: role }));
    const locationOptions = locations.map(loc => ({ value: loc, text: loc }));
    
    jobRoleSelect = new TomSelect('#jobRoleSelect', {
        maxOptions: 50,
        create: true,
        createFilter: true,
        highlight: true,
        searchField: 'text',
        sortField: 'text',
        placeholder: 'Type a job role...',
        options: roleOptions,
        items: [],
        render: {
            option: function(data, escape) {
                return `<div class="option">${escape(data.text)}</div>`;
            },
            item: function(data, escape) {
                return `<div class="item">${escape(data.text)}</div>`;
            }
        }
    });
    
    locationSelect = new TomSelect('#locationSelect', {
        maxOptions: 50,
        create: true,
        createFilter: true,
        highlight: true,
        searchField: 'text',
        sortField: 'text',
        placeholder: 'Type a location...',
        options: locationOptions,
        items: [],
        render: {
            option: function(data, escape) {
                return `<div class="option">${escape(data.text)}</div>`;
            },
            item: function(data, escape) {
                return `<div class="item">${escape(data.text)}</div>`;
            }
        }
    });
}

// Generate Google Dork
function generateGoogleDork() {
    const jobRoleValue = jobRoleSelect.getValue();
    const locationValue = locationSelect.getValue();
    
    if (!jobRoleValue || jobRoleValue.length === 0) {
        showToast('Please select or enter a job role', 'warning');
        return null;
    }
    
    const jobRole = Array.isArray(jobRoleValue) ? jobRoleValue[0] : jobRoleValue;
    
    let locationPart = '';
    if (locationValue && locationValue.length > 0) {
        let location = Array.isArray(locationValue) ? locationValue[0] : locationValue;
        
        if (location.toLowerCase().includes('remote')) {
            locationPart = 'remote OR "work from home" OR wfh OR "remote work" OR "work remotely" OR "telecommute"';
        } else {
            locationPart = `"${location}"`;
        }
    }
    
    const dorkParts = [`"${jobRole}"`];
    
    if (locationPart) {
        dorkParts.push(`(${locationPart})`);
    }
    
    dorkParts.push(`(inurl:careers OR inurl:jobs OR inurl:join-us OR intitle:"we're hiring" OR intitle:"join our team" OR intitle:"careers")`);
    
    return dorkParts.join(' ');
}

// Perform Search
function performSearch() {
    const dork = generateGoogleDork();
    if (!dork) return;
    
    const encodedQuery = encodeURIComponent(dork);
    const googleUrl = `https://www.google.com/search?q=${encodedQuery}`;
    
    dorkOutput.textContent = dork;
    resultsSection.style.display = 'block';
    
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    window.open(googleUrl, '_blank');
    showToast('Opening Google search in new tab...', 'success');
}

// Copy Dork
function copyDork() {
    const dork = dorkOutput.textContent;
    if (dork) {
        navigator.clipboard.writeText(dork);
        showToast('Query copied to clipboard!', 'success');
    }
}

// Share App
function shareApp() {
    if (navigator.share) {
        navigator.share({
            title: 'Job Finder',
            text: 'Find hidden job opportunities using Google Dorks',
            url: window.location.href
        }).catch(() => {});
    } else {
        navigator.clipboard.writeText(window.location.href);
        showToast('Link copied to clipboard!', 'success');
    }
}

// Show Toast
function showToast(message, type = 'info') {
    toast.innerHTML = `<i class="fas ${type === 'warning' ? 'fa-exclamation-triangle' : 'fa-check-circle'}"></i> ${message}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    searchBtn = document.getElementById('searchBtn');
    copyBtn = document.getElementById('copyBtn');
    shareBtn = document.getElementById('shareBtn');
    dorkOutput = document.getElementById('dorkOutput');
    resultsSection = document.getElementById('resultsSection');
    toast = document.getElementById('toastNotification');
    
    initTomSelect();
    
    searchBtn.addEventListener('click', performSearch);
    copyBtn.addEventListener('click', copyDork);
    shareBtn.addEventListener('click', shareApp);
    
    console.log('Job Finder initialized with macOS Glass UI');
});