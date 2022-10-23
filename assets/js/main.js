let cont = document.querySelector('div');
// let singleCont = document.createElement('div');
// singleCont.classList.add('box');
// cont.append(singleCont)

for (let i = 1; i <= 100; i++ ) {

    if (i % 15 == 0) {
        console.log("FizzBuzz");
        let singleCont = document.createElement('div');
        singleCont.classList.add('box15');
        singleCont.innerHTML = `FizzBuzz`;
        cont.append(singleCont)


    } else if (i % 3 == 0){
        console.log("Fizz");
        let singleCont = document.createElement('div');
        singleCont.classList.add('box3');
        singleCont.innerHTML = `Fizz`;
        cont.append(singleCont)
        
    
    } else if (i % 5 == 0) {
        console.log("Buzz");
        let singleCont = document.createElement('div');
        singleCont.classList.add('box5');
        singleCont.innerHTML = `Buzz`;
        cont.append(singleCont)
    
    
    } else {
        console.log(i)
        let singleCont = document.createElement('div');
        singleCont.classList.add('box');
        singleCont.innerHTML = `${i}`;
        cont.append(singleCont)
    }
    
}






