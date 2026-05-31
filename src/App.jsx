
import './App.css'
import OutlinedCard  from './Components/WeatherCard'
import axios from 'axios'; 
import { useEffect,useState } from 'react';

function App() {
  const [weather, setWeather] = useState(null);
  const [lang, setlang] = useState("ar");
   
useEffect(() => {
    // 1. تعريف الدالة بشكل صحيح باستخدام async
    const fetchWeather = async () => {
      try {
        let Respons = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=30.0626&lon=31.2497&units=metric&lang=${lang}&appid=e73047b8d2f66cd8daad9b2ae6afe7f1`);
        // هنا تقدري تطبعي الداتا في الكونفصل عشان تتأكدي إنها وصلت
        setWeather(Respons.data)
       
      } catch (error) {
        console.error("خطأ في جلب البيانات:", error);
      }
    };

    // 2. تشغيل الدالة فوراً بعد تعريفها 🚀
    fetchWeather();

  }, [lang]); 
  
  return (
    <>
    
      <div className="App" >
       
        <OutlinedCard  dataWeather={{weather}} lang={lang} setlang={setlang}></OutlinedCard>

       
      </div>
    </>
  )
}

export default App
