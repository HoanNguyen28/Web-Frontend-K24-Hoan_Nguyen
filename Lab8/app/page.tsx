"use client";
import AdvancedForm from "@/components/advanced-validation/advanced-form";
import ApiSubmission from "@/components/form-api-submiss/api-submission";
import DynamicFields from "@/components/form-education/dynamic-fields";
import FormValidation from "@/components/form-validation/form-validation";
import SimpleContact from "@/components/simple-contact";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex justify-center items-start w-full mt-12">
      
      <Tabs defaultValue="simple-contact">
        <TabsList>
          <TabsTrigger value="simple-contact">Simple Contact</TabsTrigger>
          <TabsTrigger value="form-validation">Form Validation</TabsTrigger>
          <TabsTrigger value="dynamic-fields">Dynamic Fields</TabsTrigger>
          <TabsTrigger value="api-submission">API Submission</TabsTrigger>
          <TabsTrigger value="advanced-validation">Advanced Validation</TabsTrigger>
        </TabsList>

        <TabsContent value="simple-contact">
       <SimpleContact />
        </TabsContent>

        <TabsContent value="form-validation">
       <FormValidation />
        </TabsContent>

         <TabsContent value="dynamic-fields">
       <DynamicFields />
        </TabsContent>

         <TabsContent value="api-submission">
      <ApiSubmission />
        </TabsContent>
      
       <TabsContent value="advanced-validation">
      <AdvancedForm />
        </TabsContent>
    

      </Tabs>
    </div>

  );
}
