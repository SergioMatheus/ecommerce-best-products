import React from "react";
import Header from "app/container/Header";
import ContainerProduct from "app/container/Products";
import Shopping from "app/container/Shopping";
import ModalCheckOut from "app/container/ModalCheckOut";
import { ContainerMiddle } from "./style";

function MainPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ContainerMiddle>
          <ContainerProduct />
        </ContainerMiddle>
        <Shopping />
      </div>
      <ModalCheckOut />
    </div>
  );
}

export default MainPage;
