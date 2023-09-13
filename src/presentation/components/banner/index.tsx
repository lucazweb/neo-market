import React from "react";
import banner from "@/assets/full banner.png";
import hBanner1 from "@/assets/banner_kids.png";
import hBanner2 from "@/assets/banner_shop.png";
import h3Banner1 from "@/assets/bannerh31.png";
import h3Banner2 from "@/assets/bannerh32.png";
import h3Banner3 from "@/assets/bannerh33.png";

import { Col, Row } from "react-flexbox-grid";

export const Banner = () => {
  return (
    <Row center="md" style={{ marginTop: "32px" }}>
      <Col sm={12} md={10}>
        <img style={{ width: "100%" }} src={banner} />
      </Col>
    </Row>
  );
};

export const HalfBanners = () => {
  return (
    <Row center="md" style={{ marginTop: "32px" }}>
      <Col md={9}>
        <Row>
          <Col sm={12} md={6}>
            <img style={{ width: "100%" }} src={hBanner1} />
          </Col>
          <Col sm={12} md={6}>
            <img style={{ width: "100%" }} src={hBanner2} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export const TripleBanners = () => {
  return (
    <Row center="md" style={{ marginTop: "32px" }}>
      <Col md={9}>
        <Row>
          <Col sm={12} md={4}>
            <img style={{ width: "100%" }} src={h3Banner1} />
          </Col>
          <Col sm={12} md={4}>
            <img style={{ width: "100%" }} src={h3Banner2} />
          </Col>
          <Col sm={12} md={4}>
            <img style={{ width: "100%" }} src={h3Banner3} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
