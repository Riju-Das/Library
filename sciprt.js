const linebtn = document.querySelector(".lines")
const sidebar = document.querySelector(".sidebar")
const clickbox = document.querySelector(".clickboxcontainer")
const bookadd = document.querySelector(".addcontainer")
const cont= document.querySelector(".container")
const closebtn = document.querySelector(".closebtn")
const overlay = document.querySelector(".overlay")
const bookcont = document.querySelector(".bookcont")

const form = document.querySelector("#formbox")

const submit = document.querySelector("#submitform")

linebtn.addEventListener("click",()=>{
    sidebar.classList.toggle("active")

})
bookadd.addEventListener("click",(e)=>{
    sidebar.classList.toggle("active")
    clickbox.classList.add("boxactive")
})

closebtn.addEventListener("click",()=>{
    clickbox.classList.remove("boxactive")
})
overlay.addEventListener("click",(e)=>{
    clickbox.classList.remove("boxactive")
    console.log(e.target)
})

const Mylibrary =[]

function books(name,author,pages,read){
    this.name= name;
    this.author = author
    this.pages=pages;
    this.read=read;
}
form.addEventListener("submit", (event)=>{
    const bookname= document.querySelector("#bookname")
    const author = document.querySelector("#author")
    const pages = document.querySelector("#pages")
    const readornot = document.querySelector("#Readornot")
    event.preventDefault(); 
    addbooktolibrary(bookname.value,author.value,pages.value,readornot.value)
    bookname.value=""
    author.value=""
    pages.value=""
    displaybook()
    clickbox.classList.remove("boxactive")
})

function addbooktolibrary(name,author,pages,read){
    const book = new books(name,author,pages,read)
    Mylibrary.push(book)
}
console.log(Mylibrary)

function displaybook(){
    let len= (Mylibrary.length-1)

    let bookobj = Mylibrary[len]
    
    let bookbox= document.createElement("div")
    bookbox.classList.add("bookbox")

    let crossbtn = document.createElement("div")
    crossbtn.classList.add("crossinbox")



    let name =document.createElement("div")
    name.textContent = `NAME: ${bookobj.name}`
    name.classList.add("insidebox")

    let author =document.createElement("div")
    author.textContent = `AUTHOR: ${bookobj.author}`
    author.classList.add("insidebox")

    let pages =document.createElement("div")
    pages.textContent = `PAGES READ: ${bookobj.pages}`
    pages.classList.add("insidebox")

    let read =document.createElement("div")
    read.textContent = `Read Status: ${bookobj.read}`
    read.classList.add("insidebox")
    

    
    
    bookcont.appendChild(bookbox)
    bookbox.appendChild(crossbtn)
    bookbox.appendChild(name)
    bookbox.appendChild(author)
    bookbox.appendChild(pages)
    bookbox.appendChild(read)
    


    let update = document.createElement("button")
    update.textContent= "Update"
    update.classList.add("updateread")
    if(read.textContent=="Read Status: Not read"){
        update.style.backgroundColor="red"
    }
    else{
        update.style.backgroundColor="green"
    }
    bookbox.appendChild(update)
    
    
    update.addEventListener("click",()=>{
        if(read.textContent=="Read Status: Not read"){
            read.textContent = `Read Status: read`
            update.style.backgroundColor="green"
        }
        else if(read.textContent=="Read Status: read"){
            read.textContent = `Read Status: Not read`
            update.style.backgroundColor="red"
        }
    })

    crossbtn.addEventListener("click",(e)=>{
        Mylibrary.splice(len,1)
        bookcont.removeChild(bookbox)
    })

    
}

