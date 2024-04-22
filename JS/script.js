let submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click',()=>{
    sendToChatGPT();
});

function sendToChatGPT(){
    let userInput = document.getElementById('user-input').value;

    let body = {
        "model":"gpt-3.5-turbo",
        "message":[{"role":"user","content":userInput}]
    };

    let headers = {
        Authorization: "Bearer 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",
    };

    axios
        .post('https://api.openai.com/v1/chat/completions',body, {
            headers:headers,
        })
        .then((response) =>{
            console.log(response);
        })
}