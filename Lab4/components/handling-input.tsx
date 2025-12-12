import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function HandlingInputCard() {
    const [value, setValue] = useState(""); 
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value); 
  };
    return (
          <Card>
            <CardHeader>
              <CardTitle>Exercise 2: Handling Input Changes</CardTitle>
              <CardDescription>
             Nhập text vào ô input bên dưới để xem kết quả thay đổi
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Input
              id="input-real-time"
              type="text"
              placeholder="Nhập gì đó..."
              value={value}
              onChange={handleInputChange}
        />
              </div>
            </CardContent>
            <CardFooter>
             Giá trị hiên tại: {value}
            </CardFooter>
          </Card>
    );
}