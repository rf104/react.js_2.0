
import './App.css'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';
import { ThemeProvider } from './contexts/Theme'
import { useEffect, useState } from 'react';

function App() {
  const [themeMode,setThemeMode] = useState('light');

  const lightMode = ()=>{
    setThemeMode('light');
  }
  const darkMode = ()=>{
    setThemeMode('dark');
  }

  //actuall theme change happen here

  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark');
    document.querySelector('html').classList.add(themeMode);
  },[themeMode]);
  return (
        <ThemeProvider value = {{themeMode,lightMode,darkMode}}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/** ThemeBtn*/}
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/**Card */}
                       <Card/>
                    </div>
                </div>
            </div>
        </ThemeProvider>

  )
}

export default App
