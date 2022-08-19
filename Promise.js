let myPromise1 = new Promise(function (myResolve, myReject) {
    let x = 1;

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise1.then(
    function (value) {
        console.log(value)
    },
    function (value) {
        console.log(value)
    },
);

const myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(
        function () { myResolve("I love You !!"); }
        , 3000);
});

myPromise.then(
    function (value) {
        console.log(value)
    },
    function (value) {
        console.log(value)
    });

//Example: Promise Resolved

var promise = new Promise(function (resolve, reject) {
    resolve('Geeks For Geeks');
})

promise
    .then(function (successMessage) {
        //success handler function is invoked
        console.log(successMessage);
    }, function (errorMessage) {
        console.log(errorMessage);
    })

// Examples: Promise Rejected
var promise = new Promise(function (resolve, reject) {
    reject('Promise Rejected')
})

promise
    .then(function (successMessage) {
        console.log(successMessage);
    }, function (errorMessage) {
        //error handler function is invoked
        console.log(errorMessage);
    })

// Examples: Promise Rejected
var promise = new Promise(function (resolve, reject) {
    reject('Promise Rejected')
})


promise
    .then(function (successMessage) {
        console.log(successMessage);
    })
    .catch(function (errorMessage) {
        //error handler function is invoked
        console.log(errorMessage);
    });


//  Examples: Promise Rejected

var promise = new Promise(function (resolve, reject) {
    throw new Error('Some error has occured')
})

promise
    .then(function (successMessage) {
        console.log(successMessage);
    })
    .catch(function (errorMessage) {
        //error handler function is invoked
        console.log(errorMessage);
    }
        .finally()
    );