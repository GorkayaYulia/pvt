        <li>
            Что означает и для чего используется конструкция (примеры): <br/>
            <code>
                'use strict'
            </code>
        </li>
        <li>
            <strong>Внимательно</strong> посмотрите на код и скажите, что он вернет и почему:<br/>
            <code>
                function foo1() {
                    return {
                        boo: "hello"
                    };
                }
                <br/>
                function foo2(){
                    return
                    {
                        boo: "hello"
                    };
                }
                <br/>
                foo1();
                foo2();
            </code>
        </li>
        <li>
            Что вернет этот код:<br/>
            <code>
                (function() {
                    console.log(1);
                    setTimeout(function(){console.log(2)}, 1000);
                    setTimeout(function(){console.log(3)}, 0);
                    console.log(4);
                })();
            </code>
        </li>
        <li>
            Что и почему вернет:<br/>
            <code>
                3 +  +"5" + "5";
                3 +  -"5" + "5"
                typeof (3 +  -"5" + "5")
                "Z" - "W" + 2
            </code>
        </li>
        <li>
            Что вернет код. Как называется прием, которым он (код) реализован:<br/>
            <code>
                let foo = 1;

                function updateFoo() {
                    foo += 1;

                    if (foo < 5) {
                        updateFoo();
                    }
                }

                updateFoo();
                updateFoo();

                console.log(someVar);
            </code>
        </li>
        <li>
            Что и в каком интервале выведет код:<br/>
            <code>
                for (var i = 0; i < 5; i++) {
                    setTimeout(function() { console.log(i); }, i * 1000 );
                }
            </code>
        </li>
        <li>
            Что выведет код:<br/>
                <code>
                    var a={},
                        b={key:'b'},
                        c={key:'c'};
                    a[b] = 3;
                    a[c] = 5;
                console.log(a[b]);
                </code>
        </li>
    </ol>