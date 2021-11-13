import React from "react";
import {Col, Image} from "react-bootstrap";

const DailyImage = () => {
    return (
        <Col sm>
            <Image src="/static/pv/dailyImage.jpg" fluid height="400px" />
        </Col>
    );
};

export default DailyImage;