1. С какого места кода не доступны свойства и методы глобального объекта?
2. Что получится в результате сравнения и почему <br/>
    `(function(){})() === window.такоеВотСвойство`;
3. Что вернет вызов функции? <br/>
    <code>let fooSample = function(){ return arguments.shift(0) };</code></br>
    <code>fooSample(1,2,3)`;</code>
4. Объясните почему: <br/>
    <code>1 == new Number(1) //-> true;</code>
    <br/>
    <code>1 === new Number(1) //-> false;</code>
5. Что получится в результате? <br/>
    `let [,,foo,,,...boo] = [1,2,3,4,5,6,7,8,9,10]`;
6. Как отменить распространение события (всплытие/перехват)?
7. Что и почему вернет: <code> {} === {} </code>
8. Что и почему вернет:<br/>
    <code>(function() {
            var foo = boo = 1;
        })();</code></br>
        <code>console.log(foo);</code></br>
        <code>console.log(boo);</code>
9. Что означает и для чего используется конструкция (примеры): <code> 'use strict' </code>
10. <strong>Внимательно</strong> посмотрите на код и скажите, что он вернет и почему:<br/>
    <code>function foo1()</code>
       <code> {</code>
          <code>return {</code>
           <code>   boo: "hello"</code>
          <code>};</code>
        <code>}</code><br/>
        <code>function foo2()
        {
          return
          {
              boo: "hello"
          };
        }</code><br/>
        <code>foo1();</code><br/>
        <code>foo2();</code>
11. Что вернет этот код:<br/>
    <code>(function() {
            console.log(1);
            setTimeout(function(){console.log(2)}, 1000);
            setTimeout(function(){console.log(3)}, 0);
            console.log(4);
        })();</code>
12. Что и почему вернет:<br/>
    <code>3 +  +"5" + "5";
        3 +  -"5" + "5"
        typeof (3 +  -"5" + "5")
        "Z" - "W" + 2</code>
13. Что вернет код. Как называется прием, которым он (код) реализован:<br/>
    <code>let foo = 1;
        function updateFoo() {
        	foo += 1;

        	if (foo < 5) {
        		updateFoo();
        	}
        }
        updateFoo();
        updateFoo();
        console.log(someVar);</code>
14. Что и в каком интервале выведет код:<br/>
    <code>for (var i = 0; i < 5; i++) {
          setTimeout(function() { console.log(i); }, i * 1000 );
        }</code>
15. Что выведет код:<br/>
    <code>var a={},
            b={key:'b'},
            c={key:'c'};
        a[b] = 3;
        a[c] = 5;
        console.log(a[b]);</code>
16. Что выведет код:<br/>
    <code>console.log(typeof typeof 1);</code>
