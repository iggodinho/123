
import { CompanyContextProvider } from "./company-context";


export function Provider({children}) {
  return (
    <CompanyContextProvider>
      
        {children}
      
    </CompanyContextProvider>
  )
}