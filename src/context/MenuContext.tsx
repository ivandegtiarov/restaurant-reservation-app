import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define the type for the context value
interface MenuContextType {
  data: any[]; // Replace `any` with a more specific type if known
  setData: Dispatch<SetStateAction<any[]>>; // Type for the setter function for data
  category: string; // Type for category
  setCategory: Dispatch<SetStateAction<string>>; // Type for the setter function for category
  currentPage: number; // Type for the current page
  setCurrentPage: Dispatch<SetStateAction<number>>; // Type for the setter function for current page
  postsPerPage: number; // Type for the number of posts per page
  setPostsPerPage: Dispatch<SetStateAction<number>>; // Type for the setter function for posts per page
}

// Create the context with an initial value of undefined
export const MenuContext = createContext<MenuContextType | undefined>(
  undefined
);

// Define the props for the provider
interface MenuContextProviderProps {
  children: ReactNode; // Type for the children prop
}

// Create the provider component
const MenuContextProvider: React.FC<MenuContextProviderProps> = (props) => {
  const [data, setData] = useState<any[]>([]); // Replace `any` with a more specific type if known
  const [category, setCategory] = useState<string>("All"); // Explicitly typed as string
  const [currentPage, setCurrentPage] = useState<number>(1); // Explicitly typed as number
  const [postsPerPage, setPostsPerPage] = useState<number>(6); // Explicitly typed as number

  const res: MenuContextType = {
    data,
    setData,
    category,
    setCategory,
    currentPage,
    setCurrentPage,
    postsPerPage,
    setPostsPerPage,
  };

  return (
    <MenuContext.Provider value={res}>{props.children}</MenuContext.Provider>
  );
};

// Export the provider as the default export
export default MenuContextProvider;
