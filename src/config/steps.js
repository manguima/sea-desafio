import { DescEmployee } from "../components/employee/desc/DescEmployee";
import { FormEmployee } from "../components/employee/form/FormEmployee";
import { ListEmployee } from "../components/employee/list/ListEmployee";

const steps = [
  {
    content: {
      form: (
        <>
          <DescEmployee />
          <FormEmployee />
        </>
      ),
      list: (
        <>
          <DescEmployee />
          <ListEmployee />
        </>
      ),
    },
  },
];

export default steps;
