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

for (let i = 0; i < members.length; i++) {
    let newMember = document.createElement('div');
    newMember.className = "new-member-container";
    newMember.innerHTML = `<img src=${members[i].profilePicture} class="profile-img">
            <div class="members-text">
                <p>${members[i].name}</p>
                <a href="#">${members[i].email}</a>
            </div>
            <p>${members[i].dateJoined}</p>`
    membersSection.appendChild(newMember);
}

for (let i = 0; i < recentActivity.length; i++) {
    let newActivity = document.createElement('div');
    newActivity.className = "recent-activity-container";
    newActivity.innerHTML = 
    `<img src=${recentActivity[i].profilePicture} class="profile-img">
        <div class="members-text">
            <p>${recentActivity[i].name} ${recentActivity[i].activity} <strong>${recentActivity[i].post}</strong></p>
            <p>${recentActivity[i].when}</p>
        </div>`
    activitySection.appendChild(newActivity);
}