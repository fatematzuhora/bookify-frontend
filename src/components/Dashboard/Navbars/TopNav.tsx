import React from 'react';
import { Button, Col, Row } from 'antd';
import { logOut } from 'store/actions/index';
import { connect } from 'react-redux';

const TopNav: React.FC = (props: any) => {
    const logOut = (status: boolean) => {
        props.logOutAction(status);
    };

    return (
        <Row justify="space-between" className="dashboard_header-topnav">
            <Col>
                <a href="/">
                    <div className="logo">
                        Bookify
                    </div>
                </a>
            </Col>
            <Col>
                <Button type="primary" onClick={() => logOut(true)}>
                    Logout
                </Button>
            </Col>
        </Row>
    )
}

const mapStateToProps = (state: any) => ({
    authData: state.auth,
})

const mapDispatchToProps = (dispatch: any) => ({
    logOutAction: (status: boolean) => {
        dispatch(logOut(status));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);