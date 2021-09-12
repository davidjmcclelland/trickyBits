Obj1 = { behaviors: {} };

(function (Obj1) {
    "use strict";

    Obj1.behaviors.myModule = {
        url: "http://www.example1.com",

        getData: function () {
            console.log("Let's get data from ", this.url);
        },

        attach: function () {
            let btn = document.querySelector("#go1");

            btn.addEventListener("click", function clickGo(evt) {
                evt.preventDefault();
// this.getData(); will not work because 'this' references button at click event
                // this will work but is clunky to include the whole path
                Obj1.behaviors.myModule.getData();
            });
        },
    };

    // Invoke all the behaviors
    Object.keys(Obj1.behaviors).every(function (behaviorName) {
        Obj1.behaviors[behaviorName].attach();
        return true;
    });
})(Obj1);

Obj2 = { behaviors: {} };

// use bind to tell the function what scope of this to use when it is clicked
(function (Obj2) {
    "use strict";

    Obj2.behaviors.myModule = {
        url: "http://www.example2.com",

        getData: function () {
            console.log("Let's get data from ", this.url);
        },

        attach: function () {
            let btn = document.querySelector("#go2");

            btn.addEventListener("click", function clickGo(evt) {
                evt.preventDefault();

                this.getData();
            }.bind(Obj2.behaviors.myModule));
        },
    };

    // Invoke all the behaviors
    Object.keys(Obj2.behaviors).every(function (behaviorName) {
        Obj2.behaviors[behaviorName].attach();
        return true;
    });
})(Obj2);

Obj3 = { behaviors: {} };

// when using bind, you can just enter "this" and not the object path because
// when 'attach' executes the scope will be of the object (Obj3) that is instantiating.
(function (Obj3) {
    "use strict";

    Obj3.behaviors.myModule = {
        url: "http://www.example3.com",

        getData: function () {
            console.log("Let's get data from ", this.url);
        },

        attach: function () {
            let btn = document.querySelector("#go3");

            btn.addEventListener("click", function clickGo(evt) {
                evt.preventDefault();

                this.getData();
            }.bind(this));
        },
    };

    // Invoke all the behaviors
    Object.keys(Obj3.behaviors).every(function (behaviorName) {
        Obj3.behaviors[behaviorName].attach();
        return true;
    });
})(Obj3);

Obj4 = { behaviors: {} };

(function (Obj4) {
    "use strict";

    Obj4.behaviors.myModule = {
        url: "http://www.example4.com",

        getData: function () {
            console.log("Let's get data from ", this.url);
        },

        clickGo: function(evt) {
            evt.preventDefault();
            // calling this.getData here will hit the click target scope
            this.getData();
        },

        attach: function () {
            let btn = document.querySelector("#go4");
            // unless you use bind(this) when calling the function
            btn.addEventListener("click", this.clickGo.bind(this));
        }
    };

    // Invoke all the behaviors
    Object.keys(Obj4.behaviors).every(function (behaviorName) {
        Obj4.behaviors[behaviorName].attach();
        return true;
    });
})(Obj4);

Obj5 = { behaviors: {} };

(function (Obj5) {
    "use strict";

    Obj5.behaviors.myModule = {
        url: "http://www.example5.com",

        getData: function () {
            console.log("Let's get data from ", this.url);
        },

        attach: function () {
            let btn = document.querySelector("#go5");

            let clickGo = function(evt) {
                evt.preventDefault();
                // calling this.getData here will hit the click target scope
                this.getData();
            }.bind(this);

            // unless you use bind(this) when calling the function
            btn.addEventListener("click", clickGo);
        }
    };

    // Invoke all the behaviors
    Object.keys(Obj5.behaviors).every(function (behaviorName) {
        Obj5.behaviors[behaviorName].attach();
        return true;
    });
})(Obj5);

Obj6 = { behaviors: {} };

(function (Obj6) {
    "use strict";

    Obj6.behaviors.myModule = {
        url: "http://www.example6.com",

        getData: function () {
            console.log("Let's get data from ", this.url);
        },

        attach: function () {
            let btn = document.querySelector("#go6");
            // arrow functions don't require bind to set the scope of this to the lexical (where declared)
            let clickGo = (evt) => {
                evt.preventDefault();
                this.getData();
            };

            btn.addEventListener("click", clickGo);
        }
    };

    // Invoke all the behaviors
    Object.keys(Obj6.behaviors).every(function (behaviorName) {
        Obj6.behaviors[behaviorName].attach();
        return true;
    });
})(Obj6);

Obj7 = { behaviors: {} };

(function (Obj7) {
    "use strict";

    Obj7.behaviors.myModule = {
        url: "http://www.example7.com",

        getData: function () {
            console.log("Let's get data from ", this.url);
        },

        attach: function () {
            let btn = document.querySelector("#go7");
            // anonymous arrow function instead of sep named function

            btn.addEventListener("click", (evt) => {
                evt.preventDefault();
                this.getData();
            });
        }
    };

    // Invoke all the behaviors
    Object.keys(Obj7.behaviors).every(function (behaviorName) {
        Obj7.behaviors[behaviorName].attach();
        return true;
    });
})(Obj7);

/* arrow functions can't be used with bind, call, apply, or new keywords

 */

