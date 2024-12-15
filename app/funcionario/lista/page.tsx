"use client";
import { Shortly } from "@/src/components/default/shortly/Shortly";
import { DescEmployee } from "@/src/components/employee/desc/DescEmployee";
import { ListEmployee } from "@/src/components/employee/list/ListEmployee";
import { useEmployeeContext } from "@/src/providers/employee/EmployeeProvider";

const EmployeeListPage = () => {
  const { stepCurrent } = useEmployeeContext();

  return (
    <>
      {{
        0: (
          <>
            <DescEmployee />
            <ListEmployee />
          </>
        ),
      }[stepCurrent] || <Shortly />}
    </>
  );
};

export default EmployeeListPage;
