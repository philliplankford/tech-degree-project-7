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

const membersSection = document.querySelector('.members');
const activitySection = document.querySelector('.activity');
const alertBanner = document.getElementById('alerts');

alertBanner.innerHTML = 
    `
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete </p>
        <p class="alert-banner-close">x</p>
    </div>
    `
alertBanner.addEventListener('click', e => {
    const element = e.target; 
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";
    }
});

for (let i = 0; i < members.length; i++) {
    let newMember = document.createElement('div');
    newMember.className = "new-member-container";
    newMember.innerHTML = `
        <div class="flex-container">
            <div class="members-text">
                <img src=${members[i].profilePicture} class="profile-img">
                <div class="inner-text">
                    <p>${members[i].name}</p>
                    <a href="#">${members[i].email}</a>
                </div>
            </div>
            <p>${members[i].dateJoined}</p>
        </div>`
    membersSection.appendChild(newMember);
}

for (let i = 0; i < recentActivity.length; i++) {
    let newActivity = document.createElement('div');
    newActivity.className = "recent-activity-container";
    newActivity.innerHTML = 
    `   <div class="flex-container"> 
            <div class="members-text">   
                <img src=${recentActivity[i].profilePicture} class="profile-img">
                <div class="inner-text">
                    <p>${recentActivity[i].name} ${recentActivity[i].activity} <strong>${recentActivity[i].post}</strong></p>
                    <p>${recentActivity[i].when}</p>
                </div>
            </div>
            <a class="carrot">></a>
        </div>`
    activitySection.appendChild(newActivity);
}