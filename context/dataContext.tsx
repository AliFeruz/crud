import { Note } from "@/types";
import axios from "axios";
import { useSession } from "next-auth/react";
import { ReactNode, createContext, useContext, useState } from "react";

interface DataContextType {
    notes: Note[];
    fetchNotes: () => Promise<void>;
  }

const dataContext = createContext<DataContextType | undefined>(undefined);

const DataProvider = ({children}: {children: ReactNode}) => {
    const [notes, setNotes] = useState<Note[]>([]);

    const { data: session } = useSession();
    const author = session?.user?.email;

    const fetchNotes = async () => {
        try {
            if (author) {
                const response = await axios.get(`/api/notes?author=${author}`);
                setNotes(response.data);
            }
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };
    

    const value: DataContextType = {
        notes,
        fetchNotes
    };

    return (
        <dataContext.Provider value={value}>
            {children}
        </dataContext.Provider>
    );
};

export default DataProvider;
export const useDataContext = () => {
    const context = useContext(dataContext);
    if (context === undefined) {
        throw new Error("useDataContext must be used within a DataProvider");
    }
    return context;
}