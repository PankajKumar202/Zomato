let url =  " http://localhost:7000/city";
// let hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city=";

function getCity(){
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            let element = document.createElement('option')  //<option></option>
            let text = document.createTextNode(data[i].city_name) // Delhi
            element.appendChild(text) //<option>Delhi</option>
            element.value = data[i]._id //<option value="1">Delhi</option>
            document.getElementById('city').appendChild(element)
            /*<select>
                <option value="1">Delhi</option>
            </select>*/
        }
    })
}

const getHotel = () => {
    const cityId = document.getElementById('city').value;
    while(hotels.length>0){
        hotels.remove(0)
    }
    fetch(`${hotelUrl}${cityId}`)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            let element = document.createElement('option')
            let text = document.createTextNode(`${data[i].name} | ${data[i].city_name}`)
            element.appendChild(text)
            document.getElementById('hotels').appendChild(element)
        }
    })
}

// Darkmode
function changeMode() {
    var myBody = document.body;
    myBody.classList.toggle("myDark");
    var cont=document.getElementsByClassName("container-fluid")[0];
    cont.classList.toggle("myCont");
  
    var Quick=document.getElementsByClassName("Quick-Heading")[0];
    Quick.classList.toggle("quickT");
    var Quick1=document.getElementsByClassName("Quick-Subheading")[0];
    Quick1.classList.toggle("quickS");
    var logo=document.getElementsByClassName("logo")[0];
    logo.classList.toggle("myLogo");
    var heading=document.getElementsByClassName("heading")[0];
    heading.classList.toggle("myHeading");
    // document.getElementsByClassName("Quick-Heading")[0].style.color="white !important";
    
    
  }



function closeDiv(){
    document.getElementById("coupon").style.visibility="hidden";
}
function test(){
    document.getElementById("coupon").style.visibility="visible";
}

const myTimeout=setTimeout(greeting,1000);
function greeting(){
    
    document.getElementById("coupon").style.visibility="visible";
}

function copyClip(){
    var code=document.getElementById("Copy");
    code.select();
    code.setSelectionRange(0,20);
    document.execCommand("copy");
    document.getElementById("btn").style.backgroundColor="green";
    document.getElementById("btn").innerHTML="Copied";
    document.getElementById("Output").innerHTML=`'TRYNEW Copied And Save Everytime in your order Yay!'`;
    document.getElementById("Output").style.color="green";


    
}
function myStop(){
    clearTimeout(myTimeout);
  }
