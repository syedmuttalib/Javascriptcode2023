// XMLHttpRequest() // object
// new XMLHttpRequest() // fresh object
// const xhr=new XMLHttpRequest() //holding object in a variable
// const requestUrl='https://api.github.com/users/syedmuttalib' //holding api link for best practice
// xhr.open('GET', requestUrl) //Client TEMPhas been created. open() not called yet.
// xhr.send() //open() has been called.


const requestUrl='https://api.github.com/users/syedmuttalib'
const xhr=new XMLHttpRequest()
xhr.open('GET', requestUrl)
// console.log("Here") // for testing
// console.log(xhr.readyState) //otp= 1
// for countinues state change this think is using here
xhr.onreadystatechange=function(){  //as the state changed onreadstate changes the value countinly
    console.log(xhr.readyState)
    if(xhr.readyState === 4)
    {
        const btn=document.querySelector('button')
        const textdata =JSON.parse (this.responseText) //coverting string to object using JSON.parse
        // console.log(typeof textdata) //object or sting checked here
        console.log( textdata) 
        let fetch=(()=>{
            console.log(textdata.name , "name");  //To know the follwers use this thinks
            document.querySelector('h1').innerHTML=textdata.name
            document.querySelector('#name').innerHTML=textdata.name
            console.log(textdata.followers , "Are the followers");  //To know the follwers use this thinks
            document.querySelector('#Followers').innerHTML=textdata.followers
            console.log(textdata.location , "location");  //To know the follwers use this thinks
            document.querySelector('#Location').innerHTML=textdata.location
            console.log(textdata.avatar_url , "pic");  //To know the follwers use this thinks
            const profile_pic=document.getElementById('profile')
            profile_pic.style.backgroundImage=`url(${textdata.avatar_url})`
            profile_pic.style.backgroundPosition="center"
            profile_pic.style.backgroundSize="cover"
        })
        btn.onclick=(()=>{fetch()})
    }
}
xhr.send();