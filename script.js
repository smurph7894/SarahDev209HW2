let listWords = [];

const addWords = () => {
    for (var i = 0; i < 3; i++) {
        listWords.push(prompt('Enter a word.')); 
    }
    return listWords;
}

addWords();

const originalArr = () => {
    if(listWords.length != null){
        const list = document.getElementById("list");
        list.innerHTML += `
            <li> ${listWords[0]} </li>
            <li> ${listWords[1]} </li>
            <li> ${listWords[2]} </li>
        `
        document.getElementById('body').style.display = 'flex'
    }
}

originalArr();

const allCaps = () =>{
    const capListWords =listWords.map(capitalize);
    const list = document.getElementById("list");
    list.innerHTML = `
        <li> ${capListWords[0]} </li>
        <li> ${capListWords[1]} </li>
        <li> ${capListWords[2]} </li>
    `
    return capListWords;
}

const swapLetters = function(){
    let ltrSwapArr = listWords.map(swap);
    const list = document.getElementById("list");
    list.innerHTML = `
        <li> ${ltrSwapArr[0]} </li>
        <li> ${ltrSwapArr[1]} </li>
        <li> ${ltrSwapArr[2]} </li>
    `
}

const capitalize=(word)=>{
    return word.toUpperCase();
}

const swap = (word) => {
    return word.charAt(word.length-1)+word.substring(1,word.length-1)+word.charAt(0);
}
