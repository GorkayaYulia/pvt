(function () {
    console.log(1);

    debugger;

    console.log(2);
    console.log(3);
    console.log(4);

    debugger;

    for(let i = 0; i < 5; i++) {
        console.log('for' + i);
        debugger;
    }

    debugger;

    console.log("finish");
})();