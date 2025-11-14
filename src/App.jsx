// src/App.js
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { ThemeProvider, useTheme } from './Sharedcomp/ThemeContext'; // Adjust path
import Home from './Pages/Home';
import './App.css'; 
import Emergency from './Pages/Emergency';


// This component reads the theme and applies the CSS class.
// It must be a child of <ThemeProvider> to work.
function ThemeWrapper() {
  const { state } = useTheme();

  return (
    <div className={`app ${state.theme}`}>
      
      <main>
        <Outlet /> 
       
      </main>
    </div>
  );
}

// 2. YOUR APP COMPONENT
function App() {
  return (
    <ThemeProvider>
      
      <Routes>
        <Route element={<ThemeWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path = 'emergency' element ={<Emergency/>}/>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;