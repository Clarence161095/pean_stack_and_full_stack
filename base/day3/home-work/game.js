const Data = [
    {
        id: 1,
        name: "5 + 5 = ?",
        answer: 10,
        happy: "Bạn có ra kết quả = 10 không?"
    },
    {
        id: 2,
        name: "5 x 5 = ?",
        answer: 25,
        happy: "Bạn có ra kết quả = 25 không?"
    },
    {
        id: 3,
        name: "5 : 5 = ?",
        answer: 1,
        happy: "Bạn có ra kết quả = 1 không?"
    },
    {
        id: 4,
        name: "10 - 5 = ?",
        answer: 5,
        happy: "Bạn có ra kết quả = 5 không?"
    },
    {
        id: 5,
        name: "300 : 100 = ?",
        answer: 3,
        happy: "Bạn có ra kết quả = 3 không?"
    }
];

function LoiKhen() {
    return "Bạn rất giỏi, đáp án chính là " + this.answer;
}

Data.forEach(item => {
    item.LoiKhen = LoiKhen;
});

function playGame() {
    let i = 0;
    console.log("Bắt đầu game nha");

    const demo = setInterval(() => {
        if (i >= Data.length || Data[i].id === 5) {
            console.log("Chương trình đã kết thúc.");
            clearInterval(demo);
            return;
        }

        console.log("Câu hỏi số " + Data[i].id + "\n" + Data[i].name);
        setTimeout(() => {
            console.log(Data[i].LoiKhen());
        }, 1000);

        i++;
    }, 2000);
}

playGame();
