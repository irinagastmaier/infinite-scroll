import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { InfinitePeople } from "./components/people/InfinitePeople";
import { InfiniteSpecies } from "./components/species/InfiniteSpecies";

const queryClient = new QueryClient(); //default config

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <h1>Infinite Scroll</h1>
        <InfinitePeople />  
        {/* <InfiniteSpecies /> */}
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
}

export default App;
