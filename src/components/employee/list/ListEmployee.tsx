"use client";

import { Button, Flex, Typography } from "antd";
import { useEffect } from "react";
import styles from "./list-employee.module.css";
import { ListItemEmployee } from "./item/ListItemEmployee";
import { CheckboxEmployee } from "../checkbox/CheckboxEmployee";
import { useEmployeeContext } from "@/src/providers/employee/EmployeeProvider";
import Link from "next/link";
import { menuItems } from "@/src/config/menu";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/src/hooks/useSeaAppSelector";
import { fetchEmployees } from "@/src/redux/slices/employeeSlice";

export const ListEmployee = () => {
  const { Text } = Typography;
  const dispatch = useAppDispatch(); // Despachando a ação para pegar os funcionários.
  const employees = useAppSelector((state) => state.employees.employees); // Obtendo os funcionários do estado do Redux.

  const { setStepApproved, totalSteps } = useEmployeeContext();

  const [filtered, setFiltered] = useState(false);

  const handleTrueFiltered = () => {
    return setFiltered(true);
  };

  const handleFalseFiltered = () => {
    return setFiltered(false);
  };

  const [isChecked, setIsChecked] = useState(false);

  // UseEffect para carregar os funcionários quando o componente for montado
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <Flex className={styles.card}>
      <Text className={styles.title}>Funcionário(s)</Text>
      <Flex className={styles.options}>
        <Button className={`${styles.btn} ${styles.addEmployee}`}>
          <Link
            className={styles.link}
            href={menuItems.find((item) => item.key === "add")?.href || "#"}
          >
            + Adicionar Funcionário
          </Link>
        </Button>
        <Flex className={styles.row}>
          <Flex className={styles.subOptions}>
            <Button
              onClick={handleTrueFiltered}
              className={
                filtered ? `${styles.btn} ${styles.active}` : styles.btn
              }
            >
              Ver apenas ativos
            </Button>
            <Button
              onClick={handleFalseFiltered}
              className={
                !filtered ? `${styles.btn} ${styles.active}` : styles.btn
              }
            >
              Limpar filtros
            </Button>
          </Flex>
          <Flex>
            <Text className={styles.textTotalActive}>
              Ativos {employees.length}/{employees.length}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex className={styles.listEmployee}>
        {employees
          .filter((item) => (filtered ? item.status : item))
          .map((employee) => {
            return <ListItemEmployee key={employee.id} employee={employee} />;
          })}
      </Flex>
      <Flex className={styles.status}>
        <Text className={styles.text}>A etapa está concluída?</Text>
        <CheckboxEmployee
          label={isChecked ? "Sim" : "Não"}
          onChange={(e) => {
            setStepApproved(e ? totalSteps : 0);
            setIsChecked(e);
          }}
        />
      </Flex>
    </Flex>
  );
};
