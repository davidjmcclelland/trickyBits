(function ($) {
    "use strict";

    // Simulates a Promise. Thanks to TJ Crowder:
    // https://stackoverflow.com/a/22707551
    function simPromise(delay, value) {
        return new Promise(function (resolve) {
            window.setTimeout(resolve, delay, value);
        });
    }

    var btn = document.querySelector("#go");

    btn.addEventListener("click", function (evt) {
        evt.preventDefault();

        btn.classList.add("animate-pulse");
        btn.textContent = "Loading…";

        // instead of ind variables make an array
/*        var promise1 = simPromise(1000, "Data from first promise.");
        var promise2 = simPromise(2000, "Second, longest promise.");
        var promise3 = simPromise(250, "Last, quickest promise.");*/

        // array of promises
        var promises = [simPromise(1000, "Data from first promise."),
        simPromise(2000, "Second, longest promise."),
        simPromise(250, "Last, quickest promise.")];

        // Similar to Promise.all()
        // problem: we can't put promises in place of promise1...
        // the first slot in arguments expects the value of "this"
        // since it is not needed in this case it is set null
       // $.when(promise1, promise2, promise3).then(function (
/*        $.when.apply(null, promises).then(function (
            data1,
            data2,
            data3
        ) {
            btn.classList.remove("animate-pulse");
            btn.textContent = "Go!";

            document.getElementById("slot-1").textContent = data1;
            document.getElementById("slot-2").textContent = data2;
            document.getElementById("slot-3").textContent = data3;
        });*/

        // to reduce the duplication in the example above we can use arguments
/*        $.when.apply(null, promises).then(function () {
            btn.classList.remove("animate-pulse");
            btn.textContent = "Go!";
            Array.from(arguments).forEach(function(item, index){
                document.getElementById("slot-" + (index + 1)).textContent = item;
            })
        });*/

        // ES6 method for apply is spread (...) and rest (... in function args)
        // rest replaces the Array.from(arguments) and args will be a real array
        $.when(...promises).then(function (...args) {
            btn.classList.remove("animate-pulse");
            btn.textContent = "Go!";
            args.forEach(function(item, index){
                document.getElementById("slot-" + (index + 1)).textContent = item;
            })
        });
    });
})(jQuery);
