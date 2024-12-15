"use client";
import { Shortly } from "@/src/components/default/shortly/Shortly";
import { DescEmployee } from "@/src/components/employee/desc/DescEmployee";
import { FormEmployee } from "@/src/components/employee/form/FormEmployee";
import { useEmployeeContext } from "@/src/providers/employee/EmployeeProvider";

const EmployeeAddPage = () => {
  const { stepCurrent } = useEmployeeContext();

  return (
    <>
      {{
        0: (
          <>
            <DescEmployee />
            <FormEmployee />
          </>
        ),
      }[stepCurrent] || <Shortly />}
    </>
  );
};

export default EmployeeAddPage;
