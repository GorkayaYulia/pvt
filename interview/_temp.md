
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