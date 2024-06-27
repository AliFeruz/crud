import { Note } from "@/types";
import axios from "axios";
import { useSession } from "next-auth/react";
import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";

interface DataContextType {
    notes: Note[];
    fetchNotes: () => Promise<void>;
    loading: boolean;
    error: string | null;
  }

const dataContext = createContext<DataContextType | undefined>(undefined);

const DataProvider = ({children}: {children: ReactNode}) => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


    const { data: session } = useSession();
    const author = session?.user?.email;

    const fetchNotes = useCallback(async () => {
        if (!author) {
            setError("Author not provided");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`/api/notes?author=${author}`);
            setNotes(response.data);
        } catch (error) {
            setError("Error fetching notes");
            console.error("Error fetching notes:", error);
        } finally {
            setLoading(false);
        }
    }, [author]);
    
    useEffect(() => {
        if (author) {
            fetchNotes();
        }
    }, [author, fetchNotes]);

    const value: DataContextType = {
        notes,
        fetchNotes,
        loading,
        error
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