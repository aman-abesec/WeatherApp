// info()
function fun(){
    var result=document.getElementById('searchbox');
    var searched_value="https://api.weatherapi.com/v1/current.json?key=b82b24caf5124a4ba38130815222005&q="+result.value+"&aqi=no";
    fetch(searched_value)
    .then((fdata)=>{
      return fdata.json();
    })
    .then((data)=>{
      document.getElementById('imglogo').src='https://'+data.current.condition.icon;
      document.getElementById('lname').innerHTML=data.location.name;
      document.getElementById('cname').innerHTML="<b>Country Name :</b> "+data.location.country;
      document.getElementById('rname').innerHTML="<b>Region Name  :</b>"+data.location.region;

      document.getElementById('temperature').innerHTML="Temperature "+data.current.temp_c +" <i class="+"\"fa fa-thermometer-empty\""+"></i>"+" C";
      document.getElementById('wspeed').innerHTML="<b>Wind Speed :</b> "+data.current.wind_kph;
      document.getElementById('humidity').innerHTML="<b>Humidity :</b>"+data.current.humidity;
    })
    .catch(err => {
      alert("Sorry No Result Found !!");
    });
}
