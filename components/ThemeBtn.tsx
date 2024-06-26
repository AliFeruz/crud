
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "@/context/themeContext";

const ThemeBtn = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  

  const onChangeBtn = () => {
    themeMode === "dark" ? lightTheme() : darkTheme();
  };

  return (
    <div className="flex-between">
        {themeMode === "dark" ? (
          <button  onClick={onChangeBtn}>
          <MoonIcon className="h-8 w-8 icon"/>
           </button>
          
        ) : (
          <button onClick={onChangeBtn}>
          <SunIcon className="h-8 w-8 icon"/>
           </button>
        )}
       
      
    </div>
  );
};

export default ThemeBtn;