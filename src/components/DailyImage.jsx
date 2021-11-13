import React from "react";
import {Col, Image} from "react-bootstrap";

const DailyImage = () => {
    return (
        <Col sm>
            <Image src="/static/pv/dailyImage.jpg" fluid />
        </Col>
    );
};

export default DailyImage;