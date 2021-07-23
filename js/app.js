// "DATABASES"
const members = [ 
    {
        profilePicture: 'images/member-1.jpg',
        name: 'Victoria Chambers', 
        email: 'victoria.chambers80@example.com',
        dateJoined: '10/15/20'
    },
    {
        profilePicture: 'images/member-2.jpg',
        name: 'Dale Byrd', 
        email: 'dale.byrd52@example.com',
        dateJoined: '10/15/20'
    },
    {
        profilePicture: 'images/member-3.jpg',
        name: 'Dawn Wood', 
        email: 'dawn.wood16@example.com',
        dateJoined: '10/15/20'
    },
    {
        profilePicture: 'images/member-4.jpg',
        name: 'Dan Oliver', 
        email: 'dan.oliver@example.com',
        dateJoined: '10/15/20'
    }
];

const recentActivity = [
    {
        profilePicture: 'images/member-1.jpg',
        name: 'Victoria Chambers', 
        activity: 'commented on',
        post: "WebApp's SEO Tips",
        when: '4 hours ago'
    },
    {
        profilePicture: 'images/member-2.jpg',
        name: 'Dale Byrd', 
        activity: 'liked the post',
        post: "Facebook's Changes for 2021",
        when: '5 hours ago'
    },
    {
        profilePicture: 'images/member-3.jpg',
        name: 'Dawn Wood', 
        activity: 'commented on',
        post: "Facebook's Changes for 2021",
        when: '5 hours ago'
    },
    {
        profilePicture: 'images/member-4.jpg',
        name: 'Dan Oliver', 
        activity: 'posted',
        post: "webApp's SEO Tips",
        when: '1 day ago'
    }
];

// INSERT ELEMENTS
const membersSection = document.querySelector('.members');
const activitySection = document.querySelector('.activity');

function insertMemberActivityData( array, section, className ) {
    for (let i = 0; i < array.length; i++) {
        let inner = '';
        if (array === members) {
            inner = `
            <div class="flex-container">
                <div class="members-text">
                    <img src=${members[i].profilePicture} class="profile-img" alt="a picture of a web member">
                    <div class="inner-text">
                        <p>${members[i].name}</p>
                        <a href="#">${members[i].email}</a>
                    </div>
                </div>
                <p>${members[i].dateJoined}</p>
            </div>`;
        } else if ( array === recentActivity) {
            inner =     `   
                <div class="flex-container"> 
                <div class="members-text">   
                    <img src=${recentActivity[i].profilePicture} class="profile-img" alt="a picture of a web member">
                    <div class="inner-text">
                        <p>${recentActivity[i].name} ${recentActivity[i].activity} <strong>${recentActivity[i].post}</strong></p>
                        <p>${recentActivity[i].when}</p>
                    </div>
                </div>
                <a class="carrot">></a>
            </div>`;
        } else {}
        let newElement = document.createElement('div');
        newElement.className = className;
        newElement.innerHTML = inner;
        section.appendChild(newElement);
    }
}

insertMemberActivityData( members, membersSection, 'new-member-container' );
insertMemberActivityData( recentActivity, activitySection, 'recent-activity-container' );

// ALERTS
const alertBanner = document.getElementById('alerts');

alertBanner.innerHTML = 
    `
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete </p>
        <p class="alert-banner-close">x</p>
    </div>
    `;
    
alertBanner.addEventListener('click', e => {
    const element = e.target; 
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";
    }
});

// SEND MESSAGE
const user = document.getElementById('user-field');
const message = document.getElementById('message-field');
const send = document.getElementById('send');

function checkUser(name, object) {
    for (let i = 0; i < object.length; i++) {
        if (name.toLowerCase() === object[i].name.toLowerCase()) {
            return true;
        }
    }
    return false; 
}

send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending.");
    } else if (user.value === "") {
        alert("Please fill out user field before sending.");
    } else if (message.value === "") {
        alert("Please fill out message field before sending.");
    } else if (!checkUser(user.value, members)) {
        alert(`${user.value} does not exist`);
    } else {
        alert(`Message successfully sent to ${user.value}`);
        user.value = '';
        message.value = '';
    }
});

// SAVING
const email = document.getElementById('email-check');
const public = document.getElementById('public-check');
const save = document.getElementById('save-button');
const cancel = document.getElementById('cancel-button');
const timezone = document.getElementById('timezone');

save.addEventListener('click', () => {
    localStorage.setItem('email-status', email.checked);
    localStorage.setItem('public-status', public.checked);
    localStorage.setItem('timezone-status', timezone.value);
});

cancel.addEventListener('click', () => {
    localStorage.removeItem('email-status');
    localStorage.removeItem('public-status');
    localStorage.removeItem('timezone-status');
    email.checked = false; 
    public.checked = false; 
    timezone.value = 'Select a Timezone';
});

function checkItem( key, element ) {
    if (localStorage.getItem(key) === 'true') {
        element.checked = true;
    } else {
        element.checked = false;
    }
}

checkItem( 'email-status', email );
checkItem( 'public-status', public );

if (localStorage.getItem('timezone-status')) {
    timezone.value = localStorage.getItem('timezone-status');
}