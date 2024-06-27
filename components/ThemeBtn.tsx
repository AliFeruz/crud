
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
          <button  onClick={onChangeBtn} className="flex p-1.5 justify-around items-center">
          <MoonIcon className="h-8 w-8 icon"/>
          <p className="icon ml-5">Dark</p>
           </button>
          
        ) : (
          <button onClick={onChangeBtn} className="flex p-1.5 justify-around items-center">
          <SunIcon className="h-8 w-8 icon"/>
          <p className="icon ml-5">Light</p>
           </button>
        )}
       
      
    </div>
  );
};

export default ThemeBtn;