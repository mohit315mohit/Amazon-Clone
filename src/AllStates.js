import { useState } from "react";

export const useAllStates=()=>{
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    return{
        isSidebarOpen,
        setSidebarOpen
    };

}