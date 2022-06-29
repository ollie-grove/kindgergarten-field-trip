const notRegistered = document.querySelector(".not-registered"); 

console.log(notRegistered); 

const getRegistrationData = async function () {
    const request = await fetch ("https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json"); 
    const data = await request.json(); 
    displayContactList(data); 
}; 


//Create a function expression called displayContactList with data as a parameter. Inside the function, loop over the data. For every student who hasn't registered, create a new list element that will contain their name. Append the list item to the notRegistered element.

const displayContactList = function (data) {
    for (const student of data) {
    if (student.registered === "no") {
        const li = document.createElement("li"); 
        li.innerText = student.name; 
        notRegistered.append(li); 
    }
    }
}; 

getRegistrationData(); 