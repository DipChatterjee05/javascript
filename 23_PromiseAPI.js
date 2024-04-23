// <---------- PROMISES API'S ---------->
/* const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("P1 Resolved");
        // reject("P1 Rejected");
    }, 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("P2 Resolved");
        // reject("P2 Rejected");
    }, 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("P3 Resolved");
        // reject("P3 Rejected");
    }, 2000);
}); */


// <---------- 1. Promise.all SUCCESS/REJECT CASE ---------->
/* Promise.all([p1, p2, p3])
    .then(response => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    }); */


// <---------- 2. Promise.allSettled SUCCESS/REJECT CASE ---------->
/* Promise.allSettled([p1, p2, p3])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    }); */


// <---------- 3. Promise.race SUCCESS/REJECT CASE ---------->
/* Promise.race([p1, p2, p3])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    }); */


// <---------- 4. Promise.race SUCCESS/REJECT CASE ---------->
/* Promise.any([p1, p2, p3])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
        // console.log(error.errors);
        // console.log(error.errors[0]);
    }); */
