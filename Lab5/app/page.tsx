"use client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Counter from "@/components/counter-hook";
import UserInput from "@/components/user-input";
import MouseEvents from "@/components/memoi-zation";
import SumCalculation from "@/components/sum-caculation";
import SearchDebounce from "@/components/search-debounce";


export default function Home() {
  return (
    <div className="flex justify-center items-start w-full mt-12">
      
      <Tabs defaultValue="counter-hook">
        <TabsList>
          <TabsTrigger value="counter-hook">Counter Hook</TabsTrigger>
          <TabsTrigger value="user-input"> User Input</TabsTrigger>
          <TabsTrigger value="mouse-events">Mouse Events</TabsTrigger>
          <TabsTrigger value="sum-caculation">Sum Calculation</TabsTrigger>
          <TabsTrigger value="search-debounce">Search Debounce</TabsTrigger>
        </TabsList>

        <TabsContent value="counter-hook">
          <Counter />
        </TabsContent>

        <TabsContent value="user-input">
          <UserInput />
        </TabsContent>

         <TabsContent value="mouse-events">
          <MouseEvents />
        </TabsContent>

         <TabsContent value="sum-caculation">
          <SumCalculation />
        </TabsContent>
      
       <TabsContent value="search-debounce">
          <SearchDebounce />
        </TabsContent>
    

      </Tabs>
    </div>

  );
}
