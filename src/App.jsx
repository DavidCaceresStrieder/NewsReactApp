import { Router } from "./Router";
import { ContextProvider } from "./hooks"

function App() 
{
  return (
    <>
      <ContextProvider>
        <Router />
      </ContextProvider> 
    </>
  )
}

export default App
