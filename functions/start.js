(function () {
    "use strict";

    var myApp = {
        dataSet: [
            {
                id: 1,
                animal: "cat",
                name: "Mittens",
            },
            {
                id: 2,
                animal: "dog",
                name: "Rex",
            },
            {
                id: 3,
                animal: "iguana",
                name: "Ms. Fancy",
            },
            {
                id: 4,
                animal: "fish",
                name: "Gilbert",
            },
            {
                id: 5,
                animal: "rabbit",
                name: "Bugs",
            },
        ],

        slot1: document.querySelector("#slot-1"),
        slot2: document.querySelector("#slot-2"),
        // **!IMPORTANT!**
        // when passing in custom args, they have to go before the default ones
        handleClick: function (slotNumber, evt) {
            evt.preventDefault();

            var item = this.dataSet.shift();
            if (!item) {
                console.error("No more items!");
                return false;
            }
            // which button was clicked? normally use evt
            //this.addItemToSlot(item, evt.target.innerText);
            // for sake of example, put the passed arg value instead
            this.addItemToSlot(item, slotNumber);
        },

        addItemToSlot: function (item, slotIndex) {
            var itemDiv = document.createElement("div");
            itemDiv.id = "item-" + item.id;
            var itemContent = document.createElement("h3");
            itemContent.className = "text-xl font-bold";
            itemContent.textContent = item.name;
            itemDiv.appendChild(itemContent);
            this["slot" + slotIndex].appendChild(itemDiv);
        },

        init: function () {
            var btn1 = document.querySelector("#one");
            var btn2 = document.querySelector("#two");
            // instead of scraping the evt.target you could put another argument after bind
            btn1.addEventListener("click", this.handleClick.bind(this, 1));
            btn2.addEventListener("click", this.handleClick.bind(this, 2));
        },
    };

    myApp.init();
})();
