
```js

// Replace the "REPLACE_HERE_" by the context name

import { createContext, ReactNode } from "react";

interface REPLACE_HERE_ContextData {

}

interface REPLACE_HERE_ProviderProps {
    children: ReactNode
}

export const REPLACE_HERE_Context = createContext({} as REPLACE_HERE_ContextData)

export function REPLACE_HERE_ProviderCtx({ children }: REPLACE_HERE_ProviderProps){
    return (
        <REPLACE_HERE_Context.Provider value={{}}>
            {children}
        </REPLACE_HERE_Context.Provider>
    )    
}

```
