import React from "react";
import { Container } from "react-bootstrap";
import {
    Carousel,
    Card,
    CardHeader,
    CardBody,
    Typography
} from "@material-tailwind/react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RoomCard from "./roomcard";

const HotelBookingPage = () => {
    const hotelName = "LMAK EURASIA HOTEL";
    const amenities = [
        "Free Wi-Fi",
        "Swimming Pool",
        "Spa",
        "Gym",
        "Restaurant",
        "Bar",
        "Casino"
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <Container fluid style={{ flex: 1 }}>
                <Row style={{ display: "flex", height: "50%" }}>
                    <Col style={{ width: "50%", height: "100%" }}>
                        <div style={{ height: "100%" }}>
                            <Card>
                                <CardHeader color="blue-gray" className="relative h-56">
                                    <Typography
                                        variant="h5"
                                        component="h2"
                                        style={{ fontFamily: "cursive" }}
                                    >
                                        {hotelName}
                                    </Typography>
                                </CardHeader>
                                <CardBody>
                                    <Typography
                                        variant="h5"
                                        component="h2"
                                        style={{ fontFamily: "cursive" }}
                                    >
                                        {hotelName}
                                    </Typography>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        {amenities.map((amenity, index) => (
                                            <li key={index}>{amenity}</li>
                                        ))}
                                    </Typography>
                                    <Typography>
                                        The place is close to Barceloneta Beach and bus stop just 2
                                        min by walk and near to &quot;Naviglio&quot; where you can
                                        enjoy the main night life in Barcelona.
                                    </Typography>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col style={{ height: "100%", width: "50%" }}>
                        <div style={{ height: "100%", overflow: "hidden" }}>
                            <Carousel className="rounded-xl">
                                <img
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/ed/95/07/limak-eurasia-luxury.jpg?w=700&h=-1&s=1"
                                    alt="Hotel image1"
                                    className="h-full w-full object-cover"
                                />
                                <img
                                    src="https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/6179ad64046fb.jpg/1920x1080/fit/80/fbc7ee9fb38b18e69d4b438d2ee93345.jpg"
                                    alt="Hotel image2"
                                    className="h-full w-full object-cover"
                                />
                                <img
                                    src="https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg"
                                    alt="Hotel image3"
                                    className="h-full w-full object-cover"
                                />
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                <Row style={{ display: "flex" }}>
                    <div style={{ flex: 1 }}>
                        <RoomCard />
                    </div>
                </Row>
                <Row style={{ display: "flex" }}>
                    <div style={{ flex: 1 }}>
                        <RoomCard />
                    </div>
                </Row>
            </Container>
        </div>
    );
};


export default HotelBookingPage;
