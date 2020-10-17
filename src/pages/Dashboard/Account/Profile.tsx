import React from 'react';
import { connect } from 'react-redux';
import { BreadcrumbNav } from 'components/Dashboard';

const Profile: React.FC = () => {
    return (
        <>
            <BreadcrumbNav parent_name="Account" child_name="Profile"/>
        </>
    )
}

const mapStateToProps = (state: any) => ({
    authData: state.auth,
})
  
export default connect(mapStateToProps, null)(Profile);