import React, { useState } from 'react';
import { selectCampsiteById } from './campsite';
const CampsitesDirectoryPage = () => {
    const [selectedCampsite, toggleCampsite ] = useState(selectRandomCampsite())
    return (
        <Container>
           <Button onClick={() => toggleCampsite(selectRandomCampsite())}>
                Select Random Campsite
            </Button>
            <Row>
                <Col sm='5' md='7'>
                    <CampsitesList />
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    );
};