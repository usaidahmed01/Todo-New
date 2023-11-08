const inpVal = document.querySelector('#inp')
const ulli = document.querySelector('ul')





const arr = []
function looprender() {


    for (let i = 0; i < arr.length; i++) {

        ulli.innerHTML += `<li class="mb-2 " style="font-variant: small-caps;  font-size: 20px;">${arr[i]}  
        <button type="button" class="btn btn-outline-warning" onclick = "edit(${[i]})">Edit</button>
        <button type="button" class="btn btn-outline-danger" onclick = "del(${[i]})">Delete</button>
        </li> `
    }
}



function userInp() {

if (inpVal.value === '') {
    ulli.innerHTML = `<h4>Please Insert Any Todo Task.</h4>`


} else {






        arr.push(inpVal.value)
        // console.log(arr);



        ulli.innerHTML = ''

        looprender()


        inpVal.value = ''









    }
    
}
function del(i) {
    // console.log('Deleted',arr[i]);

    arr.splice(i, 1)



    ulli.innerHTML = ''

    looprender()
}
function edit(i) {
    // console.log('Edited', arr [i]);
    const userVal = prompt('Enter value to update')

    arr.splice(i, 1, userVal)



    ulli.innerHTML = ''

    looprender()


}







// ulli.innerHTML += `<li class="mb-2 " style="font-variant: small-caps;  font-size: 20px;">${inpVal.value}
// <button type="button" class="btn btn-outline-warning" onclick = "edit()">Edit</button>
// <button type="button" class="btn btn-outline-danger" onclick = "delete()">Delete</button>
// <li/> `