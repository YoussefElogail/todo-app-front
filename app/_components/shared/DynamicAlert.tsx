import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert";
import { CheckCircle2Icon } from "lucide-react";
import React from "react";

const DynamicAlert = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="grid w-full max-w-xl items-start gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description} </AlertDescription>
      </Alert>
    </div>
  );
};

export default DynamicAlert;
