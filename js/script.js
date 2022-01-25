// We code it together

// 1. Select heading h2
//querySelector
//querySelectorAll
//querySelectorById

const heading2 = document.querySelector("h2");
console.log(heading2);

// 2. Select element with class .heading2

const headingByClass = document.querySelector(".heading2");
console.log(headingByClass);

// 3. Select element with id #list using querySelector

const list = document.querySelector("#list");
console.log(list);

// 4. Select element with id #list using getElementById

const list2 = document.getElementById("list");
console.log(list2);

// 5. Select single li

const list3 = document.querySelector("li");
console.log(list3);

// 6.

//  a. Select Multiple li's

const listAllItems = document.querySelectorAll("li");
console.log(listAllItems);

//  b. Loop on the list items

for(let i = 0; i < listAllItems.length; i++){
console.log(listAllItems[i].innerHTML);
}

// 7.
    // a. select h1 element

    const heading1 = document.querySelector("h1");
    console.log(heading1)
    console.dir(heading1)

    // b. Change the color of that h1 to be purple
    
    heading1.style.color = "purple"
    
    // c. Change the border to be 1px solid green
    
    heading1.style.border = "1px solid green"
    
    // d. Change background colour to be light gray
    
    heading1.style.backgroundColor = "lightgray"
    
    // e. Change the padding to be 1em ( remember that 1em is the base in px you put on the body )

    heading1.style.padding = "1em"

    //1. i want to select a div element
    
    const div1 = document.querySelector("div");
    console.log(div1)
    
    //2. see if it has a class name
    
    console.dir(div1);
    
    //3. add a class to this div element
    
    div1.classList.add("container");
    
    
    //4. se if it has a class name now
    
    console.log(div1.className);
    
    //5. add another class to the div
    
    div1.classList.add("new-class");
    console.log(div1);
    
    // 1. select the h1 and change the innerText

    const pageHeading = document.querySelector("h1");
    pageHeading.innerText = "Chris";

    // 2.loop through al the li element and change the innerText value to be changed

    const allTheListItems = document.querySelectorAll("li");
    for(let i = 0; i < allTheListItems.length; i++){
        allTheListItems[i].innerText = allTheListItems[i].innerText + " changed";
    }
    console.log(allTheListItems);

    // 3.change the innerHTML of the h1 to be updated using innerHTML
    
    const pageHeading2 = document.querySelector("h1");
    pageHeading2.innerHTML = "Update Christoffer"
    
    // 4. add some html to the div >> add <p><b>Bold text</b> not bold text</p>
    
    const someContainer = document.querySelector("div");
    someContainer.innerHTML = `<p>
                               <b> Bold text </b> not bold text
                               </P>`;
    console.log(someContainer);
    
    // 5. select the ul 
    
    const selectUl = document.querySelector("ul");
    console.log(selectUl);
    
    //  a. get the existing HTML inside the ul element and assign it to a variable
    
    const existingHTML = selectUl.innerHTML;

    
    //  a. create the new li HTML 
    
    const newHTML = `
                    <li> hello Im horse </li>
                    `
    
    //  b. set the uls new HTML to the existing HTML plus the new HTML

    selectUl.innerHTML = existingHTML + newHTML;