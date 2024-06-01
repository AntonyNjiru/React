const CampsitesDirectoryPage = () => {
    let selectedCampsite = selectRandomCampsite();

    const toggleCampsite = () => {
        selectedCampsite = selectRandomCampsite();
        console.log(selectedCampsite);
    };

    return (
        <Container>
            <Button onClick={() => toggleCampsite()}>
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