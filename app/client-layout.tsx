"use client";
import { BgPlusSize } from "@/src/assets/bg-plus-size";
import { ModalProvider } from "@/src/components/default/modal/Modal";
import Navbar from "@/src/components/default/navbar/Navbar";
import { themeVariables } from "@/src/config/theme.mjs";
import { store } from "@/src/redux/store";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, Flex } from "antd";
import { Provider } from "react-redux";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = themeVariables;

  return (
    <Provider store={store}>
      <ModalProvider>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              cssVar: true,
              hashed: false,
              token: {
                colorPrimary: theme["color-primary"],
                colorBgBase: theme["color-bg-base"],
                colorBgSpotlight: theme["color-bg-spotlight"],
                colorBgLayout: theme["color-bg-layout"],
                fontFamily: theme["font-family"],
                colorTextHeading: theme["color-text-heading"],
                colorText: theme["color-text"],
                colorTextLightSolid: theme["color-text-light-solid"],
                colorTextPlaceholder: theme["color-text-placeholder"],
                fontSize: theme["font-size"],
                fontSizeHeading1: theme["font-size-heading-1"],
                fontSizeHeading2: theme["font-size-heading-2"],
                fontSizeIcon: theme["font-size-icon"],
                fontWeightStrong: theme["font-weight-strong"],
              },
              components: {
                Button: {
                  borderRadius: 4,
                },
              },
            }}
          >
            <Flex
              style={{
                flexDirection: "row",
                height: "100%",
                width: "100%",
                contain: "content",
                position: "relative",
                background: "var(--ant-color-bg-base)",
              }}
            >
              <Navbar />
              <Flex
                style={{
                  width: "100%",
                  overflow: "auto",
                  padding: "25px",
                  gap: "var(--layout-gap)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {children}
                <div
                  style={{
                    position: "absolute",
                    bottom: "calc(0% - 170px)",
                    right: "calc(0% - 75px)",
                    zIndex: -1,
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  <BgPlusSize
                    w="457px"
                    h="557px"
                    bg={"var(--ant-color-primary)"}
                  />
                </div>
              </Flex>
            </Flex>
          </ConfigProvider>
        </AntdRegistry>
      </ModalProvider>
    </Provider>
  );
}
