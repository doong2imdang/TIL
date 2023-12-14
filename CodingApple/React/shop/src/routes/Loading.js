import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p style={{ marginTop: "10px" }}>데이터를 불러오는 중입니다...</p>
    </div>
  );
}

export default Loading;
