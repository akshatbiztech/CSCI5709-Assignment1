import React from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";

const RoomCard = () => {
    return (
        <Card style={{ display: "flex", marginBottom: "20px" }}>
            <div
                style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <CardContent>
                    <Typography variant="h6">Deluxe Room</Typography>
                </CardContent>
            </div>
            <div
                style={{ flex: 2, display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <CardContent>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed libero
                        elit.
                    </Typography>
                </CardContent>
            </div>
            <div
                style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <CardContent>
                    <img
                        src="https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp"
                        alt="Room"
                        style={{ width: "100%", height: "auto" }}
                    />
                </CardContent>
            </div>
            <div
                style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <CardContent
                    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                    <Button variant="contained" color="primary">
                        Book Now
                    </Button>
                </CardContent>
            </div>
        </Card>
    );
};

export default RoomCard;
