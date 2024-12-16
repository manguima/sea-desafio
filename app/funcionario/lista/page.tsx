"use client";
import { Shortly } from "@/src/components/default/shortly/Shortly";
import steps from "@/src/config/steps";
import { useEmployeeContext } from "@/src/providers/employee/EmployeeProvider";

const EmployeeListPage = () => {
  const { stepCurrent } = useEmployeeContext();

  return steps[stepCurrent]?.content?.list || <Shortly />;
};

export default EmployeeListPage;
