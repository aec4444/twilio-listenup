import { Col, Row } from "react-bootstrap";

const SubHeader = (props: { message: string; rightMsg?: JSX.Element}) => {
    const { message, rightMsg = null } = props;

    return (
        <div className="bg-secondary text-white p-1">
            <Row>
                <Col xs={2}>
                    {message}
                </Col>
                <Col xs={10}>
                    {rightMsg}
                </Col>
            </Row>
        </div>
    )
};

export default SubHeader;
