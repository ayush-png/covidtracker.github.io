console.log("we are connected");
var cases = document.getElementById("cases");
var death = document.getElementById("death");
var ccase = document.getElementById("critical_cases");
var tdcase = document.getElementById("tdcases");
var images = document.getElementById("image");
var recov=document.getElementById("rec");
var found=false;
var longtitude;
var latitude;
var id;
function getinfo(place) {
    id.value="";
    fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort")
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data)
            for (var i = 0; i < 220; i++) {
                
                if (place == data[i].country) {
                    found=true;
                    cases.innerHTML = data[i].cases;
                    death.innerHTML = data[i].deaths;
                    ccase.innerHTML = data[i].critical
                    tdcase.innerHTML = data[i].todayCases;
                    recov.innerHTML=data[i].recovered;
                    //console.log(data[i].countryInfo.flag)
                    images.innerHTML = `<img src="${data[i].countryInfo.flag}">`
                    // console.log(data[i].countryInfo.lat);
                    longtitude = data[i].countryInfo.long;
                    latitude = data[i].countryInfo.lat;
                   if(data[i].cases<=100000){
                       color="rgb(0,128,0)";
                       alert("safe!,Less Trouble");
                   }
                   else if(data[i].cases>=100000&&data[i].cases<=1000000){
                       color="rgb(255,255,0)";                       
                       alert("Moderate");
                   }
                   else{
                       color="rgb(255,0,0)"
                       alert("Danger! Street Full Of Walkers");
                   }
                    var marker = new mapboxgl.Marker({
                        draggable: false,
                        color:color
                       
                        
                    })
                        .setLngLat([longtitude, latitude])
                        .addTo(map);
                        break;
                }

            }
            if(found==false){
                alert("Countries Name is Case sensitive,check it out:)")
            }
        }).catch(function (error) {
            console.log(error);
        })
}
function search() {
    console.log("function called")
     id = document.getElementById("type");

    getinfo(id.value)

}
var cit="patna"
/*function get(){
    fetch("https://api.covid19india.org/state_district_wise.json")
    .then(function(resp){
        return resp.json();
    }).then(function(data){
        console.log(data);
        const propertyValues = Object.keys(data.Bihar.districtData);
        const abcd=Object.values(data.Bihar.districtData);
        console.log(abcd[0].active)
       console.log(propertyValues[0]);
        

console.log(propertyValues);
        console.log(data.Bihar.districtData.Patna.active);
    })
}
get();*/

var dist;
var places
var act_c = document.getElementById("act_case");
var death1 = document.getElementById("death1");
var cfrm = document.getElementById("confirm");
var reco = document.getElementById("rec1");
var found1=false

function getstats(places){
    type1.value="";

    fetch("https://api.covid19india.org/state_district_wise.json")
    .then(function(resp){
        return resp.json()
    }).then(function(data){
        console.log(data);
        var propertyValues = Object.keys(data.Jharkhand.districtData);
        console.log(propertyValues.length)
        const abcd=Object.values(data.Jharkhand.districtData);
        for(var i=0;i<propertyValues.length;i++){
if(places==propertyValues[i]){
    found1=true;
act_c.innerHTML=abcd[i].active;
death1.innerHTML=abcd[i].deceased;
cfrm.innerHTML=abcd[i].confirmed;
reco.innerHTML=abcd[i].recovered;
break;
}
        }
    }).catch(function(error){
        console.log(error);
    })
}



function search1(){
console.log("jharkhand stat function called");
dist=document.getElementById("type1");
getstats(dist.value)
}



/*function india(){
    fetch("https://api.covid19india.org/state_district_wise.json")
    .then(function(respss){
        return respss.json()
    }).then(function(datas){
console.log(datas)
const propertyValues1 = Object.keys(datas);
        const abcd1=Object.values(datas);
        console.log(propertyValues1)//here we get countrys name stored in a array
        console.log(propertyValues1.length)
        console.log(propertyValues1[2])//here we get country's Name
        console.log(abcd1)
        console.log(abcd1[2].districtData)
        const val=Object.values(abcd1[2].districtData)
        console.log(val);
        console.log(val[4].active)//here we get data ,4 is the districts number or index we can say
        const abcd2=Object.keys(abcd1[2].districtData);//here we get name of district,here index defin the country and that districtdata show district in array form.
       console.log(abcd2.length)//here it shows the length of the city stored in array.
        console.log(abcd2[4]);//it shows city name
const abcd3=Object.values(abcd2[4])
console.log(abcd3)
console.log(abcd3.active)        
    }).catch(function(error){

        console.log(error);
    })
}
india();*/

var iact_c = document.getElementById("iact_case");
var ideath1 = document.getElementById("ideath1");
var icfrm = document.getElementById("iconfirm");
var ireco = document.getElementById("irec1");
function istats(states,dname){
    type3.value="";
    type2.value="";
    var spos;
    var dpos;
    fetch("https://api.covid19india.org/state_district_wise.json")
    .then(function(respss){
        return respss.json();
    }).then(function(datass){
        console.log(datass)
        var propertyValues2=Object.keys(datass);
        var abcd2=Object.values(datass);
        console.log(propertyValues2)
        console.log(propertyValues2.length)
        var len=propertyValues2.length;
for(var i=0;i<len;i++){
    if(states==propertyValues2[i]){
spos=i;
var val=Object.values(abcd2[spos].districtData)
var abcd3=Object.keys(abcd2[spos].districtData);
var len1=abcd3.length;
for(var j=0;j<len1;j++){
    if(dname==abcd3[j]){
        dpos=j;
        iact_c.innerHTML=val[dpos].active;
        ideath1.innerHTML=val[dpos].deceased;
        icfrm.innerHTML=val[dpos].confirmed;
        ireco.innerHTML=val[dpos].recovered;
        break;

    }
}

    }
}
    }).catch(function(error){
        console.log(error)
    })
   

}
function search3(){
    console.log("indian stats function called");
    var distric=document.getElementById("type3");
    var state=document.getElementById("type2");
    istats(state.value,distric.value)
}
