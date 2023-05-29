// chat box 
const chatBox = document.querySelectorAll('[data-s-target]')
const chatContent = document.querySelectorAll('[data-chat-content]');
console.log(chatContent)
// link item
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContent = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tabContent.forEach(tabContent => {
            tabContent.classList.remove('active');
        });
        tab.classList.add('active');
        target.classList.add('active');
    });
})


// chat  box

chatBox.forEach(box =>{

    // console.log(box)
    box.onclick = function () {
        const data = "#" + this.getAttribute('data-s-target');
        chatBox.forEach(box => {
            box.classList.remove('active')
        })
        this.classList.add('active');

        chatContent.forEach(chatContent =>{
            chatContent.classList.remove('active');
        })

        document.querySelector(data).classList.add('active');
    }

    // box.addEventListener('click', (e) =>{
    //     const target = document.querySelector(box.dataset.boxBarget);
    //     const data = e.target;
    //     console.log(data)

    //     box.classList.add('active');
    //     target.classList.add('avtive');
        
    // })
})



// emoji 

function emoji(){
    let emojis=document.querySelector(".emojis");
    emojis.classList.toggle("emoje__block");
    console.log(emojis);
}