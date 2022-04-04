const text =
    [
        "The English word ethics is derived from the Ancient Greek word ēthikós (ἠθικός), meaning relating to one's character, which itself comes from the root word êthos (ἦθος) meaning character, moral nature.[5] This word was transferred into Latin as ethica and then into French as éthique, from which it was transferred into English.",
        "Rushworth Kidder states that standard definitions of ethics have typically included such phrases as the science of the ideal human character or the science of moral duty.[6] Richard William Paul and Linda Elder define ethics  a set of concepts and principles that guide us in determining what behavior helps or harms sentient creatures. The Cambridge Dictionary of Philosophy states that the word ethics is commonly used interchan and sometimes it is used more narrowly to mean th",
        "Content Writing Services In Usa, Difference Between Master Thesis And Phd Dissertation, Squirrel Monkey Written Essay, Clean India Program Essay In Hindi Language. How it works. Our writers will offer prices for your order. Testimonials. 10:45 PM Oct 4, 2019. didakus offline. 115 completed orders. Erickson online. 3428 completed orders. Load money into account . Customer's feedback ...",
        "Rushworth Kidder states that standard definitions of ethics have typically included such phrases as the science of the ideal human character or the science of moral duty.[6] Richard William Paul and Linda Elder define ethics  a set of concepts and principles that guide us in determining what behavior helps or harms sentient creatures. The Cambridge Dictionary of Philosophy states that the word ethics is commonly used interchan and sometimes it is used more narrowly to mean th",
        "The English word ethics is derived from the Ancient Greek word ēthikós (ἠθικός), meaning relating to one's character, which itself comes from the root word êthos (ἦθος) meaning character, moral nature.[5] This word was transferred into Latin as ethica and then into French as éthique, from which it was transferred into English.",
        "Rushworth Kidder states that standard definitions of ethics have typically included such phrases as the science of the ideal human character or the science of moral duty.[6] Richard William Paul and Linda Elder define ethics  a set of concepts and principles that guide us in determining what behavior helps or harms sentient creatures. The Cambridge Dictionary of Philosophy states that the word ethics is commonly used interchan and sometimes it is used more narrowly to mean th",
        "The English word ethics is derived from the Ancient Greek word ēthikós (ἠθικός), meaning relating to one's character, which itself comes from the root word êthos (ἦθος) meaning character, moral nature.[5] This word was transferred into Latin as ethica and then into French as éthique, from which it was transferred into English.",
        "Content Writing Services In Usa, Difference Between Master Thesis And Phd Dissertation, Squirrel Monkey Written Essay, Clean India Program Essay In Hindi Language. How it works. Our writers will offer prices for your order. Testimonials. 10:45 PM Oct 4, 2019. didakus offline. 115 completed orders. Erickson online. 3428 completed orders. Load money into account . Customer's feedback ...",
        "The English word ethics is derived from the Ancient Greek word ēthikós (ἠθικός), meaning relating to one's character, which itself comes from the root word êthos (ἦθος) meaning character, moral nature.[5] This word was transferred into Latin as ethica and then into French as éthique, from which it was transferred into English.",
        "Rushworth Kidder states that standard definitions of ethics have typically included such phrases as the science of the ideal human character or the science of moral duty.[6] Richard William Paul and Linda Elder define ethics  a set of concepts and principles that guide us in determining what behavior helps or harms sentient creatures. The Cambridge Dictionary of Philosophy states that the word ethics is commonly used interchan and sometimes it is used more narrowly to mean th",
        "The English word ethics is derived from the Ancient Greek word ēthikós (ἠθικός), meaning relating to one's character, which itself comes from the root word êthos (ἦθος) meaning character, moral nature.[5] This word was transferred into Latin as ethica and then into French as éthique, from which it was transferred into English.",
        "Rushworth Kidder states that standard definitions of ethics have typically included such phrases as the science of the ideal human character or the science of moral duty.[6] Richard William Paul and Linda Elder define ethics  a set of concepts and principles that guide us in determining what behavior helps or harms sentient creatures. The Cambridge Dictionary of Philosophy states that the word ethics is commonly used interchan and sometimes it is used more narrowly to mean th",
    ];

let form = document.querySelector(".form-elem");
let type = document.getElementById("amount");
let res_text = document.querySelector(".lorem-text");

form.addEventListener("submit", function (event) {

    event.preventDefault();
    //    console.log('hlo');
    const value=parseInt(type.value);
    const random=Math.floor(Math.random()*text.length);

    if(value<= 0 || value >12 || isNaN(value))
    {
        res_text.innerHTML=`<p class="res_text">${text[random]} </p>`;
    }
    else
    {
        let new_text=text.splice(0,value);
        new_text=new_text.map(function(items){
        
            return `<p class="res_text">${items} </p>`

        })
        //console.log(new_text);
        .join("");
        //console.log(new_text);
        res_text.innerHTML=new_text;
    }





});