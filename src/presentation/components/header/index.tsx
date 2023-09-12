import React from "react";
import { Col, Row } from "react-flexbox-grid";
import {
  HeaderWrapper,
  StyledRow,
  UserButtonsWrapper,
  UserInfo,
  UserMenuWrapper,
} from "./styled";
import { StyledLogo } from "../logo/styled";

import { FiUser } from "react-icons/fi";
import { RiHeart3Line, RiShoppingCart2Line } from "react-icons/ri";
import { HeaderMenu } from "../header-menu";
import { SearchField } from "../search-field";

export const Header = () => (
  <StyledRow>
    <Col sm={12}>
      <Row center="md">
        <Col sm={12} md={10}>
          <HeaderWrapper>
            <StyledLogo />
            <SearchField />
            <UserMenuWrapper>
              <UserInfo>
                <FiUser color="white" size={25} />
                <div className="user-info">
                  <p>Bem vind(o) </p>
                  <p>
                    <span>Faça login</span> ou<strong>cadastre-se</strong>
                  </p>
                </div>
              </UserInfo>
              <UserButtonsWrapper>
                <RiHeart3Line size={25} />
                <RiShoppingCart2Line size={25} />
              </UserButtonsWrapper>
            </UserMenuWrapper>
          </HeaderWrapper>
        </Col>
        <Col sm={12}>
          <HeaderMenu />
        </Col>
      </Row>
    </Col>
  </StyledRow>
);
