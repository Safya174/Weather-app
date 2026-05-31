import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CloudIcon from '@mui/icons-material/Cloud';
import Button from '@mui/material/Button';



export default function OutlinedCard({ dataWeather,lang,setlang}) {
  
  // 🛡️ لو الداتا لسه مجتش خالص من الأب، اظهر رسالة التحميل
  if (!dataWeather) {
    return (
      <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',flexDirection:  'row-reverse'
 }}>
        <Typography sx={{ color: "white", fontSize: 24 }}>جاري تحميل بيانات الطقس...</Typography>
      </Box>
    );
  }


  const cityName = dataWeather.name || dataWeather.weather?.name || "الرياض";
  const mainData = dataWeather.main || dataWeather.weather?.main;
  const weatherArray = dataWeather.weather?.[0] || dataWeather.weather?.weather?.[0];
  
const today = new Date().toLocaleDateString( lang == "en"? "en-US" :'ar-EG', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});
  return (
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ width: '100%', maxWidth: 450, px: 2 ,direction: lang == "en" ?"ltr":"rtl",display: "flex",
  flexDirection: "column"}}>
        <Card sx={{ backgroundColor: "#123c8f", borderRadius: "15px" }}>
          <CardContent sx={{ color: "white" ,width:"100%"}}>
            
            {/* اسم المدينة */}
            <Typography component="div" gutterBottom sx={{ fontSize: 50, marginRight: "20px", display: "flex", alignItems: "flex-end", fontWeight: "bold" ,direction: lang == "en" ?"ltr":"rtl"  }}>
              {cityName} 

              <Typography component="span" sx={{ fontSize: 18, pb: "8px", color: "rgba(255, 255, 255, 0.7)", marginRight: "20px",direction:"rtl"  }}>
                {today}
              </Typography>
            </Typography>
            
            <Divider sx={{ backgroundColor: "white", margin: "0" }} />
            
            <Box sx={{
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              width: '100%', 
              mt: 3
            }}>
              <Box>
                {/* درجة الحرارة الحالية */}
                <Typography variant="h5" component="div" sx={{ marginTop: "20px", fontSize: 80, display: "inline-block" }}>
                  {mainData ? Math.round(mainData.temp) : '--'}°
                </Typography>
                
                <Box sx={{
                  width: "50px",  
                  height: "50px",         
                  backgroundColor: "#ff5722", 
                  borderRadius: "50%",    
                  display: "inline-block",
                  mx:2
                }} />
                
                {/* وصف الطقس */}
                <Typography sx={{ fontSize: 20, pb: "8px", color: "rgba(255, 255, 255, 0.7)" }}>
                  {weatherArray?.description || 'سماء صافية'}
                </Typography>
                
                {/* الصغرى والكبرى */}
                <Typography sx={{ fontSize: 10, pb: "8px", color: "rgba(255, 255, 255, 0.7)"}}>
                  {lang == "en" ? "min:": "الصغري:"} {mainData ? Math.round(mainData.temp_min) : '--'}°    
               |   {lang == "en" ? "max:": "الكبري:"}  {mainData ? Math.round(mainData.temp_max) : '--'}°
                </Typography>
              </Box>
              
              <CloudIcon sx={{ fontSize: 160, color: "white" ,mx:4}} />
            </Box>
        
          </CardContent>
        
        </Card>
                <Button 
        variant="text" 
                 // لما نضغط عليه ينفذ الدالة
      sx={{ 
  color: "white", 
  fontSize: "18px", 
  fontWeight: "bold",
  opacity: 0.8,
  textTransform: 'none',
  '&:hover': { opacity: 1 },
  
  // 🎯 التعديلات الجديدة المرنة:
  mt: 3,                 // بيسيب مسافة أمان (Margin Top) 24 بكسل تحت السحابة والداتا
  display: "inline-flex", // بيخلي الزرار ياخد مساحة الكلمة بتاعته بس وميفردش بالعرض كله
  alignSelf: "flex-start", // 🚨 ده السحر! هيخلي الزرار يروح أول الكارد حسب الاتجاه (يمين في الـ rtl، وشمال في الـ ltr)
  p:0
}}
        onClick={()=>{
          if(lang == "ar"){
            setlang("en")
           
          }
          else{
           setlang("ar") 
          }
        }}
      >
        {/* لو اللغة عربي، اظهر له كلمة "English" عشان يقلب، والعكس */}
        { lang == "en" ? "English" : 'عربي'}
      </Button>
      </Box>
      
    </Box>
  );
}