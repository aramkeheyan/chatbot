const sendBtn = document.querySelector(".send-btn")
const messagesContainer = document.querySelector(".content")
const messages = []
let input = document.querySelector(".input")


function addMessage(){
        const isLeftSideChecked = document.querySelector("#left").checked
        let input = document.querySelector(".input")
        if (!input.value) return

        const messageItem = {
            message: input.value,
            isLeftSideChecked,
        }
        messages.push(messageItem)
        input.value = ""
        Array.from(messagesContainer.children).forEach(item => {
            item.remove()
        })
        renderMessages()
}

sendBtn.addEventListener("click", addMessage )
input.addEventListener("keydown", function (e){
    if(e.keyCode === 13) addMessage()
})

function renderMessages(){
    messages.forEach((item) => {
        const span = document.createElement("span")
        span.innerHTML = item.message
        if (item.isLeftSideChecked) {
            span.classList.add("left-message")
        } else span.classList.add("right-message")


        messagesContainer.append(span)
    })
}