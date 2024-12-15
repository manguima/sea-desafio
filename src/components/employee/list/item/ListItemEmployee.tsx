"use client";

import { Button, Flex, Popover, Tag, Typography } from "antd";

import styles from "./list-item-employee.module.css";
import { DotsIcon } from "@/src/assets/dots-icon";
import { Employee } from "@/src/types/FormEmployeeProps";
import { jobPositionsList } from "@/src/config/job";
import Link from "next/link";

export const ListItemEmployee = ({ employee }: { employee: Employee }) => {
  const { Text } = Typography;

  return (
    <Flex className={`${styles.card}`}>
      <Flex className={styles.desc}>
        <Text className={styles.name}>{employee.name}</Text>
        <Flex className={styles.tags}>
          <Tag className={styles.tag}>{employee.cpf}</Tag>
          <Tag className={styles.tag}>
            {employee.status ? "Ativo" : "Inativo"}
          </Tag>
          <Tag className={styles.tag}>
            {
              jobPositionsList.find((item) => item.value === employee.job)
                ?.label
            }
          </Tag>
        </Flex>
      </Flex>
      <Flex className={styles.options}>
        <Popover content={suboptions} title="Title" trigger="focus">
          <a className={styles.btn}>
            <DotsIcon
              w="16px"
              h="16px"
              bg="var(--ant-color-text-light-solid)"
            />
          </a>
        </Popover>
      </Flex>
    </Flex>
  );
};

const suboptions = () => {
  return (
    <div>
      <Link href={"#"}>
        <Button>Editar</Button>
      </Link>
      <Button>Excluir</Button>
    </div>
  );
};
