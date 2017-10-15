(function () {
    let foo = 1;

    let func1 = function (par) {
        let _foo = par;

        console.log("function has started calculation");
        func2();

        return typeof _foo === 'number' ? _foo++ : undefined;
    };

    let func2 = function () {
      return 'stub data';
    };

    console.log(foo);

    func1(foo);
})();