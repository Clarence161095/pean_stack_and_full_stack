// setTimeout(callBack, t) ít nhất sau t millisecond nếu call Stack mà rỗng thì thực hiện gọi callBack.
{
    {
        console.log('OK1: ', i);
        {
            console.log('OK12: ', i);
        }
    }
}
{
    setTimeout(() => console.log('OK2: ' + i), 5000);
}

var i = 0;
main();
console.log('The end');

function insertDB(query) {
    console.log('inserted to DB: ', query);
}

function log(content) {
    console.log('log: ', content);
    insertDB(`INSERT LOG_TABLE VALUE ${content}`)
}

function oneStack() {
    log('normal - ' + i);
    setTimeout(() => log('setTimeout - ' + i), 1000);
    i++;
}

function main() {
    {
        {
            console.log('log: ', 'normal - ' + i);
            {
                console.log('inserted to DB: ', `INSERT LOG_TABLE VALUE ${'normal - ' + i}`);
            }
        }
        setTimeout(() => log('setTimeout - ' + i), 2000);
        i++;
    }
    oneStack()
    oneStack()
}
