var hotel1 = {
    name: "Royal Paradise",
    city: "Jaipur",
    type: ["AC, Non AC", "Open roof"],
    cusinies: ["Indian", "Chinese", "Thai", "Italian"],
    menu: {
        name: "starter",
        cost: 450,
        category: ["Indian", "chinese", "Thai"],
    }
}

hotel1.ratings = 4;
// console.log(hotel1)

var getDetails = function () {
    for (const attr in hotel1) {
        var b = hotel1[attr];
        if (b instanceof Array) {
            for (const i in b)
                console.log("Array:" + b[i])
        } else if (typeof (b) == 'object') {
            for (var key in b) {
                console.log(key + " : " + b[key])
            }
        } else if (typeof b == 'function') {
            b();
        } else {
            console.log("Details: " + b)
        }
    }
}

getDetails.call(hotel1)