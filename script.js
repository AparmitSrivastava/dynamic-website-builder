let x=document.querySelector("img")
let a=document.querySelector(".title")
let b=document.querySelector(".other")
let c=document.querySelector(".time")

function createCard(title,cName,views,monthsold,duration,thumbnail){
let viewcount
if (views<1000000){
viewcount=views/1000 +"k"
}
else if(views>=1000000){
    viewcount=views/1000000 +"M"
} 
a.innerHTML=title
b.append(cName,"    ·   ",viewcount," views","   ·   ",monthsold," months ago")
c.innerHTML=duration
x.setAttribute("src",thumbnail) 
 
}

createCard("Introduction to Backend | Web Dev video- #2", "CodeWithMe", 560000, "7", "31:22" , "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"  )





