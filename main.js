const sendBtn = document.querySelector(".send-btn")
const messagesContainer = document.querySelector(".content")
const messages = []

sendBtn.addEventListener("click", function (e) {
    const isLeftSideChecked = document.querySelector("#left").checked
    let input = document.querySelector(".input")

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
})

function renderMessages(){
    messages.forEach(item => {
        const span = document.createElement("span")
        span.innerHTML = item.message
        if (item.isLeftSideChecked) {
            span.classList.add("left-message")
        } else span.classList.add("right-message")

        messagesContainer.append(span)
    })
}