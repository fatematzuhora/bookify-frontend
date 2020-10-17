import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'antd';
import { connect } from 'react-redux';

const TopNav: React.FC = (props: any) => {
    return (
        <Row justify="space-between" className="site_header-topnav">
            <Col>
                <a href="/">
                    <div className="logo">
                        Bookify
                    </div>
                </a>
            </Col>
            <Col>
                <Button type="primary">
                    {!props.authData.is_logged_in ?
                        <Link to="/auth/signin">Add Property</Link>
                        :
                        <Link to="/dashboard/profile">My Account</Link>
                    }
                </Button>
            </Col>
        </Row>
    )
}

const mapStateToProps = (state: any) => ({
    authData: state.auth,
})
  
export default connect(mapStateToProps, null)(TopNav);