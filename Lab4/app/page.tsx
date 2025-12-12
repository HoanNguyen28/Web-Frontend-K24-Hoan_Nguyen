"use client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import SimpleButtonCard from "@/components/simple-button";
import HandlingInputCard from "@/components/handling-input";
import MouseEvents from "@/components/mouse-events";
import KeyboardEvents from "@/components/keyboard-events";
import Couter from "@/components/couter";
import MouseEffect from "@/components/mouse-effect";

export default function Home() {
  return (
   
    <div className="flex justify-center items-start w-full mt-12">
      
      <Tabs defaultValue="simple-button">
        <TabsList>
          <TabsTrigger value="simple-button">Simple Button</TabsTrigger>
          <TabsTrigger value="handling-input">Handling Input</TabsTrigger>
          <TabsTrigger value="mouse-events">Mouse Events</TabsTrigger>
          <TabsTrigger value="keyboard-events">Keyboard Events</TabsTrigger>
          <TabsTrigger value="couter">Counter</TabsTrigger>
        </TabsList>

        <TabsContent value="simple-button">
          <SimpleButtonCard />
        </TabsContent>

        <TabsContent value="handling-input">
        <HandlingInputCard />
        </TabsContent>

         <TabsContent value="mouse-events">
        <MouseEvents />
        </TabsContent>

         <TabsContent value="keyboard-events">
        <KeyboardEvents />
        </TabsContent>
      
       <TabsContent value="couter">
        <Couter />
        </TabsContent>
    

      </Tabs>
    </div>

  );
}
