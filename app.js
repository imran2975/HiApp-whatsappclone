// navs
const chats = document.querySelector(".chats");
const statusView = document.querySelector(".status");
const calls = document.querySelector(".calls");
const navBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

//menu toggle
navBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// pages slide
const chatContainer = document.querySelector(".chat-container");
const statusContainer = document.querySelector(".status-container");
const callsContainer = document.querySelector(".calls-container");

// shifting the pages for transition
chatContainer.style.left = "0";
statusContainer.style.left = "100%";
callsContainer.style.left = "200%";

//chat slide
chats.addEventListener("click", () => {
    chats.classList.add("active");
    statusView.classList.remove("active");
    calls.classList.remove("active");
    chatContainer.style.transform = "translateX(0)";
    statusContainer.style.transform = "translateX(100%)";
    callsContainer.style.transform = "translateX(100%)";
});

//status slide
statusView.addEventListener("click", () => {
    chats.classList.remove("active");
    statusView.classList.add("active");
    calls.classList.remove("active");
    chatContainer.style.transform = "translateX(-100%)";
    statusContainer.style.transform = "translateX(-100%)";
    callsContainer.style.transform = "translateX(-100%)";
});

//calls slide
calls.addEventListener("click", () => {
    chats.classList.remove("active");
    statusView.classList.remove("active");
    calls.classList.add("active");
    chatContainer.style.transform = "translateX(-200%)";
    statusContainer.style.transform = "translateX(-200%)";
    callsContainer.style.transform = "translateX(-200%)";
});

// * pop up profile * //
const popupProfile = document.querySelector(".pop-up");
const popupImage = document.querySelector(".popup-image");
const profilePic = document.querySelectorAll(".profile-pic");
const profileName = document.querySelectorAll(".profile-name");
const popupName = document.querySelector(".popup-name");

// show pop up
profilePic.forEach((pic, index) => {
    let name = profileName[index].textContent;
    pic.addEventListener("click", () => {
        popupProfile.classList.add('show-pop')
        popupImage.innerHTML = pic.innerHTML;
        popupName.textContent = name;
    });
});

// hide pop up
const closePopUP = document.querySelector('.close')

closePopUP.addEventListener('click', ()=>{
    popupProfile.classList.remove('show-pop')
})

// * showing message chat and hiding the main page*//
const nameAndMessages = document.querySelectorAll('.nameAndMessage')
const header = document.querySelector('header')
const main = document.querySelector('main')
const messages = document.querySelector('.messages')
const backBtn = document.querySelector('.back-btn')
const aboutName = document.querySelector('.about-name')

nameAndMessages.forEach((mssg, index)=>{
    let name = profileName[index].textContent;
    let pic = profilePic[index].innerHTML
    mssg.addEventListener('click', ()=>{
        messages.classList.add('show')
        header.classList.add('hide')
        main.classList.add('hide')
        aboutName.textContent = name
        backBtn.innerHTML = `<i class="fas fa-arrow-left"></i> ${pic}`
    })
})

backBtn.addEventListener('click', ()=>{
    messages.classList.remove('show')
    header.classList.remove('hide')
    main.classList.remove('hide')
})

//*showing and hiding message option panel*//
const chatOptionBtn = document.querySelector('.chat-option')
const chatOptionPanel = document.querySelector('.option-panel')
chatOptionBtn.addEventListener('click', ()=>{
    chatOptionPanel.classList.toggle('show')
})

// ** showing send button whenever the input field is > 0 *//
//* send new message 
const inputField = document.querySelector('#input')
const shareFile = document.querySelector('.share')
const submitBtn = `<button type="submit" onclick="sendMssg()"><i class="las la-paper-plane send-btn"></i></button>`
const form = document.querySelector('form')
const chatScreen = document.querySelector('.chat-screen')

inputField.addEventListener('input', (e) => {
    if(inputField.value !== ''){
        shareFile.innerHTML = submitBtn
    } else {
        shareFile.innerHTML = `
        <i class="las la-paperclip"></i>
        <i class="fas fa-camera"></i>
        `
    }
})

//* send new message
function sendMssg(){
    form.removeEventListener('submit', formSubmitHandler);
    form.addEventListener('submit', formSubmitHandler);
}

const formSubmitHandler = (e) => {
    e.preventDefault();
    // injecting time stamp dynamically
    const mssgTime = new Date()
    const mssgHour = mssgTime.getHours()
    const mssgMinutes = mssgTime.getMinutes()
    function convertTo12Hour(hours) {
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + ':' + mssgMinutes + ' ' + ampm;
    }

    // single message
    let singleChat = document.createElement('ul');
    singleChat.innerHTML = `
    <li>
        ${inputField.value} <span class="mssg-time">${convertTo12Hour(mssgHour)} <i class="las la-check-double"></i></span> 
    </li>
    `
    chatScreen.appendChild(singleChat);
    //clearing input field
    inputField.value =''
    //removing the input button when the input is empty
    shareFile.innerHTML = `
        <i class="las la-paperclip"></i>
        <i class="fas fa-camera"></i>
        `
};

//* switch control for dark mode
const checkbox = document.querySelector("input[type='checkbox']");
const switchElement = document.querySelector(".switch");

//* dark moders
const mssgHeader = document.querySelector('.mssg-header')
const darkModes = [chatContainer, statusContainer, callsContainer, popupProfile, navMenu, chatOptionPanel]
const h3 = main.querySelectorAll('h3')
const h3Header = header.querySelectorAll('h3, i, h1')
const pTagChat = chatContainer.querySelectorAll('p')
const pTagStatus = statusContainer.querySelectorAll('p')
const pTagCalls = callsContainer.querySelectorAll('p')
const mainPanel = navMenu.querySelectorAll('*')
const mssgPanel = chatOptionPanel.querySelectorAll('*')

checkbox.addEventListener("change", function () {
    switchElement.classList.toggle("switch-on");
    header.classList.toggle('dark-header')
    mssgHeader.classList.toggle('dark-header')
    darkModes.forEach((item)=>{
        item.classList.toggle('dark-mode')
    })
    h3.forEach((item)=>{
        item.classList.toggle('white-color')
    })
    pTagStatus.forEach((item)=>{
        item.classList.toggle('header-color')
    })
    pTagCalls.forEach((item)=>{
        item.classList.toggle('header-color')
    })
    pTagChat.forEach((item)=>{
        item.classList.toggle('header-color')
    })
    h3Header.forEach((item)=>{
        item.classList.toggle('header-color')
    })
    mainPanel.forEach((item)=>{
        item.classList.toggle('white-color')
    })
    mssgPanel.forEach((item)=>{
        item.classList.toggle('white-color')
    })
    // headerIcon.forEach((item)=>{
    //     item.classList.toggle('header-color')
    // })
});
